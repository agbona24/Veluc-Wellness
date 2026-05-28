"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import s from "./tools.module.css";
import Onboarding, { ProfilePlanCard } from "./Onboarding";
import Tour from "./Tour";

const CHECKOUT_URL = "https://selar.com/442894izk7";

const HOW_TO_STEPS = [
  { num: "1", title: "Before Day 1 — Prepare", body: "Read the Planner for the full overview. Study the Nutrition Guide so you understand why this works. Then do your shop using the Shopping List." },
  { num: "2", title: "Every Morning — Open the Guide", body: "This is the most important action. Open your 21-Day Guide, read today's meals and rules, follow them exactly, then tap \"Mark Day Done.\" Never skip this." },
  { num: "3", title: "Every Day — Your Daily 4", body: "Tick your 5 habits in the Habit Grid. Log your weight and waist in the Tracker. Check off your Morning Ritual. Write your evening reflection in the Journal." },
  { num: "4", title: "When You Need Support", body: "The reference guides never expire and don't need to be done in order. Open them when you need clarity on food, drinks, parties, workouts, or an emergency reset." },
];

type Tool = { emoji: string; title: string; sub: string; badge: string; badgeClass: string; href: string };
type ToolGroup = { label: string; desc: string; tools: Tool[] };

const toolGroups: ToolGroup[] = [
  {
    label: "Step 1 — Before You Start",
    desc: "Read these once before Day 1. They set the foundation for everything.",
    tools: [
      { emoji: "📓", title: "21-Day Reset Planner",             sub: "Full 21-day journey overview",   badge: "Read First", badgeClass: "", href: "/tools/planner" },
      { emoji: "🥗", title: "Postpartum Nutrition Reset Guide", sub: "The science behind the method",  badge: "Read First", badgeClass: "", href: "/tools/nutrition" },
      { emoji: "🛒", title: "Anti-Bloating Shopping List",      sub: "What to buy before you start",   badge: "Shop",       badgeClass: "", href: "/tools/shopping-list" },
    ],
  },
  {
    label: "Step 2 — Use Every Single Day",
    desc: "These 6 tools are your daily programme. Open them every day, in this order.",
    tools: [
      { emoji: "📗", title: "21-Day Belly Flatten Guide",        sub: "Your daily meals & rules — open every morning", badge: "Most Important", badgeClass: "cardBadgeMain", href: "/tools/guide" },
      { emoji: "☀️", title: "Morning Ritual Checklist",          sub: "Tick off your morning habits",                  badge: "Morning",        badgeClass: "", href: "/tools/checklist" },
      { emoji: "📋", title: "Belly Confidence Habit Tracker",    sub: "5 core habits across 21 days",                  badge: "Daily",          badgeClass: "", href: "/tools/habit-tracker" },
      { emoji: "📅", title: "21-Day Belly Reset Tracker",        sub: "Log weight & waist every morning",              badge: "Daily",          badgeClass: "", href: "/tools/tracker" },
      { emoji: "✏️", title: "Confidence Rebuilding Journal",     sub: "Your evening reflection — 5 mins",              badge: "Evening",        badgeClass: "", href: "/tools/journal" },
      { emoji: "💛", title: "Postpartum Confidence Affirmations",sub: "Read one affirmation each morning",              badge: "Daily",          badgeClass: "", href: "/tools/affirmations" },
    ],
  },
  {
    label: "Step 3 — Reference Guides",
    desc: "Open these when you need them. No order required. They never expire.",
    tools: [
      { emoji: "🍲", title: "Nigerian Food Swap Guide",   sub: "Smarter swaps, same culture",       badge: "Reference", badgeClass: "", href: "/tools/food-swaps" },
      { emoji: "🚨", title: "Bloat Foods Cheat Sheet",    sub: "Red, amber & green food guide",     badge: "Reference", badgeClass: "", href: "/tools/bloat-foods" },
      { emoji: "🥤", title: "Belly-Flattening Drinks",    sub: "6 homemade wellness drink recipes", badge: "Reference", badgeClass: "", href: "/tools/drinks" },
      { emoji: "🏃", title: "Busy Mum Workout Guide",     sub: "Safe postpartum movement plan",     badge: "Reference", badgeClass: "", href: "/tools/workout" },
      { emoji: "🎉", title: "What To Eat At Parties",     sub: "Owambe & event survival guide",     badge: "Reference", badgeClass: "", href: "/tools/parties" },
      { emoji: "🔄", title: "Event Recovery Routine",     sub: "After you overeat — reset fast",    badge: "Reference", badgeClass: "", href: "/tools/event-recovery" },
      { emoji: "⚡", title: "48-Hour Debloat Reset",      sub: "Emergency 2-day protocol",          badge: "Emergency", badgeClass: "", href: "/tools/debloat" },
    ],
  },
];

function getGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return "Good morning";
  if (h >= 12 && h < 17) return "Good afternoon";
  if (h >= 17 && h < 21) return "Good evening";
  return "Good night";
}

function getMotivation(name: string, guideDay: number): string {
  if (guideDay === 0) return `Your 21-day journey starts today, ${name}. Everything you need is right here.`;
  if (guideDay < 4) return `You are on Day ${guideDay + 1}. Keep going — most women feel the first shift around Day 4.`;
  if (guideDay < 7) return `Day ${guideDay + 1} — you are building real momentum now. Your body is responding.`;
  if (guideDay === 7) return `A full week complete! You have done what most women only talk about. Keep going.`;
  if (guideDay < 14) return `Week 2 — this is where the visible changes begin. Stay consistent, ${name}.`;
  if (guideDay === 14) return `Two weeks done! Your body is in a different place than it was 14 days ago.`;
  if (guideDay < 21) return `Week 3 — the final push. Your belly is responding. Don't stop now.`;
  return `21 days complete! This method is yours now, ${name}. For life — not just 21 days. ❤️`;
}

export default function Dashboard() {
  const [onboarded, setOnboarded] = useState<boolean | undefined>(undefined);
  const [showTour, setShowTour] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [showLastChance, setShowLastChance] = useState(false);
  const [showSocialNudge, setShowSocialNudge] = useState(false);
  const [paywallSeconds, setPaywallSeconds] = useState(15 * 60);
  const [name, setName] = useState("");
  const [guideDone, setGuideDone] = useState(0);
  const [trackerDone, setTrackerDone] = useState(0);
  const [journalDone, setJournalDone] = useState(0);
  const [streak, setStreak] = useState(0);
  const [guideCurrentDay, setGuideCurrentDay] = useState(0);
  const paywallTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nudgeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const isOnboarded = localStorage.getItem("veluc_onboarded") === "1";
    const isBuyerLocal = localStorage.getItem("veluc_buyer") === "1";

    setOnboarded(isOnboarded);
    setIsBuyer(isBuyerLocal);

    // Tour only for paying customers
    if (isOnboarded && isBuyerLocal && localStorage.getItem("veluc_tour_done") !== "1") {
      setShowTour(true);
    }

    // Non-buyers who already onboarded: show dashboard briefly then paywall
    if (isOnboarded && !isBuyerLocal) {
      paywallTimer.current = setTimeout(() => setShowPaywall(true), 1500);
    }

    const savedName = localStorage.getItem("veluc_name");
    if (savedName) setName(savedName);

    const g = localStorage.getItem("veluc_guide_done");
    if (g) {
      const parsed: boolean[] = JSON.parse(g);
      const done = parsed.filter(Boolean).length;
      setGuideDone(done);
      const first = parsed.findIndex((v) => !v);
      setGuideCurrentDay(first === -1 ? 20 : first);
      let st = 0;
      for (const v of parsed) { if (v) st++; else break; }
      setStreak(st);
    }

    const t = localStorage.getItem("veluc_tracker");
    if (t) {
      const entries = JSON.parse(t) as { weight: string; waist: string }[];
      setTrackerDone(entries.filter((e) => e.weight || e.waist).length);
    }

    const j = localStorage.getItem("veluc_journal");
    if (j) setJournalDone((JSON.parse(j) as string[]).filter((e) => e.trim().length > 0).length);

    return () => { if (paywallTimer.current) clearTimeout(paywallTimer.current); };
  }, []);

  // Countdown ticks whenever the paywall is visible
  useEffect(() => {
    if (!showPaywall || isBuyer) return;
    setPaywallSeconds(15 * 60);
    const interval = setInterval(() => {
      setPaywallSeconds((prev) => (prev <= 1 ? 15 * 60 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [showPaywall, isBuyer]);

  // Back button trap — intercept browser back and show last-chance offer
  useEffect(() => {
    if (!showPaywall || isBuyer) return;
    history.pushState({ velucPaywall: true }, "", window.location.href);
    function onPopState() {
      setShowLastChance(true);
      history.pushState({ velucPaywall: true }, "", window.location.href);
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [showPaywall, isBuyer]);

  // Social proof nudge — show testimonial after 30s of inaction
  useEffect(() => {
    if (!showPaywall || isBuyer) return;
    nudgeTimer.current = setTimeout(() => setShowSocialNudge(true), 30000);
    return () => { if (nudgeTimer.current) clearTimeout(nudgeTimer.current); };
  }, [showPaywall, isBuyer]);

  function handleOnboardingComplete() {
    const savedName = localStorage.getItem("veluc_name");
    if (savedName) setName(savedName);
    setOnboarded(true);
    paywallTimer.current = setTimeout(() => setShowPaywall(true), 3500);
  }


  const greeting = getGreeting();
  const displayName = name || "there";

  function fmtCountdown(s: number) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  return (
    <>
      {/* Onboarding — first visit only */}
      {onboarded === false && (
        <Onboarding onComplete={handleOnboardingComplete} />
      )}

      {/* Tour — buyers only, after onboarding */}
      {onboarded === true && showTour && (
        <Tour onDone={() => setShowTour(false)} />
      )}

      {/* Paywall — non-buyers after preview */}
      {showPaywall && !isBuyer && (
        <div className={s.paywallOverlay}>
          <div className={s.paywallCard}>

            {/* Before / after */}
            <div className={s.paywallBeforeAfter}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/before-after%20image%201.jpeg" alt="Transformation result" className={s.paywallBAImg} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/before-after%20image%202.jpeg" alt="Transformation result" className={s.paywallBAImg} />
            </div>
            <p className={s.paywallBACaption}>Real results from the 21-Day Guide</p>

            <span className={s.paywallBrand}>🌿 Veluc Wellness</span>
            <h2 className={s.paywallTitle}>
              This could be you, {displayName}.
            </h2>
            <p className={s.paywallBody}>
              Your 21-day plan is ready. Get the complete guide and this platform for ₦9,800.
            </p>
            {showSocialNudge && (
              <div className={s.socialNudge}>
                <p className={s.socialNudgeQuote}>&ldquo;I almost didn&apos;t buy. By Day 7 my bloating was completely gone.&rdquo;</p>
                <span className={s.socialNudgeName}>— Adaeze, Lagos &middot; 4 months postpartum</span>
              </div>
            )}
            <div className={s.paywallPriceRow}>
              <span className={s.paywallStrike}>₦25,000</span>
              <span className={s.paywallPrice}>₦9,800 today</span>
            </div>
            <a href={CHECKOUT_URL} className={s.paywallBtn}>
              Get the Guide + Platform →
            </a>
            <p className={s.paywallCountdown}>
              ⏰ Offer reserved for <strong>{fmtCountdown(paywallSeconds)}</strong>
            </p>
            <div className={s.paywallTrust}>
              <span>✓ Instant access</span>
              <span>✓ 30-day guarantee</span>
              <span>✓ Any phone</span>
            </div>
          </div>
        </div>
      )}

      {/* Last-chance offer — fires when user tries to go back */}
      {showLastChance && !isBuyer && (
        <div className={s.lastChanceOverlay}>
          <div className={s.lastChanceCard}>
            <span className={s.lastChanceEmoji}>⏳</span>
            <h2 className={s.lastChanceTitle}>Before you go, {displayName}…</h2>
            <p className={s.lastChanceBody}>
              247 Nigerian mothers almost left this page too. The ones who stayed are now fitting into clothes they haven&apos;t worn in years.
            </p>
            <p className={s.lastChanceBody}>
              Your plan is personalised and ready. This offer won&apos;t be here next time you visit.
            </p>
            <a href={CHECKOUT_URL} className={s.paywallBtn} style={{ display: "block", textAlign: "center", textDecoration: "none" }}>
              Get the Complete Guide — ₦9,800 →
            </a>
            <button className={s.lastChanceDismiss} onClick={() => setShowLastChance(false)}>
              No thanks, I&apos;ll pass
            </button>
          </div>
        </div>
      )}

      <div className={s.page}>
        {/* Hero greeting */}
        <div className={s.heroSection}>
          <span className={s.heroGreeting}>{greeting} 🌿</span>
          <span className={s.heroName}>{displayName} ❤️</span>
          <p className={s.heroTagline}>{getMotivation(displayName, guideDone)}</p>
          {streak > 0 && <span className={s.streakBadge} style={{ marginBottom: 12 }}>🔥 {streak}-day streak</span>}
          <div className={s.communityPill}>
            <span>👭</span>
            <span>143+ Nigerian mothers on this journey with you</span>
          </div>
        </div>

        {/* Stats row */}
        <div className={s.statsRow}>
          <div className={s.statCard}>
            <span className={s.statValue}>{guideDone}</span>
            <span className={s.statLabel}>Days Done</span>
          </div>
          <div className={s.statCard}>
            <span className={s.statValue}>{trackerDone}</span>
            <span className={s.statLabel}>Days Logged</span>
          </div>
          <div className={s.statCard}>
            <span className={s.statValue}>{journalDone}</span>
            <span className={s.statLabel}>Journal Entries</span>
          </div>
        </div>

        {/* Today's focus */}
        <Link href="/tools/guide" className={s.focusCard}>
          <span className={s.focusCardEmoji}>📗</span>
          <div className={s.focusCardInfo}>
            <span className={s.focusCardLabel}>Today&apos;s Focus</span>
            <span className={s.focusCardTitle}>
              {guideDone < 21
                ? `Day ${guideCurrentDay + 1} of your 21-Day Guide — tap to open`
                : "21 days complete 🎉 — tap to review your journey"}
            </span>
          </div>
          <span className={s.focusCardArrow}>→</span>
        </Link>

        {/* Personalised plan */}
        {onboarded && <ProfilePlanCard />}

        {/* Buyer welcome */}
        {isBuyer && (
          <div className={s.buyerBanner}>
            <span className={s.buyerBannerIcon}>📧</span>
            <div>
              <p className={s.buyerBannerTitle}>Your guide pack is on its way!</p>
              <p className={s.buyerBannerBody}>
                We are finalising your complete bundle and will email it to you within 24–48 hours. All your interactive tools are live right here — start today.
              </p>
            </div>
          </div>
        )}

        {/* How to use */}
        <div className={s.howToCard}>
          <p className={s.howToHeading}>📋 How to Use This App</p>
          <div className={s.howToSteps}>
            {HOW_TO_STEPS.map((step) => (
              <div key={step.num} className={s.howToStep}>
                <span className={s.howToStepNum}>{step.num}</span>
                <div className={s.howToStepBody}>
                  <p className={s.howToStepTitle}>{step.title}</p>
                  <p className={s.howToStepText}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tool groups */}
        {toolGroups.map((group) => (
          <div key={group.label}>
            <div className={s.toolGroupHeader}>
              <span className={s.toolGroupLabel}>{group.label}</span>
              <p className={s.toolGroupDesc}>{group.desc}</p>
            </div>
            <div className={s.grid}>
              {group.tools.map((tool) => (
                <Link key={tool.href} href={tool.href} className={s.card}>
                  <span className={s.cardEmoji}>{tool.emoji}</span>
                  <span className={s.cardTitle}>{tool.title}</span>
                  <span className={s.cardSub}>{tool.sub}</span>
                  <span className={`${s.cardBadge} ${tool.badgeClass ? s[tool.badgeClass as keyof typeof s] : ""}`}>
                    {tool.badge}
                  </span>
                  <span className={s.cardArrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
