import s from "../tools.module.css";

const rules = [
  "Eat your normal meal at home before you go to any party or event. Never arrive hungry — that is how you lose control.",
  "At the buffet, fill your plate once. Half protein/vegetables, one-quarter carb, one-quarter soup or stew.",
  "Choose only ONE carb source: rice OR eba OR pounded yam. Not all three, even in small portions.",
  "Skip the carbonated drinks entirely. Ask for water, zobo (no sugar), or coconut water if available.",
  "If you eat the rice, skip the bread rolls and chin-chin. If you eat the eba, skip the rice jollof.",
  "Eat slowly. Parties are social events — you are not in a competition. Slow eating reduces gas and bloat by 60%.",
  "Socialise away from the food table. If you are standing next to the food, you will eat more.",
  "One plate is the rule. Return for seconds only if you are genuinely hungry — not because food is available.",
];

const partyFoods = [
  {
    emoji: "🍚",
    food: "Party Jollof Rice",
    verdict: "eat",
    label: "Yes — one serving",
    advice: "One cup of jollof rice is fine. The tomato base is actually anti-inflammatory. Pair with grilled chicken. Skip the extra sauce.",
  },
  {
    emoji: "🥩",
    food: "Peppered Goat Meat / Ponmo",
    verdict: "eat",
    label: "Yes — great choice",
    advice: "High protein, no starch. Eat as much as you like. Avoid the over-salted ones if you are water-retaining.",
  },
  {
    emoji: "🐟",
    food: "Fried Fish / Grilled Fish",
    verdict: "eat",
    label: "Yes — prioritise this",
    advice: "Best protein source at any Nigerian party. Grilled is ideal but fried is fine in one portion. Eat the fish first before anything else.",
  },
  {
    emoji: "🌿",
    food: "Nigerian Salad (with dressing)",
    verdict: "eat",
    label: "Yes — with care",
    advice: "The salad itself is great. The mayonnaise-heavy dressing is calorie-dense. Use a small amount or ask for the dressing on the side.",
  },
  {
    emoji: "🥟",
    food: "Moi Moi",
    verdict: "eat",
    label: "Yes — one wrap",
    advice: "Moi moi is protein (beans). One wrap is a perfectly reasonable party food choice. It is filling and keeps you from over-eating the starchy options.",
  },
  {
    emoji: "🍗",
    food: "Fried Chicken (with skin)",
    verdict: "moderate",
    label: "One piece only",
    advice: "One piece is fine. Remove the skin if you can — that is where most of the inflammatory oil sits. Don not eat 3 pieces and call it protein.",
  },
  {
    emoji: "🍞",
    food: "Small Chops (puff-puff, spring rolls)",
    verdict: "moderate",
    label: "Limit to 2–3 pieces",
    advice: "These are deep-fried starch. A couple is fine for enjoyment. A full plate undoes 2 days of work. Eat them before your main meal, not after.",
  },
  {
    emoji: "🍰",
    food: "Cake / Dessert",
    verdict: "moderate",
    label: "One small slice",
    advice: "A small slice of celebration cake is not going to ruin your progress. Finishing three slices will. Eat it, enjoy it, stop at one.",
  },
  {
    emoji: "🥤",
    food: "Coca-Cola / Fanta / Pepsi",
    verdict: "avoid",
    label: "Avoid completely",
    advice: "Carbonated drinks inflate your belly for hours. At a party where you want to look and feel good, this is the one food to skip entirely. Ask for water.",
  },
  {
    emoji: "🍜",
    food: "Fried Rice AND Jollof Rice",
    verdict: "avoid",
    label: "Pick one only",
    advice: "Both on the same plate is a double-carb — the same rule as eba + rice. Pick whichever you prefer most and enjoy one portion of it.",
  },
];

const colours: Record<string, string> = {
  eat: "#6BAA75",
  moderate: "#C8A96A",
  avoid: "#B85C3A",
};
const labels: Record<string, string> = {
  eat: "✓ Eat",
  moderate: "⚡ Moderate",
  avoid: "✗ Avoid",
};

export default function PartiesPage() {

  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Bonus #7</span>
        <span className={s.infoPageHeaderTitle}>What To Eat At Parties 🎉</span>
        <p className={s.infoPageHeaderSub}>
          Nigerian parties are everywhere. Owambe, naming ceremonies, weddings, birthdays.
          This guide keeps you on track without making you the person who refused to eat at a party.
        </p>
      </div>

      <div className={s.articleCard} style={{ marginBottom: 24 }}>
        <h3 className={s.articleCardTitle}><span>📋</span> The 8 Party Rules</h3>
        <ul className={s.articleList}>
          {rules.map((rule, i) => (
            <li key={i} className={s.articleListItem}>{rule}</li>
          ))}
        </ul>
      </div>

      <p className={s.sectionLabel} style={{ marginBottom: 16 }}>Common Party Foods — The Verdict</p>

      <div className={s.articleGrid}>
        {partyFoods.map((item) => (
          <div key={item.food} className={s.articleCard} style={{ borderLeft: `4px solid ${colours[item.verdict]}` }}>
            <h3 className={s.articleCardTitle}>
              <span>{item.emoji}</span> {item.food}
              <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 700, color: colours[item.verdict], letterSpacing: "0.3px" }}>
                {labels[item.verdict]}
              </span>
            </h3>
            <p className={s.articleCardBody} style={{ margin: 0 }}>{item.advice}</p>
          </div>
        ))}
      </div>

      <div className={s.chiomaNoteCard} style={{ marginTop: 24 }}>
        <div className={s.chiomaAvatar}>C</div>
        <div className={s.chiomaNoteBody}>
          <span className={s.chiomaNoteFrom}>From Chioma</span>
          <p className={s.chiomaNoteText}>
            You are not supposed to be miserable at a party. You are supposed to enjoy your life while also losing belly fat.
            Those two things are not opposites. Use this guide, enjoy the event, come home proud of yourself. — Chioma ❤️
          </p>
        </div>
      </div>
    </div>
  );
}
