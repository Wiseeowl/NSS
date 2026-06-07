import { Link } from "react-router-dom";
import { notices } from "../data/notices";
import { events } from "../data/events";

const sortedNotices = [...notices].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);
const latestNotices = sortedNotices.slice(0, 5);
const scrollNotices = [...latestNotices, ...latestNotices];
const latestEvents = [...events]
  .sort((a, b) => b.id - a.id)
  .slice(0, 6);

export default function Message() {
  return (
    <section id="notice" className="w-full bg-[#F8FAFC] py-20 px-6 sm:px-12 md:px-24" style={{ fontFamily: `"Satoshi", sans-serif` }}>
      {/* Notices Ticker */}
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(13,27,54,0.05)] border border-[rgba(25,54,107,0.15)] mb-20 flex flex-col md:flex-row">
        <div className="flex items-center justify-center bg-[#0D1B36] px-8 py-4 md:w-48 shrink-0">
          <span className="text-sm font-bold uppercase tracking-widest text-white" style={{ fontFamily: `"Outfit", sans-serif` }}>
            Notices
          </span>
        </div>
        <div className="flex-1 overflow-hidden notice-ticker flex items-center bg-white px-4 py-4">
          <div className="ticker-track flex whitespace-nowrap animate-scroll-left text-sm font-semibold tracking-wide text-[#0F172A]">
            {scrollNotices.map((item, index) => (
              <span key={index} className="mx-8 flex-shrink-0 flex items-center gap-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F6170F]"></span>
                {item.title}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center bg-white px-6 py-4 border-t md:border-t-0 md:border-l border-[rgba(25,54,107,0.15)] shrink-0">
          <Link
            to="/notice"
            className="text-xs font-bold uppercase tracking-widest text-[#F6170F] hover:text-[#19366B] transition-colors"
            style={{ fontFamily: `"Outfit", sans-serif` }}
          >
            View All
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: General Message */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-8 leading-[1.2] tracking-tight" style={{ fontFamily: `"Outfit", sans-serif` }}>
            About <span className="text-[#19366B]">NSS BIT Mesra</span>
          </h2>
          <div className="text-[#64748B] text-lg leading-relaxed space-y-6">
            <p>
              The National Service Scheme (NSS) at Birla Institute of Technology, Mesra is a student-driven initiative committed to community service and social development. Guided by the motto <span className="font-semibold text-[#0F172A]">“Not Me, But You,”</span> we encourage students to look beyond academics and actively contribute to society.
            </p>
            <p>
              Through awareness campaigns, social outreach, environmental initiatives, health drives, and educational programs, our volunteers work towards creating meaningful and lasting impact.
            </p>
          </div>
        </div>

        {/* Right Column: Messages with Offset Images */}
        <div className="lg:col-span-7 space-y-12 lg:pl-10">
          {/* VC Message */}
          <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-[0_10px_30px_rgba(13,27,54,0.05)] border border-[rgba(25,54,107,0.15)] pt-16 mt-12 md:mt-0 md:pt-10 md:pl-28 transition-transform hover:-translate-y-[2px] group">
            <img
              src="/Manna.png"
              alt="Prof. Indranil Manna"
              className="absolute -top-10 left-8 md:top-8 md:-left-12 h-24 w-24 rounded-2xl object-cover shadow-[0_10px_30px_rgba(13,27,54,0.1)] border-4 border-white"
              draggable="false"
            />
            <div className="absolute top-0 left-0 w-full h-1 bg-[#F6170F] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-1" style={{ fontFamily: `"Outfit", sans-serif` }}>
              Prof. Indranil Manna
            </h3>
            <p className="text-sm font-bold text-[#F6170F] mb-4 tracking-wider uppercase" style={{ fontFamily: `"Outfit", sans-serif` }}>Vice Chancellor</p>
            <p className="text-[#64748B] leading-relaxed">
              "NSS plays a vital role in fostering social responsibility, compassion, and leadership among students, creating a positive impact on society. I appreciate the dedication of all NSS volunteers whose efforts make our institution a true agent of change."
            </p>
          </div>

          {/* Coordinator Message */}
          <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-[0_10px_30px_rgba(13,27,54,0.05)] border border-[rgba(25,54,107,0.15)] pt-16 mt-12 md:mt-12 md:pt-10 md:pl-28 transition-transform hover:-translate-y-[2px] group">
            <img
              src="/Pandey.png"
              alt="Dr. O.P. Pandey"
              className="absolute -top-10 left-8 md:top-8 md:-left-12 h-24 w-24 rounded-2xl object-cover shadow-[0_10px_30px_rgba(13,27,54,0.1)] border-4 border-white"
              draggable="false"
            />
            <div className="absolute top-0 left-0 w-full h-1 bg-[#F6170F] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-1" style={{ fontFamily: `"Outfit", sans-serif` }}>
              Dr. O.P. Pandey
            </h3>
            <p className="text-sm font-bold text-[#F6170F] mb-4 tracking-wider uppercase" style={{ fontFamily: `"Outfit", sans-serif` }}>Program Coordinator</p>
            <p className="text-[#64748B] leading-relaxed">
              "Welcome to the NSS Cell of Birla Institute of Technology, Mesra. NSS provides students a platform to serve society while developing leadership, teamwork, and social responsibility. I encourage you to actively participate."
            </p>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="mx-auto max-w-7xl mt-32">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight" style={{ fontFamily: `"Outfit", sans-serif` }}>
              Recent <span className="text-[#19366B]">Events</span>
            </h2>
            <div className="h-[3px] w-16 bg-[#F6170F] mt-4" />
          </div>
          <Link
            to="/events"
            className="text-sm font-bold uppercase tracking-widest text-[#19366B] hover:text-[#F6170F] transition-colors"
            style={{ fontFamily: `"Outfit", sans-serif` }}
          >
            Explore All Events &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestEvents.map((event, i) => (
            <article
              key={event.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(13,27,54,0.05)] border border-[rgba(25,54,107,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(13,27,54,0.08)]"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0D1B36]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#F6170F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 leading-snug" style={{ fontFamily: `"Outfit", sans-serif` }}>
                  {event.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
