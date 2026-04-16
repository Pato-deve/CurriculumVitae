import RevealOnScroll from './RevealOnScroll';

export default function SectionAbout() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-muted)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda: Bio */}
          <RevealOnScroll>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4 block">
                Sobre mí
              </span>
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-[var(--text-primary)] italic mb-8">
                &ldquo;Mi gata revisa mis pull request.&rdquo;
              </blockquote>
              <p className="text-sm md:text-base leading-relaxed text-[var(--text-secondary)]">
                Estudiante de Ingeniería Informática en la UNPAZ. Me especializo en crear ecosistemas eficientes, sin sobrecargas innecesarias, con un fuerte interés en la automatización y la infraestructura. Cuando no estoy optimizando mi servidor casero, probablemente esté planeando mi próximo trekking, pescando o analizando estrategias de marca o mi crecimiento personal.
              </p>
            </div>
          </RevealOnScroll>

          {/* Columna derecha: Educación + Focus */}
          <RevealOnScroll className="delay-200">
            <div className="space-y-6">
              {/* Educación */}
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
                    Ingreso destacado &mdash; Top 12% del Ciclo de Inicio Universitario (2026)
                  </span>
                </div>
              </div>

              {/* Áreas de enfoque */}
              <div className="bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-7 border border-[var(--border)]">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3 block">
                  Áreas de enfoque
                </span>
                <div className="flex flex-wrap gap-2">
                  {['DevOps', 'SysAdmin', 'Ciberseguridad'].map((area) => (
                    <span
                      key={area}
                      className="text-sm px-4 py-2 rounded-full bg-[var(--bg-dark)] text-[var(--text-inverse)] font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
