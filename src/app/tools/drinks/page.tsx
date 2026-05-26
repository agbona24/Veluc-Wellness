import s from "../tools.module.css";

const drinks = [
  {
    emoji: "🌙",
    name: "Nighttime Belly Reset Drink",
    badge: "Daily · 9 PM",
    badgeColor: "#0F4C5C",
    why: "The core drink of the entire programme. Reduces cortisol overnight, lowers fasting blood sugar, and reduces belly inflammation while you sleep.",
    ingredients: [
      "1 teaspoon freshly grated ginger (or ½ tsp ginger powder)",
      "½ teaspoon ground cinnamon",
      "1 large cup (300ml) warm water — not boiling",
      "Optional: tiny pinch of turmeric (adds anti-inflammatory effect)",
    ],
    steps: [
      "Boil water and allow it to cool until warm but not hot (you should be able to hold a finger in it comfortably).",
      "Stir in ginger and cinnamon until dissolved.",
      "If using turmeric, add a tiny pinch and stir again.",
      "Drink slowly over 10–15 minutes. Do not rush it.",
      "Go to bed within 30–45 minutes of drinking.",
    ],
    note: "Consistency is everything. One night will not show results. Drinking this for 21 consecutive nights changes your baseline cortisol level.",
  },
  {
    emoji: "🍋",
    name: "Morning Lemon Wake-Up Water",
    badge: "Daily · First thing",
    badgeColor: "#C8A96A",
    why: "Activates liver detox, kickstarts digestive enzymes, and reduces morning bloat before you eat anything. The single easiest habit in the programme.",
    ingredients: [
      "1 large glass (300ml) warm water",
      "Juice of half a lemon",
      "Optional: tiny pinch of cayenne pepper (accelerates metabolism)",
    ],
    steps: [
      "Heat water to warm (not hot).",
      "Squeeze half a lemon — remove any seeds.",
      "Drink this before eating, before brushing, before anything else.",
      "Wait at least 20 minutes before breakfast.",
    ],
    note: "If you have acid reflux, use less lemon or skip the cayenne. Plain warm water alone still works — the key is the warm temperature first thing.",
  },
  {
    emoji: "🫚",
    name: "Anti-Bloat Ginger Tea",
    badge: "2–3x per week · Mid-morning",
    badgeColor: "#6BAA75",
    why: "Fresh ginger tea reduces gas formation in the gut, activates digestive enzymes, and has a direct anti-inflammatory effect on the gut lining. More potent than the ginger powder in the nighttime drink.",
    ingredients: [
      "4–5 thick slices of fresh ginger root",
      "2 cups (500ml) water",
      "Optional: small cinnamon stick",
      "Optional: 1 teaspoon honey (after Day 7 only)",
    ],
    steps: [
      "Add ginger slices and cinnamon stick (if using) to cold water.",
      "Bring to a boil, then reduce heat and simmer for 10–12 minutes.",
      "Strain into a cup.",
      "Drink warm. Add honey only after it has cooled slightly — heat destroys honey's enzymes.",
    ],
    note: "Do not drink this in the evening — ginger has a stimulating effect that can interfere with sleep. Morning or early afternoon is ideal.",
  },
  {
    emoji: "🌺",
    name: "Sugar-Free Zobo (Hibiscus Tea)",
    badge: "Anytime · Replace cold drinks",
    badgeColor: "#C8849A",
    why: "Rich in antioxidants, reduces water retention, and has a mild diuretic effect that flushes bloat. Zero sugar — a genuine soda replacement that actually works.",
    ingredients: [
      "1 large handful dried zobo (hibiscus) petals",
      "3 cups (750ml) water",
      "3 whole cloves",
      "1 small cinnamon stick",
      "Optional: juice of ½ orange for flavour",
    ],
    steps: [
      "Add cloves and cinnamon to water and bring to a boil for 5 minutes.",
      "Add zobo petals, reduce heat, and simmer for 10 more minutes.",
      "Strain into a jug or bottle. Discard the petals.",
      "Add orange juice if using. Do NOT add sugar.",
      "Refrigerate and drink cold, or serve warm.",
    ],
    note: "The no-sugar rule is absolute. Even a small amount of sugar in zobo negates its anti-bloat effect. If you need sweetness, add a tiny slice of orange.",
  },
  {
    emoji: "🫐",
    name: "Pawpaw & Cucumber Blend",
    badge: "2–3x per week · Within eating windows",
    badgeColor: "#6BAA75",
    why: "Papain (the enzyme in pawpaw) is one of the most powerful natural belly-bloat reducers. Cucumber is a gentle diuretic that flushes water retention. Together they work fast.",
    ingredients: [
      "¼ of a ripe pawpaw (papaya), skin removed",
      "½ medium cucumber",
      "1 cup (250ml) plain water",
      "Juice of ½ lime",
    ],
    steps: [
      "Cut pawpaw and cucumber into rough chunks.",
      "Add all ingredients to a blender.",
      "Blend until smooth.",
      "Drink immediately — do not store, as papain enzyme degrades quickly.",
    ],
    note: "Use ripe (not overripe) pawpaw — the papain enzyme is most concentrated in the flesh of a just-ripe fruit. Overripe pawpaw still works but is less potent.",
  },
  {
    emoji: "🦴",
    name: "Bone Broth (Quick Home Version)",
    badge: "1–2x per week · As dinner or starter",
    badgeColor: "#C8A96A",
    why: "Collagen-rich, heals the gut lining, reduces inflammation, and is deeply satisfying without any starch. Use it in place of dinner on heavy bloat days or as a starter before your main meal.",
    ingredients: [
      "500g chicken, beef, or fish bones (ask your butcher for soup bones)",
      "2 garlic cloves, crushed",
      "1 small onion, halved",
      "1 teaspoon salt",
      "1 small piece of ginger",
      "4 cups (1 litre) water",
    ],
    steps: [
      "Place all ingredients in a pot and bring to a boil.",
      "Reduce to a low simmer and cook for 1.5–2 hours (30 minutes for fish bones).",
      "Strain through a fine sieve. Discard the solids.",
      "Season to taste. Drink warm as a soup.",
      "Refrigerate leftovers for up to 2 days.",
    ],
    note: "Bone broth is especially powerful during the 48-Hour Debloat Reset — use it as your dinner replacement. It fills you up completely without adding any starch.",
  },
];

