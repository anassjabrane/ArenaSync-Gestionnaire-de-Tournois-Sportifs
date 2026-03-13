import React, { useState } from "react";
import StatusBadge from "./StatusBadge";
import ParticipantRow from "./ParticipantRow";
// 1. ✅ Importi l-Formulaire dyalk
import RegistrationForm from "./RegistrationForm"; 

export default function TournamentCard({ tournament }) {
  const [activeTab, setActiveTab] = useState("info");
  
  // Hada hwa l-bouton dyal s'inscrire (Challenge 1)
  const [isRegistered, setIsRegistered] = useState(false);

  const [participants ,SetParticipants]=useState(tournament.participants ||[]);

  const handleAddParticipant = (newparticipant)=>{

    SetParticipants([...participants , newparticipant])
  };

  if(!tournament) return null;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col">
      {/* ... (Header dyal l-card) ... */}
      <div className="p-6 pb-2 flex justify-between items-start gap-3">
        <h3 className="text-lg font-black text-gray-900">{tournament.title}</h3>
        <StatusBadge status={tournament.status} />
      </div>

      {/* ... (Tabs: Info / Participants) ... */}

      <div className="px-6 pb-6 flex-grow">
        {activeTab === "info" ? (
          <p className="text-gray-500 text-sm text-left">{tournament.description}</p>
        ) : (

          <div className="space-y-1">
            {participants.map((p) => (
              <ParticipantRow key={p.id} participant={p} />
            ))}
          </div>
        )}

        {/* 2. ✅ Affichage Conditionnel (Hna fin katsme3 l-interactivité) */}
        {/* Ila isRegistered == true, ghadi i-t7el l-formulaire jdid */}
        {isRegistered && (
          <div className="mt-4 border-t pt-4 animate-fade-in">
            <RegistrationForm  OnAdd={handleAddParticipant}/>
          </div>
        )}
      </div>

      <div className="px-6 pb-6">
        {/* 3. ✅ Had l-bouton hwa li kay-t7ekkem f l-état */}
        <button
          onClick={() => setIsRegistered(!isRegistered)}
          className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
            isRegistered 
              ? 'bg-red-50 text-red-500 border-2 border-red-500' 
              : 'bg-indigo-600 text-white shadow-lg'
          }`}
        >
          {isRegistered ? "Annuler l'inscription" : "S'inscrire au tournoi"}
        </button>
      </div>
    </div>
  );
}