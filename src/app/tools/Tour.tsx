"use client";

import { useState } from "react";
import s from "./tools.module.css";

const SLIDES = [
  {
    emoji: "🏠",
    bg: "#EBF4F6",
    color: "#0F4C5C",
    title: "Your Dashboard",
    text: "This is your home base. The stats at the top track your daily progress. \"Today's Focus\" always shows your current guide day. Tap any tool card below to jump straight in.",
    extra: null,
    chioma: false,
  },
  {
    emoji: "📗",
    bg: "#EDF7EF",
    color: "#3A7A45",
    title: "Start With the Guide — Every Day",
    text: "The 21-Day Guide is the heart of the whole programme. Open it every morning, read your day's meals and rules, follow them exactly, and tap \"Mark Day Done.\" This single daily action drives your entire result.",
    extra: null,
    chioma: false,
  },
  {
    emoji: "☀️",
    bg: "#FFF8E6",
    color: "#8A6000",
    title: "Your Daily 3",
    text: "Use these three tools every day alongside the Guide. Together with the Guide, they form the complete daily programme.",
    extra: ["📋  Habit Grid — tick your 5 core habits", "📊  Tracker — log weight & waist", "✏️  Journal — your evening reflection"],
    chioma: false,
  },
  {
    emoji: "🥗",
    bg: "#F4F0FC",
    color: "#5A3A8A",
    title: "Reference Guides",
    text: "Your remaining tools are reference guides — open them when you need clarity. Food Swaps, Drink Recipes, Bloat Foods Cheat Sheet, Party Guide, Affirmations, Event Recovery. They don't need to be done in order and never expire.",
    extra: null,
    chioma: false,
  },
  {
    emoji: "🌿",
    bg: "#EBF4F6",
    color: "#0F4C5C",
    title: "One Rule",
    text: "Open this app every single day. Even on bad days. Especially on bad days. The tools compound — 21 days of consistency is the method. Everything else is detail.",
    extra: null,
    chioma: true,
  },
];

export default function Tour({ onDone }: { onDone: () => void }) {
  const [slide, setSlide] = useState(0);
  const [dir, setDir] = useState<"fwd" | "back">("fwd");

  function go(next: number) {
    setDir(next > slide ? "fwd" : "back");
    setSlide(next);
  }

  function finish() {
    localStorage.setItem("veluc_tour_done", "1");
    onDone();
  }

  const current = SLIDES[slide];
  const isLast = slide === SLIDES.length - 1;

  return (
    <div className={s.onboardingOverlay}>
      <div className={s.tourCard}>

        {/* Skip button */}
        <button className={s.tourSkipBtn} onClick={finish}>Skip tour</button>

        {/* Illustration */}
        <div key={`ill-${slide}`} className={`${s.tourIllustration} ${dir === "fwd" ? s.obFwd : s.obBack}`}
          style={{ background: current.bg }}>
          <span className={s.tourIllustrationEmoji}>{current.emoji}</span>
        </div>

        {/* Text */}
        <div key={`txt-${slide}`} className={`${s.tourContent} ${dir === "fwd" ? s.obFwd : s.obBack}`}>
          <h2 className={s.tourTitle} style={{ color: current.color }}>{current.title}</h2>
          <p className={s.tourText}>{current.text}</p>

          {current.extra && (
            <div className={s.tourPills}>
              {current.extra.map((item) => (
                <div key={item} className={s.tourPill}>{item}</div>
              ))}
            </div>
          )}

          {current.chioma && (
            <div className={s.tourChiomaRow}>
              <span className={s.tourChiomaAvatar}>C</span>
              <span className={s.tourChiomaText}>See you tomorrow. — Chioma ❤️</span>
            </div>
          )}
        </div>

        {/* Progress dots */}
        <div className={s.tourDots}>
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className={`${s.tourDot} ${i === slide ? s.tourDotActive : i < slide ? s.tourDotDone : ""}`}
              onClick={() => go(i)}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className={s.onboardingBtnRow} style={{ marginTop: 0 }}>
          {slide > 0 && (
            <button className={s.onboardingBtnSecondary} onClick={() => go(slide - 1)}>← Back</button>
          )}
          <button className={s.onboardingBtn} onClick={isLast ? finish : () => go(slide + 1)} style={{ marginTop: 0 }}>
            {isLast ? "Let's Go! →" : "Next →"}
          </button>
        </div>

      </div>
    </div>
  );
}
