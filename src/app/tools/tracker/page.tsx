"use client";

import { useEffect, useState } from "react";
import s from "../tools.module.css";

type DayEntry = { weight: string; waist: string; bloat: string; energy: string; notes: string };

const BLOAT = ["Flat 😊", "Light", "Moderate", "Noticeable", "Very bloated 😓"];
const ENERGY = ["Exhausted", "Low", "Fair", "Good 💪", "Excellent ✨"];
const STORAGE_KEY = "veluc_tracker";
const empty = (): DayEntry => ({ weight: "", waist: "", bloat: "", energy: "", notes: "" });

export default function TrackerPage() {
  const [entries, setEntries] = useState<DayEntry[]>(Array.from({ length: 21 }, empty));
  const [current, setCurrent] = useState(0);
  const [saved, setSaved] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const n = localStorage.getItem("veluc_name");
    if (n) setName(n);
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: DayEntry[] = JSON.parse(raw);
      setEntries(parsed);
      const first = parsed.findIndex((e) => !e.weight && !e.waist);
      setCurrent(first === -1 ? 0 : first);
    }
  }, []);

  function update(field: keyof DayEntry, value: string) {
    setEntries((prev) => {
      const next = prev.map((e) => ({ ...e }));
      next[current] = { ...next[current], [field]: value };
      return next;
    });
    setSaved(false);
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    setSaved(true);
  }

  // Auto-save current day before navigating to avoid data loss
  function navigate(newDay: number) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    setCurrent(newDay);
    setSaved(false);
  }

  const filledCount = entries.filter((e) => e.weight || e.waist).length;
  const e = entries[current];

  // Progress since Day 1
  const day1 = entries[0];
  const latestWithWeight = [...entries].reverse().find((e) => e.weight);
  const weightDiff =
    day1.weight && latestWithWeight && latestWithWeight !== day1
      ? (parseFloat(day1.weight) - parseFloat(latestWithWeight.weight)).toFixed(1)
      : null;
  const day1Waist = day1.waist ? parseFloat(day1.waist) : null;
  const latestWithWaist = [...entries].reverse().find((e) => e.waist);
  const waistDiff =
    day1Waist && latestWithWaist && latestWithWaist !== day1
      ? (day1Waist - parseFloat(latestWithWaist.waist)).toFixed(1)
      : null;

  return (
    <div className={s.page}>
        {/* Progress diff — only when we have Day 1 + another day */}
        {(weightDiff || waistDiff) && (
          <div className={s.progressDiffCard}>
            <span className={s.progressDiffIcon}>📉</span>
            <div className={s.progressDiffInfo}>
              <span className={s.progressDiffTitle}>Your progress since Day 1</span>
              <span className={s.progressDiffValue}>
                {weightDiff && parseFloat(weightDiff) > 0 ? `−${weightDiff} kg` : weightDiff && parseFloat(weightDiff) < 0 ? `+${Math.abs(parseFloat(weightDiff))} kg` : ""}
                {weightDiff && waistDiff ? "  ·  " : ""}
                {waistDiff && parseFloat(waistDiff) > 0 ? `−${waistDiff} cm waist` : ""}
              </span>
              <span className={s.progressDiffSub}>Keep going, {name || "mama"} — this is real progress ❤️</span>
            </div>
          </div>
        )}

        <span className={s.progressLabel}>{filledCount} of 21 days logged</span>
        <div className={s.progressWrap}>
          <div className={s.progressBar} style={{ width: `${(filledCount / 21) * 100}%` }} />
        </div>
        <span className={s.progressSub}>{21 - filledCount} days remaining</span>

        <div className={s.dayNav}>
          <button className={s.dayNavBtn} onClick={() => navigate(current - 1)} disabled={current === 0}>‹</button>
          <div className={s.dayNavCenter}>
            <span className={s.dayNavLabel}>Day {current + 1} of 21</span>
            <span className={s.dayNavSub}>
              {(e.weight || e.waist)
                ? `${e.weight ? e.weight + " kg" : ""}${e.weight && e.waist ? " · " : ""}${e.waist ? e.waist + " cm" : ""}`
                : "Not logged yet"}
            </span>
          </div>
          <button className={s.dayNavBtn} onClick={() => navigate(current + 1)} disabled={current === 20}>›</button>
        </div>

        <div className={s.dayDots}>
          {Array.from({ length: 21 }, (_, i) => (
            <button
              key={i}
              className={`${s.dayDot} ${(entries[i].weight || entries[i].waist) ? s.dayDotDone : ""} ${i === current && !(entries[i].weight || entries[i].waist) ? s.dayDotActive : ""}`}
              onClick={() => navigate(i)}
            >
              {(entries[i].weight || entries[i].waist) ? "✓" : i + 1}
            </button>
          ))}
        </div>

        <div className={s.trackerHeader}>
          <p className={s.trackerHeaderTitle}>Day {current + 1} Log</p>
          <p className={s.trackerHeaderSub}>
            {current === 0
              ? `Start by entering your measurements today, ${name || "mama"} — this is your Day 1 baseline.`
              : `Every number you log is proof that you showed up for yourself today.`}
          </p>
        </div>

        <div className={s.formCard}>
          <div className={s.twoCol}>
            <div className={s.fieldGroup}>
              <label className={s.fieldLabel}>⚖️ Weight (kg)</label>
              <input type="number" step="0.1" className={s.fieldInput} placeholder="e.g. 72.5" value={e.weight} onChange={(ev) => update("weight", ev.target.value)} />
            </div>
            <div className={s.fieldGroup}>
              <label className={s.fieldLabel}>📏 Waist (cm)</label>
              <input type="number" step="0.5" className={s.fieldInput} placeholder="e.g. 88" value={e.waist} onChange={(ev) => update("waist", ev.target.value)} />
            </div>
          </div>

          <div className={s.fieldGroup}>
            <label className={s.fieldLabel}>🫄 Morning belly bloat</label>
            <div className={s.scaleRow}>
              {BLOAT.map((opt) => (
                <button key={opt} className={`${s.scaleBtn} ${e.bloat === opt ? s.scaleBtnActive : ""}`} onClick={() => update("bloat", opt)}>{opt}</button>
              ))}
            </div>
          </div>

          <div className={s.fieldGroup}>
            <label className={s.fieldLabel}>⚡ Energy level</label>
            <div className={s.scaleRow}>
              {ENERGY.map((opt) => (
                <button key={opt} className={`${s.scaleBtn} ${e.energy === opt ? s.scaleBtnActive : ""}`} onClick={() => update("energy", opt)}>{opt}</button>
              ))}
            </div>
          </div>

          <div className={s.fieldGroup}>
            <label className={s.fieldLabel}>📝 Notes</label>
            <textarea className={s.fieldTextarea} placeholder="How do you feel today? Anything you noticed?" value={e.notes} onChange={(ev) => update("notes", ev.target.value)} />
          </div>

          {saved ? (
            <div className={s.savedBanner}>✓ Day {current + 1} saved! You showed up today, {name || "mama"} ❤️</div>
          ) : (
            <button className={s.actionBtn} onClick={save}>Save Day {current + 1}</button>
          )}
        </div>

        {!day1.weight && (
          <div className={s.chiomaNoteCard} style={{ marginTop: 16 }}>
            <div className={s.chiomaAvatar}>C</div>
            <div className={s.chiomaNoteBody}>
              <span className={s.chiomaNoteFrom}>A note from Chioma</span>
              <p className={s.chiomaNoteText}>Log your Day 1 weight and waist measurement today. In 21 days, these numbers will tell you your story. — Chioma ❤️</p>
            </div>
          </div>
        )}
    </div>
  );
}
