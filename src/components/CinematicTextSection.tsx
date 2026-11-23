import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion'

const VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_092455_089c54f8-3b03-4966-9df1-e9746063d0ef.mp4'

export default function CinematicTextSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 15,
    damping: 32,
    mass: 1.8,
  })

  const yScaleValue = useTransform(springProgress, [0, 1], [60, -120])
  const opacity = useTransform(springProgress, [0.3, 0.5], [0, 1])

  const transform = useMotionTemplate`rotateX(24deg) translateY(${yScaleValue}px) translateZ(15px)`

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        src={VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '180px',
          background: 'linear-gradient(to bottom, #010103, transparent)',
        }}
      />

      {/* 3D Text */}
      <div className="relative z-20 max-w-5xl w-full px-4" style={{ perspective: '400px' }}>
        <motion.p
          className="font-sans font-normal text-white leading-[1.35] tracking-[-0.02em] select-none px-4 sm:px-12 text-center"
          style={{
            fontSize: 'clamp(18px, 4.5vw, 42px)',
            transform,
            opacity,
          }}
        >
          A Computer Applications graduate combining formal forensic training with hands-on cloud security engineering. Every log becomes evidence. Every signal becomes structured intelligence. Building secure systems that are tamper-evident, traceable, and resilient — from blockchain audit chains to forensic dashboards.
        </motion.p>
      </div>
    </section>
  )
}
