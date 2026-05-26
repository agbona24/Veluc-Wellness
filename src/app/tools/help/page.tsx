"use client";

import { useRouter } from "next/navigation";
import s from "../tools.module.css";

const DAILY_STEPS = [
  { num: 1, text: "Open the 21-Day Guide → read today's meals and rules → follow them exactly → tap \"Mark Day Done\"" },
  { num: 2, text: "Tick your 5 habits in the Habit Grid — takes 30 seconds" },
  { num: 3, text: "Log your weight and waist in the Belly Tracker (morning, before food)" },
  { num: 4, text: "Write your evening reflection in the Journal — one honest paragraph is enough" },
];

const TOOLS = [
  { emoji: "📗", name: "21-Day Guide", desc: "The core of the programme. Open every morning, follow the day's plan, mark it done. Never skip this step." },
  { emoji: "📋", name: "Habit Grid", desc: "Track your 5 core daily habits across all 21 days. Green = done. Keep the grid filling up." },
  { emoji: "📊", name: "Belly Tracker", desc: "Log weight and waist daily. The trend over 21 days is what matters, not one number." },
  { emoji: "✏️", name: "Journal", desc: "Evening reflection tool. Honest writing accelerates mindset shifts. Takes 5 minutes." },
  { emoji: "🥗", name: "Nutrition Guide", desc: "The science behind the method. Read once, refer back when you need the 'why'." },
  { emoji: "🍲", name: "Food Swaps", desc: "Nigerian food alternatives that keep you on plan without giving up your culture." },
  { emoji: "🚨", name: "Bloat Foods", desc: "Red, amber, and green cheat sheet. Check before you eat something you're unsure about." },
  { emoji: "🥤", name: "Drink Recipes", desc: "6 belly-friendly wellness drinks you can make at home. Replace soft drinks with these." },
  { emoji: "🎉", name: "Party Guide", desc: "How to eat at owambe without derailing your progress. Read before any event." },
  { emoji: "🔄", name: "Event Recovery", desc: "Ate too much at a party? Follow this morning-midday-evening routine to reset within 24 hours." },
  { emoji: "🏃", name: "Workout Guide", desc: "Safe movement plan for postpartum bodies. No gym needed. 10–20 minutes per day." },
  { emoji: "⚡", name: "48-Hour Debloat", desc: "Emergency reset protocol for severe bloat days. Follow both days in full for best results." },
  { emoji: "💛", name: "Affirmations", desc: "One affirmation per day of the programme. Read yours each morning before opening the Guide." },
  { emoji: "🛒", name: "Shopping List", desc: "Foods to stock and foods to clear from your kitchen. Do a shop on Day 1 before you begin." },
  { emoji: "📓", name: "21-Day Planner", desc: "Full overview of all 21 days. Use it to mentally prepare for the week ahead." },
  { emoji: "☀️", name: "Morning Ritual", desc: "A simple daily checklist — tick off each action as you complete it before midday." },
];

const FAQS = [
  {
    q: "What if I miss a day?",
    a: "Don't try to catch up — just continue from where you left off. Mark only days you actually completed. Consistency matters more than perfection.",
  },
  {
    q: "Do I have to do everything every day?",
    a: "The minimum daily requirement is: open the Guide, follow the plan, mark it done. The Habit Grid, Tracker, and Journal are the next tier — aim for all four daily.",
  },
  {
    q: "How do I reset my progress?",
    a: "Go to your Profile (the 👤 icon) and update your details. To restart the 21-day programme, each tool has its own reset option within the page.",
  },
  {
    q: "Can I breastfeed and still follow the programme?",
    a: "Yes. The programme is designed with breastfeeding mothers in mind. You selected your breastfeeding status during setup, and your plan is adjusted accordingly.",
  },
  {
    q: "What if the app doesn't load?",
    a: "The app works offline once it has loaded at least once. Try refreshing the page. If progress looks missing, it is stored in your browser — clearing browser data will erase it.",
  },
];

export default function HelpPage() {
  const router = useRouter();

  function restartTour() {
    localStorage.removeItem("veluc_tour_done");
    router.push("/tools");
  }

  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Support</span>
        <span className={s.infoPageHeaderTitle}>How to Use the App</span>
        <p className={s.infoPageHeaderSub}>
          Everything you need to know to get the most from your 21-day programme.
        </p>
      </div>

      {/* Daily routine */}
      <div className={s.helpSection}>
        <p className={s.helpSectionTitle}>☀️ Your Daily Routine (in order)</p>
        {DAILY_STEPS.map((step) => (
          <div key={step.num} className={s.helpRoutineStep}>
            <span className={s.helpStepNum}>{step.num}</span>
            <span className={s.helpStepText}>{step.text}</span>
          </div>
        ))}
      </div>

      {/* Tool guide */}
      <div className={s.helpSection}>
        <p className={s.helpSectionTitle}>🗂️ What Each Tool Does</p>
        {TOOLS.map((tool) => (
          <div key={tool.name} className={s.helpItem}>
            <span className={s.helpItemEmoji}>{tool.emoji}</span>
            <div className={s.helpItemBody}>
              <p className={s.helpItemTitle}>{tool.name}</p>
              <p className={s.helpItemDesc}>{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className={s.helpSection}>
        <p className={s.helpSectionTitle}>❓ Common Questions</p>
        {FAQS.map((faq) => (
          <div key={faq.q}>
            <p className={s.helpFaqQ}>{faq.q}</p>
            <p className={s.helpFaqA}>{faq.a}</p>
          </div>
        ))}
      </div>

      {/* Take tour again */}
      <div className={s.helpSection}>
        <p className={s.helpSectionTitle}>🗺️ Take the App Tour Again</p>
        <p className={s.helpFaqA}>
          The guided tour walks you through the dashboard and each tool group in 5 simple slides. Takes under 2 minutes.
        </p>
        <button className={s.helpTourBtn} onClick={restartTour}>
          Start Tour →
        </button>
      </div>
    </div>
  );
}
