// src/components/TournamentCard.jsx
import React from "react";
import StatusBadge from "./StatusBadge"; // N-reutilisew l-badge dialna

export default function TournamentCard(tournament) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{tournament.title}</h3>
        <StatusBadge status={tournament.status} />
        <p></p>
      </div>
      <p className="text-gray-600 mb-2">📍 {tournament.location}</p>
      <p className="text-sm text-gray-400 italic">{tournament.date}</p>
    </div>
  );
}
