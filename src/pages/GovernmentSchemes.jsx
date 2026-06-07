import { useMemo, useState } from "react";
import schemes from "../components/GovernmentSchemes/schemes";
import SchemeCard from "../components/GovernmentSchemes/SchemeCard";

function GovernmentSchemes() {
  const [activeButton, setActiveButton] = useState("Central");

  const filteredSchemes = useMemo(
    () => schemes.filter((scheme) => scheme.type === activeButton),
    [activeButton]
  );

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] font-sans">
      <div className="relative w-full h-[60vh] min-h-[450px] overflow-hidden">
        
        <img
          src="/GovernmentSchemes_Img.png"
          alt="Government Schemes"
          className="absolute inset-0 w-full h-full object-cover"
        />

        
        <div className="absolute inset-0 bg-[#0D1B36]/80" />

        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-[Outfit] text-white tracking-tight">
            GOVERNMENT SCHEMES
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-white/90 font-medium tracking-wide">
            Empowering Citizens Through Welfare Programs
          </p>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-center">
        <div className="inline-flex border border-[#19366B]/15 rounded-full p-1 bg-white shadow-sm">
          <button
            onClick={() => setActiveButton("Central")}
            className={`
              px-8 py-3 text-sm font-bold rounded-full transition-all duration-300
              ${
                activeButton === "Central"
                  ? "bg-[#F6170F] text-white shadow-md transform -translate-y-[1px]"
                  : "text-[#64748B] hover:text-[#0D1B36] hover:bg-[#F8FAFC]"
              }
            `}
          >
            Central Government
          </button>

          <button
            onClick={() => setActiveButton("State")}
            className={`
              px-8 py-3 text-sm font-bold rounded-full transition-all duration-300
              ${
                activeButton === "State"
                  ? "bg-[#F6170F] text-white shadow-md transform -translate-y-[1px]"
                  : "text-[#64748B] hover:text-[#0D1B36] hover:bg-[#F8FAFC]"
              }
            `}
          >
            State Government
          </button>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between border-b border-[#19366B]/10 pb-4">
          <h2 className="text-2xl font-bold text-[#0D1B36] font-[Outfit]">
            {activeButton} Government Schemes
          </h2>
          <span className="text-sm font-medium text-[#64748B] bg-white px-3 py-1 rounded-full border border-[#19366B]/10">
            {filteredSchemes.length} Schemes
          </span>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-24">
        {filteredSchemes.length === 0 ? (
          <div className="text-center text-[#64748B] py-20 font-medium">
            No schemes available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(250px,auto)]">
            {filteredSchemes.map((scheme, index) => {
              // Create bento grid layout
              const isHero = index === 0;
              const isWide = index === 3 || index === 4;
              const isTall = index === 1;

              let spanClasses = "col-span-1";
              if (isHero) spanClasses = "md:col-span-2 lg:col-span-2 md:row-span-2";
              else if (isTall) spanClasses = "md:row-span-2";
              else if (isWide) spanClasses = "md:col-span-2 lg:col-span-2";

              return (
                <div key={scheme.id} className={spanClasses}>
                  <SchemeCard scheme={scheme} featured={isHero} />
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}

export default GovernmentSchemes;
