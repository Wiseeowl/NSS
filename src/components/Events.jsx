import { events } from "../data/events";

function Events() {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] font-sans">

      
      <div className="relative w-full h-[60vh] min-h-[450px] overflow-hidden">
        <img
          src="/health.jpeg"
          alt="Events"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-widest uppercase">
            EVENTS & ACTIVITIES
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-white font-medium tracking-wide">
            Engage With Our Community Initiatives
          </p>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">

        
        <h2 className="text-2xl font-semibold text-[#19366b] mb-8 border-b-2 border-[#F6170F] inline-block pb-1">
          Our Events
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 border-t-4 border-t-[#F6170F] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >

              
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
              </div>

              
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#19366b]">
                  {event.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed border-l-2 border-l-[#F6170F] pl-3">
                  add discription
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Events;