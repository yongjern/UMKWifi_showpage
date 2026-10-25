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
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="UMK WiFi home">
          <span className="brand-mark"><WifiMark /></span>
          <span className="brand-copy">
            <small>Campus connection project</small>
            <strong>UMK WiFi</strong>
          </span>
        </a>
        <LiveClock />
      </header>
      <div className="signal-divider" aria-hidden="true" />
      <nav className="utility-nav" aria-label="Page sections">
        <span className="system-state"><i aria-hidden="true" /> SYSTEMS IN TESTING</span>
        <div>
          <a href="#rollout">ROLLOUT <ArrowIcon /></a>
          <a href="#access">ACCESS FLOW <ArrowIcon /></a>
        </div>
      </nav>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span>NETWORK / ACCESS PORTAL</span><b>01</b></p>
          <h1 id="hero-title">Campus WiFi.<br /><em>One clear way in.</em></h1>
          <p className="hero-lede">
            A simpler way for UMK students and staff to get connected is being prepared.
            The new access experience is launching soon.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#rollout">VIEW ROLLOUT <ArrowIcon /></a>
            <a className="text-action" href="#access">HOW IT WILL WORK</a>
          </div>
        </div>
        <div className="signal-core" aria-hidden="true">
          <span className="core-label">SIGNAL / READY</span>
          <div className="signal-rings"><WifiMark /></div>
          <strong>SOON</strong>
          <span className="coordinate">06.1202° N / 102.2777° E</span>
        </div>
        <div className="launch-strip">
          <div><span>RELEASE STATE</span><strong>PRE-LAUNCH</strong></div>
          <div><span>EXPERIENCE</span><strong>ONE PORTAL</strong></div>
          <div><span>DESIGNED FOR</span><strong>CAMPUS ACCESS</strong></div>
        </div>
      </section>
      <section className="readiness" id="rollout" aria-labelledby="rollout-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ROLL-OUT / CURRENT PHASE</span>
            <h2 id="rollout-title">Preparing the signal</h2>
          </div>
          <p>Every layer is being checked before the portal opens.</p>
        </div>
        <div className="status-grid">
          <article className="status-card complete">
            <span className="status-index">01</span>
            <div><small>FOUNDATION</small><h3>Network route</h3><p>Connection paths and campus access points prepared.</p></div>
            <strong>READY</strong>
          </article>
          <article className="status-card active">
            <span className="status-index">02</span>
            <div><small>INTERFACE</small><h3>Access portal</h3><p>A focused sign-in flow for students and staff.</p></div>
            <strong>IN TEST</strong>
          </article>
          <article className="status-card">
            <span className="status-index">03</span>
            <div><small>RELEASE</small><h3>Campus pilot</h3><p>Final checks before the wider launch.</p></div>
            <strong>NEXT</strong>
          </article>
        </div>
      </section>
      <section className="access-section" id="access" aria-labelledby="access-title">
        <div className="access-intro">
          <span className="eyebrow">PLANNED ACCESS FLOW / 03 STEPS</span>
          <h2 id="access-title">Get online without the guesswork.</h2>
          <p>The portal is being designed around one short, recognizable path from signal to session.</p>
        </div>
        <ol className="access-steps">
          <li><span>01</span><div className="step-icon"><WifiMark /></div><div className="step-copy"><h3>Join the network</h3><p>Select the UMK WiFi network from your device.</p></div></li>
          <li><span>02</span><div className="step-icon"><ArrowIcon /></div><div className="step-copy"><h3>Open the portal</h3><p>Follow the automatic prompt to the access page.</p></div></li>
          <li><span>03</span><div className="step-icon key-icon" aria-hidden="true">••</div><div className="step-copy"><h3>Sign in securely</h3><p>Use your authorized campus access details.</p></div></li>
        </ol>
        <aside className="launch-note">
          <span><i aria-hidden="true" /> LAUNCH NOTICE</span>
          <p>Release information will be shared through official UMK channels when the portal is ready.</p>
        </aside>
      </section>
      <footer className="site-footer">
        <span>UMK WIFI / ACCESS PROJECT</span>
        <strong>LAUNCHING SOON</strong>
        <span>YONGJERN / WEB_UMKWIFI</span>
      </footer>
    </main>
  );
}
