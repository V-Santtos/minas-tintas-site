'use client'

import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const LINKS = [
  { label: 'Início',   href: '#inicio',   id: 'inicio'   },
  { label: 'Tintas',   href: '#tintas',   id: 'tintas'   },
  { label: 'Texturas', href: '#texturas', id: 'texturas' },
  { label: 'Sobre',    href: '#sobre',    id: 'sobre'    },
  { label: 'Contato',  href: '#contato',  id: 'contato'  },
]

const RED_GRADIENT = 'linear-gradient(90deg, #C8102E 0%, #A80D25 60%, #7A0919 100%)'

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const highlighted = hovered ?? 'inicio'

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <motion.nav
        className="hidden md:block"
        style={{ position: 'absolute', top: '160px', left: '30%', zIndex: 10 }}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
        onMouseLeave={() => setHovered(null)}
      >
        <LayoutGroup>
          <ul style={{
            display: 'flex', gap: '3.5rem', listStyle: 'none',
            fontSize: '1.25rem', fontWeight: 500, margin: 0, padding: 0,
          }}>
            {LINKS.map((link) => (
              <li
                key={link.id}
                style={{ position: 'relative', paddingBottom: '6px' }}
                onMouseEnter={() => setHovered(link.id)}
              >
                <a
                  href={link.href}
                  style={{
                    color: hovered === link.id ? 'var(--color-brand-red)' : 'var(--color-brand-dark)',
                    transition: 'color 0.2s',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>

                {highlighted === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      height: '2px',
                      borderRadius: '2px',
                      background: hovered ? '#141210' : RED_GRADIENT,
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </LayoutGroup>
      </motion.nav>

      {/* ── Mobile Top Bar ── */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          backgroundColor: '#F7F5F2',
          borderBottom: menuOpen ? 'none' : '1px solid #E2DED9',
        }}
      >
        {/* Barra: logo + hamburger */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
        }}>
          <a href="#top" onClick={() => setMenuOpen(false)}>
            <Image
              src="/assets/logo.png"
              alt="Minas Tintas"
              width={120}
              height={36}
              style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
              priority
            />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: 'var(--color-brand-dark)', lineHeight: 0 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Menu deslizante */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ backgroundColor: '#141210', overflow: 'hidden' }}
            >
              <nav style={{ padding: '24px 24px 36px' }}>
                {LINKS.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.28, ease: 'easeOut' }}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.9rem',
                      fontWeight: 600,
                      color: '#fff',
                      padding: '14px 0',
                      borderBottom: '1px solid #2E2A26',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
