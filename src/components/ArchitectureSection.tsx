import { motion } from 'framer-motion'

const certs = [
  { org: 'Loughborough University, UK', name: 'Python Programming Workshop' },
  { org: 'Cisco Networking Academy', name: 'Introduction to Cyber Security' },
  { org: 'OpenLearn, The Open University (UK)', name: 'Digital Forensics' },
  { org: 'Cisco Networking Academy', name: 'Networking Basics' },
  { org: 'Cisco Networking Academy', name: 'Linux Fundamentals' },
]

export default function ArchitectureSection() {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-3xl px-6 py-32 text-center">

        {/* Heading block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-8">
            Certifications
          </p>
          <h2
            className="text-white font-light leading-[1.15] tracking-[-0.02em] mb-10"
            style={{ fontSize: 'clamp(28px, 6vw, 56px)' }}
          >
            Verified. Practical. Applied.
          </h2>
          <p className="text-white/45 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
            Formal credentials from globally recognised institutions, covering Python, cyber security, digital forensics, networking, and Linux fundamentals.
          </p>
        </motion.div>

        {/* Cert cards */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              className="w-full max-w-lg border border-white/10 rounded-lg flex items-center justify-between px-6 py-4 gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="text-white/30 text-[11px] tracking-[0.12em] uppercase text-left leading-snug max-w-[45%]">
                {c.org}
              </span>
              <span className="text-white text-[14px] sm:text-[16px] font-light text-right">
                {c.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-white/40 text-[13px] sm:text-[15px] mb-6 tracking-wide">
            Ready to collaborate?
          </p>
          <a
            href="mailto:chandan.000@icloud.com"
            className="inline-block text-white font-light tracking-[-0.02em] leading-none border-b border-white/20 pb-1 hover:border-white transition-colors duration-300"
            style={{ fontSize: 'clamp(26px, 6vw, 64px)' }}
          >
            GET IN TOUCH
          </a>
          <div className="flex items-center justify-center gap-6 mt-10 text-white/40 text-[13px]">
            <a href="https://linkedin.com/in/chandan-b-n-03b545299" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn ↗</a>
            <span className="text-white/20">|</span>
            <a href="https://github.com/chaxdax" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub ↗</a>
            <span className="text-white/20">|</span>
            <a href="mailto:chandan.000@icloud.com" className="hover:text-white transition-colors">chandan.000@icloud.com</a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
