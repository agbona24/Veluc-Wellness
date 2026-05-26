"use client";

import { useEffect, useState } from "react";
import s from "../tools.module.css";

const STORAGE_KEY = "veluc_daily_habits";
const DAYS = 21;

const HABITS = [
  { key: "windows",  emoji: "🕐", label: "Eating windows" },
  { key: "drink",    emoji: "🌙", label: "Nighttime drink" },
  { key: "water",    emoji: "💧", label: "6+ glasses water" },
  { key: "noCarbs",  emoji: "🚫", label: "No carbonated" },
  { key: "movement", emoji: "🚶", label: "Walk / activation" },
] as const;

type HabitKey = typeof HABITS[number]["key"];
type DayHabits = Record<HabitKey, boolean>;

function emptyDay(): DayHabits {
  return { windows: false, drink: false, water: false, noCarbs: false, movement: false };
}

function emptyGrid(): DayHabits[] {
  return Array.from({ length: DAYS }, () => emptyDay());
}

export default function HabitTrackerPage() {
  const [grid, setGrid] = useState<DayHabits[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as DayHabits[];
      // Fill any missing days
      const full = emptyGrid().map((empty, i) => parsed[i] ?? empty);
      setGrid(full);
    } else {
      setGrid(emptyGrid());
    }
    setLoaded(true);
  }, []);

  function toggle(dayIdx: number, key: HabitKey) {
    setGrid((prev) => {
      const next = prev.map((d, i) =>
        i === dayIdx ? { ...d, [key]: !d[key] } : d
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  const totalCompleted = grid.reduce(
    (sum, day) => sum + HABITS.filter((h) => day[h.key]).length,
    0
  );
  const totalPossible = DAYS * HABITS.length;
  const perfectDays = grid.filter((day) => HABITS.every((h) => day[h.key])).length;

  const weeks = [
    { label: "Week 1 — Days 1–7",   days: Array.from({ length: 7 }, (_, i) => i) },
    { label: "Week 2 — Days 8–14",  days: Array.from({ length: 7 }, (_, i) => i + 7) },
    { label: "Week 3 — Days 15–21", days: Array.from({ length: 7 }, (_, i) => i + 14) },
  ];

  if (!loaded) return null;

  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Bonus #10</span>
        <span className={s.infoPageHeaderTitle}>Daily Habit Tracker 📋</span>
        <p className={s.infoPageHeaderSub}>
          Tick each of the 5 core habits every day. A complete row means a perfect day.
          Twenty-one perfect days means a transformed body.
        </p>
      </div>

      {/* Summary */}
      <div className={s.plannerSummaryRow} style={{ marginBottom: 20 }}>
        <div className={s.plannerSummaryCard}>
          <span className={s.plannerSummaryVal}>{totalCompleted}</span>
          <span className={s.plannerSummaryLabel}>Habits Done</span>
        </div>
        <div className={s.plannerSummaryCard}>
          <span className={s.plannerSummaryVal}>{perfectDays}</span>
          <span className={s.plannerSummaryLabel}>Perfect Days</span>
        </div>
        <div className={s.plannerSummaryCard}>
          <span className={s.plannerSummaryVal}>{Math.round((totalCompleted / totalPossible) * 100)}%</span>
          <span className={s.plannerSummaryLabel}>Consistency</span>
        </div>
      </div>

      {/* Legend */}
      <div className={s.habitLegend}>
        {HABITS.map((h) => (
          <div key={h.key} className={s.habitLegendItem}>
            <span>{h.emoji}</span>
            <span>{h.label}</span>
          </div>
        ))}
      </div>

      {/* Grid */}
      {weeks.map((week) => (
        <div key={week.label} style={{ marginBottom: 24 }}>
          <span className={s.plannerWeekLabel}>{week.label}</span>
          <div className={s.habitGrid}>
            {week.days.map((dayIdx) => {
              const day = grid[dayIdx] ?? emptyDay();
              const complete = HABITS.every((h) => day[h.key]);
              const done = HABITS.filter((h) => day[h.key]).length;
              return (
                <div
                  key={dayIdx}
                  className={`${s.habitDayCard} ${complete ? s.habitDayCardComplete : ""}`}
                >
                  <div className={s.habitDayHeader}>
                    <span className={s.habitDayNum}>Day {dayIdx + 1}</span>
                    <span className={s.habitDayScore} style={{ color: complete ? "#6BAA75" : "#9BA8B4" }}>
                      {done}/5{complete ? " ✅" : ""}
                    </span>
                  </div>
                  <div className={s.habitCheckRow}>
                    {HABITS.map((h) => (
                      <button
                        key={h.key}
                        className={`${s.habitCheckBtn} ${day[h.key] ? s.habitCheckBtnDone : ""}`}
                        onClick={() => toggle(dayIdx, h.key)}
                        title={h.label}
                      >
                        <span className={s.habitCheckBtnEmoji}>{h.emoji}</span>
                        <span className={`${s.habitCheckBtnTick} ${day[h.key] ? s.habitCheckBtnTickDone : ""}`}>
                          {day[h.key] ? "✓" : ""}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className={s.chiomaNoteCard}>
        <div className={s.chiomaAvatar}>C</div>
        <div className={s.chiomaNoteBody}>
          <span className={s.chiomaNoteFrom}>From Chioma</span>
          <p className={s.chiomaNoteText}>
            Five habits. Twenty-one days. That is all this is. You do not need to be perfect — but
            you do need to be consistent. Four out of five on a bad day is still a win. Keep ticking. — Chioma ❤️
          </p>
        </div>
      </div>
    </div>
  );
}
