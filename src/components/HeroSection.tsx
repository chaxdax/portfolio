import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ScrambleIn from './ScrambleIn'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_083515_290e5a10-0b95-41af-a5e2-32b6389baa4d.mp4'

interface HeroSectionProps {
  entranceComplete: boolean
}

export default function HeroSection({ entranceComplete }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const pendingSeekRef = useRef<number | null>(null)
  const isSeeking = useRef(false)
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // On mobile: just autoplay the video — no scrubbing needed
    if (isMobile) {
      video.play().catch(() => {})
      return
    }

    // Desktop: map absolute mouse X position → video time
    const handleMouseMove = (e: MouseEvent) => {
      if (!video.duration) return
      const progress = Math.max(0, Math.min(1, e.clientX / window.innerWidth))
      const newTime = progress * video.duration

      if (isSeeking.current) {
        pendingSeekRef.current = newTime
        return
      }
      isSeeking.current = true
      video.currentTime = newTime
    }

    const handleSeeked = () => {
      if (pendingSeekRef.current !== null) {
        const target = pendingSeekRef.current
        pendingSeekRef.current = null
        video.currentTime = target
      } else {
        isSeeking.current = false
      }
    }

    video.addEventListener('seeked', handleSeeked)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      video.removeEventListener('seeked', handleSeeked)
    }
  }, [])

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Video background — scrubbed by mouse on desktop, autoplays on mobile */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        preload="auto"
        muted
        autoPlay={isMobile}
        loop={isMobile}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.05,
          zIndex: 1,
        }}
      />

      {/* Background watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ zIndex: 2, transform: 'translateY(50px)' }}
      >
        <span
          style={{
            fontFamily: '"Anton SC", sans-serif',
            fontSize: 'clamp(80px, 22vw, 420px)',
            textTransform: 'uppercase',
            letterSpacing: '-4px',
            opacity: 0.10,
            background: 'radial-gradient(circle, rgba(142,127,148,0) 0%, #8E7F94 70%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
          }}
        >
          CYBERSECURITY
        </span>
      </div>

      {/* Content */}
      <motion.div
        className="relative flex flex-col flex-1 px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12"
        style={{ zIndex: 3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: entranceComplete ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Left column — centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
            <h1
              className="text-white font-light leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(40px, 10vw, 100px)' }}
            >
              <ScrambleIn text="Chandan" delay={200} triggered={entranceComplete} />
              <br />
              <ScrambleIn text="Nagaraju" delay={500} triggered={entranceComplete} />
            </h1>

            {/* Status badge */}
            <motion.div
              className="flex items-center gap-2 justify-center md:justify-start"
              initial={{ opacity: 0, y: 25 }}
              animate={entranceComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.215, 0.61, 0.355, 1.0] }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase">
                Open to Work
              </span>
            </motion.div>

            {/* Role + location */}
            <motion.div
              className="flex flex-col gap-1.5 items-center md:items-start"
              initial={{ opacity: 0, y: 25 }}
              animate={entranceComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.215, 0.61, 0.355, 1.0] }}
            >
              <p className="text-white text-[14px] sm:text-[16px] font-normal tracking-tight text-center md:text-left">
                Cyber Security &amp; Digital Forensics
              </p>
              <p className="text-white/40 text-[12px] sm:text-[13px] tracking-wide flex items-center gap-1.5">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0C2.79 0 1 1.79 1 4c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 5 2.5a1.5 1.5 0 0 1 0 3z" fill="currentColor"/>
                </svg>
                Hassan, Karnataka · India
              </p>
            </motion.div>

            {/* Speciality tags */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center md:justify-start"
              initial={{ opacity: 0, y: 25 }}
              animate={entranceComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.215, 0.61, 0.355, 1.0] }}
            >
              {['Cloud Security', 'DFIR', 'Blockchain', 'Incident Response'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-white/15 text-white/55 text-[11px] sm:text-[12px] tracking-wide backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right heading — hidden on mobile, shown on desktop */}
          <h1
            className="hidden md:block text-white font-light leading-[0.95] tracking-[-0.03em] text-right"
            style={{ fontSize: 'clamp(40px, 10vw, 100px)' }}
          >
            <ScrambleIn text="Cyber" delay={700} triggered={entranceComplete} />
            <br />
            <ScrambleIn text="Security" delay={1000} triggered={entranceComplete} />
          </h1>
        </div>
      </motion.div>
    </section>
  )
}
