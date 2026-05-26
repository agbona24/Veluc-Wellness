import s from "../tools.module.css";

const morning = [
  {
    emoji: "😌",
    title: "Don't panic",
    body: "One indulgent meal — even a very large one — cannot undo 10 days of correct eating. What you do in the next 24 hours matters far more than what you did last night.",
  },
  {
    emoji: "⏰",
    title: "Push breakfast to 9 AM",
    body: "Extend your overnight fast by 2 extra hours. Your body is still processing last night's food — give it more time before adding anything new.",
  },
  {
    emoji: "💧",
    title: "3 glasses of warm water before anything else",
    body: "Not cold water — warm. Drink them slowly before brushing your teeth or eating. This activates digestion, flushes overnight bloat, and begins the water retention correction.",
  },
  {
    emoji: "🚶",
    title: "20-minute walk — non-negotiable",
    body: "Even if you feel bloated, sluggish, or uncomfortable. The walk activates gut motility and burns through the excess glycogen from last night. This single action accelerates recovery by half a day.",
  },
  {
    emoji: "🥚",
    title: "Breakfast: 2 boiled eggs + garden egg + cucumber (NO starch)",
    body: "No bread. No rice. No noodles. High protein, anti-bloat vegetables. This is your only meal before midday. Eat it slowly.",
  },
];

const midday = [
  {
    emoji: "🍵",
    title: "Ginger tea after breakfast",
    body: "Boil 4 slices of fresh ginger in 2 cups of water for 10 minutes. Drink warm. Reduces gas from last night's indulgence and activates digestive enzymes.",
  },
  {
    emoji: "🍲",
    title: "Lunch: Light pepper soup or vegetable soup + fish",
    body: "No swallow. No rice — not today. The soup base is anti-inflammatory and the fish gives you protein without adding starch. Eat the soup slowly.",
  },
  {
    emoji: "💧",
    title: "Keep drinking water",
    body: "Aim for your full 8 glasses today. It is counterintuitive, but drinking more water flushes the retained water from last night's salty food and starch.",
  },
];

const evening = [
  {
    emoji: "🕕",
    title: "Finish all eating by 6 PM (earlier than usual)",
    body: "Your normal cutoff is 7 PM. Tonight make it 6 PM — the extended overnight fast accelerates the bloat recovery.",
  },
  {
    emoji: "🥗",
    title: "Dinner: Garden egg + boiled egg OR moi moi + cucumber",
    body: "Light and protein-focused. No starch at dinner today. This is a one-day adjustment — tomorrow you return to your normal dinner plan.",
  },
  {
    emoji: "🚶",
    title: "Evening walk — 20 minutes",
    body: "A second walk today is ideal. It does not need to be fast. A gentle 20-minute walk after 6 PM accelerates digestion and reduces overnight bloat.",
  },
  {
    emoji: "🌙",
    title: "Double nighttime reset drink at 9 PM",
    body: "2 teaspoons grated ginger, 1 teaspoon cinnamon, 2 full cups of warm water. Drink both cups. This is the most powerful recovery action of the entire day.",
  },
];

const doNots = [
  { action: "Do NOT starve yourself tomorrow", reason: "Skipping all meals raises cortisol — which makes belly fat storage worse, not better. Eat your normal programme meals." },
  { action: "Do NOT take flat tummy teas or laxatives", reason: "They cause diarrhoea, not fat loss. They damage your gut lining and set your recovery back by days." },
  { action: "Do NOT weigh yourself for 48 hours", reason: "The scale will show 1–2 kg more because of water retention from salt and starch — not real fat gain. Weighing yourself will only discourage you unnecessarily." },
  { action: "Do NOT feel guilty", reason: "Guilt raises cortisol. Elevated cortisol causes belly fat storage. Guilt literally makes the bloating worse. Enjoy the memory, trust the recovery." },
  { action: "Do NOT skip the morning walk", reason: "This is the most common mistake. Even 15 minutes of movement makes a significant difference to how quickly the bloat clears." },
];

