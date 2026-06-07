export default function NoticeTable({ notices, highlight = false }) {
  return (
    <div className="border border-whisper rounded-xl bg-pure overflow-hidden shadow-sm">
      <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] bg-navy text-pure text-[11px] font-semibold uppercase tracking-wider">
        <div className="px-5 py-3 border-r border-pure/10">Date</div>
        <div className="px-5 py-3">Notice</div>
      </div>

      {notices.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] border-b border-whisper last:border-b-0 transition-all duration-300 hover:bg-canvas animate-cascade ${highlight ? "hover:border-l-4 hover:border-l-crimson hover:-translate-y-px" : "hover:-translate-y-px"}`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="px-5 py-5 border-r border-whisper text-sm font-mono font-medium text-navy leading-snug">
            {item.date}
          </div>

          <div className="px-5 py-4 min-w-0">
            <p className="text-[15px] font-display font-semibold text-navy leading-snug group-hover:text-crimson transition-colors">
              {item.title}
            </p>

            <p className="text-sm text-muted mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}