import React from "react";
import StatusBadge from "./StatusBadge";

export default function ParticipantRow({ participant }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100 hover:bg-gray-50">
      {/* 1. Had l-div fiha ghir l-Avatar w l-Nom (jiha d l-issar) */}
      <div className="flex items-center gap-4">
        <img
          src={participant.avatar}
          alt={participant.name}
          className="w-11 h-11 rounded-full object-cover border border-gray-100"
        />
        <span className="font-bold text-gray-800">{participant.name}</span>
      </div>

      {/* 2. L-Badge khassu y-koun hna (jiha d l-limin) bach y-ban m9add */}
      <StatusBadge status={participant.status} />
    </div>
  );
}