'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function DivisorSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const ruleRef    = useRef<HTMLDivElement>(null)
  const phraseRef  = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(phraseRef.current, { type: 'words' })

      // Estado inicial
      gsap.set(ruleRef.current, { scaleX: 0 })
      gsap.set(split.words, { opacity: 0, y: 16, rotateX: -20 })

      const tl = gsap.timeline({ paused: true })

      tl.to(ruleRef.current, { scaleX: 1, duration: 0.5, ease: 'power3.out' })
      tl.to(
        split.words,
        { opacity: 1, y: 0, rotateX: 0, duration: 0.5, ease: 'back.out(1.6)', stagger: 0.055 },
        '-=0.05'
      )

      // Um único ScrollTrigger: pina a seção e dispara a timeline ao entrar
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=700',
        pin: true,
        pinSpacing: true,
        onEnter: () => tl.play(),
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#141210',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <div className="section-container">
        <div
          ref={ruleRef}
          style={{
            width: '60px',
            height: '2px',
            background: 'var(--color-brand-red)',
            margin: '0 auto 32px',
            transformOrigin: 'center',
          }}
        />
        <p
          ref={phraseRef}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            color: '#fff',
            maxWidth: '880px',
            margin: '0 auto',
            perspective: '800px',
          }}
        >
          Do acabamento fino à proteção total.{' '}
          Temos tudo que o seu projeto precisa.
        </p>
      </div>
    </section>
  )
}
