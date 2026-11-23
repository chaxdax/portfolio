import { motion } from 'framer-motion'

const VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095750_32a52ce0-2005-45c9-9093-41f03fde9530.mp4'

const features = [
  {
    title: 'AES-256 Encryption',
    desc: 'Client-side encryption for every file before it leaves the browser.',
  },
  {
    title: 'Blockchain Ledger',
    desc: 'SHA-256 chained audit log — tamper-evident record of every event.',
  },
  {
    title: 'IP Geofencing',
    desc: 'Firewall blocking access from unauthorised geographic regions.',
  },
  {
    title: 'Forensic Dashboard',
    desc: 'Clickstream tracking, anomaly alerts, and emergency lockdown.',
  },
]

export default function TechnologySection() {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between overflow-hidden">
      {/* Video background */}
      <video
        src={VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-6 sm:px-12 md:px-16 py-16 sm:py-20 justify-between">
        {/* Top area */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Left heading */}
          <motion.h2
            className="text-white font-light leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(36px, 8vw, 72px)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Auth
            <br />
            PrivacyChain
          </motion.h2>

          {/* Right paragraph */}
          <motion.p
            className="text-white/50 text-[13px] sm:text-[15px] leading-relaxed max-w-sm md:text-right md:pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            A secure decentralised file vault built with React, TypeScript, Python &amp; Flask. Blockchain-inspired audit logging with AES-256 encryption and an IP-geofencing firewall.{' '}
            <a
              href="https://github.com/chaxdax/AuthPrivacyChain_V2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline underline-offset-2 hover:text-white transition-colors block sm:inline mt-2 sm:mt-0"
            >
              View on GitHub ↗
            </a>
          </motion.p>
        </div>

        {/* Spacer */}
        <div className="h-16 sm:h-24" />

        {/* Bottom grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-white text-[14px] sm:text-[16px] font-normal mb-1.5">{f.title}</p>
              <p className="text-white/40 text-[12px] sm:text-[14px] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
