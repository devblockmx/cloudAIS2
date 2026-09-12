import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">Terreno</a>
        <nav className="nav-links">
          <a href="#colecciones">Colecciones</a>
          <a href="#destacados">Destacados</a>
          <a href="#proceso">Envíos</a>
        </nav>
        <div className="nav-actions">
          <button className="nav-icon" aria-label="Buscar">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
              <line x1="12.4" y1="12.4" x2="16.5" y2="16.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
          <button className="nav-icon" aria-label="Carrito de compras">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 5h12l-1.2 8.4a1.5 1.5 0 0 1-1.48 1.3H5.68a1.5 1.5 0 0 1-1.48-1.3L3 5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M6.5 5V4a2.5 2.5 0 0 1 5 0v1" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <span className="nav-badge">2</span>
          </button>
        </div>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: transparent;
          transition: background 0.25s ease, border-color 0.25s ease;
          border-bottom: 1px solid transparent;
        }
        .nav-scrolled {
          background: rgba(239, 235, 226, 0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .nav-logo {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .nav-links {
          display: flex;
          gap: 32px;
          font-size: 14.5px;
        }
        .nav-links a {
          opacity: 0.82;
          transition: opacity 0.15s ease;
        }
        .nav-links a:hover { opacity: 1; }
        .nav-actions {
          display: flex;
          gap: 6px;
        }
        .nav-icon {
          position: relative;
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 3px;
          color: var(--ink);
        }
        .nav-icon:hover { background: var(--paper-dim); }
        .nav-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          background: var(--rust);
          color: var(--paper);
          font-size: 10px;
          font-weight: 600;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          display: grid;
          place-items: center;
        }
        @media (max-width: 760px) {
          .nav-links { display: none; }
        }
      `}</style>
    </header>
  )
}
