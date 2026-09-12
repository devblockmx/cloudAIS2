const steps = [
  {
    n: '1',
    title: 'Eliges tu equipo',
    text: 'Filtra por tipo de ruta, clima o peso de carga y arma tu pedido.',
  },
  {
    n: '2',
    title: 'Lo probamos en bodega',
    text: 'Cada pieza pasa una revisión de costuras y cierres antes de salir.',
  },
  {
    n: '3',
    title: 'Sale a tu puerta',
    text: 'Envío en 3–5 días hábiles, con seguimiento en tiempo real.',
  },
]

export default function HowItWorks() {
  return (
    <section id="proceso" className="how">
      <div className="container how-inner">
        <h2>Del carrito al sendero</h2>
        <ol className="how-list">
          {steps.map((s) => (
            <li key={s.n}>
              <span className="how-num">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .how {
          background: var(--ink);
          color: var(--paper);
          padding: 80px 0;
        }
        .how-inner h2 {
          font-size: clamp(26px, 3vw, 34px);
          margin-bottom: 40px;
          max-width: 20ch;
        }
        .how-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .how-list li {
          display: flex;
          gap: 16px;
          border-top: 1px solid var(--line-dark);
          padding-top: 20px;
        }
        .how-num {
          font-family: var(--font-display);
          font-size: 22px;
          color: var(--mustard);
          flex-shrink: 0;
        }
        .how-list h3 {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 8px;
        }
        .how-list p { font-size: 14px; opacity: 0.72; line-height: 1.5; }

        @media (max-width: 760px) {
          .how-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
