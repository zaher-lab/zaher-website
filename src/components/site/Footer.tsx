import { nav, positioningClose, EMAIL } from "@/data/content"

export function Footer() {
  return (
    <footer className="dark bg-background py-16 text-foreground">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-12 sm:flex-row sm:items-end">
          <div>
            <img src="/images/logo-offwhite.png" alt="Zaher Dassouky" className="h-9 w-auto" />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-foreground/65">
              {positioningClose.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-signature text-3xl text-petrol-500">Zaher Dassouky</p>
          <div className="text-right text-xs text-foreground/45">
            <p>
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-foreground">
                {EMAIL}
              </a>
            </p>
            <p className="mt-1">&copy; {new Date().getFullYear()} Zaher Dassouky. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
