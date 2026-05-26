"use client";

import { useEffect, useState } from "react";
import s from "../tools.module.css";


export default function PlannerPage() {
  const [guideDone, setGuideDone] = useState<boolean[]>(Array(21).fill(false));
  const [trackerDone, setTrackerDone] = useState<boolean[]>(Array(21).fill(false));
  const [journalDone, setJournalDone] = useState<boolean[]>(Array(21).fill(false));
  const [name, setName] = useState("");

  useEffect(() => {
    const n = localStorage.getItem("veluc_name");
    if (n) setName(n);

    const g = localStorage.getItem("veluc_guide_done");
    if (g) setGuideDone(JSON.parse(g));

    const t = localStorage.getItem("veluc_tracker");
    if (t) {
      const entries: { weight: string; waist: string }[] = JSON.parse(t);
      setTrackerDone(entries.map((e) => !!(e.weight || e.waist)));
    }

    const j = localStorage.getItem("veluc_journal");
    if (j) {
      const entries: string[] = JSON.parse(j);
      setJournalDone(entries.map((e) => e.trim().length > 0));
    }
  }, []);

  const totalGuide = guideDone.filter(Boolean).length;
  const totalTracker = trackerDone.filter(Boolean).length;
  const totalJournal = journalDone.filter(Boolean).length;

  const weeks = [
    { label: "Week 1 — Days 1–7", days: [0, 1, 2, 3, 4, 5, 6] },
    { label: "Week 2 — Days 8–14", days: [7, 8, 9, 10, 11, 12, 13] },
    { label: "Week 3 — Days 15–21", days: [14, 15, 16, 17, 18, 19, 20] },
  ];

  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Overview</span>
        <span className={s.infoPageHeaderTitle}>{name ? `${name}'s 21-Day Planner 📓` : "21-Day Reset Planner 📓"}</span>
        <p className={s.infoPageHeaderSub}>
          Your full journey at a glance. Every dot is a habit completed. Every row is a week of your transformation.
        </p>
      </div>

      {/* Summary row */}
      <div className={s.plannerSummaryRow}>
        <div className={s.plannerSummaryCard}>
          <span className={s.plannerSummaryVal}>{totalGuide}</span>
          <span className={s.plannerSummaryLabel}>Guide Days</span>
        </div>
        <div className={s.plannerSummaryCard}>
          <span className={s.plannerSummaryVal}>{totalTracker}</span>
          <span className={s.plannerSummaryLabel}>Days Logged</span>
        </div>
        <div className={s.plannerSummaryCard}>
          <span className={s.plannerSummaryVal}>{totalJournal}</span>
          <span className={s.plannerSummaryLabel}>Journal Entries</span>
        </div>
      </div>

      {/* Legend */}
      <div className={s.plannerLegend}>
        <div className={s.plannerLegendItem}>
          <div className={s.plannerLegendDot} style={{ background: "#0F4C5C" }} />
          Guide completed
        </div>
        <div className={s.plannerLegendItem}>
          <div className={s.plannerLegendDot} style={{ background: "#6BAA75" }} />
          Measurements logged
        </div>
        <div className={s.plannerLegendItem}>
          <div className={s.plannerLegendDot} style={{ background: "#C8B6A6" }} />
          Journal written
        </div>
      </div>

      {/* Calendar */}
      {weeks.map((week) => (
        <div key={week.label} style={{ marginBottom: 28 }}>
          <span className={s.plannerWeekLabel}>{week.label}</span>
          <div className={s.plannerWeek}>
            {week.days.map((dayIdx, col) => {
              const g = guideDone[dayIdx];
              const t = trackerDone[dayIdx];
              const j = journalDone[dayIdx];
              const allDone = g && t && j;
              const anyDone = g || t || j;
              return (
                <div
                  key={dayIdx}
                  className={`${s.plannerDay} ${allDone ? s.plannerDayAllDone : ""} ${!anyDone ? s.plannerDayEmpty : ""}`}
                >
                  <span className={s.plannerDayNum}>Day {dayIdx + 1}</span>
                  <div className={s.plannerPips}>
                    <div className={`${s.plannerPip} ${g ? s.plannerPipGuide : ""}`} title="Guide" />
                    <div className={`${s.plannerPip} ${t ? s.plannerPipTrack : ""}`} title="Tracker" />
                    <div className={`${s.plannerPip} ${j ? s.plannerPipJournal : ""}`} title="Journal" />
                  </div>
                  {allDone && <span style={{ fontSize: 14 }}>✅</span>}
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
            Every filled row here is a week you chose yourself over the version of yourself that gave up.
            Keep filling it. — Chioma ❤️
          </p>
        </div>
      </div>
    </div>
  );
}
