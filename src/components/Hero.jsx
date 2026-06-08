export default function Hero() {
  return (
    <section id="home" className="w-full bg-[#F8FAFC] min-h-[90vh] flex flex-col md:flex-row overflow-hidden">
      <div className="w-full md:w-[60%] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-20 md:py-0 relative z-10">
        <div className="max-w-2xl">
          <div className="mb-6 inline-block rounded-full bg-[#19366B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#19366B]" style={{ fontFamily: `"Outfit", sans-serif` }}>
            Not Me But You
          </div>
          <h1 
            className="text-[#0F172A] font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
            style={{ fontFamily: `"Outfit", sans-serif` }}
          >
            Empowering Youth, <br />
            <span className="text-[#19366B]">Building the Nation</span>
          </h1>
          <p 
            className="mt-8 text-[#64748B] text-lg sm:text-xl max-w-lg leading-relaxed"
            style={{ fontFamily: `"Satoshi", sans-serif` }}
          >
            The National Service Scheme at BIT Mesra provides a platform for students to look beyond academics and actively contribute to society.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a 
              href="#recent-events"
              className="inline-block bg-[#F6170F] text-white font-bold py-4 px-8 rounded-lg hover:-translate-y-[2px] transition-transform shadow-[0_10px_30px_rgba(246,23,15,0.25)] hover:shadow-[0_15px_40px_rgba(246,23,15,0.4)] uppercase tracking-wide text-sm"
              style={{ fontFamily: `"Outfit", sans-serif` }}
            >
              Our Impact
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[40%] relative min-h-[300px] sm:min-h-[400px] md:min-h-full bg-[#0D1B36]">
        <img
          src="/BACKGROUND.png"
          alt="NSS BIT Mesra Students"
          className="absolute inset-0 h-full w-full object-cover object-center contrast-125 brightness-110 saturate-150"
          draggable="false"
        />
      </div>
    </section>
  );
}
