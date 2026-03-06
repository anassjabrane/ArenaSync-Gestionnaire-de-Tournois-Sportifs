// import React from 'react';
// import TournamentCard from './components/TournamentCard';
// import { TournamentsData } from './data/tournaments';

// export default function name({}) {
//   return(
    
//   )
  
// }

import React from 'react';
import TournamentCard from './components/TournamentCard';
import { tournamentsData } from './data/tournaments';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-10 border-l-8 border-blue-600 pl-4">
          Tournois ArenaSync
        </h1>

        {/* 🚀 L-Grille Responsive: 1 col (mobile), 3 cols (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Loop b .map() */}
          {tournamentsData.map((t) => (
            <TournamentCard key={t.id} tournament={t} />
          ))}

        </div>
      </div>
    </div>
  );
}