import s from "../tools.module.css";

const affirmations = [
  { day: 1,  text: "My body grew and delivered a life. That is not weakness — that is extraordinary power." },
  { day: 2,  text: "I am not behind. Every healing body moves at its own pace. I honour mine." },
  { day: 3,  text: "The softness where my baby grew is not a flaw. It is the mark of what I gave to bring life into this world." },
  { day: 4,  text: "I deserve to feel good in my body — not after I lose the weight, but right now, today." },
  { day: 5,  text: "I am a good mother AND I am allowed to want my body back. These two things are not in conflict." },
  { day: 6,  text: "Every glass of water I drink is an act of love for myself. Small things matter. Small things compound." },
  { day: 7,  text: "My progress does not have to be visible to be real. Things are shifting inside me right now." },
  { day: 8,  text: "I will not compare my Week 1 to someone else's Week 10. I am running my race, on my timeline." },
  { day: 9,  text: "Nourishing my body well is not a punishment or a diet. It is me choosing myself, every single day." },
  { day: 10, text: "I have survived sleepless nights, healing, and everything motherhood has thrown at me. I can do this too." },
  { day: 11, text: "The woman I was before birth still lives inside me. She is coming back — and she is stronger." },
  { day: 12, text: "I am not just a mother. I am a whole woman. My needs are not selfish — they are necessary." },
  { day: 13, text: "One imperfect day does not erase twelve good ones. I pick myself up and I continue." },
  { day: 14, text: "My belly is not my enemy. It is a part of me that is healing. I treat it with patience, not punishment." },
  { day: 15, text: "Choosing to eat well today is not about the scale. It is about how I feel in my own body, in my own skin." },
  { day: 16, text: "My husband married all of me — before, during, and after this baby. I am still worthy of love and desire." },
  { day: 17, text: "I release the guilt of not bouncing back fast enough. There is no right timeline. There is only my timeline." },
  { day: 18, text: "Every day I show up for myself — even in one small way — is a day I am building my future self." },
  { day: 19, text: "I am not trying to go back to the woman I was before. I am becoming a stronger, wiser version of her." },
  { day: 20, text: "I have given so much to everyone around me. Today, I give something back to myself — and that is not selfish." },
  { day: 21, text: "Twenty-one days ago, I made a decision to change. Look at how far I have come. This is just the beginning." },
];

export default function AffirmationsPage() {
  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Bonus #15</span>
        <span className={s.infoPageHeaderTitle}>Postpartum Confidence Affirmation Cards 💛</span>
        <p className={s.infoPageHeaderSub}>
          One affirmation for each of your 21 days. Read yours aloud each morning — after
          your lemon water, before breakfast. It takes 30 seconds and it matters more than you think.
        </p>
      </div>

      <div className={s.chiomaNoteCard} style={{ marginBottom: 24 }}>
        <div className={s.chiomaAvatar}>C</div>
        <div className={s.chiomaNoteBody}>
          <span className={s.chiomaNoteFrom}>From Chioma</span>
          <p className={s.chiomaNoteText}>
            The physical transformation happens when you fix your food and your hormones.
            But the confidence — the way you carry yourself, the way you see your own reflection —
            that is built in your mind first. These affirmations are not wishful thinking.
            They are instructions to your nervous system. Read yours every morning. Mean it. — Chioma ❤️
          </p>
        </div>
      </div>

      <div className={s.affirmationGrid}>
        {affirmations.map((a) => (
          <div key={a.day} className={s.affirmationCard}>
            <div className={s.affirmationDayBadge}>Day {a.day}</div>
            <p className={s.affirmationText}>&ldquo;{a.text}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
