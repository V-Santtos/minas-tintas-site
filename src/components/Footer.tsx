export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#141210',
      color: '#fff',
      borderTop: '1px solid #2E2A26',
      padding: '40px 0',
    }}>
      <div className="section-container footer-inner" style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '32px',
      }}>

        {/* Marca */}
        <a href="#top" style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: '16px', color: '#fff',
        }}>
          <span style={{
            display: 'inline-block', width: '8px', height: '8px',
            borderRadius: '50%', background: 'var(--color-brand-red)',
            transform: 'translateY(-2px)', marginRight: '4px',
          }} />
          Minas Tintas
        </a>

        {/* Links */}
        <ul style={{
          display: 'flex', gap: '28px', listStyle: 'none',
          padding: 0, margin: 0, justifyContent: 'center',
        }}>
          {[
            { label: 'Sobre',    href: '#sobre'    },
            { label: 'Tintas',   href: '#tintas'   },
            { label: 'Texturas', href: '#texturas' },
            { label: 'Contato',  href: '#contato'  },
          ].map((link) => (
            <li key={link.href}>
              <a href={link.href} style={{ fontSize: '13px', color: '#736F6B', transition: 'color 0.2s' }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Meta */}
        <div className="footer-meta" style={{ textAlign: 'right', fontSize: '12px', color: '#5C5753', lineHeight: 1.7 }}>
          <div>Rep. Maza Tintas Imobiliária e Automotiva</div>
          <div style={{ marginTop: '2px' }}>@minastintas</div>
          <div style={{ marginTop: '2px' }}>© 2025 Minas Tintas</div>
        </div>

      </div>
    </footer>
  )
}
