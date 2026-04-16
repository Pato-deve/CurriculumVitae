import RevealOnScroll from './RevealOnScroll';

const PROJECTS = [
  {
    title: 'MCP',
    description: 'Sistema de gestión de contexto basado en RAG y SQLite diseñado para potenciar agentes de inteligencia artificial.',
    technologies: ['Python', 'SQLite', 'RAG'],
  },
  {
    title: 'Auto-Switch Network Monitor',
    description: 'Herramienta de automatización que gestiona y alterna conexiones de red inalámbrica en tiempo real para mantener la estabilidad del enlace.',
    technologies: ['Python', 'Scripting de Sistema'],
  },
  {
    title: 'Blog_bento',
    description: 'Plataforma personal modular con soporte multilenguaje, diseñada bajo principios de alto contraste y eficiencia de carga.',
    technologies: ['Next.js', 'i18n', 'Arquitectura Modular'],
  },
];

export default function SectionProjects() {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-[var(--bg-primary)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4 block">
                Proyectos
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[var(--text-primary)]">
                Lo que construyo
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-sm leading-relaxed text-[var(--text-secondary)] max-w-xs text-right">
              Soluciones reales enfocadas en automatización, rendimiento y simplicidad.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            // Lógica de asimetría:
            // i=0: 2 columnas de ancho
            // i=1: 1 columna de ancho
            // i=2: 2 columnas de ancho, empezando desde la segunda (hueco a la izq)
            const spanClass = 
              i === 0 ? "lg:col-span-2" : 
              i === 1 ? "lg:col-span-1" : 
              "lg:col-span-2 lg:col-start-2";
              
            return (
              <RevealOnScroll key={project.title} className={`delay-${(i + 1) * 100} ${spanClass}`}>
              <div className="group bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-8 hover-lift cursor-default h-full flex flex-col border border-[var(--border)]">
                {/* Número del proyecto */}
                <span className="text-xs font-mono text-[var(--text-muted)] mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                
                <h3 className="font-serif text-xl mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] flex-1 mb-6">
                  {project.description}
                </p>
                
                {/* Tags de tecnologías */}
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
              </div>
              </RevealOnScroll>
            );
          })}
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
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
