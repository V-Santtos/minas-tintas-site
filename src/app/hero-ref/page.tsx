import { HeroSection } from '@/components/ui/hero-section-2'

export default function HeroRefPage() {
  return (
    <div style={{ colorScheme: 'dark' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
      `}</style>

      <div style={{ position: 'relative' }}>
        {/* Nav absoluto dentro do hero — some ao rolar */}
        <nav style={{ position: 'absolute', top: 48, left: 0, right: 0, zIndex: 10 }}>
          <div style={{
            maxWidth: 1280, margin: '0 auto',
            padding: '0 clamp(20px, 4vw, 64px)',
            display: 'flex', justifyContent: 'flex-end',
          }}>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
              {['Sobre', 'Tintas', 'Texturas', 'Contato'].map(label => (
                <li key={label}><a href="#" style={{ color: '#141210', textDecoration: 'none' }}>{label}</a></li>
              ))}
            </ul>
          </div>
        </nav>

        <HeroSection
        logo={undefined}
        title={<>Tudo começa<br />com a{' '}
          <span style={{
            background: 'linear-gradient(90deg, #C8102E 0%, #A80D25 60%, #7A0919 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>cor</span>{' '}certa.</>}
        subtitle={<>Linha completa em tintas imobiliárias,<br />automotivas, ferramentas e muito mais.<br />Tudo que sua obra merece, em um só lugar.</>}
        callToAction={{ text: '', href: '#' }}
        backgroundImage="/assets/pexels-tima.jpg"
        contactInfo={{
          website: '@minastintas',
          phone: '(33) 9972-0025',
          address: 'Simonésia, MG',
        }}
      />
      </div>
    </div>
  )
}