export default function DrinksPage() {
  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Bonus #12</span>
        <span className={s.infoPageHeaderTitle}>Belly-Flattening Drink Recipes 🥤</span>
        <p className={s.infoPageHeaderSub}>
          Six science-backed homemade drinks that reduce cortisol, flush bloat, and support
          your hormone reset — made from ingredients you already have at home.
        </p>
      </div>

      <div className={s.chiomaNoteCard} style={{ marginBottom: 24 }}>
        <div className={s.chiomaAvatar}>C</div>
        <div className={s.chiomaNoteBody}>
          <span className={s.chiomaNoteFrom}>From Chioma</span>
          <p className={s.chiomaNoteText}>
            None of these are magic. They work because each one targets a specific mechanism —
            cortisol, inflammation, water retention, or digestion. Used consistently alongside
            the eating windows, they accelerate your results significantly. Start with the
            Nighttime Reset Drink tonight. Add one new drink per week. — Chioma ❤️
          </p>
        </div>
      </div>

      <div className={s.articleGrid}>
        {drinks.map((drink) => (
          <div key={drink.name} className={s.articleCard}>
            <h3 className={s.articleCardTitle}>
              <span>{drink.emoji}</span> {drink.name}
              <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 700, color: drink.badgeColor, letterSpacing: "0.3px" }}>
                {drink.badge}
              </span>
            </h3>
            <p className={s.articleCardBody}>{drink.why}</p>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#0F4C5C", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Ingredients
            </p>
            <ul className={s.articleList} style={{ marginBottom: 14 }}>
              {drink.ingredients.map((ing, i) => <li key={i} className={s.articleListItem}>{ing}</li>)}
            </ul>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#0F4C5C", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              How to Make
            </p>
            <ol className={s.articleList} style={{ paddingLeft: 18, marginBottom: 14 }}>
              {drink.steps.map((step, i) => <li key={i} className={s.articleListItem}>{step}</li>)}
            </ol>
            <div style={{ background: "#F0F8FA", borderRadius: 8, padding: "10px 14px", borderLeft: "3px solid #0F4C5C" }}>
              <p style={{ fontSize: 13, color: "#3D5260", margin: 0, lineHeight: 1.6 }}>
                <strong>Note:</strong> {drink.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
