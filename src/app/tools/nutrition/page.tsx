import s from "../tools.module.css";

const sections = [
  {
    emoji: "⏰",
    title: "Why Eating Windows Work",
    body: "Your postpartum body runs on hormones — specifically cortisol, insulin, and leptin. When you eat outside fixed windows, insulin spikes repeatedly throughout the day. Each spike tells your body to store fat, especially around the belly. When you eat within set windows and fast between them, insulin drops, cortisol stabilises, and your body switches from fat-storage mode to fat-burning mode.",
    points: [
      "Breakfast window: 6:00–8:30 AM — activates metabolism and cortisol regulation",
      "Main meal window: 12:00–2:00 PM — the only safe window for heavy carbs like rice and eba",
      "Dinner window: 5:00–7:00 PM — light, no heavy starch",
      "Fasting window: 7:00 PM–6:00 AM — where the hormone reset actually happens",
    ],
  },
  {
    emoji: "🥚",
    title: "Hormone-Healing Foods to Eat Every Day",
    body: "These foods directly support postpartum hormone recovery. Make at least 2–3 of them a daily habit.",
    points: [
      "Eggs — highest bioavailable protein, supports estrogen balance and milk production",
      "Catfish — rich in omega-3, reduces cortisol and belly inflammation",
      "Ugu leaves (pumpkin leaves) — iron-rich, supports postpartum blood recovery",
      "Garden eggs — powerful anti-bloat vegetable, eat raw as a snack",
      "Pawpaw (papaya) — contains papain enzyme that actively breaks down belly bloat",
      "Ginger and cinnamon — the nighttime drink ingredients, both reduce cortisol overnight",
    ],
  },
  {
    emoji: "🫄",
    title: "Why Your Belly Bloats — And How to Fix It",
    body: "Postpartum belly bloat is caused by 3 things: elevated cortisol (stress hormone), water retention from hormonal imbalance, and digestive slowdown from the birth itself. The method targets all three.",
    points: [
      "Cortisol fix: the nighttime ginger+cinnamon drink reduces cortisol by morning",
      "Water retention fix: drinking 6–8 glasses of water daily flushes the retained water — counterintuitive but medically proven",
      "Digestion fix: the eating windows give your digestive system rest periods, allowing it to recover from birth",
      "No double-carbing: eating rice AND eba at one meal creates a gas explosion in the gut — this single rule reduces bloat by 40% in Week 1",
    ],
  },
  {
    emoji: "🚫",
    title: "Foods That Undo the Whole Method",
    body: "These foods directly block the hormone reset. Even one of them on a regular basis will slow your results noticeably.",
    points: [
      "Carbonated drinks (Coke, Fanta, Malta) — the CO₂ gas inflates the belly from the inside; also spikes insulin",
      "Flat tummy teas and slimming sachets — they damage the gut lining and worsen bloating over time",
      "Rice + eba in one sitting — creates a massive insulin spike that lasts 6+ hours",
      "Eating after 7:00 PM — breaks the fasting window and stops overnight fat burning",
      "Excessive palm oil — not a banned food, but too much inflames the gut lining",
      "Daily instant noodles as a main meal — low protein, high bloat-causing starch",
    ],
  },
  {
    emoji: "💧",
    title: "The Hydration Rule Most Women Miss",
    body: "Most postpartum women are chronically dehydrated without knowing it — especially while breastfeeding. Dehydration causes the body to retain more water as a survival response, which creates bloating. The solution is counterintuitive: drink more to bloat less.",
    points: [
      "Minimum 6 glasses of plain water per day — not juice, not malt, not tea",
      "Drink 1 large glass of warm water first thing every morning before food",
      "Warm water is better than cold in the morning — it activates digestion more gently",
      "If breastfeeding, add 2 extra glasses — your body is producing milk from your fluids",
      "The nighttime drink counts as 1 of your daily glasses",
      "Green tea (unsweetened) counts — it also reduces cortisol",
    ],
  },
  {
    emoji: "🌙",
    title: "The Nighttime Belly Reset Drink — Why It Works",
    body: "The drink is not a magic potion. It is a proven anti-inflammatory, anti-cortisol combination taken at the most effective time — just before sleep, when your body enters its deepest repair cycle.",
    points: [
      "Ginger: reduces gut inflammation, improves overnight digestion, lowers fasting blood sugar",
      "Cinnamon: insulin sensitiser — your body uses glucose more efficiently, reducing overnight fat storage",
      "Warm water base: improves gut motility and flushes inflammatory waste overnight",
      "Timing (9:00 PM): gives the compounds 45–60 min to reach peak effectiveness before sleep",
      "Consistency matters: the drink works cumulatively — one night will not show results; 21 nights changes the baseline",
    ],
  },
];

export default function NutritionPage() {
  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Bonus #1</span>
        <span className={s.infoPageHeaderTitle}>Postpartum Nutrition Reset Guide 🥗</span>
        <p className={s.infoPageHeaderSub}>
          The science behind why the method works — and exactly which foods to prioritise every day.
        </p>
      </div>

      <div className={s.articleGrid}>
        {sections.map((sec) => (
          <div key={sec.title} className={s.articleCard}>
            <h3 className={s.articleCardTitle}>
              <span>{sec.emoji}</span> {sec.title}
            </h3>
            <p className={s.articleCardBody}>{sec.body}</p>
            <ul className={s.articleList}>
              {sec.points.map((pt, i) => (
                <li key={i} className={s.articleListItem}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
