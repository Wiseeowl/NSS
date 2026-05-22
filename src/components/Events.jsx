import { useState, useMemo } from "react";
import { events } from "../data/events";
import {
  Calendar,
  MapPin,
  Clock,
  User,
  X,
  ChevronRight,
  Search
} from "lucide-react";

const formatDate = (dateStr) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateStr).toLocaleDateString("en-US", options);
};

const CategoryTab = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 text-xs font-bold uppercase tracking-wider transition-all duration-200 h-full flex items-center justify-center cursor-pointer whitespace-nowrap ${
        isActive
          ? "bg-[#19366b] text-white"
          : "bg-white text-[#19366b] hover:bg-zinc-50 hover:text-[#19366b]"
      }`}
    >
      {category}
    </button>
  );
};

const EventCard = ({ event, openModal, formatDate }) => {
  return (
    <div
      onClick={() => openModal(event)}
      className="group relative bg-white border border-[#19366b]/20 hover:border-[#19366b]/35 hover:-translate-y-1.5 hover:shadow-xl rounded-2xl overflow-hidden shadow-sm flex flex-col h-full cursor-pointer select-none transition-all duration-300 ease-out animate-fade-in"
    >
      <div className="absolute top-0 left-0 h-[3px] bg-[#f6170f] w-0 group-hover:w-full transition-all duration-300 ease-out z-30" />

      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover transition-all duration-300 ease-out opacity-95 group-hover:opacity-100"
        />
        <div className="absolute top-3 left-3 bg-[#19366b] group-hover:bg-[#f6170f] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm transition-all duration-300">
          {event.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-zinc-50/10 transition-all duration-300">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-zinc-400 mb-3.5">
          <span className="flex items-center gap-1.5 bg-zinc-50 group-hover:bg-[#f6170f]/5 text-zinc-500 group-hover:text-[#f6170f] px-2.5 py-1 rounded-lg transition-all duration-300 shadow-sm">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-1.5 bg-zinc-50 group-hover:bg-[#19366b]/5 text-zinc-500 group-hover:text-[#19366b] px-2.5 py-1 rounded-lg transition-all duration-300 shadow-sm max-w-[120px] sm:max-w-[150px] lg:max-w-[180px] truncate">
            <MapPin className="h-3.5 w-3.5" />
            {event.location}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#19366b] group-hover:text-[#f6170f] transition-colors mb-3 leading-snug">
          {event.name}
        </h3>

        <p className="text-zinc-650 text-sm leading-relaxed mb-6 border-l-2 border-[#f6170f] group-hover:border-l-[3.5px] group-hover:border-l-[#19366b] pl-3 transition-all duration-300 line-clamp-3">
          {event.description}
        </p>

        <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
          <span className="text-xs font-bold text-[#19366b] flex items-center gap-1 group-hover:text-[#f6170f] transition-all">
            <span className="relative overflow-hidden pb-0.5">
              View Details
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#f6170f] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </span>
          
          <div className="w-7 h-7 rounded-full bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-[#19366b] group-hover:bg-[#f6170f] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
            <ChevronRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Events() {
  const [activeEvent, setActiveEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Health & Hygiene",
    "Social Awareness & Rallies",
    "Environment & Cleanliness",
    "Education & Literacy",
    "Fitness & Rallies"
  ];

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        const matchesCategory =
          selectedCategory === "All" || event.category === selectedCategory;

        const matchesQuery =
          event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (event.detailedDescription &&
            event.detailedDescription.toLowerCase().includes(searchQuery.toLowerCase())) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [searchQuery, selectedCategory]);

  const openModal = (event) => {
    setActiveEvent(event);
  };

  return (
    <div className="w-full min-h-screen bg-zinc-50 font-sans pb-24 text-zinc-800">

      <div className="relative w-full h-[35vh] sm:h-[45vh] lg:h-[50vh] min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] overflow-hidden flex items-center justify-center">
        <img
          src="/health.jpeg"
          alt="NSS Events"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide uppercase mt-3.5 sm:mt-4 mb-3 sm:mb-4 drop-shadow-md">
            Events & Activities
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-200 font-medium max-w-2xl mx-auto leading-relaxed">
            Engage With Our Community Initiatives
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20">

        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white border border-zinc-200 rounded-2xl p-3.5 sm:p-4 mb-8 sm:mb-10 shadow-sm">
          <div className="relative flex-grow max-w-full lg:max-w-xl">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-zinc-400" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events"
              className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#19366b]/20 focus:border-[#19366b] transition-all h-10"
            />
          </div>

          <div className="relative overflow-hidden w-full lg:w-auto rounded-lg">
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 lg:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 lg:hidden" />

            <div className="overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full lg:w-auto">
              <div className="flex items-center border border-zinc-200 rounded-lg bg-white overflow-hidden divide-x divide-zinc-200 h-10 min-w-max">
                {categories.map((cat) => (
                  <CategoryTab
                    key={cat}
                    category={cat}
                    isActive={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-white border border-zinc-200 rounded-2xl shadow-sm max-w-xl mx-auto mt-6">
            <Search className="h-10 w-10 text-zinc-350 mx-auto mb-3 text-[#19366b]/40" />
            <h3 className="text-lg font-bold text-[#19366b] mb-1">No Events Found</h3>
            <p className="text-zinc-500 text-sm max-w-xs mx-auto">
              We couldn't find any events matching your search or category selection. Try clearing your filters or typing a different query.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-5 bg-[#19366b] hover:bg-[#122850] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                openModal={openModal}
                formatDate={formatDate}
              />
            ))}
          </div>
        )}

      </div>

      {activeEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3.5 sm:p-6 transition-all animate-fade-in">

          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-[95vw] sm:max-w-2xl md:max-w-3xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative animate-scale-up border border-zinc-200">

            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all focus:outline-none cursor-pointer"
              title="Close modal"
            >
              <X className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
            </button>

            <div className="overflow-y-auto flex-grow scrollbar-thin">

              <div className="relative h-44 sm:h-64 md:h-80 w-full bg-zinc-100">
                <img
                  src={activeEvent.image}
                  alt={activeEvent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="bg-[#f6170f] text-white text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {activeEvent.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-2 sm:mt-3 drop-shadow-md leading-tight">
                    {activeEvent.name}
                  </h2>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 bg-zinc-50 border border-zinc-150 p-4 sm:p-5 rounded-xl sm:rounded-2xl mb-5 sm:mb-6 text-xs sm:text-sm text-zinc-700">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <Calendar className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-[#f6170f] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Date</span>
                      <span className="font-semibold text-[#19366b]">{formatDate(activeEvent.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <Clock className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-[#f6170f] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Time</span>
                      <span className="font-semibold text-zinc-800">{activeEvent.time}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <MapPin className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-[#f6170f] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Location</span>
                      <span className="font-semibold text-zinc-800">{activeEvent.location}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <User className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-[#f6170f] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Coordinator</span>
                      <span className="font-semibold text-zinc-800">{activeEvent.coordinator}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#19366b] uppercase tracking-wider mb-2.5 sm:mb-3">
                    Event Overview
                  </h4>
                  <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {activeEvent.detailedDescription || activeEvent.description}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}