import { motion } from 'framer-motion'

interface SquashHamburgerProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export default function SquashHamburger({ isOpen, onClick, className = '' }: SquashHamburgerProps) {
  const spring = { type: 'spring' as const, stiffness: 300, damping: 20 }

  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center cursor-pointer bg-transparent border-none outline-none ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {/* Desktop: 18x12px, Mobile: 15x10px */}
      <div className="relative w-[15px] h-[10px] sm:w-[18px] sm:h-[12px]">
        {/* Top bar */}
        <motion.span
          className="absolute left-0 right-0 bg-white rounded-full"
          style={{ top: 0, height: '1.2px' }}
          animate={
            isOpen
              ? { rotate: 45, y: '4px', scaleX: 1 }
              : { rotate: 0, y: 0, scaleX: 1 }
          }
          transition={spring}
        />
        {/* Middle bar */}
        <motion.span
          className="absolute left-0 right-0 bg-white rounded-full"
          style={{ top: '50%', translateY: '-50%', height: '1.2px' }}
          animate={
            isOpen
              ? { opacity: 0, scaleX: 0 }
              : { opacity: 1, scaleX: 1 }
          }
          transition={spring}
        />
        {/* Bottom bar */}
        <motion.span
          className="absolute left-0 right-0 bg-white rounded-full"
          style={{ bottom: 0, height: '1.2px' }}
          animate={
            isOpen
              ? { rotate: -45, y: '-4px', scaleX: 1 }
              : { rotate: 0, y: 0, scaleX: 1 }
          }
          transition={spring}
        />
      </div>
    </button>
  )
}
