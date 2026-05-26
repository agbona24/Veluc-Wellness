import type { Metadata } from "next";
import Image from "next/image";
import s from "./thank-you.module.css";
import PurchaseEvent from "./PurchaseEvent";

export const metadata: Metadata = {
  title: "Payment Confirmed — Welcome to Veluc Wellness",
  description: "Your purchase is confirmed. Your guide pack will be sent to your email within 24–48 hours. Your interactive tools are ready now.",
  robots: { index: false, follow: false },
};

const toolItems = [
  { emoji: "📗", label: "21-Day Guide — your daily meal plan, day by day" },
  { emoji: "📋", label: "Habit Grid — tick your 5 daily habits" },
  { emoji: "📊", label: "Belly Tracker — log weight & waist progress" },
  { emoji: "✏️", label: "Confidence Journal — your evening reflection" },
  { emoji: "🍲", label: "Food Swaps, Drink Recipes, Bloat Foods Guide" },
  { emoji: "🎉", label: "Party Guide & Event Recovery — for social occasions" },
  { emoji: "💛", label: "Daily Affirmations — one card per day" },
];

export default function ThankYouPage() {
  return (
    <div className={s.wrapper}>
      <PurchaseEvent />

      {/* HEADER */}
      <header className={s.header}>
        <span className={s.blogName}>Veluc Wellness</span>
      </header>

      {/* HERO CONFIRMATION */}
      <div className={s.hero}>
        <div className={s.checkCircle}>✓</div>
        <h1 className={s.heroTitle}>Payment Confirmed — You&apos;re In!</h1>
        <p className={s.heroSub}>
          Welcome to the Veluc Wellness family. Your purchase is secured and we
          are already preparing everything for you.
        </p>
      </div>

      {/* PRODUCT IMAGE */}
      <div className={s.productImgWrap}>
        <Image
          src="/images/3d_image.jpeg"
          alt="Your Complete Veluc Wellness Bundle"
          width={752}
          height={420}
          style={{ width: "100%", height: "auto", borderRadius: 8 }}
          priority
        />
      </div>

      {/* EMAIL NOTICE */}
      <div className={s.emailNotice}>
        <span className={s.emailNoticeIcon}>📧</span>
        <div>
          <p className={s.emailNoticeTitle}>Your complete guide pack is being sent to your email</p>
          <p className={s.emailNoticeBody}>
            We are finalising your full bundle — the 21-Day Guide, all 11 bonus
            files, and everything else you purchased. You will receive all of it
            in your email inbox <strong>within 24–48 hours.</strong>
          </p>
          <p className={s.emailNoticeBody}>
            Please check your spam/junk folder if you do not see it. If you have
            any issue, reach us at{" "}
            <a href="mailto:support@veluc.online" className={s.emailLink}>
              support@veluc.online
            </a>
            .
          </p>
        </div>
      </div>

      {/* TOOLS CTA — MAIN VALUE */}
      <div className={s.toolsSection}>
        <p className={s.toolsSectionEyebrow}>While you wait — start right now 👇</p>
        <h2 className={s.toolsSectionTitle}>
          Your Interactive Wellness App Is Ready. Jump In Today.
        </h2>
        <p className={s.toolsSectionBody}>
          We have built you a full interactive programme — not just PDFs. Inside
          your personal dashboard you will find everything you need to start your
          21-day journey <em>today</em>, before the email even arrives.
        </p>

        <ul className={s.toolsList}>
          {toolItems.map((item) => (
            <li key={item.emoji} className={s.toolsListItem}>
              <span className={s.toolsListEmoji}>{item.emoji}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <a href="/tools" className={s.toolsBtn}>
          🌿 Open My Wellness Dashboard →
        </a>
        <p className={s.toolsBtnSub}>Free with your purchase · Works on any phone · No app store needed</p>
      </div>

      {/* NOTE FROM CHIOMA */}
      <div className={s.promise}>
        <p>
          I know the excitement of wanting to start immediately — and now you
          can. The interactive dashboard has everything the guides contain, built
          into daily tools you can use right now. Your full guide pack will land
          in your inbox shortly, and I am personally making sure it is the best
          version possible for you.
        </p>
        <p>
          Remember — if you follow this method for 30 days and see no results,
          you are fully protected by the{" "}
          <strong>30-Day Money-Back Guarantee.</strong> You have absolutely
          nothing to lose.
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
