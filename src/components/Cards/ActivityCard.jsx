import { useState } from "react";

function ActivityCard({ activity }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 border-t-5 border-orange-300">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 hover:bg-gray-100 transition cursor-pointer space-y-2 sm:space-y-0"
      >
        <div className="flex items-center space-x-4">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-16 h-16 object-cover rounded-xl"
          />
          <span className="text-lg font-semibold">{activity.title}</span>
        </div>
        <span className="text-sm text-gray-500">{activity.category}</span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-gray-50 ${
          expanded ? "max-h-96 p-4" : "max-h-0 p-0"
        }`}
      >
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: activity.description }}
        />
      </div>
    </li>
  );
}

export default ActivityCard;
