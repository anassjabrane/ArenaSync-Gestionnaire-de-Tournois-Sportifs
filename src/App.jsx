import React from 'react';
import { tournamentDB } from './data/tournamentDB'; // Import dialek
import TournamentCard from './components/TournamentCard';

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-black mb-8">Tournois ArenaSync</h1>

      {/* 🚀 Hna fin ghadi n-khdmo b tournamentDB bach t-7eyed l-ghalta */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tournamentDB.map((item) => (
          <TournamentCard key={item.id} tournament={item} />
        ))}
      </div>
    </div>
  );
}


