"use client";

import { useEffect, useState } from "react";

export function LiveClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const date = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "short",
  }).format(now);

  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);

  return (
    <div className="live-clock" aria-label={`Local time ${date}, ${time}`}>
      <span><i aria-hidden="true" /> LIVE</span>
      <small suppressHydrationWarning>{date}</small>
      <strong suppressHydrationWarning>{time}</strong>
    </div>
  );
}
