import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | UMKWiFi",
  description: "Privacy policy for the UMKWiFi website and browser extension.",
};

const policySections = [
  {
    number: "01",
    title: "Information we collect",
    content: (
      <p>
        UMKWiFi does not collect, store, or share personal data through this website or
        the UMKWiFi Extension.
      </p>
    ),
  },
  {
    number: "02",
    title: "Cookies and analytics",
    content: (
      <p>
        This website does not use analytics services or cookies. It does not track your
        activity across this or other websites.
      </p>
    ),
  },
  {
    number: "03",
    title: "Data sharing and retention",
    content: (
      <p>
        Because UMKWiFi does not collect personal data, there is no personal data to
        retain, sell, rent, or disclose to third parties.
      </p>
    ),
  },
  {
    number: "04",
    title: "Third-party services",
    content: (
      <p>
        The website may link to external websites, including the official Universiti
        Malaysia Kelantan website. Their privacy practices are governed by their own
        policies, and UMKWiFi is not responsible for their content or practices.
      </p>
    ),
  },
  {
    number: "05",
    title: "Changes to this policy",
    content: (
      <p>
        This policy may be updated if the website or extension changes. Any revision
        will be published here with an updated effective date.
      </p>
    ),
  },
];

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

      <section className="policy-hero" aria-labelledby="policy-title">
        <div>
          <p className="eyebrow">LEGAL / PRIVACY</p>
          <h1 id="policy-title">Privacy<br /><em>Policy.</em></h1>
        </div>
        <div className="policy-summary">
          <span>POLICY STATUS</span>
          <strong>NO PERSONAL DATA COLLECTED</strong>
          <dl>
            <div>
              <dt>Effective</dt>
              <dd>8 November 2026</dd>
            </div>
            <div>
              <dt>Applies to</dt>
              <dd>Website &amp; Extension</dd>
            </div>
            <div>
              <dt>Jurisdiction</dt>
              <dd>Malaysia</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="policy-intro">
        <p>
          This privacy policy explains how the independent, student-made UMKWiFi project
          handles information when you use its website or browser extension.
        </p>
      </div>

      <section className="policy-sections" aria-label="Privacy policy details">
        {policySections.map((section) => (
          <article className="policy-section" key={section.number}>
            <span>{section.number}</span>
            <div>
              <h2>{section.title}</h2>
              {section.content}
            </div>
          </article>
        ))}
      </section>

      <section className="policy-contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">CONTACT / PRIVACY QUESTIONS</p>
          <h2 id="contact-title">Need clarification?</h2>
        </div>
        <a href="mailto:jieernyong1207@gmail.com">jieernyong1207@gmail.com</a>
      </section>

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
