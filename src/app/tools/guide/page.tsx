"use client";

import { useEffect, useState } from "react";
import s from "../tools.module.css";

type DayPlan = { title: string; breakfast: string; mainMeal: string; dinner: string; tip: string };

const days: DayPlan[] = [
  { title: "Begin the Reset", breakfast: "2 boiled eggs + sautéed ugu or spinach", mainMeal: "Jollof rice + grilled chicken + small salad", dinner: "Light vegetable soup (no swallow)", tip: "Focus only on timing today. Don't worry about quantities yet. Just eat your meals within the correct windows." },
  { title: "Build the Habit", breakfast: "Oatmeal + banana + warm water", mainMeal: "White rice + beans + fried plantain (dodo)", dinner: "2 boiled eggs + cucumber slices", tip: "Notice how you feel in the morning. Most women feel the first difference by Day 4. Keep going." },
  { title: "Introduce the Drink", breakfast: "2 akara (bean cakes) + pap (ogi)", mainMeal: "Eba (small wrap) + egusi soup + fish", dinner: "Cucumber + handful of groundnut", tip: "The Nighttime Belly Reset Drink works best 30–45 minutes before sleep. Make it part of your bedtime routine tonight." },
  { title: "The Turning Point", breakfast: "1 boiled egg + garden egg slices + green tea", mainMeal: "Amala (small) + ewedu soup + ponmo", dinner: "1 wrap moi moi + salad", tip: "Many women notice reduced morning bloat around Day 4. If you don't yet, keep going — the method compounds." },
  { title: "One Carb Per Meal", breakfast: "1 wrap moi moi + green tea", mainMeal: "White rice + fish stew (one carb only — no rice AND eba together)", dinner: "Light okra soup + 1 small wrap eba", tip: "One starchy carb per meal. Not rice and bread. Not eba and yam. One. This single rule reduces bloat fast." },
  { title: "Energy Rising", breakfast: "Boiled sweet potato (small) + 2 scrambled eggs", mainMeal: "Fried rice + grilled chicken + garden egg salad", dinner: "Grilled or baked fish + steamed vegetables", tip: "You are approaching the end of Week 1. Your hormones are beginning to adjust to your new eating windows. Stay consistent." },
  { title: "Week 1 Complete! 🎉", breakfast: "Oatmeal + pawpaw (papaya) + warm lemon water", mainMeal: "Pounded yam (small) + ofe onugbu + stockfish", dinner: "Boiled plantain + light pepper soup", tip: "Week 1 done! Measure your waist today and compare to your starting measurement. You should see a difference." },
  { title: "Food Combinations", breakfast: "2 eggs + tomato + onion omelette + green tea", mainMeal: "Rice + beans (no fried plantain this meal)", dinner: "Grilled catfish + vegetable salad", tip: "The biggest bloat trigger is starch + starch (rice + bread, eba + yam). Avoid this combination completely." },
  { title: "Hydration Day", breakfast: "Ogi (pap) + 1 wrap moi moi", mainMeal: "Amala (small) + okra soup + catfish", dinner: "Light catfish pepper soup", tip: "Drink 6–8 glasses of water today. Postpartum bellies hold water when dehydrated. Hydration actually reduces bloating." },
  { title: "Timing Mastery", breakfast: "Boiled yam (small) + egg sauce (tomato & pepper)", mainMeal: "Eba (small) + ogbono soup + ponmo", dinner: "Boiled plantain (half) + garden egg stew", tip: "If you feel hungry outside your eating windows, try warm water or ginger tea first. Hunger and thirst often feel the same." },
  { title: "Midway Mark", breakfast: "1 wrap moi moi + green tea + orange", mainMeal: "Jollof rice + grilled chicken + salad", dinner: "Vegetable soup (no swallow)", tip: "Halfway through. Your waist should feel noticeably different from Day 1. Trust the process and keep going." },
  { title: "Morning Power", breakfast: "Oatmeal + sliced orange + warm water", mainMeal: "Semovita (small) + ofe onugbu + fish", dinner: "2 boiled eggs + cucumber + groundnut", tip: "The 10-minute morning activation works best on an empty stomach before your breakfast window. Try it today." },
  { title: "Social Eating", breakfast: "2 akara + pap", mainMeal: "Fried rice + plantain + chicken", dinner: "Light egusi soup + 1 small wrap eba", tip: "Eating out? Plate Rule: half protein/veg, quarter carb, quarter soup. Works at any restaurant or party." },
  { title: "Week 2 Complete! 🎉", breakfast: "Boiled sweet potato + scrambled eggs", mainMeal: "White rice + fish stew + garden salad", dinner: "Catfish pepper soup (light)", tip: "End of Week 2 — measure your waist. Most women have lost 4–6kg by this point. Record it in your Tracker." },
  { title: "The Final Push", breakfast: "2 eggs + sautéed vegetables + green tea", mainMeal: "Pounded yam (small) + egusi soup + chicken", dinner: "Grilled fish + steamed vegetables", tip: "Week 3. You have built the habit. Now let it work. This is where the biggest visible belly changes happen." },
  { title: "Hormone Reset", breakfast: "Oatmeal + banana + warm lemon water", mainMeal: "Amala (small) + ewedu soup + ponmo + stockfish", dinner: "Boiled egg + garden egg salad", tip: "Your postpartum cortisol is significantly lower now. Your body has stopped storing fat defensively. This is the shift." },
  { title: "Consistency Wins", breakfast: "1 wrap moi moi + ogi + green tea", mainMeal: "Jollof rice + grilled chicken + salad", dinner: "Light vegetable soup", tip: "Plan tomorrow's meals today. This removes the temptation to eat outside your windows when you are tired or rushed." },
  { title: "Stay the Course", breakfast: "Boiled egg + garden egg + green tea", mainMeal: "Eba (small) + ogbono soup + catfish + ponmo", dinner: "Cucumber + groundnut + 1 boiled egg", tip: "Only 4 days left. Don't relax yet — the final push is when the last visible belly fat comes off." },
  { title: "Almost There", breakfast: "Oatmeal + pawpaw + warm water", mainMeal: "White rice + beans + baked fish", dinner: "Light pepper soup (no swallow)", tip: "Missed any days? Don't try to catch up. Just continue from today. The method is cumulative, not linear." },
  { title: "Last Night Tomorrow", breakfast: "2 akara + pap + green tea", mainMeal: "Fried rice + chicken + salad", dinner: "Boiled plantain (half) + grilled catfish", tip: "Take a photo today. Compare it to your Day 1 photo. The difference will motivate you to continue forever." },
  { title: "Day 21 — You Did It! 🎉", breakfast: "Your favourite protein breakfast", mainMeal: "Your favourite Nigerian meal — celebrate!", dinner: "YOUR CHOICE — you've earned it!", tip: "21 days complete. Measure your waist. Take your photo. Weigh yourself. This method is yours now, for life." },
];

