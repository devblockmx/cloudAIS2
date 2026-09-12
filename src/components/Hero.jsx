export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Temporada de otoño, 2026</p>
          <h1 className="hero-title">
            Material hecho para
            <br />
            durar más que la ruta divertida.
          </h1>
          <p className="hero-sub">
            Mochilas, capas y utensilios de campamento probados en la Patagonia,
            los Andes y todo terreno intermedio. Sin relleno de marketing, solo
            materiales que aguantan.
          </p>
          <div className="hero-cta">
            <a href="#destacados" className="btn btn-primary">Ver destacados</a>
            <a href="#colecciones" className="btn btn-ghost">Explorar colecciones</a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>12 años</strong>
              <span>probando en campo</span>
            </div>
            <div>
              <strong>4,300+</strong>
              <span>rutas recorridas</span>
            </div>
            <div>
              <strong>2 años</strong>
              <span>de garantía real</span>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 420 480" className="hero-svg">
            <rect x="0" y="0" width="420" height="480" rx="6" fill="#333f2c" />
            <path d="M0 340 L110 200 L170 270 L240 140 L340 300 L420 260 L420 480 L0 480 Z" fill="#47573d" />
            <path d="M0 400 L90 320 L180 380 L260 300 L360 400 L420 360 L420 480 L0 480 Z" fill="#1b1a17" opacity="0.55" />
            <circle cx="330" cy="95" r="36" fill="#c99a3e" />
            <g stroke="#efebe2" strokeWidth="2" opacity="0.35">
              <line x1="20" y1="60" x2="20" y2="120" />
              <line x1="-10" y1="90" x2="50" y2="90" />
            </g>
          </svg>
          <div className="hero-card">
            <span className="hero-card-dot" />
            <div>
              <strong>Mochila Cordillera 32L</strong>
              <p>Tela ripstop 400D · $142.00</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero { padding: 56px 0 88px; overflow: hidden; }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.85fr;
          gap: 56px;
          align-items: center;
        }
        .hero-copy {
          animation: rise 0.7s ease both;
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-kicker {
          font-size: 14px;
          color: var(--moss);
          font-weight: 500;
          margin-bottom: 18px;
        }
        .hero-title {
          font-size: clamp(38px, 5vw, 60px);
          max-width: 12ch;
          margin-bottom: 22px;
        }
        .hero-sub {
          font-size: 17px;
          max-width: 42ch;
          opacity: 0.82;
          margin-bottom: 32px;
        }
        .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 44px; }
        .hero-stats {
          display: flex;
          gap: 36px;
          padding-top: 28px;
          border-top: 1px solid var(--line);
        }
        .hero-stats div { display: flex; flex-direction: column; gap: 4px; }
        .hero-stats strong { font-family: var(--font-display); font-size: 20px; }
        .hero-stats span { font-size: 13px; opacity: 0.65; }

        .hero-art {
          position: relative;
          animation: rise 0.8s ease 0.1s both;
        }
        .hero-svg {
          width: 100%;
          border-radius: 6px;
        }
        .hero-card {
          position: absolute;
          left: -24px;
          bottom: -20px;
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 12px 28px rgba(27, 26, 23, 0.14);
          max-width: 240px;
        }
        .hero-card-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--rust);
          flex-shrink: 0;
        }
        .hero-card strong { font-size: 13.5px; display: block; }
        .hero-card p { font-size: 12px; opacity: 0.65; margin-top: 2px; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-art { order: -1; }
          .hero-card { left: 12px; }
        }
        @media (max-width: 560px) {
          .hero-stats { gap: 22px; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  )
}
