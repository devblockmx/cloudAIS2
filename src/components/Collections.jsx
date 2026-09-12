import { collections } from '../data/products.js'

const toneVar = {
  moss: 'var(--moss)',
  rust: 'var(--rust)',
  ink: 'var(--ink)',
}

export default function Collections() {
  return (
    <section id="colecciones" className="collections">
      <div className="container">
        <div className="section-head">
          <h2>Tres formas de equiparte</h2>
          <p>Cada colección resuelve un problema distinto del sendero.</p>
        </div>

        <div className="collections-grid">
          {collections.map((c) => (
            <a href="#destacados" className="collection-card" key={c.name}>
              <div className="collection-swatch" style={{ background: toneVar[c.tone] }} />
              <div className="collection-info">
                <h3>{c.name}</h3>
                <span>{c.count}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .collections { padding: 40px 0 88px; }
        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 36px;
          border-bottom: 1px solid var(--line);
          padding-bottom: 24px;
        }
        .section-head h2 { font-size: clamp(26px, 3vw, 34px); max-width: 16ch; }
        .section-head p { opacity: 0.7; max-width: 32ch; font-size: 15px; }

        .collections-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .collection-card {
          display: block;
          border: 1px solid var(--line);
          border-radius: 4px;
          overflow: hidden;
          background: #fff;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .collection-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 26px rgba(27, 26, 23, 0.1);
        }
        .collection-swatch { height: 140px; }
        .collection-info { padding: 18px 20px 22px; }
        .collection-info h3 { font-size: 19px; margin-bottom: 6px; }
        .collection-info span { font-size: 13px; opacity: 0.6; }

        @media (max-width: 760px) {
          .collections-grid { grid-template-columns: 1fr; }
          .section-head { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  )
}
