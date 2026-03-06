import React, { useState } from "react";
import StatusBadge from "./StatusBadge";

export default function TournamentCard({ tournament }) {
  const [activeTab, setActiveTab] = useState("info");

  if (!tournament) return null;

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      
      {/* 🚀 Navigation Tabs - Hna fin ghadi n-khdmo b setActiveTab */}
      <div className="flex border-b border-gray-100 bg-gray-50">
        <button 
          // 💡 Hada huwa l-key: mli kiy-cliqui l-user, setActiveTab kat-khdem
          onClick={() => setActiveTab("info")} 
          className={`flex-1 py-3 text-sm font-bold ${activeTab === 'info' ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-gray-400'}`}
        >
          Info
        </button>
        
        <button 
          // 💡 Hna tani: setActiveTab kat-beddel l-state l "participants"
          onClick={() => setActiveTab("participants")} 
          className={`flex-1 py-3 text-sm font-bold ${activeTab === 'participants' ? 'text-blue-600 border-b-2 border-blue-600 bg-white' : 'text-gray-400'}`}
        >
          Participants ({tournament.participants?.length || 0})
        </button>
      </div>

      {/* L-Contenu li kiy-tbeddel */}
      <div className="p-5">
        {activeTab === "info" ? (
          <p className="text-gray-600 text-sm">{tournament.description}</p>
        ) : (
          <div className="space-y-2">
             {/* Challenge 5 Logic: Mapping des participants */}
            {tournament.participants?.map((p) => (
              <div key={p.id} className="text-sm font-medium p-2 bg-gray-50 rounded">
                {p.name} - <span className="text-blue-500 uppercase text-[10px]">{p.status}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}