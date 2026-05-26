import s from "../tools.module.css";

const red = [
  { food: "Carbonated drinks (Coke, Fanta, Sprite, Malta, Lucozade)", reason: "The CO₂ gas inflates the belly from inside. Also causes a rapid insulin spike that drives belly fat storage." },
  { food: "Flat tummy teas and slimming sachets", reason: "They trigger diarrhoea — not fat loss. Repeated use damages the gut lining and makes bloating permanently worse." },
  { food: "Rice + eba in one sitting (double-carb)", reason: "Creates a massive gas explosion in the gut. Single highest cause of postpartum bloat in Nigerian women. The rule is one carb per meal." },
  { food: "Eating after 9 PM", reason: "Food consumed after 9 PM is stored as belly fat — the body has no need for energy during sleep and the fasting hormone window is broken." },
  { food: "Instant noodles (Indomie, etc.) as a main meal", reason: "High in sodium (causes water retention), almost zero protein, high in refined starch. A recipe for bloating and hunger within 2 hours." },
  { food: "Sugar-sweetened drinks — Milo with 3 spoons of sugar, sweetened tea, juice", reason: "Constant insulin spikes all day. Each spike signals your body to store fat, not burn it." },
];

const amber = [
  { food: "White bread", reason: "Fast-digesting starch — causes rapid blood sugar spikes. One slice with a protein source is manageable. A whole loaf is not." },
  { food: "Beans and moi moi in large quantities", reason: "Beans are healthy and high in protein, but large amounts produce gas during digestion. One wrap of moi moi is fine. A whole pot is not." },
  { food: "Excess palm oil", reason: "Not a banned food — palm oil is part of our culture. But too much (more than 2–3 tablespoons per meal) inflames the gut lining." },
  { food: "Milk and dairy", reason: "Many postpartum Nigerian women are mildly lactose-sensitive due to hormonal changes. If dairy causes bloat, reduce it for the 21 days." },
  { food: "Plantain (large portions at dinner)", reason: "Plantain is a carb — it is fine in moderate portions at lunch. A large portion at dinner slows the overnight hormone reset." },
  { food: "Processed snacks — crackers, chin-chin, puff-puff regularly", reason: "Not the occasional party chin-chin — the daily habit of snacking on these. High starch, low nutrition, frequent insulin spikes." },
];

const green = [
  { food: "Ginger (fresh or powder)", reason: "Reduces gut inflammation, improves digestion, lowers fasting blood sugar. The most effective anti-bloat ingredient available in every Nigerian market." },
  { food: "Cinnamon (ground)", reason: "Insulin sensitiser — your body uses glucose more efficiently. Reduces overnight fat storage when taken before sleep." },
  { food: "Garden eggs (African eggplant)", reason: "The most underrated anti-bloat vegetable. Eat raw as a snack, eat with pepper soup, eat at any time. No limit." },
  { food: "Pawpaw (papaya)", reason: "Contains papain — a digestive enzyme that actively breaks down food particles causing belly bloat. Eat half a small pawpaw per day." },
  { food: "Cucumber", reason: "Natural diuretic. Flushes retained water. Crunchy and filling. Eat freely as a snack or alongside meals." },
  { food: "Warm water", reason: "Counterintuitive but medically proven — drinking more water reduces water retention. The body holds less fluid when it knows more is coming." },
  { food: "Eggs", reason: "Highest bioavailable protein available. Zero starch. Zero bloat trigger. Supports hormone recovery. Eat at every meal if possible." },
  { food: "Catfish (eja aro)", reason: "High in omega-3 fatty acids that directly reduce cortisol and belly inflammation. One of the most powerful postpartum foods." },
  { food: "Ugu leaves (pumpkin leaves)", reason: "Iron-rich, anti-inflammatory, supports postpartum blood recovery. Use in soups as often as possible." },
  { food: "Green tea (unsweetened)", reason: "Contains EGCG — a compound that actively reduces cortisol. One cup per day is enough. No sugar, no milk." },
];

export default function BloatFoodsPage() {
  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Bonus #13</span>
        <span className={s.infoPageHeaderTitle}>Foods Secretly Causing Your Belly Bloat 🚨</span>
        <p className={s.infoPageHeaderSub}>
          A fast-reference cheat sheet. The foods that are quietly undoing your progress —
          and the ones that are actively reducing your bloat right now.
        </p>
      </div>

      {/* RED */}
      <p className={s.sectionLabel} style={{ marginBottom: 16 }}>
        🔴 Cut These Out Completely (All 21 Days)
      </p>
      <div className={s.articleGrid}>
        {red.map((item) => (
          <div key={item.food} className={s.articleCard} style={{ borderLeft: "4px solid #B85C3A" }}>
            <h3 className={s.articleCardTitle} style={{ color: "#B85C3A" }}>
              <span>✗</span> {item.food}
            </h3>
            <p className={s.articleCardBody} style={{ margin: 0 }}>{item.reason}</p>
          </div>
        ))}
      </div>

      {/* AMBER */}
      <p className={s.sectionLabel} style={{ margin: "24px 0 16px" }}>
        🟡 Use With Caution — Limit, Don&apos;t Eliminate
      </p>
      <div className={s.articleGrid}>
        {amber.map((item) => (
          <div key={item.food} className={s.articleCard} style={{ borderLeft: "4px solid #C8A96A" }}>
            <h3 className={s.articleCardTitle} style={{ color: "#8A6A20" }}>
              <span>⚡</span> {item.food}
            </h3>
            <p className={s.articleCardBody} style={{ margin: 0 }}>{item.reason}</p>
          </div>
        ))}
      </div>

      {/* GREEN */}
      <p className={s.sectionLabel} style={{ margin: "24px 0 16px" }}>
        🟢 These Actively Reduce Your Bloat — Eat More
      </p>
      <div className={s.articleGrid}>
        {green.map((item) => (
          <div key={item.food} className={s.articleCard} style={{ borderLeft: "4px solid #6BAA75" }}>
            <h3 className={s.articleCardTitle} style={{ color: "#3A7A45" }}>
              <span>✓</span> {item.food}
            </h3>
            <p className={s.articleCardBody} style={{ margin: 0 }}>{item.reason}</p>
          </div>
        ))}
      </div>

      <div className={s.chiomaNoteCard} style={{ marginTop: 24 }}>
        <div className={s.chiomaAvatar}>C</div>
        <div className={s.chiomaNoteBody}>
          <span className={s.chiomaNoteFrom}>From Chioma</span>
          <p className={s.chiomaNoteText}>
            You do not need to memorise this. Save this page to your phone and open it when you are
            at the market, in the kitchen, or about to eat. Most bloat in Nigerian women comes from
            just 3 things — carbonated drinks, double-carbing, and eating after 9 PM. Fix those three
            first. The rest is refinement. — Chioma ❤️
          </p>
        </div>
      </div>
    </div>
  );
}
