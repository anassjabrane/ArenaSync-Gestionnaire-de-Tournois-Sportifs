import React from "react";



// 1. L-Composant qbel l-Prop (status)
export default function StatusBadge({ status }) {
  
  // 2. L-Logic Conditionnelle (L-Mantiq)
  let bgColor = "";

  if (status === "On Going") {
    bgColor = "bg-green-100 text-green-700 border-green-200"; // Vert
  } else if (status === "Upcoming") {
    bgColor = "bg-blue-100 text-blue-700 border-blue-200";   // Bleu
  } else if (status === "Pending") {
    bgColor = "bg-orange-100 text-orange-700 border-orange-200"; // Orange
  } else {
    bgColor = "bg-gray-100 text-gray-700 border-gray-200";   // Par défaut
  }

  // 3. Affichage (Le Rendu)
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-bold border ${bgColor}`}>
      {status}
    </span>
  );
}




