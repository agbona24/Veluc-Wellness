import type { Metadata } from "next";
import s from "../intimacy.module.css";

export const metadata: Metadata = {
  title: "The Intimacy Reset — Reconnect With Your Husband After Baby | Veluc Wellness",
  description: "A 21-day programme for Nigerian mothers who feel emotionally and physically disconnected from their husbands after childbirth. This is not about performance — it is about reconnection.",
  robots: { index: true, follow: true },
};

const CHECKOUT_URL = "https://nestuge.com/postpartum_belly_reset";

const deliverables = [
  {
    emoji: "💗",
    title: "The 21-Day Intimacy Reset Guide",
    sub: "Main Guide — PDF",
    value: "₦12,000",
    desc: "The complete 21-day system. Day-by-day actions, conversations, and rituals designed specifically for postpartum couples. Written for Nigerian women — not Western women. No clinical language. No awkward exercises. Just a practical path back to each other.",
  },
  {
    emoji: "💬",
    title: "The Couples Conversation Cards",
    sub: "Bonus #1 — PDF",
    value: "₦4,000",
    desc: "35 conversation starters that open emotional doors without feeling forced or awkward. Use them at dinner, during a night drive, or over a WhatsApp voice note. The goal is closeness — not confrontation.",
  },
  {
    emoji: "👨",
    title: "The Husband's Understanding Guide",
    sub: "Bonus #2 — PDF",
    value: "₦3,500",
    desc: "A short, honest guide written specifically for your husband — explaining what his wife's body and mind are going through after birth. Most men want to help. They just don't know how. Give him this and watch the dynamic shift.",
  },
  {
    emoji: "🪞",
    title: "Body Confidence After Baby",
    sub: "Bonus #3 — PDF",
    value: "₦3,000",
    desc: "A guided journal for rebuilding how you feel about your body — the stretch marks, the softness, the changed shape. You cannot desire connection when you are hiding from yourself. This guide brings you back into your own skin.",
  },
  {
    emoji: "🔥",
    title: "The Desire Recovery Workbook",
    sub: "Bonus #4 — PDF",
    value: "₦3,000",
    desc: "Step-by-step exercises that rebuild desire from the inside — not through performance, but through presence. Includes hormone-supportive habits, sensory reconnection exercises, and emotional intimacy tools that work even with a baby in the house.",
  },
];

const faqs = [
  {
    q: "Is this appropriate if I'm breastfeeding?",
    a: "Yes — in fact, it was designed with breastfeeding mothers in mind. The programme works with your hormonal state, not against it. Nothing inside requires you to stop breastfeeding or change your feeding schedule.",
  },
  {
    q: "My husband and I are not fighting — we're just... distant. Is this for us?",
    a: "Yes. Distance is actually the most common presentation. Couples who love each other deeply can still drift apart after a baby — not from conflict, but from exhaustion, hormones, and unspoken feelings. The programme addresses exactly this.",
  },
  {
    q: "What if my husband refuses to participate?",
    a: "Start on your own. The programme is designed so that the woman's transformation alone shifts the energy between two people. The Husband's Guide is a tool, not a requirement. Most women report their husbands becoming more engaged within the first week — without being asked.",
  },
  {
    q: "I had a C-section and I'm still healing. Is this safe?",
    a: "Everything in this programme is emotional and relational — nothing physical that would affect a healing body. You can begin from Day 1 regardless of your birth type or recovery stage.",
  },
  {
    q: "How long until I notice a difference?",
    a: "Most women notice emotional closeness returning within the first 7 days. The full 21-day reset addresses desire, body confidence, and physical reconnection in layers — the later days go deeper.",
  },
  {
    q: "Is this programme explicit or religious?",
    a: "It is neither. The programme respects your faith and privacy. It is practical and grounded — not graphic, not preachy. It treats your marriage with the dignity it deserves.",
  },
];

