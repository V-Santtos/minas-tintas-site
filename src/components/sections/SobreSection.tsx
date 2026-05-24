'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { prefix: '+', end: 10,  suffix: '',     lbl: 'marcas trabalhando juntas' },
  { prefix: '+', end: 2,   suffix: ' mil', lbl: 'clientes atendidos' },
  { prefix: '+', end: 500, suffix: '',     lbl: 'variedades de tintas e acabamentos' },
]

export default function SobreSection() {
  const sectionRef   = useRef<HTMLElement>(null)
  const imageRef     = useRef<HTMLDivElement>(null)
  const eyebrowRef   = useRef<HTMLSpanElement>(null)
  const titleRef     = useRef<HTMLHeadingElement>(null)
  const paraRef      = useRef<HTMLParagraphElement>(null)
  const statsWrapRef = useRef<HTMLDivElement>(null)
  const counterRefs  = useRef<(HTMLSpanElement | null)[]>([null, null, null])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0, x: -60, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: imageRef.current, start: 'top 82%' },
      })

      gsap.from([eyebrowRef.current, titleRef.current, paraRef.current], {
        opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: eyebrowRef.current, start: 'top 82%' },
      })

      gsap.from(statsWrapRef.current, {
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: statsWrapRef.current, start: 'top 90%' },
      })

      stats.forEach(({ prefix, end, suffix }, i) => {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: end,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => {
            const el = counterRefs.current[i]
            if (el) el.textContent = prefix + Math.round(obj.val) + suffix
          },
          scrollTrigger: { trigger: statsWrapRef.current, start: 'top 90%', once: true },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="sobre" className="section-mobile-pad" style={{ backgroundColor: '#F7F5F2', padding: '120px 0' }}>
      <div className="section-container sobre-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'center',
      }}>

        <div ref={imageRef} style={{ position: 'relative', aspectRatio: '4/5', borderRadius: '12px', overflow: 'hidden', background: '#C8C4BF' }}>
          <span style={{
            position: 'absolute', top: '20px', left: '20px', zIndex: 1,
            background: 'rgba(20,18,16,0.85)', color: '#fff',
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', padding: '8px 12px', borderRadius: '4px',
          }}>
            Loja Simonésia
          </span>
          <Image
            src="/assets/foto-oficial.png"
            alt="Interior da loja Minas Tintas em Simonésia, MG"
            fill
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(247,245,242,0.6) 0%, transparent 55%)',
            pointerEvents: 'none',
          }} />
        </div>

        <div>
          <span ref={eyebrowRef} className="eyebrow">Quem somos</span>
          <h2 ref={titleRef} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.015em',
            color: 'var(--color-brand-dark)',
            margin: 0,
          }}>
            Dois anos colorindo<br />Simonésia e região.
          </h2>
          <p ref={paraRef} style={{ fontSize: '16px', lineHeight: 1.65, color: '#5C5753', marginTop: '24px', maxWidth: '480px' }}>
            Servindo quem constrói, reforma e cuida. Variedade,
            qualidade e atendimento especializado em um só lugar
            — do interior de Minas para toda a região.
          </p>

          <div ref={statsWrapRef} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
            marginTop: '56px',
            paddingTop: '32px',
            borderTop: '1px solid #E2DED9',
          }}>
            {stats.map((s, i) => (
              <div key={s.lbl}>
                <span
                  ref={(el) => { counterRefs.current[i] = el }}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 3vw, 36px)',
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-brand-dark)',
                  }}
                >
                  {s.prefix}0{s.suffix}
                </span>
                <span style={{ display: 'block', fontSize: '13px', color: '#9C9894', marginTop: '8px', lineHeight: 1.45 }}>
                  {s.lbl}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
