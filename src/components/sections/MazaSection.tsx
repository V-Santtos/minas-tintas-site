'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MAZA_PRODUCTS } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function MazaSection() {
  const doubled    = [...MAZA_PRODUCTS, ...MAZA_PRODUCTS]
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLSpanElement>(null)
  const titleRef   = useRef<HTMLHeadingElement>(null)
  const paraRef    = useRef<HTMLParagraphElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)
  const tweenRef   = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // scrollWidth/2 = largura exata do conteúdo original (conteúdo é duplicado)
    gsap.set(track, { x: 0 })
    tweenRef.current = gsap.to(track, {
      x: -track.scrollWidth / 2,
      duration: 28,
      ease: 'none',
      repeat: -1,
    })

    const ctx = gsap.context(() => {
      gsap.from([eyebrowRef.current, titleRef.current, paraRef.current], {
        opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: eyebrowRef.current, start: 'top 82%' },
      })
    }, sectionRef)

    return () => {
      tweenRef.current?.kill()
      ctx.revert()
    }
  }, [])

  const pauseScroll = () => tweenRef.current?.pause()
  const resumeScroll = () => tweenRef.current?.resume()

  const scaleUp   = (e: React.MouseEvent<HTMLElement>) =>
    gsap.to(e.currentTarget, { scale: 1.06, duration: 0.25, ease: 'power2.out' })
  const scaleDown = (e: React.MouseEvent<HTMLElement>) =>
    gsap.to(e.currentTarget, { scale: 1, duration: 0.25, ease: 'power2.out' })

  return (
    <section ref={sectionRef} id="tintas" style={{ backgroundColor: '#FFFFFF', padding: '120px 0 180px', overflow: 'hidden' }}>

      <div className="section-container" style={{ marginBottom: '64px' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <span ref={eyebrowRef} className="eyebrow">Linha Imobiliária</span>
          <h2 ref={titleRef} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: '-0.015em',
            margin: 0,
          }}>
            Conheça a Maza —<br />nossa linha principal.
          </h2>
          <p ref={paraRef} style={{
            fontSize: 'clamp(15px, 1.2vw, 18px)',
            lineHeight: 1.65,
            color: '#5C5753',
            maxWidth: '600px',
            margin: '20px auto 0',
          }}>
            Cobertura superior, pigmentação intensa e durabilidade comprovada.
            Do imobiliário ao automotivo, qualidade que se vê na primeira demão.
          </p>
        </div>
      </div>

      <div
        onMouseEnter={pauseScroll}
        onMouseLeave={resumeScroll}
        style={{
          overflow: 'hidden',
          padding: '28px 0',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div
          ref={trackRef}
          style={{ display: 'flex', gap: '20px', width: 'max-content' }}
        >
          {doubled.map((p, i) => (
            <article
              key={i}
              onMouseEnter={scaleUp}
              onMouseLeave={scaleDown}
              style={{
                position: 'relative',
                flex: '0 0 280px',
                width: '280px',
                height: '360px',
                cursor: 'pointer',
              }}
            >
              {/* inner clip: border-radius + overflow aqui, não no article */}
              <div style={{
                position: 'absolute', inset: 0,
                borderRadius: '10px',
                overflow: 'hidden',
                background: '#DDD9D5',
                display: 'flex',
                alignItems: 'flex-end',
              }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '24px 24px 60px',
                    }}
                  />
                ) : (
                <div style={{
                  width: '130px',
                  aspectRatio: '3/4',
                  borderRadius: '6px 6px 4px 4px',
                  position: 'relative',
                  boxShadow: 'inset -14px 0 24px rgba(0,0,0,0.18), inset 14px 0 18px rgba(255,255,255,0.06), 0 10px 20px rgba(0,0,0,0.18)',
                  background: `linear-gradient(180deg, ${p.top} 0%, ${p.bot} 100%)`,
                }}>
                  <div style={{
                    position: 'absolute', left: '-8px', right: '-8px', top: '-6px',
                    height: '12px',
                    background: 'linear-gradient(180deg, #2a2725, #1a1714 60%, #0d0c0b)',
                    borderRadius: '50% 50% 50% 50% / 40%',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  }} />
                  <div style={{
                    position: 'absolute', left: '50%', bottom: '22%',
                    transform: 'translateX(-50%)',
                    width: '70%', height: '30%',
                    background: '#fff',
                    borderRadius: '2px',
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)',
                  }} />
                  <div style={{
                    position: 'absolute', left: '8%', right: '8%', bottom: '28%',
                    height: '4px',
                    background: p.stripe,
                    zIndex: 2,
                  }} />
                </div>
                )}
              </div>

              <div style={{
                position: 'relative', zIndex: 2, width: '100%',
                padding: '18px 18px 16px',
                background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.04))',
                display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--color-brand-dark)', lineHeight: 1.35, maxWidth: '70%',
                }}>
                  {p.name}
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px', fontWeight: 600,
                  color: '#9C9894', letterSpacing: '0.1em',
                }}>
                  {p.tag}
                </span>
              </div>
              </div>{/* /inner clip */}
            </article>
          ))}
        </div>
      </div>

    </section>
  )
}