const timeline = [
  { time: "Day after event — morning", result: "Water retention at peak. Belly may look slightly larger. This is temporary." },
  { time: "Day after event — evening", result: "After the walk, water, and no-starch day, bloat visibly reduced." },
  { time: "2 days after event", result: "Back to your pre-event baseline for most women who follow this protocol." },
  { time: "3 days after event", result: "No visible difference from the event. Body is fully reset." },
];

export default function EventRecoveryPage() {
  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Bonus #14</span>
        <span className={s.infoPageHeaderTitle}>Event Recovery Routine 🎉→💪</span>
        <p className={s.infoPageHeaderSub}>
          What to do the morning after a party, owambe, or any occasion where you ate
          more than planned. Follow this exactly and you will be back to baseline within 48 hours.
        </p>
      </div>

      <div className={s.chiomaNoteCard} style={{ marginBottom: 24 }}>
        <div className={s.chiomaAvatar}>C</div>
        <div className={s.chiomaNoteBody}>
          <span className={s.chiomaNoteFrom}>First — a word</span>
          <p className={s.chiomaNoteText}>
            I want you to genuinely enjoy parties. The goal of this programme is not to make you
            miserable at every social event. Enjoy the owambe, eat the jollof rice, have a good time.
            Then come home, follow this routine, and get back on track. Life includes celebrations.
            Your programme accommodates them. — Chioma ❤️
          </p>
        </div>
      </div>

      {/* Morning */}
      <p className={s.sectionLabel} style={{ marginBottom: 16 }}>🌅 Morning After — First 4 Hours</p>
      <div className={s.articleGrid}>
        {morning.map((item) => (
          <div key={item.title} className={s.articleCard}>
            <h3 className={s.articleCardTitle}><span>{item.emoji}</span> {item.title}</h3>
            <p className={s.articleCardBody} style={{ margin: 0 }}>{item.body}</p>
          </div>
        ))}
      </div>

      {/* Midday */}
      <p className={s.sectionLabel} style={{ margin: "24px 0 16px" }}>☀️ Midday — Keep the Reset Going</p>
      <div className={s.articleGrid}>
        {midday.map((item) => (
          <div key={item.title} className={s.articleCard}>
            <h3 className={s.articleCardTitle}><span>{item.emoji}</span> {item.title}</h3>
            <p className={s.articleCardBody} style={{ margin: 0 }}>{item.body}</p>
          </div>
        ))}
      </div>

      {/* Evening */}
      <p className={s.sectionLabel} style={{ margin: "24px 0 16px" }}>🌆 Evening — Seal the Recovery</p>
      <div className={s.articleGrid}>
        {evening.map((item) => (
          <div key={item.title} className={s.articleCard}>
            <h3 className={s.articleCardTitle}><span>{item.emoji}</span> {item.title}</h3>
            <p className={s.articleCardBody} style={{ margin: 0 }}>{item.body}</p>
          </div>
        ))}
      </div>

      {/* What NOT to do */}
      <div className={s.articleCard} style={{ marginTop: 24, marginBottom: 24 }}>
        <h3 className={s.articleCardTitle}><span>🚫</span> What NOT To Do</h3>
        <ul className={s.articleList}>
          {doNots.map((item, i) => (
            <li key={i} className={s.articleListItem}>
              <strong>{item.action}:</strong> {item.reason}
            </li>
          ))}
        </ul>
      </div>

      {/* Timeline */}
      <div className={s.articleCard} style={{ marginBottom: 24 }}>
        <h3 className={s.articleCardTitle}><span>📅</span> Recovery Timeline</h3>
        <ul className={s.articleList}>
          {timeline.map((item, i) => (
            <li key={i} className={s.articleListItem}>
              <strong>{item.time}:</strong> {item.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
