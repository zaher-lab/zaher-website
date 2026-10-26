import { Button } from "@/components/ui/button"
import { Icon } from "./Icon"
import { hero } from "@/data/content"

const isSmallScreen = window.matchMedia("(max-width: 768px)").matches

export function Hero() {
  return (
    <section
      id="top"
      className="hero-fade-bg dark relative flex min-h-[100svh] items-center overflow-hidden text-foreground"
    >
      {/* faint full-logo watermark — pinned to a fixed corner spot so it
          can never collide with the headline at any viewport size */}
      <img
        src="/images/logo-offwhite.png"
        alt=""
        aria-hidden="true"
        className="animate-hero-mark-in pointer-events-none absolute right-5 top-24 w-[130px] sm:right-8 sm:top-28 sm:w-[190px] lg:w-[240px]"
      />

      {/* brand-reel header video, anchored to the right on larger screens
          and feathered into the navy ground on its left edge so the
          footage drifts away behind the headline instead of crowding it;
          a reading-contrast overlay sits on top, darkest on the left */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[74%]"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 55%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 55%)",
        }}
      >
        {/* phones get the lighter 720p file; larger screens get WebM
            (smallest) with 1080p MP4 as the fallback for browsers that
            can't play it */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="h-full w-full object-cover"
        >
          {isSmallScreen ? (
            <source src="/videos/hero-720.mp4" type="video/mp4" />
          ) : (
            <>
              <source src="/videos/hero-1080.webm" type="video/webm" />
              <source src="/videos/hero-1080.mp4" type="video/mp4" />
            </>
          )}
        </video>
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(20,41,61,0.94) 0%, rgba(20,41,61,0.82) 42%, rgba(20,41,61,0.4) 70%, rgba(20,41,61,0.25) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-28 pb-24 sm:px-8 sm:pt-32">
        <p
          className="animate-hero-rise font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-petrol-300"
          style={{ animationDelay: "150ms" }}
        >
          {hero.eyebrow}
        </p>

        <h1
          className="animate-hero-rise mt-4 max-w-2xl text-balance font-serif text-[1.9rem] leading-[1.15] font-medium sm:mt-5 sm:text-6xl sm:leading-[1.08] lg:text-[4.25rem]"
          style={{ animationDelay: "280ms" }}
        >
          {hero.headline}
        </h1>

        <p
          className="animate-hero-rise mt-5 max-w-xl text-base text-foreground/75 sm:mt-6 sm:text-xl"
          style={{ animationDelay: "420ms" }}
        >
          {hero.sub}
        </p>

        <div
          className="animate-hero-rise mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
          style={{ animationDelay: "560ms" }}
        >
          <Button
            render={
              <a href="#contact" className="flex items-center gap-2">
                Let&rsquo;s Explore Your Opportunity
                <Icon name="arrow-right" className="h-4 w-4" />
              </a>
            }
            nativeButton={false}
            size="lg"
            className="rounded-full bg-white px-7 text-black transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/90"
          />
          <Button
            render={<a href="#services">View Services</a>}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="rounded-full border-foreground/25 bg-transparent px-7 text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-foreground/10"
          />
        </div>
      </div>

      {/* pinned credential badge, echoing the reference sites' fixed tab */}
      <div
        className="animate-hero-rise absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 items-center sm:flex"
        style={{ animationDelay: "700ms" }}
      >
        <div className="flex flex-col items-center gap-1 rounded-l-md border border-r-0 border-petrol-700/50 bg-background/70 px-3 py-4 backdrop-blur-sm">
          <span className="font-serif text-2xl text-petrol-300">25+</span>
          <span
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/60"
            style={{ writingMode: "vertical-rl" }}
          >
            Years Experience
          </span>
        </div>
      </div>

      {/* white wash, above both the video and the navy background —
          fades in from transparent at the top of this band to white at
          the bottom, using the same alignment as hero-fade-bg so it
          reinforces the handoff rather than fighting it */}
      <div className="hero-fade-overlay pointer-events-none absolute inset-0" />
    </section>
  )
}
