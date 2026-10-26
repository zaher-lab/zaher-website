import { whoIWorkWith } from "@/data/content"
import { Icon } from "./Icon"
import { Reveal } from "./Reveal"

export function WhoIWorkWith() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-border sm:w-16" aria-hidden="true" />
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
              {whoIWorkWith.eyebrow}
            </p>
            <span className="h-px w-10 bg-border sm:w-16" aria-hidden="true" />
          </div>
          <h2 className="mx-auto mt-5 max-w-lg text-balance font-serif text-3xl font-medium leading-tight sm:text-4xl">
            {whoIWorkWith.intro}
          </h2>
        </div>

        {/* large numbered editorial list — still a single flowing sequence,
            not a grid of boxed cards, but each situation now anchors on an
            icon "node" threaded by a connector line that draws itself in,
            echoing the hub-and-spoke motif used in Services elsewhere on
            the site instead of reading as plain text with a rule beside it */}
        <div className="relative mt-16 sm:mt-20">
          <svg
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-7 top-7 h-[calc(100%-3.5rem)] w-px overflow-visible"
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
              className="animate-[orbit-line-draw_1.1s_ease-out_both] text-petrol-500/25"
            />
          </svg>

          <div className="divide-y divide-border">
            {whoIWorkWith.items.map((item, i) => (
              <Reveal key={item.number} delay={i * 110}>
                <div className="group flex items-start gap-6 py-8 transition-transform duration-300 hover:translate-x-1.5 sm:gap-8 sm:py-10">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-petrol-500/40 bg-background text-petrol-600 transition-all duration-300 group-hover:border-petrol-500 group-hover:bg-petrol-500 group-hover:text-white">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-serif text-sm italic text-petrol-500/50">{item.number}</span>
                    <h3 className="font-serif text-xl leading-snug sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-[13px] leading-relaxed text-foreground/45">
          {whoIWorkWith.supportingLine}
        </p>
      </div>
    </section>
  )
}
