// // src/components/TournamentCard.jsx
// import React from "react";
// import StatusBadge from "./StatusBadge"; // N-reutilisew l-badge dialna

// export default function TournamentCard(tournament) {
//   return (
//     <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
//       <div className="flex justify-between items-start mb-4">
//         <h3 className="text-xl font-bold text-gray-800">{tournament.title}</h3>
//         <StatusBadge status={tournament.status} />
//         <p></p>
//       </div>
//       <p className="text-gray-600 mb-2">📍 {tournament.location}</p>
//       <p className="text-sm text-gray-400 italic">{tournament.date}</p>
//     </div>
//   );
// }


export const tournamentData = [
  {
    id: "t1",
    title: "Shuttle Masters League",
    sport: "Badminton",
    status: "On Going",
    date: "October 12, 2025",
    location: "Badminton Hall 1",
    description: "Top players battle it out with skillful rallies and powerful smashes.",
    participantsCount: "24/32",
    format: "Single Elimination",
    type: "Public",
    participants: [
      { id: "u1", name: "Ethan Miller", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u1" },
      { id: "u2", name: "Noah Smith", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u2" },
      { id: "u3", name: "James Anderson", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u3" },
      { id: "u4", name: "David Hall", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u4" }
    ]
  },
  {
    id: "t2",
    title: "Hoops Championship",
    sport: "Basketball",
    status: "Upcoming",
    date: "November 2, 2025",
    location: "Indoor Arena - Court A",
    description: "Intense games filled with teamwork, speed, and spectacular shots.",
    participantsCount: "8/12 Teams",
    format: "Single Elimination",
    type: "Community",
    participants: []
  },
  {
    id: "t3",
    title: "Ring Masters League",
    sport: "Boxing",
    status: "Pending",
    date: "December 5, 2025",
    location: "Combat Zone Gym",
    description: "A dynamic boxing competition bringing together passionate fighters.",
    participantsCount: "10/16",
    format: "Round Robin",
    type: "Pro",
    participants: [
      { id: "u5", name: "Aiden Davis", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u5" },
      { id: "u6", name: "Daniel Thomas", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u6" }
    ]
  }
];
