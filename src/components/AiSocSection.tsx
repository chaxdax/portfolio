import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095810_ecea3dd2-fc5e-4e41-8696-4219290b6589.mp4'

const tiers = [
  {
    id: 'T1',
    label: 'Tier 1',
    name: 'Heuristic Signatures',
    desc: 'Deterministic rule-based detection for known attack patterns — SSH brute-force, SQLi, privilege escalation.',
  },
  {
    id: 'T2',
    label: 'Tier 2',
    name: 'Isolation Forest',
    desc: 'Unsupervised ML anomaly detection (Liu et al. 2008) over 13-dimensional behavioral feature vectors.',
  },
  {
    id: 'T3',
    label: 'Tier 3',
    name: 'Threat Classifier',
    desc: 'Supervised multi-class Random Forest model mapping telemetry to MITRE ATT&CK tactics.',
  },
]

const stats = [
  { value: '3-Tier', label: 'Detection Stack' },
  { value: 'XAI', label: 'TreeSHAP Explainability' },
  { value: '4', label: 'Attack Simulators' },
  { value: 'GenAI', label: 'Copilot Advisor' },
]

const terminalLines = [
  { prefix: '$', text: 'python3 run_phase2.py', color: 'text-white/70' },
  { prefix: '>', text: '[INFO] Training Isolation Forest...', color: 'text-white/40' },
  { prefix: '>', text: '[INFO] Threat Classifier accuracy: 97.3%', color: 'text-emerald-400' },
  { prefix: '>', text: '[ALERT] SSH Brute-Force detected — T1110.001', color: 'text-red-400' },
  { prefix: '>', text: '[SHAP] Top feature: failed_login_rate=0.89', color: 'text-amber-400' },
  { prefix: '$', text: '_', color: 'text-white/70' },
]

export default function AiSocSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeTier, setActiveTier] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Horizontal slide-in for the left panel
  const xLeft = useTransform(scrollYProgress, [0.05, 0.3], [-80, 0])
  const xRight = useTransform(scrollYProgress, [0.05, 0.3], [80, 0])
  const opacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-black"
      id="ai-soc"
    >
      {/* Subtle video bg — very dark */}
      <div className="absolute inset-0 opacity-20">
        <video
          src={VIDEO}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)',
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-28 sm:py-36">

        {/* Top label row */}
        <motion.div
          className="flex items-center justify-between mb-16 sm:mb-20"
          style={{ opacity }}
        >
          <p className="text-white/30 text-[11px] sm:text-[13px] tracking-[0.25em] uppercase">
            02 — AI-Powered Project
          </p>
          <span className="text-white/20 text-[11px] tracking-[0.15em] uppercase hidden sm:block">
            Cybersecurity Project · 2026
          </span>
        </motion.div>

        {/* Main two-column layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* LEFT — heading + stats */}
          <motion.div
            className="flex flex-col gap-10 lg:w-1/2"
            style={{ x: xLeft, opacity }}
          >
            <div>
              <h2
                className="text-white font-light leading-[0.92] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(36px, 7vw, 72px)' }}
              >
                AI-SOC
                <br />
                <span className="text-white/35">Threat</span>
                <br />
                Detection
              </h2>
              <p className="text-white/45 text-[13px] sm:text-[15px] leading-relaxed max-w-sm">
                An enterprise-grade, ML-driven Security Operations Center platform. Ingests heterogeneous telemetry from Linux, Windows, and web servers — runs it through a 3-tier threat detection engine with full Explainable AI output and a GenAI Copilot advisor.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="text-white text-[22px] sm:text-[28px] font-light tracking-tight leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-white/35 text-[11px] sm:text-[12px] tracking-[0.12em] uppercase">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {['Python', 'FastAPI', 'scikit-learn', 'TreeSHAP', 'SQLite', 'MITRE ATT&CK'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-[11px] sm:text-[12px] text-white/40 border border-white/10 rounded-full tracking-wide"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — terminal + tier cards */}
          <motion.div
            className="flex flex-col gap-6 lg:w-1/2"
            style={{ x: xRight, opacity }}
          >
            {/* Terminal block */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
              {/* Terminal titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <span className="ml-3 text-white/25 text-[11px] tracking-widest">AI-SOC CONSOLE</span>
              </div>
              {/* Lines */}
              <div className="p-5 flex flex-col gap-2 font-mono text-[11px] sm:text-[12px]">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <span className="text-white/20 select-none flex-shrink-0">{line.prefix}</span>
                    <span className={line.color}>{line.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 3-Tier cards (hover to expand) */}
            <div className="flex flex-col gap-2">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.id}
                  className="border border-white/10 rounded-xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  onClick={() => setActiveTier(activeTier === tier.id ? null : tier.id)}
                >
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-4">
                      <span className="text-white/20 text-[11px] tracking-[0.15em] uppercase flex-shrink-0">
                        {tier.label}
                      </span>
                      <span className="text-white text-[13px] sm:text-[15px] font-normal">
                        {tier.name}
                      </span>
                    </div>
                    <motion.span
                      className="text-white/30 text-[18px] flex-shrink-0 leading-none"
                      animate={{ rotate: activeTier === tier.id ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      +
                    </motion.span>
                  </div>
                  <AnimatePresence initial={false}>
                    {activeTier === tier.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-white/40 text-[12px] sm:text-[13px] leading-relaxed border-t border-white/8 pt-3">
                          {tier.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
