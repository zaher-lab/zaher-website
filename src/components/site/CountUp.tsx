import { useEffect, useRef, useState } from "react"

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState<string>(() => value.replace(/^\d+/, "0"))
  const match = value.match(/^(\d+)(.*)$/)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!match) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setDisplay(value)
            observer.disconnect()
          }
        },
        { threshold: 0.4 },
      )
      observer.observe(el)
      return () => observer.disconnect()
    }

    const target = parseInt(match[1], 10)
    const suffix = match[2]
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        if (prefersReduced) {
          setDisplay(value)
          return
        }

        const duration = 900
        const start = performance.now()
        function tick(now: number) {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(`${Math.round(target * eased)}${suffix}`)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
