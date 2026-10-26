import { gccLevant, approach } from "@/data/content"
import { RegionMap } from "./RegionMap"

export function ApproachSection() {
  return (
    <section id="approach" className="relative scroll-mt-24 overflow-hidden bg-background py-24 sm:py-32">
      <RegionMap className="pointer-events-none absolute -right-16 -top-10 h-[420px] w-[520px] text-muted-foreground/60 opacity-40 sm:block" />

      <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
        <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
          {gccLevant.eyebrow}
        </p>
        <h2 className="mt-5 text-balance font-serif text-3xl font-medium leading-tight sm:text-4xl">
          {gccLevant.title}
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-[1.75] text-foreground/80">{gccLevant.body}</p>

        <div className="mt-16 rounded-sm border border-border bg-muted/50 px-8 py-12 text-center sm:px-14">
          <p className="text-balance font-serif text-2xl italic leading-snug text-foreground sm:text-3xl">
            {approach.signature}
          </p>
          <p className="mx-auto mt-7 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-petrol-600">
            {approach.supportingLine}
          </p>
        </div>
      </div>
    </section>
  )
}
