const timeline = [
  { title: "Bidding starts", date: "12 Dec 2023", done: true },
  { title: "Bidding ends", date: "15 Dec 2023", done: true },
  { title: "Allotment finalization", date: "18 Dec 2023", done: true },
  { title: "Refund initiation", date: "18 Dec 2023", done: true },
  { title: "Demat transfer", date: "18 Dec 2023", done: true },
  { title: "Listing date", date: "21 Dec 2023", done: true },
];

function IpoTimeline() {
  return (
    <div className="border border-gray-300 rounded-xl p-6 mb-8">
      <h2 className="font-semibold mb-6">IPO timeline</h2>

      <div className="flex flex-wrap p-4">
        {timeline.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === timeline.length - 1;

          return (
            <div
              key={index}
              className="relative flex-1 min-w-35 flex flex-col items-center"
            >
              {!isFirst && (
                <div
                  className={`absolute top-4 left-0 w-1/2 h-px ${
                    timeline[index - 1].done ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              )}

              {!isLast && (
                <div
                  className={`absolute top-4 right-0 w-1/2 h-px ${
                    item.done ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              )}

              <div
                className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold
                  ${item.done ? "bg-green-500" : "bg-gray-300"}
                `}
              >
                {item.done ? "✓" : ""}
              </div>

              <p className="mt-3 font-medium text-center text-sm">
                {item.title}
              </p>
              <p className="text-xs text-gray-500 text-center">{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IpoTimeline;
