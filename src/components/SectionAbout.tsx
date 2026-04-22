import RevealOnScroll from "./RevealOnScroll";

const CERTIFICATIONS = [
  {
    title: "Python fundamentals",
    issuer: "Santander Open Academy",
    file: "/certificates/Certificado Python Santander.pdf",
  },
  {
    title: "Escuela de Innovación",
    issuer: "ITBA",
    file: "/certificates/ITBA Escuela de Innovación.pdf",
  },
  {
    title: "Rally latinoamericano de innovación",
    issuer: "Universidad de Morón",
    file: "/certificates/certificado_sede_impacto_social_52631.pdf",
  },
];

export default function SectionAbout() {
  return (
    <section
      id="perfil"
      className="deferred-section scroll-mt-24 relative pt-24 md:pt-32 pb-28 md:pb-40 bg-[var(--bg-muted)] overflow-hidden"
    >
      {/* Gradient transition from Projects (bg-primary) */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-[var(--bg-primary)] to-transparent" />
      {/* Gradient transition toward Footer (bg-primary) */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 md:h-32 bg-gradient-to-b from-transparent via-[var(--bg-muted)]/70 to-[var(--bg-primary)]" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-start">
          <RevealOnScroll>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4 block">
                Perfil
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[var(--text-primary)] mb-8">
                Operación clara,
                <br />
                criterio técnico.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[var(--text-secondary)] max-w-2xl">
                Estudiante de Ingeniería Informática en la UNPAZ. Me interesa
                construir ecosistemas técnicos que sean sólidos de verdad: menos
                ruido, menos dependencias gratuitas y más decisiones que mejoren
                operación, mantenimiento y despliegue.
              </p>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-[var(--text-secondary)] max-w-2xl">
                Entre automatización, infraestructura y producto, busco que cada
                proyecto tenga una lógica clara: resolver bien el problema,
                sostenerlo en el tiempo y dejar evidencia concreta de que
                funciona.
              </p>
              <p className="mt-6 text-sm italic text-[var(--text-secondary)] max-w-xl">
                &ldquo;Mi gata revisa mis pull requests.&rdquo;
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Automatización",
                  "Infraestructura",
                  "Sistemas sostenibles",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-4 py-2 rounded-full border border-[var(--border-strong)] text-[var(--text-secondary)] font-medium bg-[var(--bg-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-10 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Fuera de pantalla: trekking, pesca y estrategia de marca.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="delay-200">
            <div className="space-y-6">
              <div className="bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-7 border border-[var(--border)]">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3 block">
                  Educación
                </span>
                <h3 className="font-serif text-lg text-[var(--text-primary)] mb-1">
                  Ingeniería Informática
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Universidad Nacional de José C. Paz (UNPAZ) &mdash; En curso
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-[var(--text-secondary)]">
                    Ingreso destacado &mdash; Top 12% del Ciclo de Inicio
                    Universitario (2026)
                  </span>
                </div>
              </div>

              <div className="bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-7 border border-[var(--border)]">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3 block">
                  Áreas de enfoque
                </span>
                <div className="flex flex-wrap gap-2">
                  {["DevOps", "SysAdmin", "Ciberseguridad"].map((area) => (
                    <span
                      key={area}
                      className="text-sm px-4 py-2 rounded-full border border-[var(--border-strong)] text-[var(--text-secondary)] font-medium bg-[var(--bg-secondary)]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--bg-dark)] rounded-[var(--radius-md)] p-7 border border-white/5 text-[var(--text-inverse)]">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-3 block">
                  Cómo trabajo
                </span>
                <p className="text-sm leading-relaxed text-white/84">
                  Priorizo bases técnicas limpias, automatización donde aporta
                  de verdad y una capa visual que no tape la función del
                  producto.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="delay-300">
          <div className="mt-20 pt-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3 block">
                  Certificaciones
                </span>
                <h3 className="font-serif text-2xl md:text-3xl leading-tight text-[var(--text-primary)]">
                  Cierro con evidencia.
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] max-w-md md:text-right">
                Cada certificado suma una prueba concreta: formación validada,
                respaldo institucional y acceso directo al documento.
              </p>
            </div>

            <div
              className="bg-[var(--bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--border)] overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {CERTIFICATIONS.map((cert, i) => (
                <RevealOnScroll
                  key={cert.title}
                  style={{ transitionDelay: `${120 + i * 90}ms` }}
                >
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-start md:items-center gap-3 md:gap-6 px-4 py-4 md:px-6 md:py-5 border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--bg-muted)]/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-muted)] border border-[var(--border-strong)] text-[var(--text-primary)] shrink-0">
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
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="text-xs font-mono tracking-[0.16em] uppercase text-[var(--text-muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="min-w-0 md:flex md:items-baseline md:gap-3">
                      <h4 className="font-serif text-base md:text-lg leading-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300 truncate">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed truncate">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 md:justify-self-end">
                      <span className="inline-flex items-center rounded-full border border-[var(--border-strong)] px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-[var(--text-secondary)] bg-[var(--bg-muted)]">
                        Verificado
                      </span>
                      <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300">
                        Abrir PDF
                      </span>
                    </div>
                  </a>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
