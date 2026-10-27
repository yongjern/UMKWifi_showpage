import Image from "next/image";
import { LiveClock } from "@/components/live-clock";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

const campusTests = [
  { name: "UMK Kampus Kota", status: "TESTED & PASSED", version: "VER 1.0.2" },
  { name: "UMK Kolej Kediaman Sri Kemumin", status: "TESTED & PASSED", version: "VER 1.0.3" },
  { name: "UMK Kolej Kediaman Taman Bendahara", status: "NEED TESTER" },
  { name: "UMK Kampus Bachok", status: "NEED TESTER" },
];

export default function Home() {
  return (
    <main className="site-shell waiting-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="UMK WiFi home">
          <span className="brand-mark">
            <Image src="/logo.png" alt="" width={68} height={68} priority />
          </span>
          <span className="brand-copy">
            <small>ONE CAMPUS, ONE CONNECTION.</small>
            <strong>UMKWiFi</strong>
          </span>
        </a>
        <LiveClock />
      </header>
      <div className="signal-divider" aria-hidden="true" />
      <section className="hero waiting-hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span>ONE CAMPUS, ONE CONNECTION.</span></p>
          <h1 id="hero-title">UMKWiFi<br /><em>Coming Soon.</em></h1>
          <p className="hero-lede">
            A simpler campus connection is on the way.
            <br />
            We’re getting everything ready for you to connect.
            <br />
            <br />
            UMKWiFi Extension testing is underway at four campus locations.
          </p>
          <div className="hero-actions">
            <a
              className="primary-action"
              href="https://www.umk.edu.my/"
              target="_blank"
              rel="noreferrer"
            >
              WE STILL PREPARING, CHECK UMK WEBSITE FIRST! <ArrowIcon />
            </a>
          </div>
          <p className="waiting-status"><i aria-hidden="true" /> NETWORK PORTAL IN PREPARATION</p>
        </div>
        <div className="signal-core">
          <span className="core-label">UMKWIFI EXTENSION / TEST STATUS</span>
          <div className="campus-overview">
            <div className="radar-display" role="img" aria-label="Four UMK campus testing locations">
              <span className="radar-ring radar-ring-outer" />
              <span className="radar-ring radar-ring-middle" />
              <span className="radar-ring radar-ring-inner" />
              <span className="radar-sweep" />
              {campusTests.map((campus, index) => (
                <span
                  className={`radar-marker radar-marker-${index + 1}`}
                  key={campus.name}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
              ))}
            </div>
            <ol className="campus-list" aria-label="UMKWiFi Extension campus test results">
              {campusTests.map((campus, index) => (
                <li className={campus.version ? "campus-tested" : "campus-pending"} key={campus.name}>
                  <span className="campus-index">{String(index + 1).padStart(2, "0")}</span>
                  <div className="campus-details">
                    <strong>{campus.name}</strong>
                    <span className="campus-status">{campus.status}</span>
                    {campus.version && <span className="campus-version">{campus.version}</span>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <footer className="site-footer waiting-footer">
        <span>UMK WIFI / CAMPUS NETWORK</span>
        <strong>COMING SOON</strong>
        <div className="project-disclaimer">
          <strong>PROJECT DISCLAIMER</strong>
          <p>
            UMKWiFi is an independent student-made project, not an official UMK project
            or service. The name is used because this project connects to UMK’s Wi-Fi
            network.
          </p>
        </div>
      </footer>
    </main>
  );
}