const chiomaMessages: Record<number, string> = {
  0: "Starting is the hardest part — and you've already done it. I am genuinely proud of you. — Chioma ❤️",
  3: "By Day 4, most women begin to feel the morning bloat lifting. Pay attention to how your stomach feels when you wake up tomorrow. It's happening. — Chioma",
  6: "A full week! I wish I could hug you right now. You are doing what most women only talk about. — Chioma ❤️",
  10: "Halfway there. The woman on the other side of this journey is already in you. She's coming out day by day. — Chioma",
  13: "Two weeks! Most women who reach Day 14 finish the full 21 days. You are almost certainly going to make it. — Chioma ❤️",
  20: "Twenty-one days, mama. This is yours now. Not just for 21 days — for life. Thank you for trusting me. — Chioma ❤️",
};

const milestones: Record<number, { emoji: string; title: string; body: string }> = {
  6: { emoji: "🎉", title: "Week 1 Complete!", body: "Seven days of consistent effort. Your hormones have shifted. Your body is already different from Day 1." },
  13: { emoji: "🏆", title: "Week 2 Complete!", body: "Two weeks done. Most women have lost 4–6kg by this point. You are over halfway through the hardest part." },
  20: { emoji: "👑", title: "Day 21 — The Finish Line!", body: "You completed every single day. 247+ women have done this. Today you join them. Chioma is proud of you." },
};

const DRINK = "Stir ½ tsp ginger powder + ½ tsp cinnamon into a cup of warm water. Sip slowly 30–45 min before bed.";
const STORAGE_KEY = "veluc_guide_done";

