import { motion } from 'framer-motion'

const VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095810_ecea3dd2-fc5e-4e41-8696-4219290b6589.mp4'

const metrics = [
  { value: '8.98', label: 'BCA CGPA' },
  { value: '5+',   label: 'Certifications' },
  { value: '2+',   label: 'Real World Projects' },
]

export default function MetricsSection() {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col overflow-hidden">
      <video
        src={VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Subtitle pinned to top */}
      <motion.p
        className="relative z-10 text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase text-center pt-10 sm:pt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Skills &amp; Expertise
      </motion.p>

      {/* Spacer pushes metrics to bottom */}
      <div className="flex-1 min-h-[80px]" />

      {/* Metrics row — 2-col grid on mobile, single row on desktop */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-16 pb-12 sm:pb-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:flex sm:flex-row sm:items-end sm:justify-center sm:gap-10 md:gap-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className={`flex flex-col sm:flex-1 ${i === 2 ? 'sm:ml-12 md:ml-20' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span
                className="text-white font-light tracking-[-0.04em] leading-none text-[38px] sm:text-[clamp(32px,5vw,72px)] md:text-[clamp(40px,7vw,88px)]"
              >
                {m.value}
              </span>
              <span className="text-white/40 text-[11px] sm:text-[13px] mt-2.5 sm:mt-3 tracking-wide leading-snug">
                {m.label}
              </span>
            </motion.div>
          ))}

          {/* AES-256 split */}
          <motion.div
            className="flex flex-col sm:flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span
              className="text-white font-light tracking-[-0.04em] leading-[0.9] text-[38px] sm:text-[clamp(32px,5vw,72px)] md:text-[clamp(40px,7vw,88px)]"
            >
              AES<br />256
            </span>
            <span className="text-white/40 text-[11px] sm:text-[13px] mt-2.5 sm:mt-3 tracking-wide leading-snug">
              Encryption Standard
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
