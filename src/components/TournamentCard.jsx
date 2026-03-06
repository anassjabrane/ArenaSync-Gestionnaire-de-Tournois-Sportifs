// import React from "react";
// export default function TournamentCard({tornement}){
//     return(
//         <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:scale-105 transition-transform duration-300">
//             {/* Image du tournoi */}
//             <img 
//             src={tornement.image}
//             alt={tornement.name}
//             className="w-full h-48 object-cover"
//              />

//              {/* Infos du tournoi */}
//              <div className="p-5">
//                 <span>
//                     {tornement.category}
//                 </span>
//                 <h3>{tornement.name}</h3>
//                 <p>{tornement.date}</p>
//                 <button>voir details</button>

//              </div>

//         </div>
//     );
// }

import React from "react";
import StatusBadge from "./StatusBadge";

export default function TournamentCard({ tournament }) {
  // 🛡️ Had s-stira daroriya bach ila kant l-data khawya may-t-ferqe3ch l-site
  if (!tournament) return null;

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{tournament.title}</h3>
        <StatusBadge status={tournament.status} />
      </div>
      
      <p className="text-gray-600 mb-2 font-medium">📍 {tournament.location}</p>
      <p className="text-sm text-gray-400 italic">📅 {tournament.date}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center text-xs font-bold uppercase">
        <span className="text-blue-600">{tournament.sport}</span>
        <span className="text-gray-500">{tournament.participantsCount}</span>
      </div>
    </div>
  );
}