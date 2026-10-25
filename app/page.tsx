import { LiveClock } from "@/components/live-clock";

function WifiMark() {
  return (
    <svg viewBox="0 0 52 52" role="img" aria-label="UMK WiFi signal mark">
      <path d="M8 18.5c10-8.2 26-8.2 36 0" />
      <path d="M14.5 27c6.5-5.5 16.5-5.5 23 0" />
      <path d="M21 35c2.8-2.2 7.2-2.2 10 0" />
      <circle cx="26" cy="42" r="2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell waiting-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="UMK WiFi home">
          <span className="brand-mark"><WifiMark /></span>
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
            Tested Area: Campus Kota &amp; Kemumin.
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
        <div className="signal-core" aria-hidden="true">
          <span className="core-label">SCANNING / CAMPUS NETWORK</span>
          <div className="radar-display">
            <span className="radar-ring radar-ring-outer" />
            <span className="radar-ring radar-ring-middle" />
            <span className="radar-ring radar-ring-inner" />
            <span className="radar-sweep" />
            <span className="radar-blip" />
          </div>
          <span className="coordinate">KOTA BHARU / MALAYSIA</span>
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
