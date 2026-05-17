import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section id="about" className="w-full">
      
      <div className="relative w-full">
        
        <img
          src="/society.jpeg"
          alt="NSS BIT Mesra"
          className="h-[420px] w-full object-cover object-center sm:h-[520px]"
          draggable="false"
        />

        
        <div className="absolute inset-0 bg-black/35" />

        
        <div className="absolute inset-0 flex items-start justify-center">
          <div className="mt-14 text-center sm:mt-16">
            <h1
              className={["px-4", "text-white", "font-extrabold", "tracking-[0.18em]", "text-4xl sm:text-6xl md:text-7xl",].join(" ")}
              style={{
                fontFamily: `"Creato Display", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                textShadow: "0 2px 10px rgba(255,255,255,0.35), 0 8px 30px rgba(0,0,0,0.55)",
              }}
            >
              ABOUT US
            </h1>

            <p
              className={["mt-5", "text-white", "font-semibold sm:font-bold", "tracking-[0.40em]", "text-base sm:text-2xl md:text-3xl",].join(" ")}
              style={{
                fontFamily: `"Montserrat", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
                textShadow: "0 2px 14px rgba(0,0,0,0.55)",
              }}
            >
              NSS BIT MESRA
            </p>
          </div>
        </div>
        <div className="h-[4px] w-full bg-[#F6170F]" />
      </div>

      <div className="w-full px-4 py-16 max-w-6xl mx-auto">
        
        <div className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-3xl font-bold text-[#19366b] mb-4">NSS at BIT Mesra</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            NSS BIT Mesra works with the objective of developing student youth into socially responsible citizens.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The unit actively organizes community outreach programs, awareness campaigns, cleanliness drives, blood donation camps and rural development activities.
          </p>
        </div>

        
        <div className="mb-12 bg-[#f0f8ff] rounded-xl p-8 border-l-4 border-[#F6170F]">
          <h3 className="text-3xl font-bold text-[#19366b] mb-4">Motto of NSS</h3>
          <div className="text-center py-6">
            <p className="text-3xl font-bold text-[#F6170F] mb-2">“Not Me, But You”</p>
            <p className="text-gray-700 text-lg">
              This motto reflects the essence of democratic living and selfless service, encouraging students to prioritize community welfare over individual interests.
            </p>
          </div>
        </div>

        
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-[#19366b] mb-8 text-center">Vision & Mission</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
              <h4 className="text-2xl font-bold text-[#19366b] mb-4 text-center">Vision</h4>
              <p className="text-gray-700 text-lg text-center">
                To build socially responsible and empathetic youth committed to the service of the nation.
              </p>
            </div>

            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
              <h4 className="text-2xl font-bold text-[#19366b] mb-4 text-center">Mission</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#F6170F] mr-3 mt-1 text-xl">•</span>
                  <span className="text-lg">To involve students in community service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F6170F] mr-3 mt-1 text-xl">•</span>
                  <span className="text-lg">To develop leadership qualities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F6170F] mr-3 mt-1 text-xl">•</span>
                  <span className="text-lg">To promote national integration and social harmony</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F6170F] mr-3 mt-1 text-xl">•</span>
                  <span className="text-lg">To encourage social awareness and civic responsibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-3xl font-bold text-[#19366b] mb-6 text-center">Objectives of NSS</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-[#F6170F] mr-3 mt-1 text-xl">•</span>
              <span className="text-gray-700 text-lg">Understand the community and its problems</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#F6170F] mr-3 mt-1 text-xl">•</span>
              <span className="text-gray-700 text-lg">Develop social and civic responsibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#F6170F] mr-3 mt-1 text-xl">•</span>
              <span className="text-gray-700 text-lg">Apply classroom knowledge to practical life situations</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#F6170F] mr-3 mt-1 text-xl">•</span>
              <span className="text-gray-700 text-lg">Develop leadership qualities</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#F6170F] mr-3 mt-1 text-xl">•</span>
              <span className="text-gray-700 text-lg">Promote national integration</span>
            </li>
          </ul>
        </div>

        
        
        <div className="mb-12">
          <h3 className="text-4xl font-extrabold text-[#19366b] mb-8 text-center" style={{ fontFamily: '"Creato Display", sans-serif' }}>
            Explore Our Domains
          </h3>
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            {[
              { name: "Education", id: "education" },
              { name: "Society", id: "society" },
              { name: "Environment", id: "environment" },
              { name: "Health", id: "health" }
            ].map((domain) => (
              <Link
                key={domain.id}
                to={`/activity/${domain.id}`}
                className="bg-gray-100 hover:bg-white rounded-xl p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 group cursor-pointer no-underline"
              >
                <span className="text-xl font-medium text-[#19366b] group-hover:text-[#F6170F] transition-colors">
                  {domain.name}
                </span>
                <span className="text-[#19366b] group-hover:text-[#F6170F] transform group-hover:translate-x-1 transition-all duration-300 text-2xl">
                  &gt;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
