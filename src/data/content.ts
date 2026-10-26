// Sourced verbatim from Zaher_Dassouky_Middle_East_Brand_Growth_Advisory_Website_Content.docx

export const EMAIL = "consult@zaherdassouky.com"

// Paste the endpoint from a Formspree form here (https://formspree.io/f/xxxxxxxx)
// to have the contact form send requests directly. While empty, the form
// falls back to opening the visitor's email app.
export const FORM_ENDPOINT = ""
export const LINKEDIN_URL = "https://www.linkedin.com/in/zaher-dassouky-613b6a20/"

export const hero = {
  eyebrow: "Middle East Brand & Growth Advisory",
  headline: "Building Global Brands in the Middle East",
  sub: "Helping beauty, luxury and consumer brands enter, build and grow across the GCC and Levant.",
}

export const about = {
  eyebrow: "About Zaher",
  hook: "Global brands don’t need another market report. They need someone who understands how the market actually works.",
  lead: "I advise international beauty and consumer brands on how to enter, build and grow across the Middle East — combining regional market understanding with hands-on commercial experience.",
}

export type ServiceStage = {
  numeral: string
  name: string
  tagline: string
  keyCapabilities: string[]
  items: string[]
}

export const services: ServiceStage[] = [
  {
    numeral: "i",
    name: "Enter",
    tagline: "Understand where to play and how to enter.",
    keyCapabilities: [
      "Market opportunity assessment",
      "Market prioritisation",
      "Route-to-market strategy",
      "Distributor / partner selection",
    ],
    items: [
      "Market opportunity assessment",
      "GCC & Levant market prioritization",
      "Consumer and competitive landscape",
      "Route-to-market strategy",
      "Distributor / partner identification",
      "Market-entry business plan",
      "Commercial model development",
    ],
  },
  {
    numeral: "ii",
    name: "Build",
    tagline: "Create the foundations for scalable regional growth.",
    keyCapabilities: [
      "Brand positioning",
      "Regional go-to-market strategy",
      "Distribution strategy",
      "Pricing & commercial strategy",
    ],
    items: [
      "Brand positioning for the region",
      "Regional go-to-market strategy",
      "Distribution strategy",
      "Retail strategy",
      "Channel architecture",
      "Pricing and commercial strategy",
      "Local partnerships",
      "Launch strategy",
    ],
  },
  {
    numeral: "iii",
    name: "Grow",
    tagline: "Accelerate commercial performance across the region.",
    keyCapabilities: [
      "Business performance review",
      "Growth strategy",
      "Channel optimisation",
      "Retail / omnichannel expansion",
    ],
    items: [
      "Business performance review",
      "Growth strategy",
      "Channel optimization",
      "Retail expansion",
      "Omnichannel development",
      "Portfolio strategy",
      "CRM and consumer activation",
      "Commercial and P&L optimization",
    ],
  },
]

export const gccLevant = {
  eyebrow: "GCC & Levant",
  title: "One region. Different markets. Different opportunities.",
  body: "Saudi Arabia is not the UAE. Dubai is not Kuwait. Luxury retail, consumer behaviour, distribution and brand dynamics vary significantly across markets.",
}

export const approach = {
  signature: "Think global. Understand local. Act commercially. Build for the long term.",
  supportingLine: "Market insight → Commercial judgement → Local execution",
}

export type WayOfWorking = { label: string; description: string; icon: "retainer" | "project" | "onground" | "remote" }

export const waysOfWorking = {
  heading: "Flexible ways to work together",
  options: [
    { label: "Advisory Retainer", description: "Ongoing strategic guidance", icon: "retainer" },
    { label: "Project-Based", description: "Focused support around a defined challenge or opportunity", icon: "project" },
    { label: "On the Ground", description: "Regional market and stakeholder support", icon: "onground" },
    { label: "Remote Advisory", description: "International strategic support", icon: "remote" },
  ] satisfies WayOfWorking[],
}

export type Brand = { name: string; logo?: string }

export type Stat = { value: string; label: string }

export const stats: Stat[] = [
  { value: "25+", label: "Years — beauty & consumer industry experience" },
  { value: "20+", label: "Years — Middle East market experience" },
  { value: "17", label: "Years — Chalhoub Group" },
  { value: "GCC & Levant", label: "Regional market expertise" },
  { value: "Beauty", label: "Fragrance · Skincare · Makeup · Wellness" },
  { value: "Harvard", label: "Executive leadership / management education" },
]

export type ClientGroup = { label: string; brands: Brand[] }

export const clientShowcase = {
  eyebrow: "Clients",
  heading: "Trusted by leading beauty houses",
  groups: [
    {
      label: "Fragrance",
      brands: [
        { name: "Kilian Paris", logo: "kilian" },
        { name: "Tom Ford Beauty", logo: "tomford" },
        { name: "Frederic Malle", logo: "frederic-malle" },
        { name: "Molton Brown", logo: "moltonbrown" },
        { name: "Coty", logo: "coty" },
      ],
    },
    {
      label: "Skincare",
      brands: [
        { name: "La Mer", logo: "lamer" },
        { name: "Laneige", logo: "laneige" },
        { name: "Caudalie", logo: "caudalie" },
        { name: "RoC Skincare", logo: "roc" },
      ],
    },
    {
      label: "Colour & Makeup",
      brands: [
        { name: "NARS", logo: "nars" },
        { name: "Laura Mercier", logo: "lauramercier" },
        { name: "bareMinerals", logo: "bareminerals" },
        { name: "GOSH", logo: "gosh" },
        { name: "Essence", logo: "essence" },
        { name: "Catrice", logo: "catrice" },
        { name: "Bourjois Paris", logo: "bourjois" },
        { name: "Rimmel London", logo: "rimmel" },
        { name: "Sally Hansen", logo: "sallyhansen" },
        { name: "OPI", logo: "opi" },
      ],
    },
  ] satisfies ClientGroup[],
}

export type ClientSituation = {
  number: string
  title: string
  description: string
  icon: "onground" | "distribution" | "growth" | "strategy"
}

export const whoIWorkWith = {
  eyebrow: "Who I Work With",
  intro: "International brands looking to enter or accelerate their presence in the Middle East.",
  supportingLine: "Particularly relevant to beauty, skincare, fragrance, wellness, premium and luxury brands.",
  items: [
    {
      number: "01",
      title: "Entering the Region",
      description: "International brands evaluating their first Middle East opportunity.",
      icon: "onground",
    },
    {
      number: "02",
      title: "Building Regional Presence",
      description: "Brands establishing distribution, retail and commercial foundations.",
      icon: "distribution",
    },
    {
      number: "03",
      title: "Accelerating Growth",
      description: "Established brands looking to unlock stronger regional performance.",
      icon: "growth",
    },
    {
      number: "04",
      title: "Reassessing Strategy",
      description: "Brands reviewing their positioning, partners or route to market.",
      icon: "strategy",
    },
  ] satisfies ClientSituation[],
}

export const cta = {
  eyebrow: "Let’s Explore Your Opportunity",
  title: "Let’s explore what growth could look like in the Middle East.",
  body: "Whether you're entering the region, developing your presence or looking to accelerate an existing business, the first conversation starts with understanding the opportunity.",
}

export const positioningClose = {
  summary: "I help international beauty and consumer brands enter, build and grow sustainable businesses in the Middle East, bringing together deep regional market knowledge with hands-on experience across brand, retail, distribution and commercial strategy.",
  tagline: "Global ambition. Local understanding. Sustainable growth.",
}

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
]
