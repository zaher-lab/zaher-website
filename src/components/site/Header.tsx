import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Icon } from "./Icon"
import { nav } from "@/data/content"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>("")
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null)
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => !!el)
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const measure = () => {
      const el = active ? navRefs.current[active] : null
      setPill(el ? { left: el.offsetLeft, width: el.offsetWidth } : null)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [active])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-[padding] duration-300 ease-out ${
        scrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"
      }`}
    >
      <div className="animate-header-drop-in relative w-full max-w-5xl">
        {/* always-on ambient glow, so the header has visible life at rest
            and isn't only reacting to scroll */}
        <div
          aria-hidden="true"
          className="animate-header-glow-pulse pointer-events-none absolute -inset-3 rounded-full blur-xl"
          style={{ background: "radial-gradient(closest-side, rgba(30,75,69,0.55), transparent)" }}
        />
        <div
          className={`relative flex items-center justify-between rounded-full border transition-[background-color,border-color,box-shadow,padding] duration-300 ease-out sm:px-4 ${
            scrolled
              ? "border-border/70 bg-background/85 px-3 py-1.5 shadow-sm backdrop-blur-md"
              : "border-transparent bg-transparent px-3 py-2"
          }`}
        >
        <a href="#top" className="flex items-center gap-2 pl-1" aria-label="Zaher Dassouky — home">
          <img
            src={scrolled ? "/images/logo-charcoal.png" : "/images/logo-offwhite.png"}
            alt="Zaher Dassouky"
            className={`w-auto transition-[height,opacity] duration-300 ease-out ${scrolled ? "h-7 sm:h-8" : "h-8 sm:h-9"}`}
          />
        </a>

        <nav className="relative hidden items-center gap-1 md:flex" aria-label="Primary">
          <span
            aria-hidden="true"
            className="absolute inset-y-1 rounded-full bg-foreground transition-[left,width,opacity] duration-300 ease-out"
            style={
              pill ? { left: pill.left, width: pill.width, opacity: 1 } : { left: 0, width: 0, opacity: 0 }
            }
          />
          {nav.map((item) => (
            <a
              key={item.href}
              ref={(el) => {
                navRefs.current[item.href] = el
              }}
              href={item.href}
              className={`relative z-10 rounded-full px-4 py-2 font-sans text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                active === item.href
                  ? "text-background"
                  : scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<a href="#contact">Let&rsquo;s Talk</a>}
            nativeButton={false}
            size="sm"
            className="rounded-full px-5"
          />
        </div>

        <Sheet>
          <SheetTrigger
            className={`rounded-full p-2 transition-colors md:hidden ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <Icon name="menu" className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-border bg-background">
            <nav className="mt-12 flex flex-col gap-1 px-4" aria-label="Primary">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 font-sans text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <Button
                render={<a href="#contact">Let&rsquo;s Talk</a>}
                nativeButton={false}
                className="mt-4 rounded-full"
              />
            </nav>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  )
}
