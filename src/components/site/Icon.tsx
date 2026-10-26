type IconName =
  | "strategy"
  | "brand"
  | "retail"
  | "distribution"
  | "omnichannel"
  | "growth"
  | "arrow-right"
  | "linkedin"
  | "mail"
  | "menu"
  | "close"
  | "retainer"
  | "project"
  | "onground"
  | "remote"

const paths: Record<IconName, React.ReactNode> = {
  strategy: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="12" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </>
  ),
  brand: (
    <>
      <path d="M12 3.5 3.5 8.25v7.5L12 20.5l8.5-4.75v-7.5Z" />
      <path d="M12 3.5v17" />
    </>
  ),
  retail: (
    <>
      <path d="M4 9.5 5.25 4h13.5L20 9.5" />
      <path d="M4 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M9.5 20v-5.5h5V20" />
    </>
  ),
  distribution: (
    <>
      <circle cx="5" cy="6" r="2.25" />
      <circle cx="19" cy="6" r="2.25" />
      <circle cx="12" cy="18.5" r="2.25" />
      <path d="M6.75 7.25 10.75 17M17.25 7.25 13.25 17M7.25 6h9.5" />
    </>
  ),
  omnichannel: (
    <>
      <rect x="3.5" y="4.5" width="12" height="8.5" rx="1" />
      <path d="M7 17.5h4.5" />
      <path d="M9.25 13v4.5" />
      <rect x="17" y="9.5" width="4" height="7" rx="0.75" />
      <path d="M18.5 14.25h1" />
    </>
  ),
  growth: (
    <>
      <path d="M4 18 9.5 12.25 13.25 15.5 20 8.25" />
      <path d="M14.75 8.25H20v5.25" />
    </>
  ),
  "arrow-right": <path d="M4.5 12h15M13.5 6l6 6-6 6" />,
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 10.5v6M8 7.75v.01M12.25 16.5v-3.75c0-1.25.9-2 2-2s1.75.75 1.75 2v3.75M12.25 10.5v6" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4.5 6.5l7.5 6.5 7.5-6.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  retainer: (
    <>
      <path d="M6.5 3.5h11v17l-5.5-3-5.5 3z" />
      <path d="M9 8h6M9 11.5h6" />
    </>
  ),
  project: (
    <>
      <rect x="3.5" y="5" width="17" height="14.5" rx="1.5" />
      <path d="M8 3.5v3M16 3.5v3M3.5 9.5h17" />
      <path d="M8.5 14 11 16.5 15.5 12" />
    </>
  ),
  onground: (
    <>
      <path d="M12 21s-6.75-6.19-6.75-11A6.75 6.75 0 0 1 12 3.25 6.75 6.75 0 0 1 18.75 10c0 4.81-6.75 11-6.75 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  remote: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5a12 12 0 0 1 0 17M12 3.5a12 12 0 0 0 0 17" />
    </>
  ),
}

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: IconName
  className?: string
  strokeWidth?: number
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
