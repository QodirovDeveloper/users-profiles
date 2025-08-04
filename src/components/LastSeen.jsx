// src/components/LastSeen.js
import React from "react";

const LastSeen = ({ timestamp }) => {
  const formatLastSeen = (timestamp) => {
    if (!timestamp) return "last seen recently";

    const lastSeenDate = timestamp.toDate();
    const now = new Date();

    const diffMs = now - lastSeenDate;
    const diffMinutes = Math.floor(diffMs / 60000);

    if (diffMinutes < 5) return "online"; // 5 daqiqadan kam bo‘lsa online deb ko‘rsatish
    if (diffMinutes < 60) return `last seen ${diffMinutes} minute(s) ago`;

    if (now.toDateString() === lastSeenDate.toDateString()) {
      return `last seen today at ${lastSeenDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    }

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (yesterday.toDateString() === lastSeenDate.toDateString()) {
      return `last seen yesterday at ${lastSeenDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    }

    return `last seen on ${lastSeenDate.toLocaleDateString([], {month: 'short', day: 'numeric'})} at ${lastSeenDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
  };

  return <span>{formatLastSeen(timestamp)}</span>;
};

export default LastSeen;
