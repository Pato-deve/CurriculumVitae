import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Header from "@/components/Header";
import ParticleVideoHero from "@/components/ParticleVideoHero";
import SectionSkills from "@/components/SectionSkills";
import SectionProjects from "@/components/SectionProjects";
import SectionAbout from "@/components/SectionAbout";
import Footer from "@/components/Footer";

function findPublicAsset(candidates: string[]) {
  for (const candidate of candidates) {
    const absolutePath = path.join(process.cwd(), "public", candidate);
    if (fs.existsSync(absolutePath)) {
      return `/${candidate.replace(/\\/g, "/")}`;
    }
  }

  return null;
}

function getHeroVideoSources() {
  const videosDir = path.join(process.cwd(), "public", "videos");
  const videoExtensions = new Set([".mp4", ".webm", ".ogg", ".mov"]);

  try {
    const files = fs
      .readdirSync(videosDir)
      .filter((file) => videoExtensions.has(path.extname(file).toLowerCase()))
      .sort((left, right) => {
        if (left === "hero.mp4") return -1;
        if (right === "hero.mp4") return 1;
        return left.localeCompare(right);
      });

    return files.map((file) => `/videos/${file}`);
  } catch {
    return ["/videos/hero.mp4"];
  }
}

export default function Home() {
  const heroVideoSources = getHeroVideoSources();
  const heroImageSrc = findPublicAsset([
    "images/hero-proteinas.png",
    "hero-proteinas.png",
  ]);
  const featuredProjectImageSrc = findPublicAsset([
    "images/perfil-lvnutrition.png",
    "perfil-lvnutrition.png",
  ]);

  return (
    <>
      <Header />

      {/* ═══ HERO ═══ */}
      <section
        id="hero"
        className="relative min-h-[80vh] flex items-center justify-center pt-16 mt-[-64px] pb-16"
      >
        <div className="absolute inset-0 z-0 bg-[#000000]">
          {heroImageSrc ? (
            <Image
              src={heroImageSrc}
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-center opacity-20"
            />
          ) : null}
          <ParticleVideoHero videoSources={heroVideoSources} />
          {/* Viñeta de degradado atmosférico para garantizar lecturabilidad extrema en el texto izquierdo */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 mt-16 pointer-events-none">
          <div className="max-w-2xl py-8">
            <div className="animate-fade-in-up">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/75 mb-4 block drop-shadow-sm">
                Full Stack &bull; DevOps &bull; SysAdmin
              </span>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-white drop-shadow-md">
                Patricio
                <br />
                <span className="italic">Martinez.</span>
              </h1>
              <p className="mt-8 text-sm md:text-base leading-relaxed text-white/88 max-w-md drop-shadow-sm">
                Construyendo soluciones sólidas desde la base de datos hasta el
                despliegue. Estudiante de Ingeniería Informática enfocado en
                automatización e infraestructura.
              </p>

              <div className="flex items-center gap-4 mt-6 pointer-events-auto">
                <a
                  href="https://github.com/Pato-deve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/patriciomartinez-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="animate-slide-in-right delay-300 pointer-events-auto mt-8">
              <div className="flex items-center gap-3 text-white/75">
                <span className="text-xs font-mono tracking-wider">BA</span>
                <div className="h-px w-16 bg-white/30" />
                <span className="text-xs tracking-wide font-medium">
                  Buenos Aires, Argentina
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <SectionSkills />

      {/* ═══ PROYECTOS ═══ */}
      <SectionProjects featuredImageSrc={featuredProjectImageSrc} />

      {/* ═══ PERFIL + CERTIFICACIONES ═══ */}
      <SectionAbout />

      {/* ═══ FOOTER ═══ */}
      <Footer />
    </>
  );
}
