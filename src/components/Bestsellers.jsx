import { products, testimonial } from '../data/products.js'

const toneVar = {
  moss: 'var(--moss)',
  rust: 'var(--rust)',
  mustard: 'var(--mustard)',
  ink: 'var(--ink)',
}

export default function Bestsellers() {
  return (
    <section id="destacados" className="bestsellers">
      <div className="container">
        <div className="section-head">
          <h2>Lo que más se lleva la gente</h2>
          <p>Piezas probadas en más de mil kilómetros de sendero combinados.</p>
        </div>

        <div className="products-grid">
          {products.map((p) => (
            <article className="product-card" key={p.id}>
              <div className="product-image" style={{ background: toneVar[p.tone] }}>
                <svg viewBox="0 0 100 100" width="46" height="46">
                  <path d="M20 80 L38 40 L52 62 L68 30 L82 80 Z" fill="none" stroke="#efebe2" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" opacity="0.85" />
                </svg>
              </div>
              <div className="product-info">
                <span className="product-cat">{p.category}</span>
                <h3>{p.name}</h3>
                <div className="product-row">
                  <strong>{p.price}</strong>
                  <button className="product-add" aria-label={`Añadir ${p.name} al carrito`}>+</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <blockquote className="testimonial">
          <p>&ldquo;{testimonial.quote}&rdquo;</p>
          <footer>
            <strong>{testimonial.author}</strong>
            <span>{testimonial.role}</span>
          </footer>
        </blockquote>
      </div>

      <style>{`
        .bestsellers { padding: 0 0 96px; }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 64px;
        }
        .product-card {
          border: 1px solid var(--line);
          border-radius: 4px;
          overflow: hidden;
          background: #fff;
          transition: box-shadow 0.18s ease;
        }
        .product-card:hover { box-shadow: 0 14px 26px rgba(27, 26, 23, 0.1); }
        .product-image {
          height: 168px;
          display: grid;
          place-items: center;
        }
        .product-info { padding: 16px 16px 18px; }
        .product-cat { font-size: 11.5px; opacity: 0.55; }
        .product-info h3 {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14.5px;
          margin: 6px 0 12px;
        }
        .product-row { display: flex; justify-content: space-between; align-items: center; }
        .product-row strong { font-size: 15px; }
        .product-add {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--line-dark);
          font-size: 16px;
          line-height: 1;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .product-add:hover { background: var(--ink); color: var(--paper); }

        .testimonial {
          margin: 0;
          padding: 40px 0 0;
          border-top: 1px solid var(--line);
        }
        .testimonial p {
          font-family: var(--font-display);
          font-size: clamp(20px, 2.6vw, 27px);
          max-width: 52ch;
          line-height: 1.3;
        }
        .testimonial footer {
          display: flex;
          flex-direction: column;
          margin-top: 18px;
          font-size: 13.5px;
        }
        .testimonial strong { font-weight: 600; }
        .testimonial span { opacity: 0.6; margin-top: 2px; }

        @media (max-width: 900px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  )
}