export default function GuidePage() {
  const [done, setDone] = useState<boolean[]>(Array(21).fill(false));
  const [current, setCurrent] = useState(0);
  const [justCompleted, setJustCompleted] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const n = localStorage.getItem("veluc_name");
    if (n) setName(n);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed: boolean[] = JSON.parse(saved);
      setDone(parsed);
      const first = parsed.findIndex((v) => !v);
      setCurrent(first === -1 ? 20 : first);
    }
  }, []);

  function markDone() {
    const next = [...done];
    next[current] = true;
    setDone(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setJustCompleted(true);
  }

  function goToNext() {
    setJustCompleted(false);
    if (current < 20) setCurrent(current + 1);
  }

  const completedCount = done.filter(Boolean).length;
  const day = days[current];
  const milestone = milestones[current];
  const chiomaNote = chiomaMessages[current];

  return (
    <div className={s.page}>
      <div className={s.guidePanels}>

        {/* ── Left panel: navigation (sticky on desktop) ── */}
        <div className={s.guideLeftPanel}>
          <span className={s.progressLabel}>{completedCount} of 21 days complete</span>
          <div className={s.progressWrap}>
            <div className={s.progressBar} style={{ width: `${(completedCount / 21) * 100}%` }} />
          </div>
          <span className={s.progressSub}>{21 - completedCount} days remaining</span>

          <div className={s.dayNav}>
            <button className={s.dayNavBtn} onClick={() => { setCurrent((c) => c - 1); setJustCompleted(false); }} disabled={current === 0}>‹</button>
            <div className={s.dayNavCenter}>
              <span className={s.dayNavLabel}>Day {current + 1} of 21</span>
              <span className={s.dayNavSub}>{done[current] ? "✓ Completed" : "In progress"}</span>
            </div>
            <button className={s.dayNavBtn} onClick={() => { setCurrent((c) => c + 1); setJustCompleted(false); }} disabled={current === 20}>›</button>
          </div>

          <div className={s.dayDots}>
            {days.map((_, i) => (
              <button
                key={i}
                className={`${s.dayDot} ${done[i] ? s.dayDotDone : ""} ${i === current && !done[i] ? s.dayDotActive : ""}`}
                onClick={() => { setCurrent(i); setJustCompleted(false); }}
              >
                {done[i] ? "✓" : i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* ── Right panel: day content ── */}
        <div className={s.guideRightPanel}>
          {milestone && done[current] && (
            <div className={s.milestoneBanner}>
              <span className={s.milestoneBannerEmoji}>{milestone.emoji}</span>
              <p className={s.milestoneBannerTitle}>{milestone.title}</p>
              <p className={s.milestoneBannerBody}>{milestone.body}</p>
            </div>
          )}

          {chiomaNote && (
            <div className={s.chiomaNoteCard} style={{ marginBottom: 16 }}>
              <div className={s.chiomaAvatar}>C</div>
              <div className={s.chiomaNoteBody}>
                <span className={s.chiomaNoteFrom}>A note from Chioma</span>
                <p className={s.chiomaNoteText}>{chiomaNote}</p>
              </div>
            </div>
          )}

          <div className={s.dayCard}>
            <div className={s.dayCardHeader}>
              <span className={s.dayCardEyebrow}>Day {current + 1} · Week {Math.ceil((current + 1) / 7)}</span>
              <span className={s.dayCardTitle}>{day.title}</span>
            </div>
            <div className={s.dayCardBody}>
              <div className={`${s.mealSlot} ${s.mealSlotBreakfast}`}>
                <span className={s.mealSlotIcon}>🌅</span>
                <div className={s.mealSlotInfo}>
                  <span className={`${s.mealSlotTime} ${s.mealSlotTimeBreakfast}`}>Breakfast · 6:00 – 8:30 AM</span>
                  <span className={s.mealSlotFood}>{day.breakfast}</span>
                </div>
              </div>
              <div className={`${s.mealSlot} ${s.mealSlotMain}`}>
                <span className={s.mealSlotIcon}>☀️</span>
                <div className={s.mealSlotInfo}>
                  <span className={`${s.mealSlotTime} ${s.mealSlotTimeMain}`}>Main Meal · 12:00 – 2:00 PM</span>
                  <span className={s.mealSlotFood}>{day.mainMeal}</span>
                </div>
              </div>
              <div className={`${s.mealSlot} ${s.mealSlotDinner}`}>
                <span className={s.mealSlotIcon}>🌇</span>
                <div className={s.mealSlotInfo}>
                  <span className={`${s.mealSlotTime} ${s.mealSlotTimeDinner}`}>Light Dinner · 5:00 – 7:00 PM</span>
                  <span className={s.mealSlotFood}>{day.dinner}</span>
                </div>
              </div>
              <div className={`${s.mealSlot} ${s.mealSlotDrink}`}>
                <span className={s.mealSlotIcon}>🌙</span>
                <div className={s.mealSlotInfo}>
                  <span className={`${s.mealSlotTime} ${s.mealSlotTimeDrink}`}>Nighttime Drink · 9:00 PM</span>
                  <span className={s.mealSlotFood}>{DRINK}</span>
                </div>
              </div>
              <div className={s.tipCard}>
                <span className={s.tipCardLabel}>💡 Today&apos;s Tip</span>
                <p className={s.tipCardText}>{day.tip}</p>
              </div>
              {justCompleted ? (
                <div className={s.completedMsg}>
                  <span className={s.completedMsgEmoji}>🎉</span>
                  <p className={s.completedMsgText}>
                    <strong>Well done, {name || "mama"}!</strong> Day {current + 1} is done. Chioma is cheering for you.{" "}
                    {current < 20 && (
                      <span style={{ display: "block", marginTop: 8, cursor: "pointer", textDecoration: "underline" }} onClick={goToNext}>
                        Go to Day {current + 2} →
                      </span>
                    )}
                  </p>
                </div>
              ) : done[current] ? (
                <button className={`${s.actionBtn} ${s.actionBtnGreenDisabled}`} disabled>✓ Day {current + 1} Complete</button>
              ) : (
                <button className={s.actionBtn} onClick={markDone}>Mark Day {current + 1} Complete ✓</button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
