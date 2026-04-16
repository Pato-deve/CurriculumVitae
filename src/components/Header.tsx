'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
          ? 'bg-[var(--bg-secondary)]/95 backdrop-blur-md shadow-sm'
          : 'bg-black/10 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link
          href="/"
          className={`font-serif text-xl tracking-wide transition-colors duration-300 ${scrolled ? 'text-[var(--text-primary)]' : 'text-white'
            }`}
          style={{ fontStyle: 'italic' }}
        >
          CV
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`link-underline text-sm font-medium tracking-wide transition-colors duration-300 ${scrolled
                  ? 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  : 'text-white/70 hover:text-white'
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className={`hidden md:inline-flex items-center px-5 py-2 text-xs font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 ${scrolled
              ? 'bg-[var(--bg-dark)] text-[var(--text-inverse)] hover:bg-[var(--accent)]'
              : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
            }`}
        >
          Conectar
        </a>
      </div>
    </header>
  );
}
