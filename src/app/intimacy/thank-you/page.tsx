import type { Metadata } from "next";
import s from "./intimacy-ty.module.css";
import PurchaseEvent from "./PurchaseEvent";

export const metadata: Metadata = {
  title: "Payment Confirmed — The Intimacy Reset Is Yours | Veluc Wellness",
  description: "Your purchase is confirmed. Your Intimacy Reset programme will be sent to your email within 24–48 hours.",
  robots: { index: false, follow: false },
};

export default function IntimacyThankYouPage() {
  return (
    <div className={s.wrapper}>
      <PurchaseEvent />

      {/* HEADER */}
      <header className={s.header}>
        <span className={s.blogName}>Veluc Wellness</span>
      </header>

      {/* HERO */}
      <div className={s.hero}>
        <div className={s.checkCircle}>✓</div>
        <h1 className={s.heroTitle}>Payment Confirmed — Welcome.</h1>
        <p className={s.heroSub}>
          You took a brave, important step today. Your Intimacy Reset programme
          is secured and we are preparing everything for you right now.
        </p>
      </div>

      {/* EMAIL NOTICE */}
      <div className={s.emailNotice}>
        <span className={s.emailNoticeIcon}>📧</span>
        <div>
          <p className={s.emailNoticeTitle}>Your complete programme is being sent to your email</p>
          <p className={s.emailNoticeBody}>
            The 21-Day Intimacy Reset Guide and all bonus materials will arrive in your
            inbox <strong>within 24–48 hours.</strong> We are making sure everything
            is properly prepared for you.
          </p>
          <p className={s.emailNoticeBody}>
            Please check your spam/junk folder if you do not see it. Any issues —
            reach us at{" "}
            <a href="mailto:support@veluc.online" className={s.emailLink}>
              support@veluc.online
            </a>
            .
          </p>
        </div>
      </div>

      {/* WHAT TO DO RIGHT NOW */}
      <div className={s.nextSteps}>
        <h2 className={s.nextTitle}>What To Do While You Wait</h2>
        <ol className={s.nextList}>
          <li>
            <strong>Check your email inbox now</strong> and save our address
            (support@veluc.online) so your guide does not go to spam.
          </li>
          <li>
            <strong>Find a quiet 10 minutes today.</strong> Before the guide
            even arrives — sit with yourself and write down one honest answer:
            &quot;What do I miss most about how things felt between us?&quot; That
            answer is where your 21 days begin.
          </li>
          <li>
            <strong>When the guide arrives — read the introduction first.</strong>{" "}
            It explains exactly what has happened in your body and your relationship
            after childbirth, and it will immediately release guilt you have been
            carrying without realising.
          </li>
          <li>
            <strong>Start Day 1 on the evening it arrives.</strong> The first
            action takes less than 10 minutes and happens entirely in your own
            mind — no husband involvement required yet.
          </li>
        </ol>
      </div>

      {/* CHIOMA MESSAGE */}
      <div className={s.promise}>
        <p>
          Choosing your marriage — choosing yourself — when you are exhausted
          and depleted and running on nothing. That is not small. That is
          everything.
        </p>
        <p>
          I will be with you every step of the way inside the guides. Follow it
          faithfully for 21 days. Then come back and tell me what changed.
        </p>
        <p>
          And remember — you are fully protected by the{" "}
          <strong>30-Day Money-Back Guarantee.</strong> You have absolutely
          nothing to lose and everything to gain.
        </p>
        <p className={s.promiseSign}>
          With love,<br />
          <strong>Chioma</strong><br />
          <em>Veluc Wellness</em>
        </p>
      </div>

      {/* FOOTER */}
      <footer className={s.footer}>
        <p>© 2026 Veluc Wellness. All Rights Reserved.</p>
        <p>
          Results may vary. This programme is for informational purposes only
          and does not constitute medical advice.
        </p>
      </footer>
    </div>
  );
}
