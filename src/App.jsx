import React from 'react'
import ReactDOM from 'react-dom/client'
import { tournamentDB } from './data/tournamentDB' 
import TournamentCard from './components/TournamentCard'
import './index.css' // Darori bach Tailwind ykhdem

// Hna fin React kiy-ched l-HTML dyal index.html w kiy-7et fih l-App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-black mb-10 text-center uppercase">
        ArenaSync <span className="text-blue-600">Dash</span>
      </h1>
      
      {/* L-Grille li tlbu mennek f Challenge 4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {tournamentDB.map((t) => (
  <TournamentCard key={t.id} tournament={t} />
))}




      </div>
    </div>
  </React.StrictMode>
)


