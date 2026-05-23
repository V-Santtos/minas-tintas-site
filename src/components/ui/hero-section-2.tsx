'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { motion, type Variants, type Transition } from 'framer-motion'

const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
  const icons = {
    website: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" style={{ color: '#141210' }}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#141210' }} className="h-5 w-5">
        <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1 2.9 1.2 3.1c.1.2 2 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4s-.3-.2-.6-.3z" />
        <path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4h.1c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3zM12 21.9c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.6-3.4-1.6-5.3C2 6.6 6.5 2.1 12 2.1S22 6.6 22 12c0 5.4-4.5 9.9-10 9.9z" />
      </svg>
    ),
    address: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" style={{ color: '#141210' }}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  }
  return <div className="mr-2 flex-shrink-0">{icons[type]}</div>
}

interface HeroSectionProps {
  className?: string
  logo?: { url: string; alt: string }
  title: React.ReactNode
  subtitle: React.ReactNode
  callToAction: { text: string; href: string }
  backgroundImage: string
  contactInfo: { website: string; phone: string; address: string }
}

const itemTransition: Transition = { duration: 0.5, ease: 'easeOut' }

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: itemTransition },
}

const WIPE_INITIAL = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
const WIPE_FINAL   = 'polygon(25% 0, 100% 0, 100% 100%, 12% 100%)'
const EASE_WIPE    = [0.76, 0, 0.24, 1] as const
const EASE_STRIPE  = [0.33, 1, 0.68, 1] as const

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, title, subtitle, callToAction, backgroundImage, contactInfo }, ref) => {
    return (
      <motion.section
        ref={ref}
        className={cn(
          'relative flex w-full flex-col overflow-hidden md:flex-row md:min-h-screen',
          className,
        )}
        style={{ backgroundColor: '#F7F5F2', color: '#141210' }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex w-full flex-col justify-between p-8 pt-24 md:w-1/2 md:p-12 md:pt-36 md:pb-20 lg:w-3/5 lg:p-16 lg:pt-64 lg:pb-60">
          <div>
            {logo && (
              <motion.header className="hidden md:block mb-12" variants={itemVariants}>
                <img src={logo.url} alt={logo.alt} className="h-12" />
              </motion.header>
            )}
            <motion.main variants={containerVariants}>
              <motion.h1
                className="text-5xl leading-tight md:text-6xl"
                style={{ color: '#141210', fontFamily: 'Anton, sans-serif', fontWeight: 400 }}
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div className="my-6 h-1 w-20" style={{ backgroundColor: '#C8102E' }} variants={itemVariants} />
              <motion.p className="mb-8 max-w-md text-base" style={{ color: '#5C5753' }} variants={itemVariants}>
                {subtitle}
              </motion.p>
              {callToAction.text && (
                <motion.a href={callToAction.href} className="text-lg font-bold tracking-widest transition-colors" style={{ color: '#C8102E' }} variants={itemVariants}>
                  {callToAction.text}
                </motion.a>
              )}
            </motion.main>
          </div>

          <motion.footer className="hidden md:block mt-12 w-full" variants={itemVariants}>
            <div className="hidden md:flex md:flex-wrap md:gap-[110px] text-xs" style={{ color: '#5C5753', transform: 'scale(1.15)', transformOrigin: 'left center' }}>
              <a href="https://instagram.com/minastintas" target="_blank" rel="noopener" className="flex items-center" style={{ color: 'inherit', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}><InfoIcon type="website" /><span>{contactInfo.website}</span></a>
              <a href="https://wa.me/553399720025" target="_blank" rel="noopener" className="flex items-center" style={{ color: 'inherit', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}><InfoIcon type="phone" /><span>{contactInfo.phone}</span></a>
              <div className="flex items-center"><InfoIcon type="address" /><span>{contactInfo.address}</span></div>
            </div>
          </motion.footer>
        </div>

        <div className="relative w-full min-h-[300px] ml-20 -mt-10 md:ml-0 md:w-1/2 md:my-[168px] lg:w-2/5 overflow-hidden">
          {/* Filhos: mesmo clip-path da foto + translateX → tira diagonal de 15px cada */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: -45 }}
            transition={{ duration: 0.8, ease: EASE_STRIPE, delay: 0.5 }}
            style={{ position: 'absolute', inset: 0, background: '#141210', clipPath: WIPE_FINAL }}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: -30 }}
            transition={{ duration: 0.8, ease: EASE_STRIPE, delay: 0.2 }}
            style={{ position: 'absolute', inset: 0, background: '#C8102E', clipPath: WIPE_FINAL }}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: -15 }}
            transition={{ duration: 0.8, ease: EASE_STRIPE, delay: 0.35 }}
            style={{ position: 'absolute', inset: 0, background: '#EFECE8', clipPath: WIPE_FINAL }}
          />
          {/* Card principal: wipe diagonal */}
          <motion.div
            initial={{ clipPath: WIPE_INITIAL }}
            animate={{ clipPath: WIPE_FINAL }}
            transition={{ duration: 1.2, ease: EASE_WIPE }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <div
              className="hero-photo"
              style={{ position: 'absolute', inset: 0, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
            />
          </motion.div>
        </div>
      </motion.section>
    )
  },
)

HeroSection.displayName = 'HeroSection'
export { HeroSection }
