"use client";

import { useEffect, useState } from "react";
import s from "../tools.module.css";

type Item = { id: string; text: string };
type Section = { title: string; items: Item[] };

const sections: Section[] = [
  {
    title: "🌅 Wake Up",
    items: [
      { id: "w1", text: "Drink 1 large glass of warm water before anything else" },
      { id: "w2", text: "Record your weight (same time, same conditions every morning)" },
      { id: "w3", text: "Open your blinds — morning light helps reset your cortisol" },
    ],
  },
  {
    title: "🥚 Breakfast Window (6:00 – 8:30 AM)",
    items: [
      { id: "b1", text: "Eat your breakfast within the window" },
      { id: "b2", text: "Keep it protein-focused — eggs, moi moi, akara" },
      { id: "b3", text: "No starchy carbs at breakfast (no rice, no eba, no bread)" },
      { id: "b4", text: "No sweetened drinks at breakfast" },
    ],
  },
  {
    title: "🏃 Morning Activation",
    items: [
      { id: "a1", text: "Complete the 10-minute morning activation routine" },
      { id: "a2", text: "Do it on an empty stomach, before your breakfast window" },
    ],
  },
  {
    title: "☀️ Main Meal Window (12:00 – 2:00 PM)",
    items: [
      { id: "m1", text: "Eat your main Nigerian meal within the carb window" },
      { id: "m2", text: "ONE carb per meal — rice OR eba, not both" },
      { id: "m3", text: "Include protein at every meal (fish, chicken, eggs, beans)" },
    ],
  },
  {
    title: "💧 Hydration",
    items: [
      { id: "h1", text: "Drink at least 6 glasses of water through the day" },
      { id: "h2", text: "Replace one sugary drink with warm water or green tea" },
    ],
  },
  {
    title: "🌇 Light Dinner (5:00 – 7:00 PM)",
    items: [
      { id: "d1", text: "Eat light dinner before 7:00 PM" },
      { id: "d2", text: "No heavy carbs after 7:00 PM" },
      { id: "d3", text: "Stop snacking after dinner" },
    ],
  },
  {
    title: "🌙 Nighttime",
    items: [
      { id: "n1", text: "Prepare and drink the Nighttime Belly Reset Drink at 9:00 PM" },
      { id: "n2", text: "Sip slowly over 10 minutes" },
      { id: "n3", text: "Go to bed before midnight — sleep is part of the hormone reset" },
    ],
  },
];

const allIds = sections.flatMap((sec) => sec.items.map((i) => i.id));
const STORAGE_KEY = "veluc_checklist";

function getTimeGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return "Good morning";
  if (h >= 12 && h < 17) return "Good afternoon";
  if (h >= 17 && h < 21) return "Good evening";
  return "Good night";
}

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [name, setName] = useState("");

  useEffect(() => {
    const n = localStorage.getItem("veluc_name");
    if (n) setName(n);
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setChecked(JSON.parse(raw));
  }, []);

  function toggle(id: string) {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function reset() {
    setChecked({});
    localStorage.removeItem(STORAGE_KEY);
  }

  const doneCount = allIds.filter((id) => checked[id]).length;
  const allDone = doneCount === allIds.length;
  const timeGreeting = getTimeGreeting();

  return (
    <div className={s.page}>
        {allDone ? (
          <div className={s.celebCard}>
            <span className={s.celebEmoji}>🎉</span>
            <p className={s.celebTitle}>All done, {name || "mama"}!</p>
            <p className={s.celebBody}>You completed every habit today. Your body is responding. Come back tomorrow and do it again — this consistency is what changes everything.</p>
          </div>
        ) : (
          <div className={s.checkHeader}>
            <p className={s.checkHeaderTitle}>{timeGreeting}, {name || "mama"} 🌿</p>
            <p className={s.checkHeaderBody}>
              {doneCount === 0
                ? "Let's do today's ritual together. One habit at a time."
                : `${doneCount} of ${allIds.length} done — you're getting there. Keep going!`}
            </p>
          </div>
        )}

        <span className={s.progressLabel}>{doneCount} of {allIds.length} complete</span>
        <div className={s.progressWrap}>
          <div className={s.progressBar} style={{ width: `${(doneCount / allIds.length) * 100}%` }} />
        </div>
        <span className={s.progressSub} style={{ marginBottom: 24 }}>&nbsp;</span>

        <div className={s.checkSectionsGrid}>
          {sections.map((sec) => (
            <div key={sec.title} className={s.checkSectionCard}>
              <p className={s.checkSectionTitle}>{sec.title}</p>
              {sec.items.map((item) => (
                <div key={item.id} className={s.checkItem} onClick={() => toggle(item.id)}>
                  <div className={`${s.checkBox} ${checked[item.id] ? s.checkBoxDone : ""}`}>
                    {checked[item.id] ? "✓" : ""}
                  </div>
                  <span className={`${s.checkText} ${checked[item.id] ? s.checkTextDone : ""}`}>{item.text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={s.chiomaNoteCard} style={{ margin: "16px 0" }}>
          <div className={s.chiomaAvatar}>C</div>
          <div className={s.chiomaNoteBody}>
            <span className={s.chiomaNoteFrom}>From Chioma</span>
            <p className={s.chiomaNoteText}>Every habit you tick off is a small vote for the woman you are becoming. Small things done consistently change everything. — Chioma ❤️</p>
          </div>
        </div>

        <button className={s.outlineBtn} onClick={reset}>Reset for New Day</button>
    </div>
  );
}
