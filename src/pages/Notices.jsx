import { notices } from "../data/notices";

const sortedNotices = [...notices].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const NoticeBoard = () => {
  return (
    <div className="w-[85%] mx-auto mt-10 mb-12 border overflow-hidden shadow-sm bg-gray-100">
      
      
      <div className="grid grid-cols-5 bg-[#19366b] text-white font-semibold px-4 py-3">
        <div className="col-span-1">Date</div>
        <div className="col-span-4">Notice</div>
      </div>

      
      {sortedNotices.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-5 px-4 py-4 border-b last:border-b-0 bg-gray-100 hover:bg-gray-200 transition"
        >
          <div className="col-span-1 text-sm font-medium text-gray-700">
            {item.date}
          </div>

          <div className="col-span-4">
            <p className="font-semibold text-[#19366b]">
              {item.title}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {item.description}
            </p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default NoticeBoard;