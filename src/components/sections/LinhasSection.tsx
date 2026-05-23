'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LINHAS } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function LinhasSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const eyebrowRef  = useRef<HTMLSpanElement>(null)
  const titleRef    = useRef<HTMLHeadingElement>(null)

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
    <section ref={sectionRef} className="section-mobile-pad" style={{ backgroundColor: 'var(--color-brand-offwhite)', padding: '120px 0 80px' }}>
      <div className="section-container">

        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <span ref={eyebrowRef} className="eyebrow">Nossas Linhas</span>
          <h2 ref={titleRef} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: '-0.015em',
            margin: 0,
          }}>
            Outras marcas e soluções que você encontra aqui.
          </h2>
        </div>

        <div style={{ marginTop: '72px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {LINHAS.map((l, i) => {
            const isDark    = l.tone === 'dark'
            const textColor = isDark ? '#fff' : 'var(--color-brand-dark)'
            const descColor = isDark ? 'rgba(255,255,255,0.78)' : 'rgba(0,0,0,0.6)'
            const artBg     = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
            const artBorder = isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)'
            const stripes   = isDark
              ? 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 12px, transparent 12px 28px)'
              : 'repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 12px, transparent 12px 28px)'
            const numColor  = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.3)'

            return (
              <article
                key={l.title}
                className="linha-card-inner"
                style={{
                  position: 'sticky',
                  top: `${100 + i * 16}px`,
                  zIndex: i + 1,
                  background: l.bg,
                  color: textColor,
                  width: '100%',
                  minHeight: '80vh',
                  borderRadius: '14px',
                  padding: 'clamp(36px, 5vw, 60px)',
                  display: 'grid',
                  gridTemplateColumns: '55fr 45fr',
                  gap: '48px',
                  alignItems: 'center',
                  overflow: 'hidden',
                  boxShadow: '0 24px 60px rgba(20,18,16,0.18)',
                }}
              >
                {/* Texto */}
                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11px', fontWeight: 600,
                    color: 'var(--color-brand-red)',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    marginBottom: '18px',
                  }}>
                    {l.tag}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 3.4vw, 42px)',
                    fontWeight: 600,
                    lineHeight: 1.15,
                    letterSpacing: '-0.015em',
                    margin: '0 0 20px',
                  }}>
                    {l.title}
                  </h3>
                  <p style={{
                    fontSize: 'clamp(15px, 1.15vw, 17px)',
                    lineHeight: 1.65,
                    maxWidth: '460px',
                    color: descColor,
                    margin: 0,
                  }}>
                    {l.desc}
                  </p>
                </div>

                {/* Arte */}
                <div className="linha-art-panel" style={{
                  height: '100%',
                  minHeight: '380px',
                  background: artBg,
                  border: l.image ? 'none' : artBorder,
                  borderRadius: '12px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  {l.image ? (
                    <Image
                      src={l.image}
                      alt={l.title}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      sizes="45vw"
                    />
                  ) : (
                    <>
                      <div style={{ position: 'absolute', inset: 0, backgroundImage: stripes }} />
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px', fontWeight: 500,
                        letterSpacing: '0.14em', textTransform: 'uppercase',
                        color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                        position: 'relative', zIndex: 1,
                      }}>
                        Foto Produto
                      </span>
                    </>
                  )}
                </div>

                {/* Número */}
                <span style={{
                  position: 'absolute',
                  top: 'clamp(24px, 3vw, 36px)',
                  right: 'clamp(24px, 3vw, 36px)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px', fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: numColor,
                  opacity: 0.4,
                }}>
                  0{i + 1} / 0{LINHAS.length}
                </span>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
