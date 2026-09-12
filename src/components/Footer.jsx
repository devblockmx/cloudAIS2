export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col footer-brand">
          <span className="footer-logo">Terreno</span>
          <p>Equipo de sendero diseñado en Santiago, probado en la Patagonia.</p>
        </div>

        <div className="footer-col">
          <h4>Tienda</h4>
          <a href="#colecciones">Mochilas</a>
          <a href="#colecciones">Capas</a>
          <a href="#colecciones">Campamento</a>
        </div>

        <div className="footer-col">
          <h4>Ayuda</h4>
          <a href="#proceso">Envíos</a>
          <a href="#proceso">Devoluciones</a>
          <a href="#top">Tallas</a>
        </div>

        <div className="footer-col">
          <h4>Compañía</h4>
          <a href="#top">Nuestra historia</a>
          <a href="#top">Contacto</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Terreno. Todos los derechos reservados.</span>
        <span>Hecho para caminar.</span>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--line);
          padding: 56px 0 28px;
        }
        .footer-inner {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 32px;
          padding-bottom: 40px;
        }
        .footer-brand p {
          font-size: 13.5px;
          opacity: 0.65;
          margin-top: 10px;
          max-width: 28ch;
        }
        .footer-logo {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 600;
        }
        .footer-col { display: flex; flex-direction: column; gap: 10px; }
        .footer-col h4 {
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .footer-col a {
          font-size: 13.5px;
          opacity: 0.7;
          transition: opacity 0.15s ease;
        }
        .footer-col a:hover { opacity: 1; }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--line);
          padding-top: 20px;
          font-size: 12.5px;
          opacity: 0.55;
        }

        @media (max-width: 700px) {
          .footer-inner { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </footer>
  )
}
