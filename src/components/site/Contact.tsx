import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Icon } from "./Icon"
import { cta, EMAIL, FORM_ENDPOINT, LINKEDIN_URL } from "@/data/content"

type Status = "idle" | "sending" | "sent" | "error"

export function Contact() {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [touched, setTouched] = useState(false)
  const [status, setStatus] = useState<Status>("idle")

  const isValid = name.trim() && email.trim().includes("@") && message.trim()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setTouched(true)
    if (!isValid || status === "sending") return
    if (honeypot) return

    const subject = `Middle East opportunity — ${company || name}`

    if (!FORM_ENDPOINT) {
      const body = [
        `Name: ${name}`,
        company ? `Company: ${company}` : null,
        `Email: ${email}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n")
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus("sending")
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, company, email, message, _subject: subject }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("sent")
      setName("")
      setCompany("")
      setEmail("")
      setMessage("")
      setTouched(false)
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-14 px-6 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground/45">
            {cta.eyebrow}
          </p>
          <h2 className="mt-5 text-balance font-serif text-3xl font-medium leading-tight sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground/60">{cta.body}</p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-3 text-[15px] text-foreground/80 transition-colors duration-200 hover:text-foreground"
            >
              <Icon name="mail" className="h-4 w-4 text-foreground/40 transition-colors duration-200 group-hover:text-petrol-600" />
              {EMAIL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-[15px] text-foreground/80 transition-colors duration-200 hover:text-foreground"
            >
              <Icon name="linkedin" className="h-4 w-4 text-foreground/40 transition-colors duration-200 group-hover:text-petrol-600" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
              {touched && !name.trim() && (
                <p className="text-xs text-destructive">Your name is missing — add it to continue.</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            {touched && !email.trim().includes("@") && (
              <p className="text-xs text-destructive">Enter a valid email so I can reply.</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">What are you exploring?</Label>
            <Textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Market entry, brand positioning, distribution strategy…"
            />
            {touched && !message.trim() && (
              <p className="text-xs text-destructive">Add a line about what you&rsquo;re exploring.</p>
            )}
          </div>

          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Leave this field empty</label>
            <input
              id="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={status === "sending"}
            className="w-full rounded-full transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            {status === "sending" ? "Sending…" : FORM_ENDPOINT ? "Send Request" : "Open in Email"}
          </Button>

          <div role="status" aria-live="polite">
            {status === "sent" && (
              <p className="text-sm text-petrol-600">
                Thank you — your request has been sent. Zaher will be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong sending your request. Please email{" "}
                <a href={`mailto:${EMAIL}`} className="underline">
                  {EMAIL}
                </a>{" "}
                directly.
              </p>
            )}
            {status !== "sent" && status !== "error" && !FORM_ENDPOINT && (
              <p className="text-xs text-muted-foreground">
                Opens your email app with this pre-filled, ready to send.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
