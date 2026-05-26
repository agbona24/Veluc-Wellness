export type DayPlan = {
  title: string;
  breakfast: string;
  mainMeal: string;
  dinner: string;
  tip: string;
};

export const days: DayPlan[] = [
  { title: "Begin the Reset", breakfast: "2 boiled eggs + sautéed ugu or spinach", mainMeal: "Jollof rice + grilled chicken + small salad", dinner: "Light vegetable soup (no swallow)", tip: "Focus only on timing today. Don't worry about quantities yet. Just eat your meals within the correct windows." },
  { title: "Build the Habit", breakfast: "Oatmeal + banana + warm water", mainMeal: "White rice + beans + fried plantain (dodo)", dinner: "2 boiled eggs + cucumber slices", tip: "Notice how you feel in the morning. Most women feel the first difference by Day 4. Keep going." },
  { title: "Introduce the Drink", breakfast: "2 akara (bean cakes) + pap (ogi)", mainMeal: "Eba (small wrap) + egusi soup + fish", dinner: "Cucumber + handful of groundnut", tip: "The Nighttime Belly Reset Drink works best 30–45 minutes before sleep. Make it part of your bedtime routine tonight." },
  { title: "The Turning Point", breakfast: "1 boiled egg + garden egg slices + green tea", mainMeal: "Amala (small) + ewedu soup + ponmo", dinner: "1 wrap moi moi + salad", tip: "Many women notice reduced morning bloat around Day 4. If you don't yet, keep going — the method compounds." },
  { title: "One Carb Per Meal", breakfast: "1 wrap moi moi + green tea", mainMeal: "White rice + fish stew (one carb only)", dinner: "Light okra soup + 1 small wrap eba", tip: "One starchy carb per meal. Not rice and bread. Not eba and yam. One. This single rule reduces bloat fast." },
  { title: "Energy Rising", breakfast: "Boiled sweet potato (small) + 2 scrambled eggs", mainMeal: "Fried rice + grilled chicken + garden egg salad", dinner: "Grilled or baked fish + steamed vegetables", tip: "You are approaching the end of Week 1. Your hormones are beginning to adjust. Stay consistent." },
  { title: "Week 1 Complete!", breakfast: "Oatmeal + pawpaw (papaya) + warm lemon water", mainMeal: "Pounded yam (small) + ofe onugbu + stockfish", dinner: "Boiled plantain + light pepper soup", tip: "Week 1 done! Measure your waist today and compare to your starting measurement. You should see a difference." },
  { title: "Food Combinations", breakfast: "2 eggs + tomato + onion omelette + green tea", mainMeal: "Rice + beans (no fried plantain this meal)", dinner: "Grilled catfish + vegetable salad", tip: "The biggest bloat trigger is starch + starch (rice + bread, eba + yam). Avoid this combination completely." },
  { title: "Hydration Day", breakfast: "Ogi (pap) + 1 wrap moi moi", mainMeal: "Amala (small) + okra soup + catfish", dinner: "Light catfish pepper soup", tip: "Drink 6–8 glasses of water today. Postpartum bellies hold water when dehydrated. Hydration reduces bloating." },
  { title: "Timing Mastery", breakfast: "Boiled yam (small) + egg sauce (tomato & pepper)", mainMeal: "Eba (small) + ogbono soup + ponmo", dinner: "Boiled plantain (half) + garden egg stew", tip: "If you feel hungry outside your eating windows, try warm water or ginger tea first." },
  { title: "Midway Mark", breakfast: "1 wrap moi moi + green tea + orange", mainMeal: "Jollof rice + grilled chicken + salad", dinner: "Vegetable soup (no swallow)", tip: "Halfway through. Your waist should feel noticeably different from Day 1. Trust the process." },
  { title: "Morning Power", breakfast: "Oatmeal + sliced orange + warm water", mainMeal: "Semovita (small) + ofe onugbu + fish", dinner: "2 boiled eggs + cucumber + groundnut", tip: "The 10-minute morning activation works best on an empty stomach before your breakfast window." },
  { title: "Social Eating", breakfast: "2 akara + pap", mainMeal: "Fried rice + plantain + chicken", dinner: "Light egusi soup + 1 small wrap eba", tip: "Eating out? Plate Rule: half protein/veg, quarter carb, quarter soup. Works at any restaurant." },
  { title: "Week 2 Complete!", breakfast: "Boiled sweet potato + scrambled eggs", mainMeal: "White rice + fish stew + garden salad", dinner: "Catfish pepper soup (light)", tip: "End of Week 2 — measure your waist. Most women have lost 4–6kg by this point. Record it in your Tracker." },
  { title: "The Final Push", breakfast: "2 eggs + sautéed vegetables + green tea", mainMeal: "Pounded yam (small) + egusi soup + chicken", dinner: "Grilled fish + steamed vegetables", tip: "Week 3. You have built the habit. Now let it work. This is where the biggest visible belly changes happen." },
  { title: "Hormone Reset", breakfast: "Oatmeal + banana + warm lemon water", mainMeal: "Amala (small) + ewedu soup + ponmo + stockfish", dinner: "Boiled egg + garden egg salad", tip: "Your postpartum cortisol is significantly lower now. Your body has stopped storing fat defensively." },
  { title: "Consistency Wins", breakfast: "1 wrap moi moi + ogi + green tea", mainMeal: "Jollof rice + grilled chicken + salad", dinner: "Light vegetable soup", tip: "Plan tomorrow's meals today. This removes the temptation to eat outside your windows when tired." },
  { title: "Stay the Course", breakfast: "Boiled egg + garden egg + green tea", mainMeal: "Eba (small) + ogbono soup + catfish + ponmo", dinner: "Cucumber + groundnut + 1 boiled egg", tip: "Only 4 days left. Don't relax yet — the final push is when the last visible belly fat comes off." },
  { title: "Almost There", breakfast: "Oatmeal + pawpaw + warm water", mainMeal: "White rice + beans + baked fish", dinner: "Light pepper soup (no swallow)", tip: "Missed any days? Don't try to catch up. Just continue from today. The method is cumulative." },
  { title: "Last Push", breakfast: "2 akara + pap + green tea", mainMeal: "Fried rice + chicken + salad", dinner: "Boiled plantain (half) + grilled catfish", tip: "Take a photo today. Compare it to your Day 1 photo. The difference will motivate you forever." },
  { title: "Day 21 — You Did It!", breakfast: "Your favourite protein breakfast", mainMeal: "Your favourite Nigerian meal — celebrate!", dinner: "YOUR CHOICE — you've earned it!", tip: "21 days complete. Measure your waist. Take your photo. Weigh yourself. This method is yours now, for life." },
];

