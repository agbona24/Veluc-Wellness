import type { Metadata } from "next";
import Link from "next/link";
import s from "../legal.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Veluc Wellness Blog.",
};

export default function Contact() {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Link href="/" className={s.blogName}>Veluc Wellness Blog</Link>
      </header>

      <div className={s.body}>
        <h1 className={s.title}>Contact Us</h1>
        <span className={s.updated}>We respond within 24 hours on business days</span>

        <p>
          Have a question about the guide, your order, or need a refund? We are
          here to help. Reach out through any of the options below.
        </p>

        <div className={s.contactBox}>
          <p>Email us at</p>
          <p>
            <strong>
              <a href="mailto:hello@veluc.online">hello@veluc.online</a>
            </strong>
          </p>
        </div>

        <h2>Common Questions</h2>
        <p>
          <strong>I paid but did not receive my guide.</strong><br />
          Check your spam or promotions folder. If it is not there, email us with
          your payment receipt and we will resend immediately.
        </p>
        <p>
          <strong>I want a refund.</strong><br />
          No problem. See our <Link href="/refund-policy">Refund Policy</Link>{" "}
          for full details. Email us with your order email and we will process it
          within 3–5 business days.
        </p>
        <p>
          <strong>I have a question about the programme.</strong><br />
          Email us and Chioma or a member of the team will respond personally.
        </p>

        <h2>For Business Enquiries</h2>
        <p>
          For partnerships, collaborations or media enquiries, please email{" "}
          <a href="mailto:hello@veluc.online">hello@veluc.online</a> with the
          subject line "Business Enquiry".
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
