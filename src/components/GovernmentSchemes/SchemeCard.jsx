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

function SchemeCard({ scheme }) {
  const IconComponent = iconMap[scheme.categoryIcon];

  return (
    <div
      className="
      bg-white
      border border-[#D9DEE7]
      rounded-md
      flex flex-col h-full

      transition-all duration-200 ease-out
      hover:-translate-y-[2px]
      hover:shadow-sm

      active:translate-y-0
      active:shadow-none
     "
    >
      <div className="h-[3px] w-full bg-[#19366B]" />
      <div className="p-6 flex flex-col h-full">
        
        <div className="flex items-center gap-3 mb-4">
          <div
            className="
              w-9 h-9
              flex items-center justify-center
              border border-[#E1E6ED]
              rounded
              bg-[#F8FAFC]
            "
          >
            {IconComponent && (
              <IconComponent size={18} className="text-[#F6170F]" />
            )}
          </div>

          <span
            className="
              text-[11px]
              uppercase
              tracking-wider
              text-[#6B7280]
              break-words
              whitespace-normal
            "
          >
            {scheme.category}
          </span>
        </div>

        
        <h3
          className="
            text-[16px]
            font-semibold
            text-[#19366B]
            leading-snug
            mb-3
          "
        >
          {scheme.title}
        </h3>

        
        <p
          className="
            text-sm
            text-[#4B5563]
            leading-relaxed
            line-clamp-3
            mb-6
          "
        >
          {scheme.shortInfo}
        </p>

        
        <div className="mt-auto pt-4 border-t border-[#E6EAF0]">
          <a
            href={scheme.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1.5
              text-sm font-medium
              text-[#19366B]
              hover:underline
              underline-offset-4
            "
          >
            View details
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SchemeCard;
