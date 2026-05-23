'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TEXTURAS } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function TexturasSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const eyebrowRef  = useRef<HTMLSpanElement>(null)
  const titleRef    = useRef<HTMLHeadingElement>(null)
  const [activeStrip, setActiveStrip] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([eyebrowRef.current, titleRef.current], {
        opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: eyebrowRef.current, start: 'top 82%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="texturas" className="section-mobile-pad" style={{ backgroundColor: '#EFECE8', paddingTop: '120px' }}>

      <div className="section-container" style={{ paddingBottom: '70px', textAlign: 'center' }}>
        <span ref={eyebrowRef} className="eyebrow">Texturas Decorativas</span>
        <h2 ref={titleRef} style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 600,
          lineHeight: 1.15,
          letterSpacing: '-0.015em',
          margin: 0,
        }}>
          Texturas. Cada parede, uma identidade.
        </h2>
      </div>

      <div className="texturas-flex" style={{
        display: 'flex',
        width: '100%',
        height: '80vh',
        minHeight: '520px',
        maxHeight: '760px',
      }}>
        {TEXTURAS.map((t, i) => (
          <div
            key={t.name}
            className={`textura-strip${activeStrip === i ? ' textura-strip--active' : activeStrip !== null ? ' textura-strip--shrunk' : ''}`}
            onClick={() => setActiveStrip(prev => prev === i ? null : i)}
            style={{
              position: 'relative',
              flex: 1,
              display: 'flex',
              alignItems: 'flex-end',
              overflow: 'hidden',
              cursor: 'default',
            }}
          >
            {/* Fundo: foto real em tile (proporção original) ou gradiente fallback */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: t.image ? `url(${t.image})` : t.grad,
              backgroundSize: t.image ? (t.bgSize ?? '420px auto') : 'cover',
              backgroundRepeat: t.image ? 'repeat' : 'no-repeat',
              backgroundPosition: 'center top',
            }} />

            {/* Gradiente escuro no topo — legibilidade do número e hex */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 35%)',
              pointerEvents: 'none',
            }} />

            {/* Gradiente escuro na base — legibilidade do label */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 40%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Número */}
            <span style={{
              position: 'absolute', top: '22px', left: '22px',
              fontFamily: 'var(--font-display)',
              fontSize: '18px', fontWeight: 600,
              color: '#fff', opacity: 0.9,
              zIndex: 2,
            }}>
              {i + 1}
            </span>


            {/* Label */}
            <div style={{
              position: 'relative', zIndex: 2,
              padding: '16px 18px', width: '100%',
              fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#fff',
            }}>
              {t.name}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
