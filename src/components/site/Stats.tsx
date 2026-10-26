import { stats } from "@/data/content"
import { CountUp } from "./CountUp"
import { Reveal } from "./Reveal"

export function Stats() {
  return (
    <section className="bg-muted/45 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          Experience at a Glance
        </p>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">
          {stats.map((s, i) =>
            s.value === "Harvard" ? (
              <Reveal key={s.label} delay={i * 90}>
                <div className="group flex items-center gap-4 transition-transform duration-200 hover:-translate-y-1">
                  <img
                    src="/images/zaher-harvard.jpg"
                    alt="Zaher Dassouky at Harvard Business School"
                    className="h-16 w-14 shrink-0 rounded-sm object-cover object-[50%_20%] sm:h-20 sm:w-16"
                  />
                  <div>
                    <div className="font-serif text-2xl font-medium text-foreground transition-colors duration-200 group-hover:text-petrol-600 sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[13px] leading-snug text-muted-foreground">{s.label}</div>
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal key={s.label} delay={i * 90}>
                <div className="group transition-transform duration-200 hover:-translate-y-1">
                  <CountUp
                    value={s.value}
                    className="font-serif text-4xl font-medium text-foreground transition-colors duration-200 group-hover:text-petrol-600 sm:text-[2.75rem]"
                  />
                  <div className="mt-2 text-[13px] leading-snug text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