export default function IntimacyPage() {
  return (
    <div className={s.pageWrapper}>

      {/* BLOG HEADER */}
      <header className={s.blogHeader}>
        <span className={s.blogName}>Veluc Wellness Blog</span>
        <span className={s.blogTagline}>Real Wellness Tips For African Women</span>
      </header>

      {/* HEADLINE */}
      <div className={s.headlineSection}>
        <h1 className={s.mainHeadline}>
          What Nigerian Doctors Never Tell New Mothers About Why You Feel
          Nothing For Your Husband — And How 21 Days Can Change Everything
        </h1>
        <p className={s.postMeta}>
          Published: 14 May 2026 &nbsp;|&nbsp; Posted by: Chioma &nbsp;|&nbsp;
          Category: Women&apos;s Health, Marriage &amp; Intimacy
        </p>
      </div>

      {/* OPENING HOOK */}
      <div className={s.contentBlock}>
        <p>You love your husband. You are certain of that.</p>
        <p>
          But when he touches you — even just a hug, even just his hand on your waist — something in you goes still.
          There is no warmth. No response. It feels like touching a wall that used to be a door.
        </p>
        <p>
          <span className={s.italicThought}>What is wrong with me?</span>
        </p>
        <p>
          You are not cold. You are not a bad wife. You are not falling out of love.
          You are postpartum — and your body has done something to you that nobody warned you about.
        </p>
        <p>
          Your husband tries. He tells you he loves you. He is patient. But you can see it in his eyes — a
          quiet confusion. A longing. A question he is afraid to ask.
        </p>
        <p>
          <span className={s.italicThought}>Are we going to be okay?</span>
        </p>
        <p>
          Meanwhile, you are breastfeeding every two hours, recovering from stitches, carrying a baby
          all day, waking at 2 AM, 4 AM. By the time you fall into bed, you are so touched-out that
          even the idea of intimacy feels like one more demand on a body that has nothing left to give.
        </p>
        <p>
          The guilt is the worst part. You tell yourself you should want to be close to him.
          You feel broken for not feeling what you used to feel. And that guilt creates more distance.
          And the distance creates more guilt. A cycle that nobody talks about.
        </p>
      </div>

      <div className={s.divider} />

      {/* BIOLOGY SECTION */}
      <div className={s.contentBlock}>
        <h2 className={s.sectionHeading}>This Is Not Emotional. It Is Biological.</h2>
        <p>
          Here is what happens to a woman&apos;s body the moment she gives birth — and why
          it directly controls her experience of intimacy, desire, and emotional connection.
        </p>

        <div className={s.hormoneBox}>
          <div className={s.hormoneRow}>
            <span className={s.hormoneEmoji}>🧠</span>
            <p className={s.hormoneText}>
              <strong>Prolactin surges.</strong> This is the breastfeeding hormone — and it actively suppresses oestrogen.
              Low oestrogen means low libido. Not preference. Biology.
            </p>
          </div>
          <div className={s.hormoneRow}>
            <span className={s.hormoneEmoji}>💧</span>
            <p className={s.hormoneText}>
              <strong>Oestrogen crashes.</strong> Oestrogen is responsible for emotional warmth, physical desire, and the feeling of being connected to your partner.
              When it drops — which happens immediately after birth — so does your capacity for all of these.
            </p>
          </div>
          <div className={s.hormoneRow}>
            <span className={s.hormoneEmoji}>⚡</span>
            <p className={s.hormoneText}>
              <strong>Cortisol stays elevated.</strong> Sleep deprivation and constant caregiving keep your stress hormones permanently high.
              High cortisol suppresses oxytocin — the bonding hormone. Without oxytocin, you cannot feel close to anyone, including your husband.
            </p>
          </div>
          <div className={s.hormoneRow}>
            <span className={s.hormoneEmoji}>🤱</span>
            <p className={s.hormoneText}>
              <strong>Touch saturation is real.</strong> A baby uses your body for food, comfort, and warmth — 12, 14, sometimes 16 hours a day.
              Your nervous system is maxed out on physical contact. When your husband reaches for you, your body responds not with longing — but with sensory overload.
            </p>
          </div>
        </div>

        <div className={s.pullQuote}>
          <p>
            You are not broken. You are not a bad wife. You are not falling out of love.
            Your hormones are doing exactly what they were designed to do — prioritise your baby&apos;s survival over your marriage.
            The problem is that nobody teaches you how to work with this.
          </p>
        </div>

        <p>
          Most couples try to push through. The husband tries not to make demands. The wife tries to &quot;be in the mood.&quot;
          It feels forced. It does not work. And months pass, then a year, and the emotional gap widens.
        </p>
        <p>
          Some couples never fully close it.
        </p>
        <p>
          That does not have to be your story.
        </p>
      </div>

      <div className={s.divider} />

      {/* TESTIMONIALS */}
      <div className={s.contentBlock}>
        <h2 className={s.sectionHeading}>What Nigerian Women Are Saying</h2>

        <div className={s.testimonialCard}>
          <p className={s.testimonialText}>
            &quot;My husband and I had not been truly close in 8 months after our second baby. I thought we were drifting apart.
            I bought this programme not even believing it would help. By Day 10 I was crying because I remembered what it felt like to
            actually want to be near him. Not just because I should — because I genuinely did. That feeling came back.&quot;
          </p>
          <span className={s.testimonialName}>— Adaeze, 33 · Lagos · Mother of 2</span>
        </div>

        <div className={s.testimonialCard}>
          <p className={s.testimonialText}>
            &quot;I gave the husband guide to my husband without telling him what was in it. He read it in one sitting.
            That night he looked at me differently — not like he was waiting for me to be ready. Like he actually understood me.
            That shift alone was worth everything.&quot;
          </p>
          <span className={s.testimonialName}>— Blessing, 28 · Abuja · First-time mother</span>
        </div>

        <div className={s.testimonialCard}>
          <p className={s.testimonialText}>
            &quot;I was so ashamed of how I felt. Like something in me had switched off and I did not know how to get it back.
            This programme made me realise it was not my fault — and then showed me exactly what to do. Month 3 postpartum
            was the lowest point. Month 5 is the closest my husband and I have been since we married.&quot;
          </p>
          <span className={s.testimonialName}>— Funmilayo, 31 · Port Harcourt · Mother of 1</span>
        </div>
      </div>

      <div className={s.divider} />

      {/* PRODUCT REVEAL */}
      <div className={s.productReveal}>
        <span className={s.productEyebrow}>Introducing</span>
        <h2 className={s.productTitle}>The Intimacy Reset</h2>
        <p className={s.productSubtitle}>
          A 21-day programme to help Nigerian postpartum mothers reconnect emotionally,
          physically, and spiritually with their husbands — in a way that is sustainable, realistic, and deeply effective.
        </p>
      </div>

      {/* DELIVERABLES */}
      <div className={s.contentBlock}>
        <h2 className={s.sectionHeading}>Everything Included</h2>
        {deliverables.map((d, i) => (
          <div key={i} className={s.deliverableCard}>
            <span className={s.deliverableEmoji}>{d.emoji}</span>
            <div className={s.deliverableInfo}>
              <span className={s.deliverableTitle}>{d.title}</span>
              <span className={s.deliverableSub}>{d.sub}</span>
              <p className={s.deliverableDesc}>{d.desc}</p>
            </div>
            <span className={s.deliverableValue}>{d.value}</span>
          </div>
        ))}
      </div>

      <div className={s.divider} />

      {/* WHO IT'S FOR */}
      <div className={s.contentBlock}>
        <h2 className={s.sectionHeading}>This Programme Is For You If…</h2>
        <ul className={s.forList}>
          <li>You feel emotionally distant from your husband but do not know how to close the gap</li>
          <li>Your desire for intimacy has disappeared since giving birth — and you are wondering if it will ever come back</li>
          <li>You feel &quot;touched out&quot; by breastfeeding and want to want your husband again</li>
          <li>You are ashamed of your postpartum body and it is stopping you from being present in your marriage</li>
          <li>Your husband is patient — but you can feel the distance growing and you do not want to lose what you had</li>
          <li>You want practical tools, not vague advice — something that works within the reality of sleepless nights and a baby in the house</li>
          <li>You are a woman of faith and you want to honour your marriage — and you need a programme that honours your values too</li>
        </ul>
      </div>

      <div className={s.divider} />

      {/* PRICING */}
      <div className={s.contentBlock}>
        <h2 className={s.sectionHeading}>Your Investment</h2>
        <p>
          Everything above — the main guide, all four bonuses, the husband&apos;s guide — would cost ₦25,500 separately.
          For a limited time, you get the complete programme for:
        </p>

        <div className={s.pricingBox}>
          <span className={s.pricingOldPrice}>₦18,000</span>
          <span className={s.pricingPrice}>₦12,000</span>
          <span className={s.pricingNote}>One-time payment. Instant digital download. No subscription.</span>
          <a href={CHECKOUT_URL} className={s.ctaBtn}>
            Yes — I Want The Intimacy Reset
            <span className={s.ctaBtnSub}>Secure payment via Paystack / Selar · Instant access</span>
          </a>
        </div>

        <div className={s.guarantee}>
          <span className={s.guaranteeIcon}>🛡️</span>
          <p className={s.guaranteeText}>
            <strong>30-Day Money-Back Guarantee.</strong> Follow the programme for 30 days. If you do not feel a meaningful shift
            in your emotional connection and closeness — send a message and you will receive a full refund.
            No questions asked. No proof required. Your trust matters more than the money.
          </p>
        </div>
      </div>

      <div className={s.divider} />

      {/* FAQ */}
      <div className={s.contentBlock}>
        <h2 className={s.sectionHeading}>Questions Women Ask Before They Buy</h2>
        {faqs.map((item, i) => (
          <div key={i} className={s.faqItem}>
            <p className={s.faqQ}>{item.q}</p>
            <p className={s.faqA}>{item.a}</p>
          </div>
        ))}
      </div>

      <div className={s.divider} />

      {/* FINAL CTA */}
      <div className={s.contentBlock}>
        <h2 className={s.sectionHeading}>You Deserve To Feel This Again</h2>
        <p>
          The closeness you had with your husband before the baby — the ease, the warmth, the feeling of being
          truly seen by one person — that is not gone. It is waiting behind a hormonal wall that has a door.
        </p>
        <p>
          This programme is the key.
        </p>
        <a href={CHECKOUT_URL} className={s.ctaBtn} style={{ marginTop: 8 }}>
          Get The Intimacy Reset — ₦12,000
          <span className={s.ctaBtnSub}>Instant access · 30-day money-back guarantee</span>
        </a>
      </div>

      {/* CHIOMA SIGN */}
      <div className={s.chiomaSign}>
        <p className={s.chiomaSignText}>
          I created this programme because I watched couples drift apart after beautiful, healthy births — not because they stopped loving each other,
          but because nobody gave them a map back to each other. You have the map now. Use it. — Chioma ❤️
        </p>
        <span className={s.chiomaSignName}>Chioma · Veluc Wellness Blog</span>
      </div>

      {/* FOOTER */}
      <footer className={s.footer}>
        <p>© 2026 Veluc Wellness Blog. All Rights Reserved.</p>
        <p>
          This is a digital product. No physical item will be shipped. Results may vary.
          This programme is for informational purposes and does not constitute medical or relationship therapy.
          &nbsp;<a href="/privacy-policy">Privacy Policy</a> &nbsp;·&nbsp; <a href="/refund-policy">Refund Policy</a>
        </p>
      </footer>

      {/* BOTTOM SPACER */}
      <div className={s.bottomSpacer} />

      {/* STICKY CTA BAR */}
      <div className={s.stickyBar}>
        <span className={s.stickyBarText}>The Intimacy Reset<br />₦12,000 · Limited offer</span>
        <a href={CHECKOUT_URL} className={s.stickyBarBtn}>Get Instant Access →</a>
      </div>

    </div>
  );
}
