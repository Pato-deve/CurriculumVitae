import RevealOnScroll from './RevealOnScroll';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    skills: ['Next.js', 'React', 'Diseño de Interfaz Minimalista'],
  },
  {
    title: 'Backend',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
    ),
    skills: ['SQL', 'Python', 'SQLite'],
  },
  {
    title: 'Infraestructura',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
    ),
    skills: ['Docker', 'Proxmox (LXC)', 'Gitea', 'Portainer', 'Vault'],
  },
];

export default function SectionSkills() {
  return (
    <section id="skills" className="pb-24 md:pb-32 bg-[var(--bg-muted)] relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-20 -mt-20 md:-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <RevealOnScroll>
            {/* Agregamos padding o fondo para separar el texto si el fondo es negro - como la tipografía es oscura, la forzamos blanca si monta el negro, o mejor: el texto se queda en el grid izquierdo que tal vez pisa beige, o le damos un fondo blanco/claro sutil a la caja del texto para que contraste y sirva de transición */}
            <div className="bg-[var(--bg-primary)] p-8 md:p-10 rounded-[var(--radius-lg)] shadow-xl relative mt-16 lg:mt-0">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4 block">
                Stack Técnico
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[var(--text-primary)]">
                Herramientas<br />y Enfoque
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[var(--text-secondary)] max-w-xs">
                Ecosistemas eficientes, sin sobrecargas innecesarias. Automatización e infraestructura como prioridad.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 lg:pt-0">
            {SKILL_CATEGORIES.map((cat, i) => (
              <RevealOnScroll key={cat.title} className={`delay-${(i + 1) * 100}`}>
                <div className="bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-7 hover-lift cursor-default h-full"
                     style={{ boxShadow: 'var(--shadow-card)' }}>
                  <div className="text-[var(--accent)] mb-4">
                    {cat.icon}
                  </div>
                  <h3 className="font-serif text-lg mb-4 text-[var(--text-primary)]">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
