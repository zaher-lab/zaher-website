type ServiceTimelineProps = {
  numeral: string
  name: string
  items: string[]
}

// Mobile counterpart to ServiceOrbit — a radial layout has nowhere to put
// 7-8 multi-word labels at 375px wide, so this reshapes the same "hub +
// connected nodes" idea into a vertical spine instead of a circle, which
// costs nothing in width and scales to any number of items by just
// growing taller.
export function ServiceTimeline({ numeral, name, items }: ServiceTimelineProps) {
  return (
    <div className="relative sm:hidden">
      {/* the spine — drawn top to bottom, same draw-in technique as the
          orbit's spokes (pathLength-normalized stroke-dashoffset) */}
      <svg
        viewBox="0 0 2 100"
        preserveAspectRatio="none"
        className="absolute left-6 top-12 h-[calc(100%-3.5rem)] w-px overflow-visible"
        aria-hidden="true"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="100"
          pathLength={1}
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="1"
          vectorEffect="non-scaling-stroke"
          className="animate-[orbit-line-draw_0.6s_ease-out_both] text-petrol-500/30"
        />
      </svg>

      {/* hub */}
      <div
        className="animate-[orbit-hub-in_0.4s_cubic-bezier(0.16,1,0.3,1)_both] relative z-10 flex items-center gap-3"
        style={{ animationDelay: "40ms" }}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-petrol-500/50 bg-background">
          <span className="font-serif text-sm italic text-petrol-500">{numeral}</span>
        </div>
        <span className="font-serif text-lg">{name}</span>
      </div>

      {/* nodes */}
      <div className="mt-1">
        {items.map((item, i) => (
          <div
            key={item}
            className="animate-[orbit-node-in_0.4s_cubic-bezier(0.16,1,0.3,1)_both] relative z-10 flex items-start gap-3 py-3"
            style={{ animationDelay: `${140 + i * 60}ms` }}
          >
            <div className="flex h-6 w-12 shrink-0 items-center justify-center">
              <span className="h-2.5 w-2.5 rounded-full bg-petrol-500 ring-4 ring-background" />
            </div>
            <span className="pt-0.5 text-[14px] leading-snug text-foreground/85">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
