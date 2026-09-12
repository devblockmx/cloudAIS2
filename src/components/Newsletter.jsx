import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div>
          <h2>Rutas nuevas, equipo nuevo.</h2>
          <p>Un correo al mes con lanzamientos y notas de campo. Nada más.</p>
        </div>

        {sent ? (
          <p className="newsletter-done">Listo — revisa tu correo para confirmar.</p>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Correo electrónico"
            />
            <button type="submit" className="btn btn-dark">Suscribirme</button>
          </form>
        )}
      </div>

      <style>{`
        .newsletter { padding: 88px 0; }
        .newsletter-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .newsletter h2 { font-size: clamp(24px, 3vw, 32px); margin-bottom: 8px; }
        .newsletter p { opacity: 0.7; font-size: 15px; }
        .newsletter-form {
          display: flex;
          gap: 10px;
        }
        .newsletter-form input {
          font-family: var(--font-body);
          font-size: 14.5px;
          padding: 13px 16px;
          border: 1px solid var(--line-dark);
          border-radius: 3px;
          background: #fff;
          min-width: 240px;
        }
        .newsletter-form input:focus { outline: 2px solid var(--rust); outline-offset: 2px; }
        .newsletter-done {
          font-weight: 500;
          color: var(--moss);
        }

        @media (max-width: 640px) {
          .newsletter-form { width: 100%; flex-direction: column; }
          .newsletter-form input { min-width: 0; }
        }
      `}</style>
    </section>
  )
}
