"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import s from "../tools.module.css";
import { GOAL_OPTIONS } from "../Onboarding";
import { type Struggle } from "../recommendations";

const STRUGGLE_OPTIONS: { key: Struggle; emoji: string; label: string }[] = [
  { key: "belly",       emoji: "🫄", label: "My belly and bloating won't go down" },
  { key: "food",        emoji: "🍽️", label: "I'm not sure what to eat anymore" },
  { key: "energy",      emoji: "😴", label: "I feel exhausted and have no energy" },
  { key: "husband",     emoji: "💔", label: "I feel emotionally distant from my husband" },
  { key: "body",        emoji: "🪞", label: "I'm not happy with how my body looks" },
  { key: "consistency", emoji: "🔄", label: "I start things but can't stay consistent" },
];

const WEEK_OPTIONS = [
  { key: "0-2",  label: "Less than 2 weeks" },
  { key: "2-6",  label: "2 to 6 weeks" },
  { key: "6-12", label: "6 weeks to 3 months" },
  { key: "12+",  label: "More than 3 months" },
];

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [weeks, setWeeks] = useState("");
  const [breastfeeding, setBreastfeeding] = useState("");
  const [struggles, setStruggles] = useState<Struggle[]>([]);
  const [goal, setGoal] = useState("");
  const [saved, setSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setName(localStorage.getItem("veluc_name") ?? "");
    setWeeks(localStorage.getItem("veluc_postpartum_weeks") ?? "");
    setBreastfeeding(localStorage.getItem("veluc_breastfeeding") ?? "");
    const raw = localStorage.getItem("veluc_struggles");
    if (raw) setStruggles(JSON.parse(raw));
    setGoal(localStorage.getItem("veluc_goal") ?? "");
    setLoaded(true);
  }, []);

  function toggleStruggle(key: Struggle) {
    setSaved(false);
    setStruggles((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : prev.length < 3 ? [...prev, key] : prev
    );
  }

  function save() {
    localStorage.setItem("veluc_name", name.trim() || "Mama");
    localStorage.setItem("veluc_postpartum_weeks", weeks);
    localStorage.setItem("veluc_breastfeeding", breastfeeding);
    localStorage.setItem("veluc_struggles", JSON.stringify(struggles));
    localStorage.setItem("veluc_goal", goal);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  if (!loaded) return null;

  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Settings</span>
        <span className={s.infoPageHeaderTitle}>Your Profile</span>
        <p className={s.infoPageHeaderSub}>
          Update your details and your personalised plan will adjust automatically.
        </p>
      </div>

      <div className={s.profileForm}>

        {/* Name */}
        <div className={s.profileSection}>
          <p className={s.profileSectionLabel}>Your name</p>
          <input
            className={s.onboardingInput}
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setSaved(false); }}
            placeholder="Your first name"
            autoComplete="given-name"
          />
        </div>

        {/* Postpartum stage */}
        <div className={s.profileSection}>
          <p className={s.profileSectionLabel}>Time since birth</p>
          <div className={s.onboardingRadioGroup}>
            {WEEK_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                className={`${s.onboardingRadioItem} ${weeks === opt.key ? s.onboardingRadioItemActive : ""}`}
                onClick={() => { setWeeks(opt.key); setSaved(false); }}
              >
                <span className={s.onboardingRadioLabel}>{opt.label}</span>
                <span className={s.onboardingRadioCheck}>{weeks === opt.key ? "●" : "○"}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Breastfeeding */}
        <div className={s.profileSection}>
          <p className={s.profileSectionLabel}>Breastfeeding</p>
          <div className={s.onboardingRadioGroup}>
            {[
              { key: "yes", label: "Yes — I am breastfeeding" },
              { key: "no",  label: "No — I have stopped or not started" },
            ].map((opt) => (
              <button
                key={opt.key}
                className={`${s.onboardingRadioItem} ${breastfeeding === opt.key ? s.onboardingRadioItemActive : ""}`}
                onClick={() => { setBreastfeeding(opt.key); setSaved(false); }}
              >
                <span className={s.onboardingRadioLabel}>{opt.label}</span>
                <span className={s.onboardingRadioCheck}>{breastfeeding === opt.key ? "●" : "○"}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Struggles */}
        <div className={s.profileSection}>
          <p className={s.profileSectionLabel}>Your biggest challenges (up to 3)</p>
          <div className={s.onboardingCheckGroup}>
            {STRUGGLE_OPTIONS.map((opt) => {
              const selected = struggles.includes(opt.key);
              const maxed = !selected && struggles.length >= 3;
              return (
                <button
                  key={opt.key}
                  className={`${s.onboardingCheckItem} ${selected ? s.onboardingCheckItemActive : ""} ${maxed ? s.onboardingCheckItemDisabled : ""}`}
                  onClick={() => !maxed && toggleStruggle(opt.key)}
                  disabled={maxed}
                >
                  <span className={s.onboardingCheckEmoji}>{opt.emoji}</span>
                  <span className={s.onboardingCheckLabel}>{opt.label}</span>
                  <span className={s.onboardingCheckbox}>{selected ? "✓" : ""}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Goal */}
        <div className={s.profileSection}>
          <p className={s.profileSectionLabel}>Your 21-day goal</p>
          <div className={s.obGoalGrid}>
            {GOAL_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                className={`${s.obGoalCard} ${goal === opt.key ? s.obGoalCardActive : ""}`}
                onClick={() => { setGoal(opt.key); setSaved(false); }}
              >
                {goal === opt.key && <span className={s.obGoalTick}>✓</span>}
                <span className={s.obGoalEmoji}>{opt.emoji}</span>
                <span className={s.obGoalLabel}>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Save */}
        <button className={s.profileSaveBtn} onClick={save}>
          {saved ? "✓ Profile Updated" : "Save Changes"}
        </button>

        <Link href="/tools" className={s.profileBackLink}>
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