export const chiomaMessages: Record<number, string> = {
  0: "Starting is the hardest part — and you've already done it. I am genuinely proud of you. — Chioma ❤️",
  3: "By Day 4, most women begin to feel the morning bloat lifting. Pay attention to how your stomach feels when you wake up tomorrow. It's happening. — Chioma",
  6: "A full week! I wish I could hug you right now. You are doing what most women only talk about. — Chioma ❤️",
  10: "Halfway there. The woman on the other side of this journey is already in you. She's coming out day by day. — Chioma",
  13: "Two weeks! Most women who reach Day 14 finish the full 21 days. You are almost certainly going to make it. — Chioma ❤️",
  20: "Twenty-one days, mama. This is yours now. Not just for 21 days — for life. Thank you for trusting me. — Chioma ❤️",
};

export const NIGHTTIME_DRINK = "Stir ½ tsp ginger powder + ½ tsp cinnamon into warm water. Sip slowly 30–45 min before bed.";

export const DAILY_QUOTES: string[] = [
  "Your journey begins with a single choice — and you've made it.",
  "Every meal you choose is a message to your body.",
  "Small actions, repeated daily, create big changes.",
  "The shift is happening — even when you can't see it yet.",
  "Trust the slow work. Your body remembers.",
  "You showed up again today. That's everything.",
  "A full week done. You are different already.",
  "Consistency is the only strategy that never fails.",
  "Hydration is not optional — it is medicine.",
  "You are mastering the timing now.",
  "Halfway. Your body has been listening all along.",
  "The morning activation is your superpower.",
  "Social eating is a skill — you are learning it.",
  "Two weeks. Look how far you've come.",
  "The final push starts now. Don't stop.",
  "Your cortisol is lower. Your body is opening up.",
  "Plan tomorrow tonight — that's real discipline.",
  "The last visible belly fat is coming off now.",
  "The method is working. Stay faithful to it.",
  "One day from the finish. You will not quit here.",
  "21 days complete. This method is yours — for life.",
];
