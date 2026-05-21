import type { Metadata } from "next";
import Image from "next/image";
import s from "./thank-you.module.css";
import PurchaseEvent from "./PurchaseEvent";

export const metadata: Metadata = {
  title: "Thank You — Your Download Is Ready | Veluc Wellness Blog",
  description: "Your 21-Day Postpartum Belly Flatten Guide and all bonuses are ready to download.",
  robots: { index: false, follow: false },
};

// ← Replace these with your real hosted file URLs
const MAIN_GUIDE_URL = "#DOWNLOAD_MAIN_GUIDE";
const ALL_IN_ONE_URL = "#DOWNLOAD_ALL_FILES";

const downloads = [
  {
    emoji: "📗",
    title: "The 21-Day Postpartum Belly Flatten Guide",
    subtitle: "Your main guide — start here",
    url: MAIN_GUIDE_URL,
    primary: true,
  },
  {
    emoji: "🥗",
    title: "Postpartum Nutrition Reset Guide",
    subtitle: "Bonus #1",
    url: "#DOWNLOAD_BONUS_1",
    primary: false,
  },
  {
    emoji: "🏃",
    title: "Busy Mum Workout & Movement Guide",
    subtitle: "Bonus #2",
    url: "#DOWNLOAD_BONUS_2",
    primary: false,
  },
  {
    emoji: "📅",
    title: "21-Day Belly Reset Tracker",
    subtitle: "Bonus #3",
    url: "#DOWNLOAD_BONUS_3",
    primary: false,
  },
  {
    emoji: "🍲",
    title: "Nigerian Food Swap Guide",
    subtitle: "Bonus #4",
    url: "#DOWNLOAD_BONUS_4",
    primary: false,
  },
  {
    emoji: "☀️",
    title: "Flat-Tummy Morning Ritual Checklist",
    subtitle: "Bonus #5",
    url: "#DOWNLOAD_BONUS_5",
    primary: false,
  },
  {
    emoji: "🛒",
    title: "Anti-Bloating Shopping List",
    subtitle: "Bonus #6",
    url: "#DOWNLOAD_BONUS_6",
    primary: false,
  },
  {
    emoji: "🎉",
    title: "What To Eat At Parties Guide",
    subtitle: "Bonus #7",
    url: "#DOWNLOAD_BONUS_7",
    primary: false,
  },
  {
    emoji: "📏",
    title: "Waist Measurement Tracker",
    subtitle: "Bonus #8",
    url: "#DOWNLOAD_BONUS_8",
    primary: false,
  },
  {
    emoji: "💪",
    title: "Confidence Rebuilding Journal",
    subtitle: "Bonus #9",
    url: "#DOWNLOAD_BONUS_9",
    primary: false,
  },
  {
    emoji: "🏋️",
    title: "Busy Mum 15-Minute Workout Plan",
    subtitle: "Bonus #10",
    url: "#DOWNLOAD_BONUS_10",
    primary: false,
  },
  {
    emoji: "📓",
    title: "21-Day Belly Confidence Reset Planner",
    subtitle: "Bonus #11",
    url: "#DOWNLOAD_BONUS_11",
    primary: false,
  },
];

export default function ThankYouPage() {
  return (
    <div className={s.wrapper}>
      <PurchaseEvent />

      {/* HEADER */}
      <header className={s.header}>
        <span className={s.blogName}>Veluc Wellness Blog</span>
      </header>

      {/* HERO CONFIRMATION */}
      <div className={s.hero}>
        <div className={s.checkCircle}>✓</div>
        <h1 className={s.heroTitle}>Payment Confirmed — You&apos;re In!</h1>
        <p className={s.heroSub}>
          Welcome to the Veluc Wellness family. Your complete guide and all 11
          bonuses are ready below. Download them now and save to your phone or
          Google Drive.
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

      {/* ALL-IN-ONE DOWNLOAD */}
      <div className={s.allInOne}>
        <p className={s.allInOneLabel}>Quickest option — everything in one click:</p>
        <a href={ALL_IN_ONE_URL} className={s.allInOneBtn} download>
          ⬇️ Download Everything (All Files)
        </a>
      </div>

      {/* DIVIDER */}
      <div className={s.orDivider}>
        <span>or download each file individually below</span>
      </div>

      {/* INDIVIDUAL DOWNLOADS */}
      <div className={s.downloadList}>
        {downloads.map((item, i) => (
          <a
            key={i}
            href={item.url}
            className={item.primary ? `${s.downloadItem} ${s.downloadItemPrimary}` : s.downloadItem}
            download
          >
            <span className={s.dlEmoji}>{item.emoji}</span>
            <div className={s.dlInfo}>
              <span className={s.dlTitle}>{item.title}</span>
              <span className={s.dlSub}>{item.subtitle}</span>
            </div>
            <span className={s.dlArrow}>⬇</span>
          </a>
        ))}
      </div>

      {/* WHAT TO DO NEXT */}
      <div className={s.nextSteps}>
        <h2 className={s.nextTitle}>What To Do Right Now</h2>
        <ol className={s.nextList}>
          <li>
            <strong>Download the main guide first</strong> and save it to your
            phone or Google Drive so you always have it.
          </li>
          <li>
            <strong>Read pages 1–20 today.</strong> You will understand exactly
            why your body has been holding onto belly fat — and what you will do
            differently from tomorrow.
          </li>
          <li>
            <strong>Start tonight.</strong> Prepare Mama Rose&apos;s Nighttime
            Belly Reset Drink (Page 18) before bed. Most women notice a
            difference in morning bloat by Day 4.
          </li>
          <li>
            <strong>Download the 21-Day Meal Plan</strong> from the bonus files
            and pin it somewhere visible — your kitchen wall, your fridge, your
            phone wallpaper.
          </li>
        </ol>
      </div>

      {/* PROMISE REMINDER */}
      <div className={s.promise}>
        <p>
          Remember — if you follow this method for 30 days and see no results,
          you are fully covered by the{" "}
          <strong>30-Day Money-Back Guarantee.</strong> Send a message and you
          will receive a full refund. No questions asked.
        </p>
        <p className={s.promiseSign}>
          With love,<br />
          <strong>Chioma</strong><br />
          <em>Veluc Wellness Blog</em>
        </p>
      </div>

      {/* FOOTER */}
      <footer className={s.footer}>
        <p>© 2026 Veluc Wellness Blog. All Rights Reserved.</p>
        <p>
          This product is a digital download. No physical item will be shipped.
          Results may vary. This guide is for informational purposes only and
          does not constitute medical advice.
        </p>
      </footer>
    </div>
  );
}
