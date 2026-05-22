import Image from "next/image";
import s from "./sales.module.css";

const CHECKOUT_URL = "#CHECKOUT_URL"; // ← Replace with your Selar/Nestuge/Paystack link

export default function SalesPage() {
  return (
    <div className={s.pageWrapper}>

      {/* ===== SECTION 1: BLOG HEADER ===== */}
      <header className={s.blogHeader}>
        <span className={s.blogName}>Veluc Wellness Blog</span>
        <span className={s.blogTagline}>Real Wellness Tips For African Women</span>
      </header>

      {/* ===== SECTION 2: STORY HEADLINE ===== */}
      <div className={s.headlineSection}>
        <h1 className={s.mainHeadline}>
          Retired Nigerian Midwife Reveals the Food Timing Secret Helping
          Mothers Lose 7kg–15kg After Childbirth Without Giving Up Rice,
          Swallow or Their Favourite Foods
        </h1>
        <p className={s.postMeta}>
          Published: 12 May 2026 &nbsp;|&nbsp; Posted by: Chioma &nbsp;|&nbsp;
          Category: Women&apos;s Health, Weight Loss
        </p>
      </div>

      {/* ===== SECTION 3: HERO IMAGE ===== */}
      <div className={s.contentBlock}>
        <Image
          src="/images/main%20image.jpeg"
          alt="Chioma — Veluc Wellness Blog"
          width={800}
          height={500}
          style={{ width: "100%", height: "auto", borderRadius: 4 }}
          priority
        />
      </div>

      {/* ===== SECTION 4: OPENING HOOK ===== */}
      <div className={s.contentBlock}>
        <p>You stand in front of the mirror every morning.</p>
        <p>
          You pull up your blouse. You stare at your belly. You press your hands
          against it, hoping somehow… it will flatten.
        </p>
        <p>It doesn&apos;t.</p>
        <p>
          <span className={s.italicThought}>
            I&apos;ve tried everything. Why isn&apos;t this moving?
          </span>
        </p>
        <p>
          The clothes that used to fit you perfectly now sit at the back of your
          wardrobe. You&apos;ve bought bigger sizes twice already. You tell yourself
          it&apos;s just &quot;baby weight&quot; and it will go on its own.
        </p>
        <p>But it&apos;s been months. And it hasn&apos;t moved.</p>
        <p>
          You watch your husband&apos;s eyes when you walk into the room. He still
          loves you — you know that. But something is different. The way he used to
          look at you… that look, you haven&apos;t seen it in a long time.
        </p>
        <p>
          <span className={s.italicThought}>
            Am I overthinking this? Or can he see it too?
          </span>
        </p>
        <p>
          You&apos;ve tried cutting back on food. For a few days, you ate almost
          nothing. You were dizzy, irritable, exhausted from breastfeeding and
          barely eating. And after all that sacrifice? You stepped on the scale and
          nothing changed. Not even half a kilogram.
        </p>
        <p>
          You&apos;ve seen the posts on Instagram. &quot;Lose belly fat in 7
          days!&quot; You bought some of those flat tummy teas from vendors online.
          And you were running to the toilet every 20 minutes for a week. But your
          belly? Still exactly where it was.
        </p>
        <p>People around you have opinions.</p>
        <p>
          <em>
            &quot;Stop eating rice.&quot; &nbsp;&quot;No swallow. No eba. No
            pounded yam.&quot; &nbsp;&quot;Start running every
            morning.&quot; &nbsp;&quot;Join a gym.&quot;
          </em>
        </p>
        <p>
          You&apos;ve heard all of it. You&apos;ve tried most of it. But life is
          not that simple. You have a baby to breastfeed. You have a home to
          manage. A job to hold down.{" "}
          <span className={s.boldEm}>
            You don&apos;t have 2 hours a day to spend at a gym or the energy to
            starve yourself.
          </span>
        </p>
        <p>
          <span className={s.italicThought}>
            Is this just how my body is now? Did having a baby permanently change
            something in me?
          </span>
        </p>
        <p>I want you to stop right there.</p>
        <p>
          Because that question —{" "}
          <em>&quot;Is this just how my body is now?&quot;</em> — is the most
          dangerous lie your mind is trying to tell you.
        </p>
        <p>It is not true.</p>
        <p>
          <span className={s.boldEm}>
            Drop everything you are doing now and listen to every word I am about
            to say.
          </span>
        </p>
      </div>

      {/* ===== SECTION 5: THE PROMISE ===== */}
      <div className={s.promiseSection}>
        <p className={s.promiseText}>
          Because I am about to share with you a simple food timing method that
          changed everything for me — and has helped 247 Nigerian mothers
          flatten their postpartum belly without giving up rice, swallow, or their
          favourite foods.
        </p>
      </div>

      {/* ===== SECTION 6: ANCESTRAL / AUTHORITY TEASE ===== */}
      <div className={s.contentBlock}>
        <p>Our grandmothers didn&apos;t go to the gym.</p>
        <p>
          They didn&apos;t drink green tea. They didn&apos;t count calories. They
          didn&apos;t eat &quot;clean.&quot; They ate eba, they ate soup, they ate
          pounded yam — and somehow, they kept their figures for decades.
        </p>
        <p>
          There is something they knew that we have forgotten. A quiet, almost
          invisible method of eating that our mothers&apos; generation practised
          without even realising it. And a 63-year-old woman in Onitsha quietly
          reminded me of it… and it changed my life.
        </p>
        <p>
          Hi, my name is <strong>Chioma.</strong>
        </p>
        <p>
          Before I tell you about this method, the first thing you should know
          about me is that I am <strong>NOT</strong> a doctor. I am not a
          nutritionist. I am not a fitness coach or a health expert.
        </p>
        <p>
          I am just a 34-year-old Lagos mother of two who suffered quietly with
          postpartum belly fat for almost a year — and finally found a way out
          that didn&apos;t require me to suffer, starve, or give up the foods I
          love.
        </p>
      </div>

      {/* ===== SECTION 7: PERSONA IMAGE ===== */}
      <div className={s.contentBlock}>
        <Image
          src="/images/chioma.jpeg"
          alt="Chioma — personal photo"
          width={600}
          height={400}
          style={{ width: "100%", height: "auto", borderRadius: 6 }}
        />
      </div>

      {/* ===== SECTION 8: FULL PERSONAL STORY ===== */}
      <div className={s.contentBlock}>
        <h2 className={s.sectionHeading}>My Story — How It All Started</h2>
        <p>My second son, David, was born in August 2024.</p>
        <p>He was healthy. He was beautiful. He weighed 3.8kg at birth. I was so grateful.</p>
        <p>
          But from the moment I came home from the hospital, something felt wrong
          — not with David. With me.
        </p>
        <p>My body didn&apos;t feel like mine anymore.</p>
        <p>
          With my first pregnancy, things bounced back relatively quickly. Not this
          time. By the fourth month after delivery, I had lost very little of the
          weight I gained. My belly was soft and round in a way I didn&apos;t
          recognise. I couldn&apos;t fit into any of my old dresses. My confidence
          — which I always prided myself on — was completely gone.
        </p>
        <p>
          <span className={s.italicThought}>
            I thought I would handle this better. I thought I was stronger than
            this. But staring at myself in that mirror every morning was becoming
            painful.
          </span>
        </p>
        <p>
          <strong>And then something happened that broke me completely.</strong>
        </p>
        <p>
          It was a Thursday evening. My husband Emeka came home late. He was tired.
          I had made his favourite — ofe onugbu with pounded yam. I called him to
          eat. He smiled and said he&apos;d already eaten at the office.
        </p>
        <p>I told myself it was nothing. He was just tired.</p>
        <p>
          But later that night, as I was breastfeeding David at 2am, I saw his
          phone screen light up on the bedside table. I am not a suspicious woman.
          I don&apos;t go through my husband&apos;s phone. But something in me
          froze.
        </p>
        <p>
          <span className={s.italicThought}>
            Is this my life now? Is he losing interest in me?
          </span>
        </p>
        <p>
          I didn&apos;t touch the phone. I just sat there in the dark, nursing my
          baby, with tears rolling down my face — quietly, so I wouldn&apos;t wake
          anyone.
        </p>
        <p>
          The next morning, I called my mother&apos;s sister — Aunty Ngozi — and I
          told her everything. She was quiet for a long time. Then she said
          something that stopped me cold:
        </p>
        <div className={s.dialogue}>
          &quot;Chioma, a man doesn&apos;t leave because of belly fat. But a woman
          leaves herself first. Before you think about him — think about YOU. You
          deserve to feel good in your own body. Not for him. For you.&quot;
        </div>
        <p>Those words stayed with me.</p>
        <p>
          I decided that day to do something about it. I did not want to feel
          invisible in my own home anymore.
        </p>

        <h3 className={s.sectionSubheading}>
          What I Tried Before That Failed Me Completely
        </h3>
        <p>
          Let me be honest with you about what I tried — because I don&apos;t want
          you to waste money and time the way I did.
        </p>
        <p>
          <strong>1. I joined a gym.</strong>
          <br />I paid ₦35,000 for a 3-month membership near my office in
          Surulere. I went four times. By week five, between David&apos;s feeding
          schedule, work deadlines, and running a home — I simply could not keep
          going. The gym card sat in my wallet and mocked me every time I opened
          it.
        </p>
        <p>
          <strong>2. I tried the &quot;no rice, no swallow&quot; diet.</strong>
          <br />
          Everyone online was saying this was the answer. I cut carbs completely. I
          ate salad and boiled eggs while my family ate proper meals. I lost 1.5kg
          — and gained it all back the moment I returned to normal eating. Three
          weeks of suffering. For nothing.
        </p>
        <p>
          <strong>
            3. I bought herbal mixture from a vendor in Computer Village.
          </strong>
          <br />
          She showed me before-and-after photos. I paid ₦8,500. I drank it for two
          weeks. My stomach cramped terribly. I had loose stools every morning. My
          belly fat? Didn&apos;t move by even a centimetre.
        </p>
        <p>
          <strong>4. I tried skipping dinner entirely.</strong>
          <br />I was breastfeeding a baby and deliberately starving myself at
          night. My milk supply dropped. David was feeding poorly and crying more.
          My doctor told me I needed more nutrition. I stopped immediately — and
          felt ashamed I had even tried it.
        </p>
        <p>
          <strong>
            5. I bought &quot;flat tummy tea&quot; from an Instagram vendor.
          </strong>
          <br />I paid ₦6,000. She promised results in 10 days. It tasted foul. By
          day 3 I had the worst diarrhoea of my life. I reported her page. I never
          got a refund.
        </p>
        <p>
          <strong>6. I tried a YouTube HIIT workout.</strong>
          <br />
          Three American women in a bright studio. I tried to follow along in my
          living room at 5:30am. David woke up screaming. My downstairs neighbour
          knocked the ceiling. I gave up by minute 12.
        </p>
        <p>
          <span className={s.boldEm}>
            None of it worked. All of it cost me money, time, and dignity.
          </span>
        </p>
        <p>
          I was ready to accept that this was just how my body would be from now
          on.
        </p>

        <h3 className={s.sectionSubheading}>The Day Everything Changed</h3>
        <p>
          In February 2025, I travelled to Onitsha for my cousin Adaora&apos;s
          baby&apos;s naming ceremony.
        </p>
        <p>
          It was a beautiful, loud, joyful event — the kind of family gathering
          that fills your soul even when your body is tired. Women in ankara, food
          everywhere, music playing from the yard.
        </p>
        <p>
          I was wearing a blouse I&apos;d bought specifically for the occasion — a
          size bigger than I used to wear. Even that was tight around my middle. I
          kept tugging at it, trying to hide what I couldn&apos;t hide.
        </p>
        <p>That&apos;s when I noticed her.</p>
        <p>
          A small, quiet woman sitting near the kitchen. She was maybe 60-something.
          Wiry and straight-backed. She had a warmth about her that was hard to
          explain — like someone who had seen a thousand hard things and made peace
          with all of them.
        </p>
        <p>
          My Aunty called her Mama Rose. She had been a midwife in the state
          hospital for over 35 years before she retired. She had delivered more
          than 2,000 babies in her career. She knew the female body the way a
          skilled mechanic knows an engine.
        </p>
        <p>
          We ended up sitting together at the food table. She watched me serve
          myself a small plate of rice and a little stew — then put the spoon down
          and step back.
        </p>
        <p>
          She looked at me with kind, steady eyes and asked:{" "}
          <em>&quot;When did you have your last baby?&quot;</em>
        </p>
        <p>I told her. Six months ago.</p>
        <p>
          She looked at my stomach, then back at my face. Not judgmentally. The
          way a doctor looks at a patient — reading, assessing.
        </p>
        <p>
          <em>&quot;You&apos;ve been starving yourself,&quot;</em> she said quietly.
          Not a question.
        </p>
        <p>
          I laughed nervously.{" "}
          <em>&quot;I&apos;ve tried everything,&quot;</em> I said.{" "}
          <em>&quot;Nothing is working.&quot;</em>
        </p>
        <p>She shook her head slowly.</p>
        <div className={s.dialogue}>
          &quot;That&apos;s your first problem. You think this is about eating
          less. It&apos;s not. It never was.&quot;
        </div>
        <p>I sat up straighter. She continued:</p>
        <div className={s.dialogue}>
          &quot;I have delivered over two thousand babies. I have watched women in
          this country — poor women, rich women, thin women, heavy women — I have
          watched them all try to lose weight after childbirth. And the ones who
          fail? They all fail the same way. They think the enemy is food. It is
          not. The enemy is TIMING.&quot;
        </div>
        <p>
          She said it again. <em>Timing.</em>
        </p>
        <p>
          Not what you eat. <em>When</em> you eat it. And <em>how</em> you combine
          it.
        </p>
        <p>
          She explained that after childbirth, your hormones — especially cortisol
          — stay elevated for months. When you starve yourself, cortisol goes even
          higher. And high cortisol tells your body to{" "}
          <em>store fat in your belly.</em> So the harder you diet, the more
          stubborn the belly becomes. You are working against your own hormones
          without knowing it.
        </p>
        <p>
          She told me about what she calls the &quot;Food Window&quot; — specific
          times of day when your body is naturally burning fat, and when eating
          carbs actually <em>helps</em> your metabolism instead of hurting it.
        </p>
        <p>
          She told me about a simple warm drink from two common Nigerian
          ingredients — things already in most kitchens — taken before bed that
          helps regulate blood sugar overnight and reduces morning belly bloat
          significantly.
        </p>
        <p>
          She told me about food combinations that silently cause gut inflammation
          — and how most Nigerian women eat these combinations at every meal without
          realising it.
        </p>
        <p>I listened to everything. My first reaction was doubt.</p>
        <p>
          <span className={s.italicThought}>
            This is too simple. If it was this easy, everyone would already know
            about it.
          </span>
        </p>
        <p>
          <em>&quot;Mama Rose,&quot;</em> I said carefully,{" "}
          <em>
            &quot;I appreciate this. But I&apos;ve tried so many things. How is
            this different?&quot;
          </em>
        </p>
        <p>She smiled. She picked up her plate of rice.</p>
        <div className={s.dialogue}>
          &quot;Everything expensive thing you tried — the gym, the herbs, the
          Instagram teas — they were all trying to fight your body. This works WITH
          your body. That&apos;s why it feels too simple. Because it is simple. God
          didn&apos;t design weight loss to be suffering. The suffering was invented
          by people who want to sell you things that don&apos;t work.&quot;
        </div>
        <p>That last line hit me like a slap.</p>

        <h3 className={s.sectionSubheading}>
          I Tried It. Here Is What Happened.
        </h3>
        <p>
          I went back to Lagos the next day with everything written in my phone.
          Mama Rose had given me the full method — the food timing windows, the
          nighttime drink recipe, the food combinations to avoid, and a 21-day
          structure to follow.
        </p>
        <p>I started that Monday.</p>
        <p>
          Day 1, Day 2, Day 3 — nothing visible. I told myself not to expect
          anything. I had been disappointed too many times.
        </p>
        <p>
          Day 4 — I noticed my stomach wasn&apos;t as bloated in the morning.
          Usually I woke up puffy, gassy. That morning it felt different. I thought
          I was imagining it.
        </p>
        <p>
          Day 6 — I put on a pair of trousers that hadn&apos;t fit since before my
          pregnancy. They were tight. But I got them on.
        </p>
        <p>
          <span className={s.boldEm}>
            I stood there in my bedroom and I started to cry.
          </span>
        </p>
        <p>
          Not sadness. Something else entirely. Relief. Hope. A feeling I
          hadn&apos;t felt in almost a year.
        </p>
        <p>I kept going.</p>
        <p>
          By the end of Week 2, Emeka walked into the bedroom while I was changing.
          He stopped. He looked at me. And then he said:
        </p>
        <div className={s.dialogue}>
          &quot;Nne… you&apos;re looking different. In a good way. Did you do
          something?&quot;
        </div>
        <p>I didn&apos;t tell him what I was doing. I just smiled.</p>
        <p>
          By Week 3 — I had lost 4.5kg. My waist measurement was down almost 7
          centimetres. I wasn&apos;t exercising hard. I wasn&apos;t starving. I had
          eaten rice multiple times that week. I had even eaten fried plantain
          twice.
        </p>
        <p>
          By Week 6 — I had lost <strong>9.2kg.</strong>
        </p>
        <p>
          I am not a weight loss miracle. I am not special. This method works
          because it is based on how the female body actually functions — not on
          punishment and restriction.
        </p>

        <h3 className={s.sectionSubheading}>
          Other Women From That Day Also Tried It
        </h3>
        <p>
          I wasn&apos;t the only one Mama Rose spoke to at the naming ceremony. Two
          other women overheard our conversation and asked me for the details
          afterwards. I shared everything.
        </p>
        <p>
          Within a month, one of them — Uche from Aba — had lost 6kg and told me
          her husband was &quot;behaving like they had just gotten married.&quot;
        </p>
        <p>
          Another woman, Ngozi, a teacher from Awka who was extremely skeptical,
          called me after 10 days just to say:{" "}
          <em>
            &quot;Chioma, I don&apos;t know what this thing is, but my stomach has
            never looked like this since I had my first child five years ago.&quot;
          </em>
        </p>
        <p>That was when I knew I had to share this more widely.</p>
        <p>
          For months I was sharing it one by one — on WhatsApp, through friends, in
          family group chats. But I couldn&apos;t keep up. I was getting messages
          at 11pm. I was typing the same information over and over.
        </p>
        <p>So I did the only logical thing.</p>
        <p>
          I documented everything. I packaged it properly. I made sure it was
          clear, step-by-step, and easy enough for any Nigerian mother — no matter
          how busy — to follow.
        </p>
      </div>

      {/* ===== SECTION 9: PRODUCT REVEAL ===== */}
      <div className={s.productReveal}>
        <p style={{ fontSize: 15, color: "#800020", marginBottom: 6, fontWeight: 600 }}>
          So I put everything into one guide.
        </p>
        <span className={s.productName}>
          The 21-Day Postpartum Belly Flatten Guide
        </span>
        <p style={{ fontSize: 15, color: "#555555", marginTop: 10, marginBottom: 0 }}>
          Mama Rose&apos;s complete food timing method — adapted for busy Nigerian
          mothers — inside one easy-to-follow digital guide.
        </p>
      </div>

      {/* ===== SECTION 10: PRODUCT MOCKUP IMAGE ===== */}
      <div className={s.contentBlock}>
        <Image
          src="/images/The%2021-Day%20Postpartum%20Belly%20Confidence%20Reset.jpeg"
          alt="The 21-Day Postpartum Belly Flatten Guide"
          width={600}
          height={400}
          style={{ width: "100%", height: "auto", borderRadius: 6 }}
        />
      </div>

      {/* ===== SECTION 11: WHAT IS INSIDE ===== */}
      <div className={s.contentBlock}>
        <h2 className={s.sectionHeading}>
          Inside This Guide, You&apos;ll Discover:
        </h2>
        <ul className={s.insideList}>
          <li>
            <strong>
              The Food Timing Secret that triggers your body&apos;s natural
              fat-burning window
            </strong>{" "}
            — the exact meal times Nigerian mothers are using to lose weight while
            still eating their favourite foods. No guesswork, no suffering —{" "}
            <em>Pg. 4</em>
          </li>
          <li>
            <strong>
              The 3 &quot;healthy&quot; Nigerian foods secretly causing your belly
              to expand
            </strong>{" "}
            — most women eat at least two of these every single day without knowing.
            Find out what they are and what to swap them for — <em>Pg. 11</em>
          </li>
          <li>
            <strong>Mama Rose&apos;s Nighttime Belly Reset Drink</strong> — a
            two-ingredient warm drink using items from any Nigerian market that
            regulates blood sugar overnight and visibly reduces morning belly bloat
            — <em>Pg. 18</em>
          </li>
          <li>
            <strong>The complete 21-Day Nigerian Meal Plan</strong> — including
            rice, eba, ofe onugbu, egusi, fried plantain and more. Organised day by
            day, with portion guidance. Built around your real life — <em>Pg. 24</em>
          </li>
          <li>
            <strong>
              How postpartum hormones keep you fat — and the 3 natural steps to
              reset them
            </strong>{" "}
            — the information most weight loss programs never tell you.
            Understanding this alone will change how you approach food forever —{" "}
            <em>Pg. 34</em>
          </li>
          <li>
            <strong>
              Dangerous food combinations causing silent gut inflammation
            </strong>{" "}
            — most Nigerian women make these at every meal without realising it.
            Changing just two can visibly reduce belly size within days —{" "}
            <em>Pg. 40</em>
          </li>
          <li>
            <strong>
              The 10-Minute Morning Activation Routine for busy mothers
            </strong>{" "}
            — no gym, no equipment, no hour-long sessions. 10 minutes in your
            living room that wakes up your metabolism before the day starts —{" "}
            <em>Pg. 48</em>
          </li>
        </ul>
        <p style={{ marginTop: 20 }}>
          And the best part?{" "}
          <strong>
            You don&apos;t need to give up rice. You don&apos;t need to join a gym.
            You don&apos;t need to starve yourself or spend money on supplements.
          </strong>
        </p>
        <p>
          It is the same simple method that worked for me — and has now quietly
          helped 247 Nigerian mothers who were in exactly your situation.
        </p>
      </div>

      {/* ===== SECTION 12: FIRST TESTIMONIALS ===== */}
      <TestimonialsSet
        title="Real Women. Real Results. Real Testimonials."
        testimonials={firstTestimonials}
      />

      {/* ===== BEFORE / AFTER ===== */}
      <div className={s.beforeAfterSection}>
        <h2 className={s.beforeAfterTitle}>Real Transformations. Real Nigerian Mothers.</h2>
        <p className={s.beforeAfterSub}>
          These are real results from women who followed the 21-Day Food Timing Method.
          No gym. No starvation. Just the guide.
        </p>
        <Image
          src="/images/before-after%20image%201.jpeg"
          alt="Nigerian mother before and after following the 21-Day Postpartum Belly Flatten Guide"
          width={752}
          height={500}
          style={{ width: "100%", height: "auto", borderRadius: 8 }}
        />
      </div>

      {/* ===== SECTION 13: PRICING ===== */}
      <div className={s.pricingSection}>
        <h2>
          Just So You Know… Putting This Guide Together Cost Me Over ₦380,000
        </h2>
        <p>
          This wasn&apos;t a guide I typed in an afternoon. I wanted it to genuinely
          change a woman&apos;s life. So I invested seriously to make it happen.
        </p>
        <ul className={s.creationCosts}>
          <li>Professional health writer to document everything — ₦85,000</li>
          <li>Nutritionist consultant to review the food timing science — ₦120,000</li>
          <li>Multiple rounds of editing and formatting — ₦68,000</li>
          <li>Testing with 50+ Nigerian mothers over 3 months — ₦72,000</li>
          <li>Website setup, graphics, and platform fees — ₦35,000</li>
        </ul>
        <p style={{ fontWeight: 700, color: "#000000", marginTop: 16 }}>
          Total invested: Over ₦380,000
        </p>
        <div className={s.priceDescent}>
          I&apos;m not going to charge you <s>₦380,000</s>...<br />
          I won&apos;t even charge you <s>₦50,000</s>...<br />
          Not even <s>₦30,000</s>...<br />
          Not even <s>₦15,000</s>...<br />
          <br />
          A fair price for this guide would be <s>₦25,000</s>.<br />
          But I want it accessible to <em>every</em> Nigerian mother who needs it.
        </div>
        <div className={s.currentPriceBlock}>
          <span className={s.origPriceStrike}>₦25,000</span>
          <span className={s.currentPrice}>₦9,800 <span style={{ fontSize: 26 }}>/ $8</span></span>
          <p style={{ fontSize: 14, color: "#555555", marginTop: 8, marginBottom: 16 }}>
            One-time payment. Instant digital access.
          </p>
          <GuaranteeBadge size={110} />
          <p style={{ fontSize: 13, color: "#800020", marginTop: 10, marginBottom: 0, fontWeight: 600 }}>
            Protected by our 30-Day Money-Back Guarantee
          </p>
        </div>
        <span className={s.scarcityText}>
          ⚠️ This Discounted Price Is ONLY For The First 50 Mothers — Hurry!
        </span>
      </div>

      {/* ===== BREASTFEEDING SAFE CALLOUT ===== */}
      <div className={s.bfCallout}>
        <span className={s.bfIcon}>🤱</span>
        <div>
          <strong>Safe for breastfeeding mothers.</strong> This method does not
          require cutting calories, skipping meals, or taking any supplements —
          so your milk supply stays fully protected. It has been followed safely
          by hundreds of postpartum mothers who were still nursing.
        </div>
      </div>

      {/* ===== SECTION 14: FIRST CTA ===== */}
      <div className={s.ctaWrapper}>
        <a href={CHECKOUT_URL} className={s.ctaButton}>
          ✅ I&apos;m Ready — Start My 21-Day Journey Now
        </a>
        <PaymentBadges />
        <p className={s.ctaSub}>
          After payment you will be taken directly to your download page · 30-Day guarantee
        </p>
      </div>

      <div className={s.divider} />

      {/* ===== SECTION 15: BONUS PACK ===== */}
      <div className={s.bonusesSection}>
        <h2 className={s.bonusHeader}>🎁 WAIT! You Also Get These FREE Bonuses…</h2>
        <p className={s.bonusSubheader}>
          Order today and receive the <strong>complete bonus pack</strong> — 11
          extra guides, trackers &amp; planners bundled with your main guide.{" "}
          <strong>Only available at this discounted price while slots last.</strong>
        </p>

        {/* STACKED HERO MOCKUP — 3d_image.jpeg */}
        <Image
          src="/images/3d_image.jpeg"
          alt="Complete Veluc Wellness Bonus Pack"
          width={752}
          height={420}
          style={{ width: "100%", height: "auto", borderRadius: 8, marginBottom: 28 }}
        />

        {/* 3-COLUMN GRID OF INDIVIDUAL COVERS */}
        <div className={s.bonusGrid}>
          {bonusPack.map((item, i) => (
            <div key={i} className={s.bonusGridItem}>
              {item.img ? (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={267}
                  style={{ width: "100%", height: "auto", borderRadius: 4, boxShadow: "3px 3px 8px rgba(0,0,0,0.15)" }}
                />
              ) : (
                <div className={s.bonusGridImg}>
                  {item.emoji}<br />
                  <span style={{ fontSize: 9 }}>{i === 0 ? "MAIN" : `B${i}`}</span>
                </div>
              )}
              <span className={s.bonusGridLabel}>{item.title}</span>
            </div>
          ))}
        </div>

        {/* VALUE CHECKLIST */}
        <ul className={s.bonusValueList}>
          {bonusPack.map((item, i) => (
            <li key={i} className={s.bonusValueItem}>
              <span className={s.bonusValueName}>
                <span>{i === 0 ? "★" : "✅"}</span> {item.title}
              </span>
              <span className={s.bonusValuePrice}>{item.value}</span>
            </li>
          ))}
        </ul>

        {/* TOTAL BAR */}
        <div className={s.bonusTotalBar}>
          <p className={s.bonusTotalLabel}>Combined retail value of everything:</p>
          <span className={s.bonusTotalValue}>₦73,500</span>
          <p className={s.bonusTodayLabel}>You pay today only:</p>
          <span className={s.bonusTodayPrice}>₦9,800 / $8</span>
        </div>
      </div>

      {/* ===== SECTION 16: SECOND CTA ===== */}
      <div className={s.ctaWrapper}>
        <a href={CHECKOUT_URL} className={s.ctaButton}>
          ✅ Get The Guide + All Bonuses — ₦9,800 Only
        </a>
        <PaymentBadges />
        <p className={s.ctaSub}>
          Your download page opens immediately after checkout · 30-Day money-back guarantee
        </p>
      </div>

      <div className={s.divider} />

      {/* ===== SECTION 17: WHATSAPP SALES NOTIFICATIONS ===== */}
      <div className={s.whatsappWrapper}>
        <p className={s.waTitle}>🔥 See Who Just Got Access…</p>
        <div className={s.waPhone}>
          <div className={s.waHead}>
            <div className={s.waAv}>EB</div>
            <div>
              <span className={s.waGname}>Veluc Wellness Community 🌿</span>
              <span className={s.waGmem}>847 members · 23 online</span>
            </div>
          </div>
          <div className={s.waMsgs}>
            <div className={s.waMsgsInner}>
              {waMessages.map((msg, i) =>
                msg.sent ? (
                  <div key={i} className={s.waMsgSent}>
                    <span className={s.waText}>{msg.text}</span>
                    <span className={s.waTime}>{msg.time}</span>
                  </div>
                ) : (
                  <div key={i} className={s.waMsg}>
                    <span className={s.waSender}>{msg.sender}</span>
                    <span className={s.waText}>
                      {msg.text} <span className={s.waBadge}>PAID</span>
                    </span>
                    <span className={s.waTime}>{msg.time}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className={s.notifUrgency}>
          <p>
            <strong>
              🔥 43 people have already claimed this discount today.
            </strong>
          </p>
          <p>
            Only <strong>7 spots</strong> remain at the ₦9,800 discounted price.
            When they are gone, the price returns to ₦25,000.
          </p>
          <p>
            <em>You are not the only person viewing this page right now.</em>
          </p>
        </div>
      </div>

      <div className={s.ctaWrapper}>
        <a href={CHECKOUT_URL} className={s.ctaButton}>
          ⏰ Yes! Reserve My Spot Before The Price Goes Up
        </a>
        <PaymentBadges />
      </div>

      <div className={s.divider} />

      {/* ===== SECTION 18: GUARANTEE ===== */}
      <div className={s.guaranteeSection}>
        <GuaranteeBadge size={180} />
        <h2 className={s.guaranteeTitle}>
          My Bold 30-Day Money-Back Guarantee
        </h2>
        <p className={s.guaranteeText}>
          Still feeling unsure? I completely understand. Which is why I&apos;m
          making you a bold, risk-free promise:
        </p>
        <p className={s.guaranteeText}>
          <strong>
            Try The 21-Day Postpartum Belly Flatten Guide for 30 full days. Follow
            the food timing method. Drink the nighttime reset drink. Use the meal
            plan.
          </strong>
        </p>
        <p className={s.guaranteeText}>
          If after 30 days you haven&apos;t seen any difference — no change in
          weight, no change in how your clothes fit, nothing at all — send me a
          message and I will refund every single naira. No questions asked. No
          drama. No delays.
        </p>
        <p className={s.guaranteeText}>
          I can offer this guarantee because I am confident in this method. 247
          women have now used it. The results speak for themselves.
        </p>
        <p
          className={s.guaranteeText}
          style={{ fontWeight: 700, color: "#800020" }}
        >
          You either get results — or you get your money back. It&apos;s that
          simple.
        </p>
        <a
          href={CHECKOUT_URL}
          className={s.ctaButton}
          style={{ maxWidth: 500, margin: "0 auto" }}
        >
          ✅ Get Instant Access — Risk Free
        </a>
        <PaymentBadges />
      </div>

      {/* ===== SECTION 19: SECOND TESTIMONIALS ===== */}
      <TestimonialsSet
        title="More Women Sharing Their Results"
        testimonials={secondTestimonials}
      />

      {/* ===== FAQ SECTION ===== */}
      <section className={s.faqSection}>
        <h2 className={s.faqHeading}>Frequently Asked Questions</h2>
        {faqItems.map((item, i) => (
          <div key={i} className={s.faqItem}>
            <p className={s.faqQuestion}>{item.q}</p>
            <p className={s.faqAnswer}>{item.a}</p>
          </div>
        ))}
      </section>

      {/* ===== SECTION 20: TWO-CHOICE CLOSE ===== */}
      <div className={s.twoChoice}>
        <h2 className={s.sectionHeading} style={{ textAlign: "center" }}>
          At This Point, You Have Two Options
        </h2>

        <div className={`${s.choiceOption} ${s.choiceOptionGood}`}>
          <span className={`${s.choiceLabel} ${s.choiceLabelGood}`}>
            Option 1 — You Take Action Today
          </span>
          <p>
            You grab The 21-Day Postpartum Belly Flatten Guide at ₦9,800. You
            follow the simple food timing method. You drink the nighttime belly
            reset drink. You follow the 21-day meal plan — still eating rice, still
            eating swallow, still living your real life. Within 3 weeks, you start
            seeing the version of yourself you thought was gone. Your clothes fit
            again. Your confidence returns. The people around you notice. You feel
            at home in your own body again.
          </p>
        </div>

        <div className={s.choiceOption}>
          <span className={s.choiceLabel}>Option 2 — You Close This Page</span>
          <p>
            You go back to what you&apos;ve been doing. Maybe you try another
            herbal tea. Maybe you promise yourself you&apos;ll start the gym
            &quot;next month.&quot; Maybe you tell yourself you&apos;ll just accept
            this is how your body is now. And three months from now, you&apos;re in
            the same place — same belly, same mirror, same frustration. Nothing
            changes because nothing changed.
          </p>
        </div>

        <span className={s.urgencyText}>
          The clock is ticking. Only 7 spots remain at ₦9,800.
        </span>
        <p style={{ textAlign: "center", fontSize: 16, color: "#333333", marginBottom: 0 }}>
          <em>
            Maybe this page found you for a reason. What you do next is your
            choice.
          </em>
        </p>
      </div>

      {/* ===== SECTION 21: FINAL CTA ===== */}
      <div className={s.ctaWrapper}>
        <a
          href={CHECKOUT_URL}
          className={s.ctaButton}
          style={{ fontSize: 19, padding: "24px 16px" }}
        >
          ✅ Yes — Show Me My Flat Belly. I&apos;m Getting The Guide Now.
        </a>
        <PaymentBadges />
        <p className={s.ctaSub}>
          🔒 Your download page opens immediately after payment · 30-Day Money-Back Guarantee
        </p>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className={s.pageFooter}>
        <p className={s.footerText}>
          © 2026 Veluc Wellness Blog. All Rights Reserved.
        </p>
        <p className={s.footerText}>
          This site is not affiliated with or endorsed by Facebook, Google, or any
          social media platform. Results mentioned in testimonials are individual
          experiences and results may vary. This guide is for informational purposes
          only and does not constitute medical advice. Always consult a qualified
          healthcare professional before starting any diet or wellness program. This
          product is a digital download — no physical item will be shipped.
        </p>
        <div className={s.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
          <a href="#">Refund Policy</a>
        </div>
      </footer>
    </div>
  );
}

/* ─── DATA ─────────────────────────────────────────────────────────────────── */


const faqItems = [
  {
    q: "Can I still eat rice, eba, and swallow while losing postpartum belly fat?",
    a: "Yes. The 21-Day Postpartum Belly Flatten Guide is built around Nigerian foods including rice, eba, ofe onugbu, egusi, and fried plantain. The method works by changing WHEN you eat these foods and HOW you combine them — not by removing them from your diet.",
  },
  {
    q: "How fast will I see results?",
    a: "Most women begin noticing reduced morning bloat by Day 4–6. Visible changes in waist size typically appear by the end of Week 2. Average results across 247 women who have used this method are 4–7kg lost in the first 21 days.",
  },
  {
    q: "Is this safe for breastfeeding mothers?",
    a: "Yes. Unlike crash diets or calorie restriction — which reduce milk supply — this method uses food timing and combination adjustments with normal nutritious Nigerian meals. It does not require cutting calories, skipping meals, or taking any supplements.",
  },
  {
    q: "Do I need to exercise or join a gym?",
    a: "No gym is required. The guide includes an optional 10-minute at-home morning activation routine that can be done in your living room. The core results come from the food timing method, not exercise.",
  },
  {
    q: "What is included in the 21-Day Postpartum Belly Flatten Guide?",
    a: "The main guide includes: the Food Timing method, the 3 belly-bloating food combinations to avoid, Mama Rose's Nighttime Belly Reset Drink recipe, the full 21-Day Nigerian Meal Plan, the postpartum hormone reset method, and the 10-minute morning activation routine. Bonus items include the Postpartum Nutrition Reset Guide, Nigerian Food Swap Guide, Flat-Tummy Morning Ritual Checklist, Anti-Bloating Shopping List, Confidence Rebuilding Journal, 21-Day Belly Reset Tracker, and more.",
  },
  {
    q: "What if the guide does not work for me?",
    a: "The guide comes with a 30-day money-back guarantee. If you follow the method for 30 days and see no difference in your weight or how your clothes fit, you will receive a full refund with no questions asked.",
  },
  {
    q: "How is this different from other Nigerian weight loss programs?",
    a: "Most Nigerian weight loss programs require you to cut carbs, skip meals, or buy expensive supplements. This method is based on food timing — eating your normal Nigerian foods at the right times to work with your postpartum hormones rather than against them. No starvation, no expensive herbs, no gym membership needed.",
  },
  {
    q: "How much does the guide cost?",
    a: "The 21-Day Postpartum Belly Flatten Guide is currently available at a discounted price of ₦9,800 (approximately $8 USD) for the first 50 buyers. This is a one-time payment with instant digital access and includes all bonus guides.",
  },
];

const bonusPack: { emoji: string; title: string; value: string; img: string | null }[] = [
  { emoji: "📗", title: "21-Day Postpartum Belly Flatten Guide",  value: "₦25,000", img: "/images/The%2021-Day%20Postpartum%20Belly%20Confidence%20Reset.jpeg" },
  { emoji: "🥗", title: "Postpartum Nutrition Reset Guide",       value: "₦7,000",  img: "/images/Postpartum%20Nutrition%20Reset%20Guide.jpeg"                 },
  { emoji: "🏃", title: "Busy Mum Workout & Movement Guide",      value: "₦6,500",  img: "/images/Busy%20Mum%20Workout%20%26%20Movement%20Guide.jpeg"          },
  { emoji: "📅", title: "21-Day Belly Reset Tracker",             value: "₦5,000",  img: "/images/21-Day%20Belly%20Reset%20Tracker.jpeg"                       },
  { emoji: "🍲", title: "Nigerian Food Swap Guide",               value: "₦5,500",  img: "/images/Nigerian%20Food%20Swap%20Guide.jpeg"                         },
  { emoji: "☀️", title: "Flat-Tummy Morning Ritual Checklist",    value: "₦3,500",  img: "/images/Flat-Tummy%20Morning%20Ritual%20Checklist.jpeg"              },
  { emoji: "🛒", title: "Anti-Bloating Shopping List",            value: "₦3,000",  img: "/images/Anti-Bloating%20Shopping%20List.jpeg"                        },
  { emoji: "🎉", title: "What To Eat At Parties Guide",           value: "₦4,000",  img: "/images/What%20To%20Eat%20At%20Parties%20Guide.jpeg"                },
  { emoji: "📏", title: "Waist Measurement Tracker",              value: "₦2,500",  img: "/images/Waist%20Measurement%20Tracker.jpeg"                          },
  { emoji: "💪", title: "Confidence Rebuilding Journal",          value: "₦5,000",  img: "/images/Confidence%20Rebuilding%20Journal.jpeg"                      },
  { emoji: "🏋️", title: "Busy Mum 15-Minute Workout Plan",       value: "₦6,500",  img: null                                                                  },
  { emoji: "📓", title: "Open Planner / Workbook Mockup",         value: "₦5,000",  img: "/images/21-Day%20Belly%20Confidence%20Reset%20Planner.jpeg"          },
];

const firstTestimonials = [
  {
    initials: "NO", color: "#800020",
    name: "Ngozi Okafor", location: "🇳🇬 Lagos, Nigeria", time: "3 days ago",
    text: "God bless you Chioma for this guide. I don try everything — from those Instagram teas wey just purge you to gym membership wey I waste money on. I no believe say food timing go work like this. Three weeks in and my husband carry my waist yesterday for the first time since I born my daughter. I lost 5.5kg. This thing works o, no be packaging.",
  },
  {
    initials: "FD", color: "#1a3a6b",
    name: "Fatimah Danladi", location: "🇳🇬 Abuja, Nigeria", time: "1 week ago",
    text: "Wallahi I was very skeptical when my colleague sent me this page. I've been disappointed too many times. But I bought because of the 30-day guarantee — if it fails, I'll collect my money. It didn't fail. By day 8, my tummy was flat in a way it hasn't been since before my second child. Now 4 weeks later I've lost 7kg. I still eat rice. I still eat tuwo. My family doesn't even know I'm doing anything different.",
  },
  {
    initials: "BE", color: "#2e7d32",
    name: "Blessing Eze", location: "🇳🇬 Port Harcourt, Nigeria", time: "5 days ago",
    text: "I read the whole page before I bought. I was crying because somebody finally understood what I was going through. Seven months after my baby and I still look 5 months pregnant. My mother-in-law was making comments. I started the guide immediately. Week 1 — my clothes started fitting different. Week 3 — I bought a size medium dress. First time in over a year. The nighttime drink especially works FAST.",
  },
  {
    initials: "AN", color: "#5d4037",
    name: "Adaeze Nwosu", location: "🇳🇬 Enugu, Nigeria", time: "2 weeks ago",
    text: "After my third child I had completely given up on myself. I thought this was just my body now — soft, round, tired. A friend sent me this guide almost by accident. Six weeks later — 10.3kg gone. I am writing this with tears in my eyes because I feel like myself again. Not just the weight. Something inside me came back. Thank you from the bottom of my heart.",
  },
  {
    initials: "YA", color: "#6a1b9a",
    name: "Yetunde Afolabi", location: "🇳🇬 Ibadan, Nigeria", time: "4 days ago",
    text: "My husband asked if I joined gym. I laughed! I no gym o. I no even exercise plenty. I just change the TIME I eat things and do that evening drink. Lost 4kg in 18 days. He's been asking what my secret is and I haven't told him yet 😄 No suffering, no starvation — and I still eat eba and egusi! Chioma God bless you.",
  },
  {
    initials: "GO", color: "#795548",
    name: "Grace Okwu", location: "🇳🇬 Warri, Nigeria", time: "2 days ago",
    text: "I spent almost three weeks going back and forth on this page. I have been burnt too many times by Instagram products that do nothing. But the 30-day guarantee changed everything for me — I told myself, if it doesn't work I will ask for my money back and move on. Five weeks later I have lost 6.2kg and my waist is back. I am writing this specifically for whoever is reading right now and still hesitating. Just buy it. The guarantee protects you completely. And if you follow the plan, you will not need the refund.",
  },
];

const secondTestimonials = [
  {
    initials: "AY", color: "#00695c",
    name: "Amina Yusuf", location: "🇳🇬 Kano, Nigeria", time: "6 days ago",
    text: "I no go lie, I don try everything. Diet pills from pharmacy — nothing. Slimming tea — nothing. I even fasted 3 days and still no change. When I bought this guide I was already expecting disappointment. But from the first week something shifted. The morning bloat disappeared first. Then slowly my clothes started fitting again. Wallahi talahi this guide is real. I lost 8kg in 5 weeks. My co-workers are asking what I'm doing. I just smile 😊",
  },
  {
    initials: "CO", color: "#4527a0",
    name: "Chidinma Obi", location: "🇳🇬 Owerri, Nigeria", time: "9 days ago",
    text: "I lost 6kg in 21 days following this guide exactly. My sister-in-law thought I had done liposuction. When I told her it was a food timing method, she didn't believe me until I showed her the guide. She has now also bought it. What I love most is that I still eat all my Nigerian foods — eba, jollof rice, beans. The only thing that changed was WHEN I eat them and some combinations. Highly recommend to every postpartum mum.",
  },
  {
    initials: "SO", color: "#c62828",
    name: "Sandra Obieze", location: "🇳🇬 Asaba, Nigeria", time: "11 days ago",
    text: "My friend recommended this and I was hesitant — I've wasted money before and was tired of disappointment. But the 30-day guarantee gave me courage. I'm currently on Day 17 and I've already lost 5.2kg. My belly is visibly flatter — even my children noticed and asked 'Mummy why your tummy small?' 😂 The nighttime drink is my favourite part. I look forward to it every night now.",
  },
  {
    initials: "KA", color: "#e65100",
    name: "Kemi Adeyemi", location: "🇳🇬 Lagos, Nigeria", time: "2 weeks ago",
    text: "I was 8 months post-delivery and still carrying big belle like I was pregnant. People kept asking if I was expecting again — that question was killing me slowly. Three weeks into this guide, nobody has asked. My husband calls me his 'fine Lagos girl' again 😭❤️ I am not exaggerating when I say this guide changed my confidence completely. The ₦9,800 is the best money I've spent in a long time.",
  },
  {
    initials: "EO", color: "#1565c0",
    name: "Esther Okonkwo", location: "🇳🇬 Benin City, Nigeria", time: "8 days ago",
    text: "This guide is life-changing for every Nigerian mum. The section about postpartum hormones opened my eyes completely — I finally understood WHY dieting alone was not working for me. Once I understood the science and followed the method, results came fast. 7.4kg in 4 weeks. I still go out, eat at parties, enjoy food. My only regret is not finding this earlier. Share it with every mother you know.",
  },
];

const waMessages = [
  { sender: "Ngozi C., Lagos",         text: "Just paid! Can't wait to start 🙌",                                          time: "10:02 AM ✓✓", sent: false },
  { sender: "Blessing A., Port Harcourt", text: "Payment done. Bank transfer sent ✅",                                     time: "10:04 AM ✓✓", sent: false },
  { sender: "Fatima Y., Abuja",         text: "Completed! My sister sent me this link — we're doing it together 😊",       time: "10:07 AM ✓✓", sent: false },
  { sender: "Amaka O., Enugu",          text: "Done! Card payment confirmed 🎉",                                           time: "10:09 AM ✓✓", sent: false },
  { sender: "Kemi F., Ibadan",          text: "Just paid! My third child is 10 months and I'm ready 💪",                  time: "10:12 AM ✓✓", sent: false },
  { sender: "Sandra E., Warri",         text: "USSD transfer done. Waiting for my copy!",                                  time: "10:14 AM ✓✓", sent: false },
  { sender: "Chidinma N., Owerri",      text: "Paid o! My husband doesn't know 😄 Let me surprise him in 21 days",        time: "10:17 AM ✓✓", sent: false },
  { sender: "",                         text: "Amazing response! Thank you all so much 🙏 Your guides are being delivered to your email automatically. Check your inbox (and spam folder). Enjoy the journey! ❤️", time: "10:20 AM ✓✓", sent: true },
];

/* ─── PAYMENT BADGES ────────────────────────────────────────────────────────── */

function PaymentBadges() {
  return (
    <div className={s.paymentBadges}>
      <span className={s.payBadge}>💳 Card</span>
      <span className={s.payBadge}>🏦 Bank Transfer</span>
      <span className={s.payBadge}>📱 USSD</span>
      <span className={`${s.payBadge} ${s.payBadgeLock}`}>🔒 Secured by Nestuge</span>
    </div>
  );
}

/* ─── GUARANTEE BADGE ───────────────────────────────────────────────────────── */

function GuaranteeBadge({ size = 160 }: { size?: number }) {
  const cx = 100;
  const cy = 100;

  return (
    <svg
      className={s.guaranteeBadge}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="30-Day Money-Back Guarantee"
    >
      {/* Outer filled circle */}
      <circle cx={cx} cy={cy} r="96" fill="#800020" />

      {/* Gold dashed outer ring */}
      <circle cx={cx} cy={cy} r="93" fill="none" stroke="#FFCC00" strokeWidth="2" strokeDasharray="5 3.5" />

      {/* Gold solid inner ring */}
      <circle cx={cx} cy={cy} r="84" fill="#6b001a" stroke="#FFCC00" strokeWidth="1.5" />

      {/* ★ MONEY-BACK ★ — top row */}
      <text
        x="100" y="38"
        textAnchor="middle"
        fill="#FFCC00"
        fontSize="13"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="1"
      >
        ★ MONEY-BACK ★
      </text>

      {/* Thin divider line top */}
      <line x1="22" y1="46" x2="178" y2="46" stroke="#FFCC00" strokeWidth="0.8" opacity="0.5" />

      {/* "30" — large gold */}
      <text
        x="100" y="118"
        textAnchor="middle"
        fill="#FFCC00"
        fontSize="72"
        fontWeight="900"
        fontFamily="Arial Black, Arial, sans-serif"
      >
        30
      </text>

      {/* "DAY" — white, below 30 */}
      <text
        x="100" y="138"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        letterSpacing="4"
      >
        DAY
      </text>

      {/* Thin divider line bottom */}
      <line x1="22" y1="148" x2="178" y2="148" stroke="#FFCC00" strokeWidth="0.8" opacity="0.5" />

      {/* ★ GUARANTEE ★ — bottom row */}
      <text
        x="100" y="164"
        textAnchor="middle"
        fill="#FFCC00"
        fontSize="13"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="1"
      >
        ★ GUARANTEE ★
      </text>

      {/* "100% RISK FREE" — very bottom */}
      <text
        x="100" y="180"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="9"
        fontFamily="Arial, sans-serif"
        letterSpacing="1"
        opacity="0.85"
      >
        100% RISK FREE
      </text>
    </svg>
  );
}

/* ─── SHARED COMPONENT ──────────────────────────────────────────────────────── */

type Testimonial = {
  initials: string;
  color: string;
  name: string;
  location: string;
  time: string;
  text: string;
};

function TestimonialsSet({
  title,
  testimonials,
}: {
  title: string;
  testimonials: Testimonial[];
}) {
  return (
    <div className={s.testimonialsSection}>
      <h2 className={s.testimonialsTitle}>{title}</h2>
      {testimonials.map((t, i) => (
        <div key={i} className={s.testimonialCard}>
          <div className={s.tHeader}>
            <div className={s.avatar} style={{ backgroundColor: t.color }}>
              {t.initials}
            </div>
            <div>
              <span className={s.reviewerName}>{t.name}</span>
              <span className={s.reviewerMeta}>
                {t.location} &nbsp;•&nbsp; {t.time}
              </span>
            </div>
          </div>
          <span className={s.stars}>★★★★★</span>
          <p className={s.tText}>{t.text}</p>
        </div>
      ))}
      <div className={s.pagination}>
        <a href="#" className={s.pageBtn}>1</a>
        <a href="#" className={`${s.pageBtn} ${s.pageBtnOff}`}>2</a>
        <a href="#" className={`${s.pageBtn} ${s.pageBtnOff}`}>3</a>
      </div>
    </div>
  );
}
