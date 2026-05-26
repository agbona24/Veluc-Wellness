import s from "../tools.module.css";

type Swap = { from: string; to: string; note?: string };
type Section = { title: string; swaps: Swap[] };

const sections: Section[] = [
  {
    title: "🥚 Breakfast Swaps",
    swaps: [
      { from: "Bread + margarine", to: "2 boiled eggs + garden egg", note: "More protein, zero bloat trigger" },
      { from: "Sweetened Milo (3 spoons sugar)", to: "Plain green tea or warm lemon water", note: "Eliminates 400+ daily sugar calories" },
      { from: "Fried egg with white bread", to: "Scrambled egg + cucumber slices", note: "Cuts starch-starch combination" },
      { from: "Noodles (Indomie) for breakfast", to: "Oatmeal + banana + warm water", note: "Oats digest slowly and reduce morning bloat" },
      { from: "Sugary Pap with peak milk", to: "Plain ogi with a boiled egg on the side", note: "Protein keeps you full longer" },
    ],
  },
  {
    title: "☀️ Main Meal Swaps",
    swaps: [
      { from: "Rice AND eba in one meal", to: "Rice OR eba — one carb per meal", note: "The #1 bloat rule — never double-carb" },
      { from: "Fried chicken (with skin)", to: "Grilled or baked chicken", note: "Same protein, without the oil overload" },
      { from: "White rice + stew (no protein)", to: "White rice + stew + fish or egg", note: "Protein at every meal is non-negotiable" },
      { from: "Eating eba + amala together", to: "One swallow only, smaller portion", note: "The body can only use one carb source at a time" },
      { from: "Store-bought fruit juice", to: "Water + a fresh orange on the side", note: "Juice is liquid sugar — eat the fruit instead" },
    ],
  },
  {
    title: "🌇 Dinner Swaps",
    swaps: [
      { from: "Full plate of eba + soup at 9 PM", to: "Light pepper soup or vegetable soup (no swallow)", note: "Heavy carbs at night stall the hormone reset" },
      { from: "Rice for dinner", to: "Boiled plantain (half) + fish or egg", note: "Lighter carb, easier digestion overnight" },
      { from: "Eating after 9 PM", to: "Finish dinner by 7 PM, drink only water after", note: "The fasting window is where fat burning happens" },
      { from: "Chin-chin or crackers after dinner", to: "Nothing — the fast starts here", note: "Snacking after dinner breaks the hormone reset" },
    ],
  },
  {
    title: "🥤 Drink Swaps",
    swaps: [
      { from: "Coca-Cola / Fanta / Pepsi", to: "Warm water or cold water with lemon", note: "Carbonation is the #1 bloat trigger in drinks" },
      { from: "Sweetened Malta / energy drinks", to: "Zobo (no sugar) or fresh coconut water", note: "Natural alternatives without the sugar spike" },
      { from: "Fruit juice with every meal", to: "Plain water — at least 2 glasses per meal", note: "Hydration is 70% of the belly flatten result" },
      { from: "Tea with 3 spoons of sugar", to: "Green tea or ginger tea — no sugar", note: "Green tea actively reduces cortisol and bloating" },
    ],
  },
  {
    title: "🍪 Snack Swaps",
    swaps: [
      { from: "Puff-puff or chin-chin between meals", to: "Cucumber + garden egg + handful of groundnut", note: "Filling, anti-bloat, and within the method" },
      { from: "Biscuits / digestive crackers", to: "A boiled egg or a small wrap of moi moi", note: "Biscuits spike blood sugar and increase hunger" },
      { from: "Eating anything outside the windows", to: "Warm water or ginger tea — hunger often means thirst", note: "Snacking outside windows breaks the insulin cycle" },
    ],
  },
];

export default function FoodSwapsPage() {
  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Bonus Tool</span>
        <span className={s.infoPageHeaderTitle}>Nigerian Food Swap Guide 🍲</span>
        <p className={s.infoPageHeaderSub}>
          You don&apos;t need to stop eating Nigerian food. You just need to eat it smarter.
          Every swap below keeps the culture — and removes the bloat.
        </p>
      </div>

      <div className={s.chiomaNoteCard} style={{ marginBottom: 24 }}>
        <div className={s.chiomaAvatar}>C</div>
        <div className={s.chiomaNoteBody}>
          <span className={s.chiomaNoteFrom}>A word from Chioma</span>
          <p className={s.chiomaNoteText}>
            I built this guide because Nigerian women are constantly told to eat salad and chicken breast to lose weight.
            That is not our food and it is not sustainable. These swaps let you eat the food you grew up with — just in a way that works with your body, not against it. — Chioma ❤️
          </p>
        </div>
      </div>

      <div className={s.swapGrid}>
        {sections.map((sec) => (
          <div key={sec.title} className={s.swapSection}>
            <p className={s.swapSectionTitle}>{sec.title}</p>
            {sec.swaps.map((swap, i) => (
              <div key={i} className={s.swapCard}>
                <span className={s.swapFrom}>{swap.from}</span>
                <span className={s.swapArrow}>→</span>
                <span className={s.swapTo}>
                  <span className={s.swapToMain}>{swap.to}</span>
                  {swap.note && <span className={s.swapToNote}>{swap.note}</span>}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
