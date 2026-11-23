import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><'

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

interface ScrambleInProps {
  text: string
  delay: number
  triggered: boolean
  className?: string
}

export default function ScrambleIn({ text, delay, triggered, className }: ScrambleInProps) {
  const [displayed, setDisplayed] = useState<string[]>([])
  const cursorRef = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!triggered) {
      setDisplayed([])
      return
    }

    timeoutRef.current = setTimeout(() => {
      cursorRef.current = 0
      intervalRef.current = setInterval(() => {
        cursorRef.current += 0.5

        const result: string[] = []
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            result.push(' ')
          } else if (i < Math.floor(cursorRef.current)) {
            result.push(text[i])
          } else if (i < Math.floor(cursorRef.current) + 3) {
            result.push(randomChar())
          } else {
            result.push('')
          }
        }
        setDisplayed(result)

        if (cursorRef.current >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setDisplayed(text.split(''))
        }
      }, 25)
    }, delay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [triggered, text, delay])

  if (!triggered || displayed.length === 0) {
    return <span className={className}>&nbsp;</span>
  }

  return (
    <span className={className}>
      {displayed.map((ch, i) => (
        <span key={i}>{ch || '\u00A0'}</span>
      ))}
    </span>
  )
}
