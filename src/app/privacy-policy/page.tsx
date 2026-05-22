import type { Metadata } from "next";
import Link from "next/link";
import s from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Veluc Wellness collects, uses and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Link href="/" className={s.blogName}>Veluc Wellness Blog</Link>
      </header>

      <div className={s.body}>
        <h1 className={s.title}>Privacy Policy</h1>
        <span className={s.updated}>Last updated: 22 May 2026</span>

        <p>
          Veluc Wellness Blog ("we", "us", "our") operates the website veluc.online.
          This policy explains what information we collect, how we use it, and your
          rights in relation to it. By using this site you agree to the practices
          described below.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Purchase information</strong> — when you buy through our
            payment processor (Nestuge), they collect your name, email address,
            and payment details directly. We receive only your email and order
            confirmation to deliver your digital product.
          </li>
          <li>
            <strong>Browsing data</strong> — we use the Meta Pixel (Facebook) to
            collect anonymous data about how visitors interact with our site,
            including page views and purchase events. This data is used to measure
            ad performance and improve our marketing.
          </li>
          <li>
            <strong>Cookies</strong> — our site and third-party tools (Meta) may
            place cookies on your device. You can disable cookies in your browser
            settings, though some site features may be affected.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To deliver your purchased digital guides by email</li>
          <li>To process refund requests within our 30-day guarantee window</li>
          <li>To measure and improve the effectiveness of our advertising</li>
          <li>To respond to enquiries you send us directly</li>
        </ul>

        <h2>3. Third-Party Services</h2>
        <ul>
          <li>
            <strong>Nestuge</strong> — our payment processor. Purchases are handled
            on their platform under their own privacy policy.
          </li>
          <li>
            <strong>Meta (Facebook)</strong> — we use the Meta Pixel to track
            conversions and retarget interested visitors. Meta's data use is
            governed by Meta's own Data Policy.
          </li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>
          We retain purchase records for a minimum of 12 months for accounting and
          refund purposes. You may request deletion of your personal data at any
          time by contacting us.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          Under the Nigeria Data Protection Regulation (NDPR) and applicable law,
          you have the right to access, correct, or request deletion of your
          personal data. To exercise any of these rights, please contact us at the
          address below.
        </p>

        <h2>6. Children</h2>
        <p>
          This site is not directed at children under 18. We do not knowingly
          collect data from minors.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. The "last updated" date at
          the top of this page will reflect any changes. Continued use of the site
          after changes are posted constitutes your acceptance.
        </p>

        <h2>8. Contact</h2>
        <p>
          For any privacy-related questions, please email us at{" "}
          <a href="mailto:hello@veluc.online">hello@veluc.online</a>.
        </p>
      </div>

      <footer className={s.footer}>
        <p>© 2026 Veluc Wellness Blog. All Rights Reserved.</p>
        <div className={s.footerLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/refund-policy">Refund Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}
