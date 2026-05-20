export default function NoticeTable({ notices, highlight = false }) {
  return (
    <div className="border border-[#D9DEE7] rounded-md bg-white overflow-hidden">
      {/* Header row */}
      <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] bg-[#19366B] text-white text-[11px] font-semibold uppercase tracking-wider px-5 py-3">
        <div>Date</div>
        <div>Notice</div>
      </div>

      {/* Notice rows */}
      {notices.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-x-4 px-5 py-4 border-b border-[#E6EAF0] last:border-b-0 transition-colors duration-150 hover:bg-[#F8FAFC] ${
            highlight ? "hover:border-l-2 hover:border-l-[#F6170F]" : ""
          }`}
        >
          <div className="text-sm font-medium text-[#6B7280] whitespace-nowrap pt-0.5">
            {item.date}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#19366B] leading-snug">
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