import React from "react";
import StatusBadge from "./StatusBadge";

export default function ParticipantRow({ participant }) {
  return (
    <div className="flex items-center  justify-between p-4 bg-white border-b border-gray-100 hover:bg-gray-50  ">
      <div className="flex items-center gap-4">
        <img
          src={participant.avatar}
          alt={participant.name}
          className="w-11 h-11 rounded-full object-cover"
        />

        <span className="font-medium text-gray-800">{participant.name}</span>
        {/* 3. Zid l-Badge f  l-div l-kbira */}
            <StatusBadge status={participant.status} />
      </div>
    </div>
  );
}
