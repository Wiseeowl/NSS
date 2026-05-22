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

// Reusable CategoryTab Component for the connected tab UI
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

      <div className="relative w-full h-[50vh] min-h-[380px] overflow-hidden flex items-center justify-center">
        <img
          src="/health.jpeg"
          alt="NSS Events"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="bg-[#f6170f] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
            NSS BIT Mesra
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide uppercase mt-4 mb-4 drop-shadow-md">
            Events & Activities
          </h1>
          <div className="w-24 h-1 bg-[#f6170f] mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg md:text-xl text-zinc-200 font-medium max-w-2xl mx-auto leading-relaxed">
            Discover, participate, and make a difference. Engage with our student-led community initiatives and welfare campaigns.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20">

        {/* Premium Connected Search & Filter Section */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white border border-zinc-200 rounded-2xl p-4 mb-10 shadow-sm">
          {/* Search Bar on the Left */}
          <div className="relative flex-grow max-w-xl">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-zinc-400" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events by name, description or venue..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#19366b]/20 focus:border-[#19366b] transition-all h-10"
            />
          </div>

          {/* Category Filter Tabs on the Right */}
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

        {/* Event Cards Grid / Empty State */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => {
              return (
                <div
                  key={event.id}
                  onClick={() => openModal(event)}
                  className="group bg-white border border-zinc-200 hover:border-zinc-400 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full cursor-pointer"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#19366b] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {event.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-zinc-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-[#f6170f]" />
                        {formatDate(event.date)}
                      </span>
                      <span className="text-zinc-300">•</span>
                      <span className="flex items-center gap-1 max-w-[150px] truncate">
                        <MapPin className="h-3.5 w-3.5 text-[#f6170f]" />
                        {event.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#19366b] group-hover:text-[#f6170f] transition-colors mb-3 leading-snug">
                      {event.name}
                    </h3>

                    <p className="text-zinc-650 text-sm leading-relaxed mb-6 border-l-2 border-[#f6170f] pl-3">
                      {event.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#19366b] flex items-center gap-1 group-hover:text-[#f6170f] transition-all">
                        View Details
                        <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {activeEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-all animate-fade-in">

          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative animate-scale-up border border-zinc-200">

            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all focus:outline-none cursor-pointer"
              title="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-y-auto flex-grow scrollbar-thin">

              <div className="relative h-64 sm:h-80 w-full bg-zinc-100">
                <img
                  src={activeEvent.image}
                  alt={activeEvent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-[#f6170f] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {activeEvent.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 drop-shadow-md">
                    {activeEvent.name}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-50 border border-zinc-150 p-5 rounded-2xl mb-6 text-sm text-zinc-700">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[#f6170f] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Date</span>
                      <span className="font-semibold text-[#19366b]">{formatDate(activeEvent.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#f6170f] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Time</span>
                      <span className="font-semibold text-zinc-800">{activeEvent.time}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#f6170f] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Location</span>
                      <span className="font-semibold text-zinc-800">{activeEvent.location}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-[#f6170f] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Coordinator</span>
                      <span className="font-semibold text-zinc-800">{activeEvent.coordinator}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#19366b] uppercase tracking-wider mb-3">
                    Event Overview
                  </h4>
                  <p className="text-zinc-650 text-sm leading-relaxed whitespace-pre-line">
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