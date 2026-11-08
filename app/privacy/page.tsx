import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | UMKWiFi",
  description: "Privacy policy for the UMKWiFi website and browser extension.",
};

export default function PrivacyPolicy() {
  return (
    <main className="site-shell policy-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="UMKWiFi home">
          <span className="brand-mark">
            <Image src="/logo.png" alt="" width={68} height={68} priority />
          </span>
          <span className="brand-copy">
            <small>ONE CAMPUS, ONE CONNECTION.</small>
            <strong>UMKWiFi</strong>
          </span>
        </Link>
        <Link className="policy-back-link" href="/">
          <span aria-hidden="true">←</span> BACK TO HOME
        </Link>
      </header>

      <div className="signal-divider" aria-hidden="true" />

      <article className="policy-document" aria-labelledby="policy-title">
        <header>
          <p className="eyebrow">LEGAL / PRIVACY</p>
          <h1 id="policy-title">Privacy Policy</h1>
          <p className="policy-lede">
            This privacy policy explains how the independent, student-made UMKWiFi
            project handles information when you use its website or browser extension.
          </p>
          <ul className="policy-meta">
            <li><strong>Effective date:</strong> 8 November 2026</li>
            <li><strong>Applies to:</strong> UMKWiFi website and extension</li>
            <li><strong>Jurisdiction:</strong> Malaysia</li>
          </ul>
        </header>

        <hr />

        <section>
          <h2>1. Information we collect</h2>
          <p>
            UMKWiFi does not collect, store, or share personal data through this website
            or the UMKWiFi Extension.
          </p>
        </section>

        <section>
          <h2>2. Cookies and analytics</h2>
          <p>
            This website does not use analytics services or cookies. It does not track
            your activity across this or other websites.
          </p>
        </section>

        <section>
          <h2>3. Data sharing and retention</h2>
          <p>
            Because UMKWiFi does not collect personal data, there is no personal data to
            retain, sell, rent, or disclose to third parties.
          </p>
        </section>

        <section>
          <h2>4. Third-party services</h2>
          <p>
            The website may link to external websites, including the official Universiti
            Malaysia Kelantan website. Their privacy practices are governed by their own
            policies, and UMKWiFi is not responsible for their content or practices.
          </p>
        </section>

        <section>
          <h2>5. Changes to this policy</h2>
          <p>
            This policy may be updated if the website or extension changes. Any revision
            will be published here with an updated effective date.
          </p>
        </section>

        <section>
          <h2>6. Contact</h2>
          <p>
            For privacy questions or clarification, email{" "}
            <a href="mailto:jieernyong1207@gmail.com">jieernyong1207@gmail.com</a>.
          </p>
        </section>

        <blockquote>
          <strong>Project disclaimer:</strong> UMKWiFi is an independent student-made
          project, not an official UMK project or service. The name is used because this
          project connects to UMK’s Wi-Fi network.
        </blockquote>
      </article>

      <footer className="site-footer policy-footer">
        <span>UMK WIFI / CAMPUS NETWORK</span>
        <Link href="/">HOME</Link>
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
