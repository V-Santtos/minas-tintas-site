'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1 2.9 1.2 3.1c.1.2 2 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4s-.3-.2-.6-.3z"/>
    <path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4h.1c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3zM12 21.9c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.6-3.4-1.6-5.3C2 6.6 6.5 2.1 12 2.1S22 6.6 22 12c0 5.4-4.5 9.9-10 9.9z"/>
  </svg>
)

const INFO_ITEMS = [
  { label: 'Endereço',                value: 'Av. Maria Alves de Abreu, 248-B\nBom Sucesso, Simonésia – MG' },
  { label: 'Horário de Funcionamento', value: 'Seg – Sex: 8h às 18h\nSábado: 8h às 13h' },
  { label: 'Telefone / WhatsApp',      value: '(33) 9972-0025', href: 'https://wa.me/553399720025' },
  { label: 'Instagram',                value: '@minastintas',   href: 'https://instagram.com/minastintas' },
]

export default function ContatoSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const eyebrowRef  = useRef<HTMLSpanElement>(null)
  const titleRef    = useRef<HTMLHeadingElement>(null)
  const cardRef     = useRef<HTMLDivElement>(null)
  const footerRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([eyebrowRef.current, titleRef.current], {
        opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: eyebrowRef.current, start: 'top 82%' },
      })

      gsap.from(cardRef.current, {
        opacity: 0, y: 32, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 85%' },
      })

      gsap.from(footerRef.current!.children, {
        opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contato"
      style={{
        backgroundColor: '#141210',
        color: '#fff',
        paddingTop: '120px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Conteúdo central */}
      <div className="section-container" style={{ flex: 1, paddingBottom: '80px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <span ref={eyebrowRef} className="eyebrow" style={{ color: 'var(--color-brand-red)' }}>
            Venha nos visitar
          </span>
          <h2 ref={titleRef} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4.4vw, 52px)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#fff',
            margin: '0 0 48px',
          }}>
            Estamos em Simonésia<br />esperando por você.
          </h2>

          {/* Card WhatsApp */}
          <div ref={cardRef} style={{
            background: '#1E1B18',
            border: '1px solid #2E2A26',
            borderRadius: '16px',
            padding: '36px 40px',
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px', fontWeight: 400,
              lineHeight: 1.6, color: '#C8C4BF',
              margin: '0 0 28px',
            }}>
              Tem dúvida, quer orçamento ou só quer conversar? É só chamar.
            </p>
            <a
              href="https://wa.me/553399720025"
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'var(--color-whatsapp)', color: '#fff',
                padding: '16px 32px', borderRadius: '10px',
                fontWeight: 600, fontSize: '15px',
              }}
            >
              <WhatsAppIcon />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé da seção */}
      <div
        ref={footerRef}
        className="contato-info-grid"
        style={{
          borderTop: '1px solid #2E2A26',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        {INFO_ITEMS.map((item) => (
          <div key={item.label} className="contato-info-cell" style={{ padding: '36px 40px', borderRight: '1px solid #2E2A26' }}>
            <span style={{
              display: 'block', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#736F6B', marginBottom: '10px',
            }}>
              {item.label}
            </span>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener"
                style={{ fontSize: '14px', lineHeight: 1.75, color: '#9C9894', textDecoration: 'none' }}>
                {item.value}
              </a>
            ) : (
              <p style={{ fontSize: '14px', lineHeight: 1.75, color: '#9C9894', whiteSpace: 'pre-line', margin: 0 }}>
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
