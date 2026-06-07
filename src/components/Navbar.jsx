import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

function NavItem({ label, to, onClick }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "w-full sm:flex-1",
          "text-center",
          "block",
          "px-4 py-3 sm:px-6",
          "text-[12px] sm:text-sm font-semibold uppercase font-display",
          "transition-colors duration-200 ease-out",
          "hover:text-crimson",
          "hover:bg-whisper",
          isActive ? "text-crimson bg-whisper/50" : "text-charcoal",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "Notice", to: "/notice" },
      { label: "Events", to: "/events" },
      { label: "Government Schemes", to: "/schemes" },
      { label: "Teams", to: "/teams" },
      { label: "About Us", to: "/about" },
    ],
    []
  );

  return (
      <header className="sticky top-0 z-50 w-full bg-canvas/80 backdrop-blur-md shadow-sm border-b border-whisper transition-all duration-300">
        <div className="w-full">
          
          <div className="px-4 py-3 sm:px-8 sm:py-4 max-w-7xl mx-auto">
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-3 sm:gap-6">
              <img src="/logos/nss_logo.png" className="h-10 sm:h-16 w-auto object-contain" alt="NSS Logo" />
              <img src="/logos/mybharat-logo 1.png" className="h-9 sm:h-12 w-auto object-contain" alt="My Bharat" />
              <img src="/logos/yas-logo 1.png" className="h-9 sm:h-12 w-auto object-contain" alt="YAS" />
              <img src="/logos/viksit-bharat-logo 1.png" className="h-9 sm:h-12 w-auto object-contain" alt="Viksit Bharat" />
              <img src="/logos/digital-india 1.png" className="h-8 sm:h-10 w-auto object-contain" alt="Digital India" />
              <img src="/logos/bit_mesra.png" className="h-10 sm:h-16 w-auto object-contain" alt="BIT Mesra" />
            </div>
          </div>

          <div className="relative w-full border-t border-whisper bg-canvas/50">
            <div className="flex items-center justify-between px-4 py-3 sm:hidden">
              <span className="text-sm font-semibold uppercase tracking-wide text-charcoal font-display">
                Menu
              </span>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-whisper p-2 text-charcoal hover:bg-whisper hover:text-crimson transition-colors"
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((open) => !open)}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isOpen ? (
                    <path d="M6 6l12 12M18 6l-12 12" />
                  ) : (
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  )}
                </svg>
              </button>
            </div>

            <nav className="hidden items-center justify-between sm:flex max-w-7xl mx-auto">
              {nav.map((item) => (
                <NavItem key={item.label} {...item} />
              ))}
            </nav>

            {isOpen && (
              <nav className="flex flex-col border-t border-whisper sm:hidden bg-canvas">
                {nav.map((item) => (
                  <NavItem
                    key={item.label}
                    {...item}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </nav>
            )}
          </div>

        </div>
      </header>
  );
}
