import s from "../tools.module.css";

const rules = [
  "No carbs for 48 hours — no rice, eba, swallow, bread, or plantain. Protein and vegetables only.",
  "No carbonated drinks at all. Not even malt or energy drinks.",
  "Minimum 8 glasses of plain water. Warm water is better than cold.",
  "Eating window: 8 AM – 6 PM only. Nothing after 6 PM except the nighttime drink.",
  "Do the 10-minute morning activation routine both mornings.",
  "A 20-minute walk each day — non-negotiable. Even a slow walk counts.",
  "Double the nighttime reset drink (2 cups instead of 1) on both nights.",
  "Do NOT take flat tummy teas or laxatives — they make bloating worse, not better.",
];

const day1 = [
  {
    time: "First thing (7–8 AM)",
    emoji: "🌅",
    action: "Warm lemon water",
    detail: "Squeeze half a lemon into a large glass of warm water. Drink before food, before brushing. This activates liver detox and kickstarts gut motility.",
  },
  {
    time: "Breakfast (8–9 AM)",
    emoji: "🥚",
    action: "2 boiled eggs + garden egg + cucumber slices",
    detail: "No starch. No bread. No noodles. The eggs provide protein to suppress hunger. Garden egg and cucumber are your anti-bloat vegetables — eat as much of them as you like.",
  },
  {
    time: "Mid-morning (11 AM)",
    emoji: "🍵",
    action: "Ginger tea (unsweetened)",
    detail: "Boil 3 slices of fresh ginger in 2 cups of water for 10 minutes. Strain and drink warm. Reduces gas, stimulates digestion, reduces gut inflammation.",
  },
  {
    time: "Lunch (12–1 PM)",
    emoji: "🍲",
    action: "Pepper soup OR vegetable soup + grilled or boiled fish",
    detail: "NO swallow. NO rice. The soup base is anti-inflammatory and the fish gives you high-quality protein. Eat until satisfied — this is not a starvation plan.",
  },
  {
    time: "Afternoon (3 PM)",
    emoji: "💧",
    action: "3rd and 4th glass of water",
    detail: "If you feel hungry between meals, drink a large glass of warm water first. Most between-meal hunger is dehydration.",
  },
  {
    time: "Dinner (5–6 PM)",
    emoji: "🥗",
    action: "Garden egg + boiled egg OR 1 wrap of moi moi + cucumber",
    detail: "Light and early. Finish eating by 6 PM so your body has 15+ hours to fast and reset overnight. Moi moi counts as protein (beans) — one wrap is fine.",
  },
  {
    time: "9 PM (sharp)",
    emoji: "🌙",
    action: "Double nighttime reset drink",
    detail: "2 teaspoons grated ginger, 1 teaspoon cinnamon, 2 cups warm water. Drink both cups slowly. This is the most important step of the entire 48 hours — do not skip it.",
  },
];

const day2 = [
  {
    time: "First thing",
    emoji: "🌅",
    action: "Warm lemon water — same as Day 1",
    detail: "You should already notice your belly is flatter than yesterday morning. The overnight fast is working.",
  },
  {
    time: "Breakfast",
    emoji: "🐟",
    action: "Grilled or boiled fish + garden egg + cucumber",
    detail: "Switch the eggs for fish today to vary protein. Catfish is ideal — it is high in omega-3 and directly reduces belly inflammation.",
  },
  {
    time: "Lunch",
    emoji: "🍲",
    action: "Vegetable soup (ugu, spinach, or bitter leaf) + fish or egg",
    detail: "Still no swallow. Still no rice. By lunchtime on Day 2, most women notice a significant reduction in visible bloat.",
  },
  {
    time: "Dinner",
    emoji: "🥚",
    action: "2 boiled eggs + pawpaw (half a small pawpaw)",
    detail: "Pawpaw contains papain, an enzyme that actively breaks down belly bloat. This is your last meal. Eat it by 6 PM.",
  },
  {
    time: "9 PM",
    emoji: "🌙",
    action: "Double nighttime reset drink again",
    detail: "Same as last night. Two full cups. After this, water only until tomorrow morning.",
  },
];

const allowed = [
  "Eggs (boiled, scrambled, poached — any method except deep-fried)",
  "Fish — grilled, boiled, in pepper soup, steamed",
  "All vegetable soups — ugu soup, bitter leaf soup, edikaikong, pepper soup",
  "Garden eggs (African eggplant) — eat raw or boiled",
  "Cucumber — eat freely throughout the day",
  "Pawpaw (papaya) — half a small pawpaw per day",
  "Moi moi — one wrap maximum per day (it is beans, not starch)",
  "Plain groundnuts — a small handful as a snack",
  "Ginger tea, green tea (both unsweetened)",
  "Plain water — warm is better than cold",
];

