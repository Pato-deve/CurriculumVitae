"use client";

import { useEffect, useRef, useCallback } from "react";

interface ParticleVideoHeroProps {
  videoSources: string[];
  /** Ancho de muestreo en píxeles. Menor = más rápido. */
  processingWidth?: number;
  /** Radio base de cada partícula (en unidades de celda). */
  particleSize?: number;
  /** Umbral de luminosidad: píxeles más brillantes se omiten. */
  threshold?: number;
  /** Salto de muestreo: 1=cada píxel, 2=cada 2, 3=cada 3. */
  step?: number;
  /** Intervalo de rotación en ms. */
  interval?: number;
  /** FPS máximos para el renderizado del canvas. */
  fps?: number;
}

export default function ParticleVideoHero({
  videoSources,
  processingWidth = 200,
  particleSize = 0.6,
  threshold = 80,
  step = 2,
  interval = 10000,
  fps = 12,
}: ParticleVideoHeroProps) {
  const currentIndexRef = useRef(0);

  // Refs de canvas y video
  const videoRef = useRef<HTMLVideoElement>(null);
  const renderCanvasRef = useRef<HTMLCanvasElement>(null);
  const processCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number>(0);
  const videoReadyRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlaybackPreference = () => {
      reducedMotionRef.current = mediaQuery.matches;

      const video = videoRef.current;
      if (!video) return;

      if (mediaQuery.matches) {
        video.pause();
        return;
      }

      if (!document.hidden && video.src) {
        video.play().catch(() => {});
      }
    };

    const handleVisibilityChange = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.hidden || reducedMotionRef.current) {
        video.pause();
        return;
      }

      if (video.src) {
        video.play().catch(() => {});
      }
    };

    syncPlaybackPreference();
    mediaQuery.addEventListener("change", syncPlaybackPreference);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      mediaQuery.removeEventListener("change", syncPlaybackPreference);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoSources.length === 0) return;

    currentIndexRef.current = 0;
    videoReadyRef.current = false;
    video.src = videoSources[0];
    video.load();
  }, [videoSources]);

  // Rotación automática cada N segundos
  useEffect(() => {
    if (videoSources.length <= 1) return;

    intervalRef.current = setInterval(() => {
      const video = videoRef.current;
      if (!video) return;

      currentIndexRef.current =
        (currentIndexRef.current + 1) % videoSources.length;
      videoReadyRef.current = false;
      video.src = videoSources[currentIndexRef.current];
      video.load();
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [videoSources, interval]);

  // Sincroniza dimensiones del canvas al contenedor (DPR-aware)
  const syncCanvasSize = useCallback(() => {
    const canvas = renderCanvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  // Render loop principal
  useEffect(() => {
    const video = videoRef.current;
    const canvas = renderCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!processCanvasRef.current) {
      processCanvasRef.current = document.createElement("canvas");
    }
    const procCanvas = processCanvasRef.current;
    const procCtx = procCanvas.getContext("2d", { willReadFrequently: true });
    if (!procCtx) return;

    syncCanvasSize();
    const resizeObserver = new ResizeObserver(() => syncCanvasSize());
    resizeObserver.observe(canvas);

    let processingHeight = Math.floor(processingWidth * 0.5625);
    const frameInterval = 1000 / fps;
    let lastRenderTime = 0;

    const handleCanPlay = () => {
      if (!video) return;
      const aspect = video.videoHeight / video.videoWidth;
      processingHeight = Math.floor(processingWidth * aspect);
      procCanvas.width = processingWidth;
      procCanvas.height = processingHeight;
      videoReadyRef.current = true;
      if (!reducedMotionRef.current && !document.hidden) {
        video.play().catch(() => {});
      }
    };

    if (video) {
      video.addEventListener("canplay", handleCanPlay);
      if (video.readyState >= 3) handleCanPlay();
    }

    // ═══ FALLBACK: fondo negro (transparente) mientras carga ═══
    const renderFallback = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
    };

    // Gradiente de densidad ASCII: de más oscuro a más claro
    const ASCII_CHARS = "@#%*+=-:. ";

    // ═══ RENDER VIDEO → ASCII ═══
    const renderVideo = () => {
      if (!video || video.readyState < 2) return;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      procCtx.drawImage(video, 0, 0, processingWidth, processingHeight);
      const frameData = procCtx.getImageData(
        0,
        0,
        processingWidth,
        processingHeight,
      );
      const data = frameData.data;

      ctx.clearRect(0, 0, w, h);

      const scaleX = w / processingWidth;
      const scaleY = h / processingHeight;
      const fontSize = Math.max(scaleX * step * 0.9, 6);

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FFFFFF";

      for (let y = 0; y < processingHeight; y += step) {
        for (let x = 0; x < processingWidth; x += step) {
          const index = (y * processingWidth + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

          if (brightness < threshold) {
            // Mapear oscuridad a un carácter del gradiente
            const normalizedDark = 1 - brightness / threshold;
            const charIndex = Math.floor(
              normalizedDark * (ASCII_CHARS.length - 1),
            );
            const char = ASCII_CHARS[charIndex];

            const drawX = x * scaleX + scaleX * step * 0.5;
            const drawY = y * scaleY + scaleY * step * 0.5;

            ctx.globalAlpha = 0.5 + normalizedDark * 0.5;
            ctx.fillText(char, drawX, drawY);
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    // ═══ LOOP ═══
    const loop = (time: number) => {
      animFrameRef.current = requestAnimationFrame(loop);
      if (
        !videoReadyRef.current ||
        !video ||
        video.paused ||
        video.readyState < 2
      ) {
        renderFallback();
        return;
      }

      if (time - lastRenderTime < frameInterval) return;

      lastRenderTime = time;
      renderVideo();
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      if (video) video.removeEventListener("canplay", handleCanPlay);
    };
  }, [fps, processingWidth, particleSize, threshold, step, syncCanvasSize]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-[#000000]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
      >
        <track
          kind="captions"
          srcLang="es"
          label="Descripción del fondo"
          src="/videos/hero-captions.vtt"
          default
        />
      </video>
      <canvas
        ref={renderCanvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
}
