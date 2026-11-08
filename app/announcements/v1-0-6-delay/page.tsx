import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UMKWiFi v1.0.6 Release Delay",
  description: "An update about the delayed UMKWiFi v1.0.6 Microsoft Edge Add-ons release.",
};

export default function VersionDelayAnnouncement() {
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

      <article className="policy-document announcement-document" aria-labelledby="announcement-title">
        <header>
          <p className="eyebrow">ANNOUNCEMENT / RELEASE UPDATE</p>
          <h1 id="announcement-title">UMKWiFi v1.0.6 store release delayed</h1>
          <p className="policy-lede">
            The Microsoft Edge Add-ons release of UMKWiFi v1.0.6 has been delayed while
            we resolve a policy-listing issue.
          </p>
          <ul className="policy-meta">
            <li><strong>Published:</strong> 8 November 2026</li>
            <li><strong>Affected release:</strong> v1.0.6</li>
            <li><strong>Status:</strong> Store update declined; resubmission planned</li>
          </ul>
        </header>

        <hr />

        <section>
          <h2>What happened?</h2>
          <p>
            While updating our website, we did not clearly publish the policy information
            for UMKWiFi. Because the store listing did not meet Microsoft’s policy
            requirements, the v1.0.6 update was declined.
          </p>
        </section>

        <section>
          <h2>Your privacy remains unchanged</h2>
          <p>
            UMKWiFi does not upload, download, or share your personal or computer data.
            Your saved password remains on your device in the extension’s local browser
            storage and is used only to provide the extension’s connection features.
          </p>
          <p>
            For complete details, read the <Link href="/privacy">UMKWiFi Privacy Policy</Link>.
          </p>
        </section>

        <section>
          <h2>What happens next?</h2>
          <p>
            We are updating the required policy information and will fix the submission
            as soon as possible. The Microsoft store version will remain delayed until
            the revised release is reviewed and approved.
          </p>
        </section>

        <section>
          <h2>Get v1.0.6 from GitHub</h2>
          <p>
            Users who want the newest version can visit the UMKWiFi GitHub repository
            and open the <strong>Releases</strong> section to download v1.0.6.
          </p>
          <a
            className="announcement-action"
            href="https://github.com/yongjern/UMKWifi/releases"
            target="_blank"
            rel="noreferrer"
          >
            VIEW V1.0.6 RELEASES <span aria-hidden="true">↗</span>
          </a>
        </section>

        <blockquote>
          Thank you for your patience. We will publish another update when v1.0.6 is
          available through Microsoft Edge Add-ons.
        </blockquote>
      </article>

      <footer className="site-footer policy-footer">
        <span>UMK WIFI / CAMPUS NETWORK</span>
        <Link href="/privacy">PRIVACY POLICY</Link>
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
