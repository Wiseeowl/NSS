import { useState, useMemo } from "react";
import { events } from "../data/events";
import {
  Search,
  Calendar,
  MapPin,
  Clock,
  User,
  X,
  Grid,
  List,
  ChevronRight,
  Filter,
  CheckCircle,
  ArrowUpDown
} from "lucide-react";

const formatDate = (dateStr) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateStr).toLocaleDateString("en-US", options);
};

export default function Events() {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date-desc");
  const [viewMode, setViewMode] = useState("grid");
  const [activeEvent, setActiveEvent] = useState(null);

  const [isRegistering, setIsRegistering] = useState(false);
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regRoll, setRegRoll] = useState("");
  const [regSuccess, setRegSuccess] = useState(false);

  const categories = useMemo(() => {
    const list = new Set(events.map((e) => e.category));
    return ["All", ...Array.from(list)];
  }, []);

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {

        const matchesSearch =
          event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (event.detailedDescription &&
            event.detailedDescription.toLowerCase().includes(searchQuery.toLowerCase())) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
          selectedCategory === "All" || event.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "date-desc") {
          return new Date(b.date) - new Date(a.date);
        }
        if (sortBy === "date-asc") {
          return new Date(a.date) - new Date(b.date);
        }
        if (sortBy === "alpha-asc") {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === "alpha-desc") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, sortBy]);

  const openModal = (event) => {
    setActiveEvent(event);
    setIsRegistering(false);
    setRegSuccess(false);
    setRegName("");
    setRegEmail("");
    setRegRoll("");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regRoll) return;

    setTimeout(() => {
      setRegSuccess(true);
    }, 400);
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">

        <div className="bg-white rounded-3xl shadow-xl border border-zinc-200/80 p-6 md:p-8 mb-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

            <div className="relative lg:col-span-6">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events by name, description or venue..."
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#19366b]/20 focus:border-[#19366b] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 lg:col-span-6 w-full">

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider pl-1">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 px-3 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#19366b]/20 focus:border-[#19366b] transition-all text-[#19366b] cursor-pointer"
                >
                  <option value="date-desc">Date: Newest</option>
                  <option value="date-asc">Date: Oldest</option>
                  <option value="alpha-asc">Alphabetical (A-Z)</option>
                  <option value="alpha-desc">Alphabetical (Z-A)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 justify-end">
                <label className="hidden sm:block text-[10px] font-bold text-zinc-400 uppercase tracking-wider pl-1">Layout</label>
                <div className="flex bg-zinc-50 border border-zinc-200 p-1 rounded-xl w-full h-[38px] justify-between items-center">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex-1 flex justify-center py-1.5 rounded-lg transition-all ${
                      viewMode === "grid"
                        ? "bg-[#19366b] text-white shadow-sm"
                        : "text-zinc-500 hover:text-zinc-800"
                    }`}
                    title="Grid View"
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex-1 flex justify-center py-1.5 rounded-lg transition-all ${
                      viewMode === "list"
                        ? "bg-[#19366b] text-white shadow-sm"
                        : "text-zinc-500 hover:text-zinc-800"
                    }`}
                    title="List View"
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-zinc-100">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="h-3.5 w-3.5 text-[#19366b]" />
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                Filter by Category
              </span>
            </div>

            <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[#19366b] text-white shadow-md shadow-[#19366b]/10 scale-102"
                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between mb-8 px-2">
          <p className="text-sm font-semibold text-zinc-500">
            Showing <span className="text-[#19366b] font-bold">{filteredEvents.length}</span> event{filteredEvents.length !== 1 && "s"}
          </p>
          {(searchQuery || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-bold text-[#f6170f] hover:underline cursor-pointer"
            >
              Clear all filters
            </button>
          )}
        </div>

        {filteredEvents.length === 0 ? (
          <div className="bg-white border border-zinc-200 rounded-3xl p-16 text-center shadow-sm">
            <div className="mx-auto w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-zinc-400" />
            </div>
            <h3 className="text-lg font-bold text-[#19366b] mb-1">No Events Found</h3>
            <p className="text-zinc-500 text-sm max-w-md mx-auto">
              We couldn't find any events matching your search or filters. Try adjusting your selections or clearing all filters.
            </p>
          </div>
        ) : viewMode === "grid" ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => {
              return (
                <div
                  key={event.id}
                  onClick={() => openModal(event)}
                  className="group bg-white border border-zinc-200 hover:border-zinc-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-pointer"
                >

                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

                    <p className="text-zinc-600 text-sm leading-relaxed mb-6 border-l-2 border-[#f6170f] pl-3">
                      {event.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#19366b] flex items-center gap-1 group-hover:text-[#f6170f] transition-all">
                        View Details
                        <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (

          <div className="flex flex-col gap-6">
            {filteredEvents.map((event) => {
              return (
                <div
                  key={event.id}
                  onClick={() => openModal(event)}
                  className="group bg-white border border-zinc-200 hover:border-zinc-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row w-full cursor-pointer"
                >

                  <div className="relative w-full md:w-80 md:shrink-0 aspect-[16/10] md:aspect-auto overflow-hidden bg-zinc-100">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />

                    <div className="absolute top-4 left-4 bg-[#19366b] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {event.category}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold text-zinc-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-[#f6170f]" />
                          {formatDate(event.date)}
                        </span>
                        <span className="text-zinc-300">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-[#f6170f]" />
                          {event.location}
                        </span>
                        <span className="text-zinc-300">•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-zinc-400" />
                          {event.time}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-[#19366b] group-hover:text-[#f6170f] transition-colors mb-3">
                        {event.name}
                      </h3>

                      <p className="text-zinc-600 text-sm leading-relaxed mb-6 border-l-2 border-[#f6170f] pl-3 max-w-3xl">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between mt-auto">
                      <div className="text-xs text-zinc-500 font-medium">
                        Coordinator: <span className="font-bold text-zinc-700">{event.coordinator}</span>
                      </div>
                      <span className="text-xs font-bold text-[#19366b] flex items-center gap-1 group-hover:text-[#f6170f] transition-all">
                        View Details
                        <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
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

                {!isRegistering ? (

                  <div>
                    <h4 className="text-sm font-bold text-[#19366b] uppercase tracking-wider mb-3">
                      Event Overview
                    </h4>
                    <p className="text-zinc-650 text-sm leading-relaxed mb-6 whitespace-pre-line">
                      {activeEvent.detailedDescription || activeEvent.description}
                    </p>

                    <div className="pt-6 border-t border-zinc-150 flex flex-wrap gap-4 items-center justify-end">
                      <button
                        onClick={() => setIsRegistering(true)}
                        className="bg-[#f6170f] hover:bg-[#d0100a] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-lg shadow-[#f6170f]/20 hover:shadow-xl transition-all cursor-pointer"
                      >
                        Register for this Event
                      </button>
                    </div>
                  </div>
                ) : (

                  <div className="animate-fade-in">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-150">
                      <h4 className="text-sm font-bold text-[#19366b] uppercase tracking-wider">
                        Volunteer Registration Form
                      </h4>
                      <button
                        onClick={() => setIsRegistering(false)}
                        className="text-xs font-bold text-zinc-500 hover:text-zinc-700 hover:underline"
                      >
                        Back to details
                      </button>
                    </div>

                    {regSuccess ? (

                      <div className="text-center py-8 animate-scale-up">
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-10 w-10" />
                        </div>
                        <h5 className="text-lg font-bold text-zinc-800 mb-1">Registration Successful!</h5>
                        <p className="text-sm text-zinc-500 max-w-sm mx-auto mb-6">
                          Thank you <span className="font-bold text-zinc-700">{regName}</span>. Your details have been submitted. A confirmation has been logged for <span className="font-semibold text-zinc-700">{activeEvent.name}</span>.
                        </p>
                        <button
                          onClick={() => setActiveEvent(null)}
                          className="bg-[#19366b] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-[#122850] transition-colors"
                        >
                          Okay, Done
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleRegisterSubmit} className="space-y-4">
                        <div className="flex flex-col gap-1">
                          <label className="text-xs font-bold text-zinc-500">Full Name</label>
                          <input
                            type="text"
                            required
                            value={regName}
                            onChange={(e) => setRegName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full bg-zinc-50 border border-zinc-200 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#19366b]/20 focus:border-[#19366b] transition-all"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-zinc-500">Email Address</label>
                            <input
                              type="email"
                              required
                              value={regEmail}
                              onChange={(e) => setRegEmail(e.target.value)}
                              placeholder="yourname@gmail.com"
                              className="w-full bg-zinc-50 border border-zinc-200 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#19366b]/20 focus:border-[#19366b] transition-all"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-zinc-500">Roll Number / Department</label>
                            <input
                              type="text"
                              required
                              value={regRoll}
                              onChange={(e) => setRegRoll(e.target.value)}
                              placeholder="e.g. BE/10234/23"
                              className="w-full bg-zinc-50 border border-zinc-200 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#19366b]/20 focus:border-[#19366b] transition-all"
                            />
                          </div>
                        </div>

                        <div className="pt-6 border-t border-zinc-150 flex gap-3 justify-end">
                          <button
                            type="button"
                            onClick={() => setIsRegistering(false)}
                            className="px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-500 hover:bg-zinc-100 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#f6170f] hover:bg-[#d0100a] transition-all cursor-pointer shadow-md"
                          >
                            Submit Registration
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}