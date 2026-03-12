import React, { useState } from "react";
import StatusBadge from "./StatusBadge";
import ParticipantRow from "./ParticipantRow";

export default function TournamentCard({ tournament }) {
  // 1. Définition de l'état (Challenge 5)
  const [activeTab, setActiveTab] = useState("info");
  // ETAS DE INSCRIPTION ******

  const [isRegistered, setIsRegistered] = useState(false);

  if (!tournament) return null;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="p-6 pb-2 flex justify-between items-start gap-3">
        <h3 className="text-lg font-black text-gray-900 leading-tight">
          {tournament.title}
        </h3>
        <StatusBadge status={tournament.status} />
      </div>

      {/* 🚀 ghadi n-sta3mlo setActiveTab */}
      <div className="flex px-6 mb-4 gap-2 bg-white">
        <button
          // l-warning y-7iyd w l-onglet y-tbeddel
          onClick={() => setActiveTab("info")}
          className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
            activeTab === "info"
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          Info
        </button>

        <button
          // Hna tani sta3mlnaha bach n-lantiw l-mapping dyal les participants
          onClick={() => setActiveTab("participants")}
          className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
            activeTab === "participants"
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          Participants ({tournament.participants?.length || 0})
        </button>
      </div>

      {/* Logique déclarative (Challenge 5) */}
      <div className="px-6 pb-6 flex-grow">
        {activeTab === "info" ? (
          <div className="space-y-3">
            <p className="text-gray-500 text-sm">{tournament.description}</p>
          </div>
        ) : (
          <div className="space-y-1">
            {/* Challenge 5: Mapping des participants */}
            {tournament.participants?.map((p) => (
              <ParticipantRow key={p.id} participant={p} />
            ))}
          </div>
        )}
      </div>

      {/* BOUTON D'INSCRIPTION */}

      
    </div>
  );
}
