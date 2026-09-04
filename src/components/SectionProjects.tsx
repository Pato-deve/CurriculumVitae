import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const FEATURED_PROJECT = {
  title: "LV Nutrition",
  status: "Cliente real · En desarrollo",
  description:
    "Landing comercial para una marca de suplementacion deportiva que combina catalogo oficial, asesoramiento personalizado y llamados a la accion enfocados en conversion.",
  details:
    "La experiencia prioriza claridad de compra, tono de marca premium y un recorrido rapido hacia WhatsApp para transformar trafico en consultas concretas.",
  technologies: ["Next.js", "Catalogo", "WhatsApp", "Vercel"],
  highlights: [
    "Catalogo extenso con categorias claras y stock inmediato.",
    "Asesoria profesional integrada como argumento de conversion.",
    "Tono visual directo, comercial y orientado a resultados reales.",
  ],
  href: "https://www.lvnutrition.store",
};

const PROJECTS = [
  {
    title: "Unyk",
    description:
      "Agencia de desarrollo web con animaciones modernas, planes de pago y contacto.",
    technologies: ["Next.js", "SQLite", "Web"],
    href: "https://www.unyk-iota.vercel.app",
  },
  {
    title: "Auto-Switch Network Monitor",
    description:
      "Herramienta de automatizacion que gestiona y alterna conexiones de red inalambrica en tiempo real para mantener la estabilidad del enlace.",
    technologies: ["Python", "Automatizacion", "Redes"],
  },
  {
    title: "Blog_bento",
    description:
      "Plataforma personal modular con soporte multilenguaje, disenada bajo principios de alto contraste y eficiencia de carga.",
    technologies: ["Next.js", "i18n", "Arquitectura Modular"],
  },
];

interface SectionProjectsProps {
  featuredImageSrc?: string | null;
}

export default function SectionProjects({
  featuredImageSrc,
}: SectionProjectsProps) {
  return (
    <section
      id="proyectos"
      className="deferred-section scroll-mt-24 relative pt-24 md:pt-32 pb-24 md:pb-32 bg-[var(--bg-primary)] overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-[var(--bg-muted)] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4 block">
                Proyectos
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[var(--text-primary)]">
                Casos con foco real
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-sm leading-relaxed text-[var(--text-secondary)] max-w-md md:text-left lg:text-right">
              Productos y herramientas donde el criterio tecnico se traduce en
              uso concreto, conversion y operacion sostenible.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="delay-100">
          <article
            className="bg-[var(--bg-dark)] rounded-[var(--radius-lg)] p-8 md:p-10 lg:p-12 text-[var(--text-inverse)] border border-white/10"
            style={{ boxShadow: "var(--shadow-hover)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.9fr] gap-10 items-start">
              <div>
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-white/50 mb-4 block">
                  01 / Proyecto destacado
                </span>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight text-white">
                    {FEATURED_PROJECT.title}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-white/72">
                    {FEATURED_PROJECT.status}
                  </span>
                </div>

                <p className="mt-6 text-base leading-relaxed text-white/90 max-w-2xl">
                  {FEATURED_PROJECT.description}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/78 max-w-xl">
                  {FEATURED_PROJECT.details}
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {FEATURED_PROJECT.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-white/8 text-white/75 border border-white/10 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-[var(--radius-md)] p-6 border border-white/10">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-4 block">
                  Decisiones clave
                </span>
                <ul className="space-y-3">
                  {FEATURED_PROJECT.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-white/84"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={FEATURED_PROJECT.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-widest uppercase rounded-sm bg-white text-[var(--bg-dark)] hover:bg-[var(--bg-muted)] transition-colors duration-300"
                >
                  Ver proyecto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            {featuredImageSrc ? (
              <div className="relative mt-10 overflow-hidden rounded-[var(--radius-md)] border border-white/10 bg-white/5 h-48 md:h-56 lg:h-64">
                <Image
                  src={featuredImageSrc}
                  alt="Vista previa del proyecto LV Nutrition"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 640px"
                  className="object-cover object-center"
                />
              </div>
            ) : null}
          </article>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {PROJECTS.map((project, i) => (
            <RevealOnScroll
              key={project.title}
              className={`delay-${(i + 2) * 100}`}
            >
              <article
                className="group bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-8 hover-lift h-full flex flex-col border border-[var(--border)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span className="text-xs font-mono text-[var(--text-muted)] mb-4">
                  {String(i + 2).padStart(2, "0")}
                </span>

                <h3 className="font-serif text-xl mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-[var(--text-secondary)] flex-1 mb-6 max-w-[58ch]">
                  {project.description}
                </p>
                <a
                  href={PROJECTS.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-widest uppercase rounded-sm bg-white text-[var(--bg-dark)] hover:bg-[var(--bg-muted)] transition-colors duration-300"
                >
                  Ver proyecto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--bg-muted)] text-[var(--text-secondary)] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="delay-500">
          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/Pato-deve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase border border-[var(--border-strong)] rounded-sm text-[var(--text-primary)] hover:bg-[var(--bg-dark)] hover:text-[var(--text-inverse)] transition-all duration-300"
            >
              Ver más en GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
