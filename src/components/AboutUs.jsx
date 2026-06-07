import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-[#F8FAFC]">
      
      <div className="relative w-full h-[60vh] min-h-[450px] overflow-hidden">
        <img
          src="/aboutus.jpeg"
          alt="NSS BIT Mesra"
          className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
          draggable="false"
        />
        <div className="absolute inset-0 bg-[#0D1B36]/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-[Outfit] text-white tracking-tight uppercase">
            About Us
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 font-medium tracking-wide">
            National Service Scheme · BIT Mesra
          </p>
        </div>
      </div>

      <div className="w-full px-4 py-24 max-w-6xl mx-auto">
        
        <div className="mb-16 bg-white rounded-2xl p-10 shadow-[0_10px_30px_rgba(13,27,54,0.05)] border border-[#19366B]/15">
          <h3 className="text-4xl font-bold text-[#0D1B36] font-[Outfit] tracking-tight mb-6">NSS at BIT Mesra</h3>
          <p className="text-[#0F172A] text-lg leading-relaxed mb-4">
            NSS BIT Mesra works with the objective of developing student youth into socially responsible citizens.
          </p>
          <p className="text-[#0F172A] text-lg leading-relaxed">
            The unit actively organizes community outreach programs, awareness campaigns, cleanliness drives, blood donation camps and rural development activities.
          </p>
        </div>

        
        <div className="mb-16 bg-[#19366B]/5 rounded-2xl p-10 border-l-4 border-[#F6170F]">
          <h3 className="text-4xl font-bold text-[#0D1B36] font-[Outfit] tracking-tight mb-4">Motto of NSS</h3>
          <div className="text-center py-8">
            <p className="text-4xl font-bold text-[#F6170F] font-[Outfit] tracking-tight mb-4">“Not Me, But You”</p>
            <p className="text-[#0F172A] text-lg max-w-2xl mx-auto">
              This motto reflects the essence of democratic living and selfless service, encouraging students to prioritize community welfare over individual interests.
            </p>
          </div>
        </div>

        
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-[#0D1B36] font-[Outfit] tracking-tight mb-10 text-center">Vision & Mission</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-[#19366B]/15 rounded-2xl p-8 shadow-[0_10px_30px_rgba(13,27,54,0.05)] relative group overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-1 bg-[#F6170F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <h4 className="text-3xl font-bold text-[#0D1B36] font-[Outfit] tracking-tight mb-6 text-center">Vision</h4>
              <p className="text-[#0F172A] text-lg text-center leading-relaxed">
                To build socially responsible and empathetic youth committed to the service of the nation.
              </p>
            </div>

            
            <div className="bg-white border border-[#19366B]/15 rounded-2xl p-8 shadow-[0_10px_30px_rgba(13,27,54,0.05)] relative group overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-1 bg-[#F6170F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <h4 className="text-3xl font-bold text-[#0D1B36] font-[Outfit] tracking-tight mb-6 text-center">Mission</h4>
              <ul className="space-y-4 text-[#0F172A]">
                <li className="flex items-start">
                  <span className="text-[#F6170F] mr-4 mt-1 font-bold text-xl">•</span>
                  <span className="text-lg">To involve students in community service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F6170F] mr-4 mt-1 font-bold text-xl">•</span>
                  <span className="text-lg">To develop leadership qualities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F6170F] mr-4 mt-1 font-bold text-xl">•</span>
                  <span className="text-lg">To promote national integration and social harmony</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F6170F] mr-4 mt-1 font-bold text-xl">•</span>
                  <span className="text-lg">To encourage social awareness and civic responsibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="mb-20 bg-white rounded-2xl p-10 shadow-[0_10px_30px_rgba(13,27,54,0.05)] border border-[#19366B]/15">
          <h3 className="text-4xl font-bold text-[#0D1B36] font-[Outfit] tracking-tight mb-8 text-center">Objectives of NSS</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="flex items-start">
              <span className="text-[#F6170F] mr-4 mt-1 font-bold text-xl">•</span>
              <span className="text-[#0F172A] text-lg">Understand the community and its problems</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#F6170F] mr-4 mt-1 font-bold text-xl">•</span>
              <span className="text-[#0F172A] text-lg">Develop social and civic responsibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#F6170F] mr-4 mt-1 font-bold text-xl">•</span>
              <span className="text-[#0F172A] text-lg">Apply classroom knowledge to practical life situations</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#F6170F] mr-4 mt-1 font-bold text-xl">•</span>
              <span className="text-[#0F172A] text-lg">Develop leadership qualities</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#F6170F] mr-4 mt-1 font-bold text-xl">•</span>
              <span className="text-[#0F172A] text-lg">Promote national integration</span>
            </li>
          </ul>
        </div>

        
        
        <div className="mb-12">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[#19366B]/15" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#64748B] shrink-0 font-[Outfit]">
              Explore Our Domains
            </h3>
            <div className="h-px flex-1 bg-[#19366B]/15" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                name: "Education",
                id: "education",
                img: "/education.png",
                tagline: "Bridging knowledge gaps in rural communities",
              },
              {
                name: "Society",
                id: "society",
                img: "/society.jpeg",
                tagline: "Empowering people through outreach & awareness",
              },
              {
                name: "Environment",
                id: "environment",
                img: "/environment.jpeg",
                tagline: "Preserving nature through sustainable action",
              },
              {
                name: "Health",
                id: "health",
                img: "/health.png",
                tagline: "Promoting wellbeing across communities",
              },
            ].map((domain) => (
              <Link
                key={domain.id}
                to={`/activity/${domain.id}`}
                className="group relative overflow-hidden rounded-2xl border border-[#19366B]/15 bg-white block no-underline transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(13,27,54,0.05)]"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-[#F6170F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-20" />
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={domain.img}
                    alt={domain.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0D1B36]/40" />
                  {/* Domain name badge overlay */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-4">
                    <span className="text-white font-bold text-3xl font-[Outfit] tracking-tight drop-shadow-md">
                      {domain.name}
                    </span>
                  </div>
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-[#19366B]/10">
                  <p className="text-base font-medium text-[#64748B] leading-snug">{domain.tagline}</p>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 shrink-0 ml-4 text-[#F6170F] transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
