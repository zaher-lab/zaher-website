import { useState } from "react"
import { services, waysOfWorking } from "@/data/content"
import { Icon } from "./Icon"
import { ServiceOrbit } from "./ServiceOrbit"
import { ServiceTimeline } from "./ServiceTimeline"

export function Services() {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const stage = services[active]

  function selectStage(i: number) {
    setActive(i)
    setExpanded(false)
  }

  return (
    <section id="services" className="dark scroll-mt-24 bg-background py-24 text-foreground sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          Services
        </p>
        <h2 className="mt-5 max-w-2xl text-balance font-serif text-3xl font-medium leading-tight sm:text-4xl">
          From market entry to sustainable growth
        </h2>
        <p className="mt-3 text-sm text-foreground/50">Select a stage to see what it covers.</p>

        {/* compact segmented tab bar — mobile only. The full descriptive
            cards below stack tall on narrow screens, which pushed the
            selected content far below all three tabs; this keeps the
            selector short so the content stays right underneath it */}
        <div className="mt-8 flex gap-2 sm:hidden">
          {services.map((s, i) => (
            <button
              key={s.name}
              onClick={() => selectStage(i)}
              aria-expanded={active === i}
              className={`flex-1 rounded-full border px-3 py-2.5 text-center text-sm font-medium transition-colors duration-200 ${
                active === i
                  ? "border-petrol-500 bg-petrol-500 text-white"
                  : "border-white/15 text-foreground/60"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="mt-8 hidden gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid sm:grid-cols-3">
          {services.map((s, i) => (
            <button
              key={s.name}
              onClick={() => selectStage(i)}
              aria-expanded={active === i}
              className={`group relative flex cursor-pointer flex-col items-start gap-3 px-7 py-8 text-left transition-colors duration-200 sm:px-8 sm:py-10 ${
                active === i ? "bg-white/[0.07]" : "bg-white/[0.02] hover:bg-white/[0.1]"
              }`}
            >
              <span
                className={`absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-200 sm:right-6 sm:top-6 ${
                  active === i
                    ? "border-petrol-500 bg-petrol-500 text-white"
                    : "border-white/15 text-foreground/40 group-hover:border-white/30 group-hover:text-foreground/70"
                }`}
              >
                <Icon name="arrow-right" className="h-3.5 w-3.5 -rotate-45" strokeWidth={1.8} />
              </span>
              <span
                className={`font-serif text-3xl italic transition-colors ${
                  active === i ? "text-petrol-500" : "text-foreground/35"
                }`}
              >
                {s.numeral}
              </span>
              <span className="font-serif text-2xl">{s.name}</span>
              <span className="text-sm leading-relaxed text-foreground/60">{s.tagline}</span>
            </button>
          ))}
        </div>

        {/* simple first, depth on demand — the key capabilities answer
            "what does this stage cover" at a glance; the full radial/
            timeline breakdown is one click away for anyone who wants it,
            rather than being forced on every visitor by default */}
        <div
          key={stage.name}
          className="mt-4 animate-in fade-in slide-in-from-top-1 rounded-sm border border-white/10 bg-white/[0.03] px-7 py-8 duration-300 sm:mt-px sm:rounded-t-none sm:border-t-0 sm:px-10 sm:py-12"
        >
          <p className="text-sm leading-relaxed text-foreground/60 sm:hidden">{stage.tagline}</p>

          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {stage.keyCapabilities.map((c) => (
              <li key={c} className="flex items-start gap-3 text-[15px] leading-snug text-foreground/85">
                <Icon name="arrow-right" className="mt-1 h-3.5 w-3.5 shrink-0 text-petrol-500" strokeWidth={1.8} />
                {c}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-petrol-300 transition-colors duration-200 hover:text-petrol-100"
          >
            {expanded ? "Hide full capabilities" : `View full ${stage.name} capabilities`}
            <Icon
              name="arrow-right"
              className={`h-3.5 w-3.5 transition-transform duration-200 ${expanded ? "-rotate-90" : "rotate-90"}`}
              strokeWidth={1.8}
            />
          </button>

          {expanded && (
            <div className="animate-in fade-in slide-in-from-top-1 mt-8 border-t border-white/10 pt-8 duration-300">
              <ServiceOrbit numeral={stage.numeral} name={stage.name} items={stage.items} />
              <div className="mt-6">
                <ServiceTimeline numeral={stage.numeral} name={stage.name} items={stage.items} />
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 rounded-sm border border-petrol-500/30 bg-petrol-500/[0.1] px-7 py-8 sm:px-10 sm:py-10">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-petrol-300">
            {waysOfWorking.heading}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {waysOfWorking.options.map((w) => (
              <div key={w.label} className="flex flex-col gap-2">
                <Icon name={w.icon} className="h-4 w-4 text-petrol-300" />
                <div className="text-[15px] font-medium text-foreground">{w.label}</div>
                <div className="text-[13px] leading-snug text-foreground/60">{w.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
