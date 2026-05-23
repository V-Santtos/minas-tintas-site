'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="mr-2 h-5 w-5 flex-shrink-0" style={{ color: 'var(--color-brand-red)' }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="mr-2 h-5 w-5 flex-shrink-0" style={{ color: 'var(--color-brand-red)' }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const IconPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="mr-2 h-5 w-5 flex-shrink-0" style={{ color: 'var(--color-brand-red)' }}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const rightRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hi', {
        y: 20, opacity: 0, duration: 0.5,
        ease: 'power2.out', stagger: 0.15, delay: 0.2,
      })
      gsap.fromTo(
        rightRef.current,
        { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
        { clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)', duration: 1.2, ease: 'circOut', delay: 0.45 }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    // Estrutura idêntica ao componente de referência (ravikatiyar/hero-section-2)
    // sem minHeight explícito — altura determinada pelo conteúdo do left panel
    <section
      ref={sectionRef}
      id="top"
      className="hero-section relative flex w-full min-h-screen flex-col overflow-hidden md:flex-row"
      style={{ backgroundColor: 'var(--color-brand-offwhite)', color: 'var(--color-brand-dark)' }}
    >

      {/* Left Side */}
      <div className="hero-left-panel flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">

        {/* Top group: logo + main content */}
        <div>
          <div>
            <h1 className="hi hero-title text-4xl font-bold leading-tight md:text-5xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              Tudo começa com<br />a <span style={{ color: 'var(--color-brand-red)' }}>cor</span> certa.
            </h1>

            <div className="hi my-6 h-1 w-20"
              style={{ backgroundColor: 'var(--color-brand-red)' }} />

            <p className="hi hero-subtitle mb-8 max-w-md text-base"
              style={{ color: '#5C5753', lineHeight: 1.7 }}>
              Linha completa em tintas imobiliárias, automotivas, ferramentas
              e muito mais. Tudo que sua obra merece, em um só lugar.
            </p>

            <a href="#tintas"
              className="hi text-lg font-bold tracking-widest transition-colors"
              style={{ color: 'var(--color-brand-red)' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              VER PRODUTOS
            </a>
          </div>
        </div>

        {/* Bottom group: contact footer */}
        <footer className="hi mt-12 w-full">
          <div className="hero-contact flex items-center justify-between"
            style={{ color: '#5C5753' }}>
            <a href="https://instagram.com/minastintas" target="_blank" rel="noopener"
              className="flex items-center">
              <IconInstagram /> @minastintas
            </a>
            <a href="https://wa.me/553399720025" target="_blank" rel="noopener"
              className="flex items-center">
              <IconPhone /> (33) 9972-0025
            </a>
            <span className="flex items-center">
              <IconPin /> Simonésia, MG
            </span>
          </div>
        </footer>
      </div>

      {/* Right Side: imagem com clip-path — flex child estica via align-items stretch */}
      <div
        ref={rightRef}
        className="hero-right-panel hero-image-panel w-full min-h-[300px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
        style={{
          backgroundImage: 'url(/assets/pexels-tima.jpg)',
        }}
      />
    </section>
  )
}
