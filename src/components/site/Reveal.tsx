import { useEffect, useRef, useState, type ReactNode } from "react"

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`motion-safe:transition-all motion-safe:duration-[900ms] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 motion-safe:translate-y-10"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  )
}
