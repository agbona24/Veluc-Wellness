"use client";

import { useEffect, useState } from "react";
import s from "../tools.module.css";

const prompts = [
  "Before you begin, describe how your body feels today. What would you love to feel different in 21 days?",
  "What has been the hardest part of your postpartum journey so far? Write it all out — don't hold back.",
  "What would it mean for you personally if you lost 5kg in the next 21 days? How would your daily life feel different?",
  "Write about a time when you felt really confident and beautiful in your body. Describe that moment in detail.",
  "What have you already done well this week? List at least 3 things — big or small. Give yourself credit.",
  "Write a letter to your body. Tell it what you appreciate about it, even right now, before the change.",
  "You have completed Week 1. What has surprised you most? What are you most proud of yourself for?",
  "Who in your life would you love to surprise with your transformation? Describe their reaction in your imagination.",
  "What is one negative thought you keep telling yourself about your body? Challenge it — is it actually true?",
  "Your children are watching you. What do you want to model for them about self-care, health, and self-worth?",
  "Describe the dress, outfit, or clothes you plan to wear when you reach your goal. Where will you wear it?",
  "What has been the most helpful part of this method so far? What would you tell a close friend about it?",
  "How has your energy level changed since you started? Compare this week to how you felt before Day 1.",
  "Write about one moment of progress this week — however small. A waist that felt looser. A morning less bloated.",
  "You are in Week 3. What has this experience taught you about your body that you didn't know before?",
  "What are 5 things you love about yourself that have nothing to do with your weight or body shape?",
  "Describe the version of yourself you are becoming. What does she look like? How does she carry herself?",
  "What will you do differently to maintain this progress after Day 21? Write your personal maintenance plan.",
  "What would you say to a woman who is exactly where you were on Day 1 — tired, frustrated, close to giving up?",
  "Take a moment to appreciate your body for carrying and birthing your baby. Write it a genuine thank-you.",
  "Final entry. Compare who you are today to who you were on Day 1. Celebrate yourself — you deserve every word.",
];

const chiomaContexts: Record<number, string> = {
  0: "I wrote this first prompt because I want you to know exactly where you're starting from. Your Day 1 feelings are sacred — they will make your Day 21 feelings even more powerful.",
  6: "Week 1 is the hardest. If you're writing on Day 7, that means you stayed. I'm so proud of you.",
  13: "Two weeks in. This prompt is about seeing what's already changed inside you — even before the scale catches up.",
  20: "This is the last entry. Write everything. Nothing is too much. You have earned every single word.",
};

const STORAGE_KEY = "veluc_journal";

export default function JournalPage() {
  const [entries, setEntries] = useState<string[]>(Array(21).fill(""));
  const [current, setCurrent] = useState(0);
  const [saved, setSaved] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const n = localStorage.getItem("veluc_name");
    if (n) setName(n);
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: string[] = JSON.parse(raw);
      setEntries(parsed);
      const first = parsed.findIndex((e) => !e.trim());
      setCurrent(first === -1 ? 20 : first);
    }
  }, []);

  function update(value: string) {
    setEntries((prev) => {
      const next = [...prev];
      next[current] = value;
      return next;
    });
    setSaved(false);
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    setSaved(true);
  }

  function navigate(newDay: number) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    setCurrent(newDay);
    setSaved(false);
  }

  const writtenCount = entries.filter((e) => e.trim().length > 0).length;
  const words = entries[current].trim().split(/\s+/).filter(Boolean).length;
  const chiomaContext = chiomaContexts[current];

  return (
    <div className={s.page}>
      <span className={s.progressLabel}>{writtenCount} of 21 entries written</span>
      <div className={s.progressWrap}>
        <div className={s.progressBar} style={{ width: `${(writtenCount / 21) * 100}%` }} />
      </div>
      <span className={s.progressSub} style={{ marginBottom: 20 }}>{21 - writtenCount} entries remaining</span>

      <div className={s.journalSplit}>

        {/* ── Left: navigation + context (sticky on desktop) ── */}
        <div className={s.journalSplitLeft}>
          <div className={s.dayNav}>
            <button className={s.dayNavBtn} onClick={() => navigate(current - 1)} disabled={current === 0}>‹</button>
            <div className={s.dayNavCenter}>
              <span className={s.dayNavLabel}>{current === 20 ? "Day 21 🎉" : `Day ${current + 1} of 21`}</span>
              <span className={s.dayNavSub}>{entries[current].trim() ? "✓ Written" : "Not written yet"}</span>
            </div>
            <button className={s.dayNavBtn} onClick={() => navigate(current + 1)} disabled={current === 20}>›</button>
          </div>

          <div className={s.dayDots}>
            {entries.map((e, i) => (
              <button
                key={i}
                className={`${s.dayDot} ${e.trim() ? s.dayDotDone : ""} ${i === current && !e.trim() ? s.dayDotActive : ""}`}
                onClick={() => navigate(i)}
              >
                {e.trim() ? "✓" : i + 1}
              </button>
            ))}
          </div>

          <div className={s.journalHeader}>
            <span className={s.journalHeaderEyebrow}>Day {current + 1} · {name ? `${name}'s Journal` : "Your private space"}</span>
            <span className={s.journalHeaderTitle}>Write freely ✏️</span>
          </div>

          {chiomaContext && (
            <div className={s.chiomaNoteCard}>
              <div className={s.chiomaAvatar}>C</div>
              <div className={s.chiomaNoteBody}>
                <span className={s.chiomaNoteFrom}>Why I wrote this prompt — Chioma</span>
                <p className={s.chiomaNoteText}>{chiomaContext}</p>
              </div>
            </div>
          )}
        </div>

        {/* ── Right: writing area ── */}
        <div className={s.journalSplitRight}>
          <div className={s.journalCard}>
            <div className={s.journalCardBody}>
              <div className={s.journalPrompt}>
                <span className={s.journalPromptLabel}>Today&apos;s Prompt</span>
                <p className={s.journalPromptText}>{prompts[current]}</p>
              </div>
              <div className={s.fieldGroup}>
                <textarea
                  className={s.fieldTextarea}
                  style={{ minHeight: 220 }}
                  placeholder={`Write your thoughts here, ${name || "mama"}… there are no wrong answers. This space is private and just for you.`}
                  value={entries[current]}
                  onChange={(ev) => update(ev.target.value)}
                />
                <span className={s.wordCount}>{words} {words === 1 ? "word" : "words"}</span>
              </div>
              {saved ? (
                <div className={s.savedBanner}>✓ Entry saved, {name || "mama"} ❤️</div>
              ) : (
                <button className={s.actionBtn} onClick={save}>Save Entry</button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
