import React from "react";
export default function TournamentCard({tornement}){
    return(
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:scale-105 transition-transform duration-300">
            {/* Image du tournoi */}
            <img 
            src={tornement.image}
            alt={tornement.name}
            className="w-full h-48 object-cover"
             />

             {/* Infos du tournoi */}
             <div className="p-5">
                <span>
                    {tornement.category}
                </span>
                <h3>{tornement.name}</h3>
                <p>{tornement.date}</p>
                <button>voir details</button>

             </div>

        </div>
    );
}