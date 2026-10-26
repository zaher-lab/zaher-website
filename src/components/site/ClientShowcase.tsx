import { clientShowcase } from "@/data/content"
import { Reveal } from "./Reveal"

export function ClientShowcase() {
  return (
    <section className="bg-background pb-24 sm:pb-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="max-w-xl">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            {clientShowcase.eyebrow}
          </p>
          <h2 className="mt-5 text-balance font-serif text-3xl font-medium leading-tight sm:text-4xl">
            {clientShowcase.heading}
          </h2>
        </div>

        <div className="mt-12 sm:mt-14">
          {clientShowcase.groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 110}>
              <div className="grid items-center gap-6 border-t border-border py-9 last:border-b sm:grid-cols-[170px_1fr] sm:gap-10 sm:py-11">
                <p className="font-serif text-xl italic text-petrol-600 sm:text-2xl">{group.label}</p>
                <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
                  {group.brands.map((brand) => (
                    <li key={brand.name} className="flex h-14 items-center justify-center sm:h-16">
                      <img
                        src={`/images/brands/${brand.logo}.png`}
                        alt={brand.name}
                        className="max-h-full max-w-full object-contain opacity-80 grayscale transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
