import Navbar               from '@/components/Navbar'
import { HeroSection }      from '@/components/ui/hero-section-2'
import BrandsSlider         from '@/components/sections/BrandsSlider'
import SobreSection    from '@/components/sections/SobreSection'
import MazaSection     from '@/components/sections/MazaSection'
import DivisorSection  from '@/components/sections/DivisorSection'
import TexturasSection from '@/components/sections/TexturasSection'
import LinhasSection   from '@/components/sections/LinhasSection'
import ContatoSection  from '@/components/sections/ContatoSection'
import Footer          from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        <HeroSection
        logo={{ url: '/assets/logo.png', alt: 'Minas Tintas' }}
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
      <BrandsSlider />
      <SobreSection />
      <MazaSection />
      <DivisorSection />
      <TexturasSection />
      <LinhasSection />
      <ContatoSection />
      <Footer />
    </>
  )
}
