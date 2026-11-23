import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SynapseXLogo from './SynapseXLogo'
import ScrambleText from './ScrambleText'
import SquashHamburger from './SquashHamburger'

interface NavbarProps {
  entranceComplete: boolean
}

export default function Navbar({ entranceComplete }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoverAbout, setHoverAbout] = useState(false)
  const [hoverWork, setHoverWork] = useState(false)
  const [hoverContact, setHoverContact] = useState(false)

  const toggleMenu = () => setMenuOpen((p) => !p)

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const spring = { type: 'spring' as const, stiffness: 350, damping: 28 }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-4 sm:px-6 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: entranceComplete ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* ── Desktop Nav ── */}
      <div className="hidden sm:flex w-full items-center justify-between">
        {/* Left group */}
        <div className="flex items-center gap-2">
          {/* Logo pill */}
          <motion.div
            className={`flex items-center gap-2.5 h-12 px-5 bg-white/15 backdrop-blur-md rounded-[14px] cursor-pointer select-none ${menuOpen ? 'hidden md:flex' : 'flex'}`}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.22)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <SynapseXLogo size={18} className="text-white" />
            <span className="text-white text-[16px] font-medium tracking-tight">Chandan B N</span>
          </motion.div>

          {/* Expanding menu pill */}
          <motion.div
            className="relative h-12 bg-white/15 backdrop-blur-md rounded-[14px] flex items-center overflow-hidden"
            animate={{ width: menuOpen ? 310 : 48 }}
            transition={spring}
          >
            <motion.button
              className={`flex-shrink-0 flex items-center justify-center rounded-[14px] transition-colors ${
                menuOpen
                  ? 'w-9 h-9 rounded-[11px] bg-white/10 hover:bg-white/20 ml-1.5'
                  : 'w-12 h-12'
              }`}
              onClick={toggleMenu}
            >
              <SquashHamburger isOpen={menuOpen} onClick={() => {}} />
            </motion.button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="flex items-center gap-6 ml-4"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    className="text-white/85 hover:text-white text-[16px] font-normal whitespace-nowrap"
                    onMouseEnter={() => setHoverAbout(true)}
                    onMouseLeave={() => setHoverAbout(false)}
                    onClick={() => scrollToId('about')}
                  >
                    <ScrambleText text="About" isHovered={hoverAbout} />
                  </button>
                  <button
                    className="text-white/85 hover:text-white text-[16px] font-normal whitespace-nowrap"
                    onMouseEnter={() => setHoverWork(true)}
                    onMouseLeave={() => setHoverWork(false)}
                    onClick={() => scrollToId('work')}
                  >
                    <ScrambleText text="Work" isHovered={hoverWork} />
                  </button>
                  <button
                    className="text-white/85 hover:text-white text-[16px] font-normal whitespace-nowrap"
                    onMouseEnter={() => setHoverContact(true)}
                    onMouseLeave={() => setHoverContact(false)}
                    onClick={() => scrollToId('contact')}
                  >
                    <ScrambleText text="Contact" isHovered={hoverContact} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Contact button */}
        <motion.a
          href="mailto:chandan.000@icloud.com"
          className="h-12 px-6 bg-white rounded-full text-black text-[15px] font-normal flex items-center gap-2 cursor-pointer no-underline"
          whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
          whileTap={{ scale: 0.97 }}
          onMouseEnter={() => setHoverContact(true)}
          onMouseLeave={() => setHoverContact(false)}
        >
          <ScrambleText text="Get In Touch" isHovered={hoverContact} />
        </motion.a>
      </div>

      {/* ── Mobile Nav ── */}
      <div className="flex sm:hidden w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            className="flex items-center gap-2 h-9 px-3 bg-white/15 backdrop-blur-md rounded-[10px] overflow-hidden"
            animate={{ width: menuOpen ? 0 : 'auto', paddingLeft: menuOpen ? 0 : undefined, paddingRight: menuOpen ? 0 : undefined }}
            transition={spring}
          >
            <SynapseXLogo size={15} className="text-white flex-shrink-0" />
            <span className="text-white text-[13px] font-medium tracking-tight whitespace-nowrap">Chandan B N</span>
          </motion.div>

          <motion.div
            className="relative h-9 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center overflow-hidden"
            animate={{ width: menuOpen ? 'calc(100vw - 32px - 8px - 90px)' : 36 }}
            transition={spring}
          >
            <motion.button
              className={`flex-shrink-0 flex items-center justify-center ${
                menuOpen ? 'w-8 h-8 ml-0.5 rounded-[9px] bg-white/10' : 'w-9 h-9 rounded-[10px]'
              }`}
              onClick={toggleMenu}
            >
              <SquashHamburger isOpen={menuOpen} onClick={() => {}} />
            </motion.button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="flex items-center gap-4 ml-3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.15 }}
                >
                  <button className="text-white/85 text-[13px] whitespace-nowrap" onClick={() => scrollToId('about')}>About</button>
                  <button className="text-white/85 text-[13px] whitespace-nowrap" onClick={() => scrollToId('work')}>Work</button>
                  <button className="text-white/85 text-[13px] whitespace-nowrap" onClick={() => scrollToId('contact')}>Contact</button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.a
          href="mailto:chandan.000@icloud.com"
          className="h-9 px-3.5 bg-white rounded-full text-black text-[13px] flex items-center gap-1.5 flex-shrink-0 no-underline"
          whileTap={{ scale: 0.97 }}
        >
          <span>Contact</span>
        </motion.a>
      </div>
    </motion.nav>
  )
}
