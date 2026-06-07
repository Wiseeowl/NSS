import {
  IndianRupee,
  HeartPulse,
  GraduationCap,
  Laptop,
  Rocket,
  ArrowRight
} from "lucide-react";

const iconMap = {
  IndianRupee,
  HeartPulse,
  GraduationCap,
  Laptop,
  Rocket
};

function SchemeCard({ scheme, featured }) {
  const IconComponent = iconMap[scheme.categoryIcon];

  return (
    <div
      className="
      bg-white
      border border-[#19366B]/15
      rounded-2xl
      flex flex-col h-full
      relative group overflow-hidden
      transition-all duration-300 ease-out
      hover:-translate-y-1
      hover:shadow-[0_10px_30px_rgba(13,27,54,0.05)]
     "
    >
      {/* Crimson top-border accent on hover */}
      <span className="absolute inset-x-0 top-0 h-1 bg-[#F6170F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-10" />
      
      <div className={`p-6 flex flex-col h-full ${featured ? 'md:p-8' : ''}`}>
        
        <div className="flex items-center gap-3 mb-5">
          <div
            className="
              w-10 h-10
              flex items-center justify-center
              border border-[#19366B]/10
              rounded-lg
              bg-[#F8FAFC]
              shrink-0
            "
          >
            {IconComponent && (
              <IconComponent size={20} className="text-[#F6170F]" />
            )}
          </div>

          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-[#64748B]
              break-words
              whitespace-normal
              font-[Outfit]
            "
          >
            {scheme.category}
          </span>
        </div>

        
        <h3
          className={`
            font-bold
            text-[#0D1B36]
            leading-snug
            mb-3
            font-[Outfit]
            tracking-tight
            ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}
          `}
        >
          {scheme.title}
        </h3>

        
        <p
          className={`
            text-[#0F172A]
            leading-relaxed
            mb-6
            ${featured ? 'text-base md:text-lg line-clamp-5' : 'text-sm line-clamp-3'}
          `}
        >
          {scheme.shortInfo}
        </p>

        
        <div className="mt-auto pt-5 border-t border-[#19366B]/10">
          <a
            href={scheme.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              text-sm font-bold
              text-[#19366B]
              hover:text-[#F6170F]
              transition-colors duration-200
            "
          >
            View details
            <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SchemeCard;
