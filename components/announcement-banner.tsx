"use client";

import Link from "next/link";
import { useState } from "react";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="announcement-banner" aria-label="Important announcement">
      <div className="announcement-banner-copy">
        <span>IMPORTANT UPDATE</span>
        <strong>UMKWiFi v1.0.6 Microsoft Edge Add-ons release delayed</strong>
      </div>
      <Link href="/announcements/v1-0-6-delay">READ ANNOUNCEMENT</Link>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Close announcement"
      >
        <span aria-hidden="true">×</span>
      </button>
    </aside>
  );
}
