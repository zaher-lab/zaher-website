type ServiceOrbitProps = {
  numeral: string
  name: string
  items: string[]
}

const RADIUS = 37

function pointOn(index: number, count: number) {
  const angle = (-90 + (360 / count) * index) * (Math.PI / 180)
  return {
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  }
}

export function ServiceOrbit({ numeral, name, items }: ServiceOrbitProps) {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-xl sm:block">
      {/* slow-spinning ring, purely decorative */}
      <div className="animate-orbit-ring-spin pointer-events-none absolute inset-[8%] rounded-full border border-dashed border-white/[0.08]" />
      <div className="pointer-events-none absolute inset-[18%] rounded-full border border-white/[0.06]" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        {items.map((item, i) => {
          const p = pointOn(i, items.length)
          return (
            <line
              key={item}
              x1={50}
              y1={50}
              x2={p.x}
              y2={p.y}
              pathLength={1}
              stroke="currentColor"
              strokeWidth="0.35"
              strokeDasharray="1"
              className="animate-[orbit-line-draw_0.7s_ease-out_both] text-petrol-500/40"
              style={{ animationDelay: `${140 + i * 70}ms` }}
            />
          )
        })}
      </svg>

      {/* hub */}
      <div
        className="animate-[orbit-hub-in_0.5s_cubic-bezier(0.16,1,0.3,1)_both] absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-petrol-500/40 bg-background text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
        style={{ animationDelay: "60ms" }}
      >
        <span className="font-serif text-lg italic text-petrol-500">{numeral}</span>
        <span className="font-serif text-sm">{name}</span>
      </div>

      {/* nodes */}
      {items.map((item, i) => {
        const p = pointOn(i, items.length)
        return (
          <div
            key={item}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <div
              className="animate-[orbit-node-in_0.45s_cubic-bezier(0.16,1,0.3,1)_both] group flex w-32 flex-col items-center gap-2 text-center"
              style={{ animationDelay: `${220 + i * 70}ms` }}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-petrol-500 transition-transform duration-200 group-hover:scale-125" />
              <span className="text-[13.5px] font-medium leading-snug text-foreground transition-colors duration-200 group-hover:text-petrol-300">
                {item}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
