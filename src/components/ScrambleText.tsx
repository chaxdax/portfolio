import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><'

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

interface ScrambleTextProps {
  text: string
  isHovered: boolean
  className?: string
}

export default function ScrambleText({ text, isHovered, className }: ScrambleTextProps) {
  const [displayed, setDisplayed] = useState(text)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const frameRef = useRef(0)
  const cursorRef = useRef(0)

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    if (!isHovered) {
      setDisplayed(text)
      return
    }

    frameRef.current = 0
    cursorRef.current = 0

    intervalRef.current = setInterval(() => {
      frameRef.current++
      const revealedCount = Math.floor(frameRef.current / 4)
      cursorRef.current = revealedCount

      const result = text.split('').map((ch, i) => {
        if (ch === ' ') return ' '
        if (i < revealedCount) return ch
        return randomChar()
      })
      setDisplayed(result.join(''))

      if (revealedCount >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayed(text)
      }
    }, 25)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered, text])

  return <span className={className}>{displayed}</span>
}