const banned = [
  "Rice (white or jollof), eba, pounded yam, amala, semovita, fufu",
  "White bread, agege bread, bread rolls",
  "Plantain (fried or boiled)",
  "Chin-chin, puff-puff, small chops, crackers",
  "Carbonated drinks — Coke, Fanta, Pepsi, Sprite, Schweppes, Malta, Lucozade",
  "Flat tummy teas, slimming sachets, laxative teas",
  "Indomie or any instant noodles",
  "Any food after 6 PM (the nighttime drink at 9 PM is a drink, not food)",
];

const expectations = [
  { time: "End of Day 1 morning", result: "Morning bloat noticeably reduced compared to Day 1 baseline" },
  { time: "Day 1 evening", result: "Belly visibly flatter — the no-carb + fasting window is working" },
  { time: "Day 2 morning", result: "Most women see 40–60% reduction in belly bloat by this point" },
  { time: "After Day 2", result: "Return to your normal 21-day programme — now from a reset baseline" },
];

export default function DebloatPage() {
  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Bonus #9</span>
        <span className={s.infoPageHeaderTitle}>48-Hour Debloat Reset ⚡</span>
        <p className={s.infoPageHeaderSub}>
          An emergency 2-day protocol for when bloating is severe, you have an event coming up,
          or you need a fast reset after falling off the programme. Follow this exactly.
        </p>
      </div>

      <div className={s.chiomaNoteCard} style={{ marginBottom: 24 }}>
        <div className={s.chiomaAvatar}>C</div>
        <div className={s.chiomaNoteBody}>
          <span className={s.chiomaNoteFrom}>Before you start — read this</span>
          <p className={s.chiomaNoteText}>
            This is not a starvation plan. You will eat real food. You will not be hungry.
            The 48-hour reset works by removing all starch (which holds 3–4x its weight in water) and
            extending your fasting window. Most women see visible results by the end of Day 1.
            After 48 hours, return to your normal programme. — Chioma ❤️
          </p>
        </div>
      </div>

      {/* 8 Rules */}
      <div className={s.articleCard} style={{ marginBottom: 24 }}>
        <h3 className={s.articleCardTitle}><span>📋</span> The 8 Rules (Read First)</h3>
        <ul className={s.articleList}>
          {rules.map((r, i) => <li key={i} className={s.articleListItem}>{r}</li>)}
        </ul>
      </div>

      {/* Day 1 */}
      <p className={s.sectionLabel} style={{ marginBottom: 16 }}>Day 1 — The Flush</p>
      <div className={s.articleGrid}>
        {day1.map((item, i) => (
          <div key={i} className={s.articleCard}>
            <h3 className={s.articleCardTitle}>
              <span>{item.emoji}</span> {item.action}
              <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 700, color: "#0F4C5C" }}>{item.time}</span>
            </h3>
            <p className={s.articleCardBody} style={{ margin: 0 }}>{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Day 2 */}
      <p className={s.sectionLabel} style={{ margin: "24px 0 16px" }}>Day 2 — The Reset</p>
      <div className={s.articleGrid}>
        {day2.map((item, i) => (
          <div key={i} className={s.articleCard}>
            <h3 className={s.articleCardTitle}>
              <span>{item.emoji}</span> {item.action}
              <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 700, color: "#0F4C5C" }}>{item.time}</span>
            </h3>
            <p className={s.articleCardBody} style={{ margin: 0 }}>{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Allowed / Banned */}
      <div className={s.swapGrid} style={{ marginTop: 24 }}>
        <div className={s.swapSection}>
          <p className={s.swapSectionTitle}>✅ Allowed for 48 Hours</p>
          {allowed.map((item, i) => (
            <div key={i} className={s.swapCard} style={{ borderLeft: "3px solid #6BAA75" }}>
              <span className={s.swapTo}><span className={s.swapToMain}>{item}</span></span>
            </div>
          ))}
        </div>
        <div className={s.swapSection}>
          <p className={s.swapSectionTitle}>❌ Banned for 48 Hours</p>
          {banned.map((item, i) => (
            <div key={i} className={s.swapCard} style={{ borderLeft: "3px solid #B85C3A" }}>
              <span className={s.swapTo}><span className={s.swapToMain}>{item}</span></span>
            </div>
          ))}
        </div>
      </div>

      {/* Expected results */}
      <div className={s.articleCard} style={{ marginTop: 24, marginBottom: 24 }}>
        <h3 className={s.articleCardTitle}><span>📈</span> What To Expect</h3>
        <ul className={s.articleList}>
          {expectations.map((e, i) => (
            <li key={i} className={s.articleListItem}>
              <strong>{e.time}:</strong> {e.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
