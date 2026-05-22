import type { Metadata } from "next";
import Link from "next/link";
import s from "../legal.module.css";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "30-day money-back guarantee — full refund details for the 21-Day Postpartum Belly Flatten Guide.",
};

export default function RefundPolicy() {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Link href="/" className={s.blogName}>Veluc Wellness Blog</Link>
      </header>

      <div className={s.body}>
        <h1 className={s.title}>Refund Policy</h1>
        <span className={s.updated}>Last updated: 22 May 2026</span>

        <p>
          We stand behind the 21-Day Postpartum Belly Flatten Guide completely.
          If it does not work for you, we do not want your money.
        </p>

        <h2>Our 30-Day Money-Back Guarantee</h2>
        <p>
          You have <strong>30 days</strong> from the date of purchase to request a
          full refund — no questions asked, no lengthy explanations required.
        </p>
        <p>
          If you follow the food timing method for 30 days and see no difference
          in your weight or how your clothes fit, simply contact us and we will
          refund every naira you paid.
        </p>

        <h2>How to Request a Refund</h2>
        <ol>
          <li>
            Email us at{" "}
            <a href="mailto:hello@veluc.online">hello@veluc.online</a> with the
            subject line <strong>"Refund Request"</strong>.
          </li>
          <li>Include the email address you used to purchase.</li>
          <li>
            We will process your refund within <strong>3–5 business days</strong>{" "}
            back to your original payment method.
          </li>
        </ol>

        <h2>What Is Not Covered</h2>
        <ul>
          <li>Requests made after 30 days from the purchase date</li>
          <li>
            Purchases made through a third-party platform — please contact that
            platform directly for their refund process
          </li>
        </ul>

        <h2>Digital Product Note</h2>
        <p>
          Because this is a digital product, you will retain access to the
          downloaded files even after a refund is processed. We trust you to act
          in good faith.
        </p>

        <div className={s.contactBox}>
          <p>Need a refund or have a question?</p>
          <p>
            <strong>
              <a href="mailto:hello@veluc.online">hello@veluc.online</a>
            </strong>
          </p>
          <p style={{ fontSize: 13, color: "#666666", marginTop: 8, marginBottom: 0 }}>
            We respond within 24 hours on business days.
          </p>
        </div>
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
