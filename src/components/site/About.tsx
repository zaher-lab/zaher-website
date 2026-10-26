import { about } from "@/data/content"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="group relative mx-auto w-56 overflow-hidden rounded-sm sm:w-64 lg:w-full">
              <div className="pointer-events-none absolute -inset-2.5 -z-10 rounded-sm border border-petrol-500/40" />
              <img
                src="/images/zaher-portrait.jpg"
                alt="Zaher Dassouky"
                className="aspect-[4/5] w-full object-cover grayscale-[35%] transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
              />
            </div>
            <img
              src="/images/logo-charcoal.png"
              alt=""
              aria-hidden="true"
              className="mx-auto mt-6 h-9 w-auto opacity-80 sm:mx-0"
            />
          </div>

          <div>
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
              {about.eyebrow}
            </p>

            <p className="mt-5 max-w-lg text-balance font-serif text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              {about.hook}
            </p>

            <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-foreground/85">{about.lead}</p>

          </div>
        </div>
      </div>
    </section>
  )
}
