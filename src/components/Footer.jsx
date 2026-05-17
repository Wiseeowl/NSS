export default function Footer() {
  return (
    <footer className="w-full">
      
      <div className="w-full bg-[#F6170F]">
        <div className="flex w-full items-center justify-between px-6 py-3">
          <p className="text-sm font-medium text-white">
            Stay connected with us through our social platforms:
          </p>

          <div className="flex items-center gap-5">
            
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="text-white opacity-95 transition-opacity hover:opacity-100"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current"
                aria-hidden="true"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19 9.46 12.504h-7.4l-5.79-7.57-6.62 7.57H.5l8.6-9.84L0 1.153h7.59l5.24 6.93 6.07-6.93zm-1.29 19.49h2.04L6.48 3.24H4.3l13.31 17.4z" />
              </svg>
            </a>

            
            <a
              href="https://www.instagram.com/nss_bitmesra/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-white opacity-95 transition-opacity hover:opacity-100"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current"
                aria-hidden="true"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zM17.8 6.2a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
              </svg>
            </a>

            
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-white opacity-95 transition-opacity hover:opacity-100"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.64.78-1.64 1.58V12h2.79l-.45 2.88h-2.34v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      
      <div className="w-full bg-[#19366b]">
        <div className="grid w-full grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2">
          
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-1 text-sm text-white/90">
              <li>
                <a href="https://www.bitmesra.ac.in/" className="hover:text-white">
                  BIT MESRA
                </a>
              </li>
              <li>
                <a href="https://www.nss.gov.in/" className="hover:text-white">
                  NSS
                </a>
              </li>
              <li>
                <a href="https://www.india.gov.in/" className="hover:text-white">
                  Government of India
                </a>
              </li>
              <li>
                <a href="https://yas.nic.in/" className="hover:text-white">
                  Ministry of Youth Affairs and Sports
                </a>
              </li>
            </ul>
          </div>

          
          <div className="md:justify-self-end md:text-left">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="mt-3 space-y-2 text-sm text-white/90">
              <p>Mail - nss@bitmesra.ac.in</p>
              <p>
                Location – NSS Office, Sports Complex, BIT Mesra, Mesra, Ranchi -
                835215
              </p>
            </div>
          </div>
        </div>

        
        <div className="px-6 pb-4">
          <div className="text-center text-sm text-white/95">
            © 2026 NSS-BIT MESRA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
