import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",               to: "/" },
  { label: "Notice",             to: "/notice" },
  { label: "Events",             to: "/events" },
  { label: "Government Schemes", to: "/schemes" },
  { label: "Teams",              to: "/teams" },
  { label: "About Us",           to: "/about" },
];

const QUICK_LINKS = [
  { label: "BIT Mesra",                        href: "https://www.bitmesra.ac.in/" },
  { label: "NSS India",                         href: "https://www.nss.gov.in/" },
  { label: "Government of India",               href: "https://www.india.gov.in/" },
  { label: "Ministry of Youth Affairs & Sports",href: "https://yas.nic.in/" },
];

const SOCIALS = [
  {
    label: "X (Twitter)",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19 9.46 12.504h-7.4l-5.79-7.57-6.62 7.57H.5l8.6-9.84L0 1.153h7.59l5.24 6.93 6.07-6.93zm-1.29 19.49h2.04L6.48 3.24H4.3l13.31 17.4z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nss_bitmesra/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zM17.8 6.2a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.64.78-1.64 1.58V12h2.79l-.45 2.88h-2.34v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-navy font-body text-canvas">

      {/* ── Top red divider ── */}
      <div className="h-1 w-full bg-crimson" />

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logos/nss_logo.png" alt="NSS Logo" className="h-12 w-auto object-contain" />
              <div>
                <p className="text-canvas font-display font-extrabold text-lg tracking-widest uppercase leading-tight">NSS</p>
                <p className="text-canvas/70 text-xs tracking-wider uppercase leading-tight">BIT Mesra</p>
              </div>
            </div>
            <p className="text-canvas/60 text-sm leading-relaxed">
              Not Me But You — developing student youth into socially responsible citizens through community service.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-10 h-10 rounded border border-canvas/20 text-canvas/70 hover:text-canvas hover:border-crimson hover:bg-crimson/10 transition-colors duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Site Pages */}
          <div>
            <h4 className="text-canvas font-display text-sm font-semibold uppercase tracking-widest mb-6 pb-2 border-b border-canvas/10">
              Pages
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `text-sm transition-colors duration-150 ${
                        isActive
                          ? "text-crimson font-medium"
                          : "text-canvas/60 hover:text-crimson"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="text-canvas font-display text-sm font-semibold uppercase tracking-widest mb-6 pb-2 border-b border-canvas/10">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-canvas/60 hover:text-crimson transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-canvas font-display text-sm font-semibold uppercase tracking-widest mb-6 pb-2 border-b border-canvas/10">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-canvas/60">
              <div className="flex gap-3">
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 mt-0.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:nss@bitmesra.ac.in" className="hover:text-crimson transition-colors">
                  nss@bitmesra.ac.in
                </a>
              </div>
              <div className="flex gap-3">
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 mt-0.5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>NSS Office, Sports Complex, BIT Mesra, Ranchi – 835215</span>
              </div>
            </div>

            {/* Partner logos */}
            <div className="mt-8 flex flex-wrap items-center gap-4 opacity-60">
              <img src="/logos/bit_mesra.png"              alt="BIT Mesra"       className="h-8 w-auto object-contain brightness-0 invert" />
              <img src="/logos/yas-logo 1.png"             alt="YAS"             className="h-8 w-auto object-contain brightness-0 invert" />
              <img src="/logos/mybharat-logo 1.png"        alt="My Bharat"       className="h-7 w-auto object-contain brightness-0 invert" />
              <img src="/logos/viksit-bharat-logo 1.png"   alt="Viksit Bharat"   className="h-7 w-auto object-contain brightness-0 invert" />
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-canvas/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-canvas/50 text-sm font-mono">
            © 2026 NSS BIT Mesra. All rights reserved.
          </p>
          <p className="text-canvas/40 text-sm font-mono">
            National Service Scheme · BIT Mesra, Ranchi
          </p>
        </div>
      </div>

    </footer>
  );
}
