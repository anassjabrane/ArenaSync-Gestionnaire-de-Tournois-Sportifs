import React from "react";

export default function StatusBadge({ status }) {
  // 1. Darori n-7etto l-classes hna bach Tailwind y-qrahom
  const allStyles = {
    "On Going": "bg-green-100 text-green-700 border-green-200",
    "Upcoming": "bg-blue-100 text-blue-700 border-blue-200",
    "Pending": "bg-orange-100 text-orange-700 border-orange-200",
    "Confirmed": "bg-green-500 text-white border-transparent"
  };

  // 2. L-Logic dyalk kima hiya (Challenge 2)
  let currentStyle = "";

  if (status === "On Going") {
    currentStyle = allStyles["On Going"];
  } else if (status === "Upcoming") {
    currentStyle = allStyles["Upcoming"];
  } else if (status === "Pending") {
    currentStyle = allStyles["Pending"];
  } else if (status === "Confirmed") {
    currentStyle = allStyles["Confirmed"];
  } else {
    currentStyle = "bg-gray-100 text-gray-700 border-gray-200";
  }

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${currentStyle}`}>
      {status}
    </span>
  );
}