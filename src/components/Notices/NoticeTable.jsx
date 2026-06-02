export default function NoticeTable({ notices, highlight = false }) {
  return (
    <div className="border border-[#D9DEE7] rounded-md bg-white overflow-hidden">
      <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] bg-[#19366B] text-white text-[11px] font-semibold uppercase tracking-wider">
        <div className="px-5 py-3 border-r border-white/10">Date</div>
        <div className="px-5 py-3">Notice</div>
      </div>

      {notices.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] border-b border-[#E6EAF0] last:border-b-0 transition-colors duration-150 hover:bg-[#F8FAFC] ${highlight ? "hover:border-l-2 hover:border-l-[#F6170F]" : ""}`}
        >
          <div className="px-5 py-5 border-r border-[#E6EAF0] text-sm font-medium text-[#19366B] leading-snug">
            {item.date}
          </div>

          <div className="px-5 py-4 min-w-0">
            <p className="text-[15px] font-semibold text-[#19366B] leading-snug">
              {item.title}
            </p>

            <p className="text-sm text-[#4B5563] mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}