const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://veluc.online";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* ── WebSite ── */
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Veluc Wellness Blog",
      description: "Real wellness tips and digital health guides for African women.",
      inLanguage: "en-NG",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },

    /* ── Organization ── */
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Veluc Wellness Blog",
      url: SITE_URL,
      description: "Real wellness tips and digital health guides for African women.",
      sameAs: [`${SITE_URL}`],
    },

    /* ── BlogPosting (AI engines treat this as citable content) ── */
    {
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/#blogpost`,
      url: SITE_URL,
      headline: "Retired Nigerian Midwife Reveals the Food Timing Secret Helping Mothers Lose 7kg–15kg After Childbirth Without Giving Up Rice, Swallow or Their Favourite Foods",
      description:
        "Retired Nigerian midwife reveals the food timing secret helping mothers lose 7kg–15kg after childbirth without giving up rice, swallow or their favourite foods. No gym. No starvation.",
      image: `${SITE_URL}/images/main%20image.jpeg`,
      inLanguage: "en-NG",
      author: { "@id": `${SITE_URL}/#author` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      datePublished: "2026-05-12",
      dateModified: "2026-05-26",
      mainEntityOfPage: `${SITE_URL}`,
      articleSection: "Women's Health, Postpartum Wellness, Weight Loss",
      keywords: "postpartum weight loss, Nigerian mothers, food timing, belly fat after childbirth, lose weight eating Nigerian food",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2"],
      },
      mentions: [
        { "@type": "Thing", name: "Food Window", description: "Specific times of day when the postpartum body naturally burns fat, identified by Mama Rose." },
        { "@type": "Thing", name: "Nighttime Belly Reset Drink", description: "A two-ingredient warm drink made from common Nigerian market ingredients, taken before bed to regulate blood sugar and reduce morning belly bloat." },
        { "@type": "Thing", name: "Postpartum cortisol", description: "Elevated cortisol after childbirth causes the body to store belly fat; starvation diets worsen this by raising cortisol further." },
        { "@type": "Person", name: "Mama Rose", description: "A 63-year-old retired Nigerian midwife from Onitsha who delivered over 2,000 babies in 35 years and taught Chioma the food timing method." },
      ],
    },

    /* ── Author / Person ── */
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#author`,
      name: "Chioma",
      description:
        "Nigerian wellness blogger and mother of two based in Lagos. Shares practical postpartum health tips for African women based on personal experience with the food timing method learned from retired midwife Mama Rose.",
      url: SITE_URL,
      knowsAbout: [
        "postpartum weight loss",
        "Nigerian nutrition",
        "women's health",
        "food timing for weight loss",
        "postpartum belly fat",
        "postpartum hormones",
        "breastfeeding and weight loss",
      ],
    },

    /* ── Product ── */
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#product`,
      name: "The 21-Day Postpartum Belly Flatten Guide",
      description:
        "A step-by-step food timing guide that helps Nigerian mothers lose 7kg–15kg of postpartum belly fat in 21 days — without giving up rice, swallow, or their favourite Nigerian foods. Created by Chioma based on a method taught by Mama Rose, a retired Nigerian midwife with 35 years of experience. Includes the nighttime belly reset drink, 21-day Nigerian meal plan, and postpartum hormone reset method.",
      image: `${SITE_URL}/images/The%2021-Day%20Postpartum%20Belly%20Confidence%20Reset.jpeg`,
      brand: { "@id": `${SITE_URL}/#organization` },
      author: { "@id": `${SITE_URL}/#author` },
      url: SITE_URL,
      category: "Health & Wellness / Digital Guide",
      audience: {
        "@type": "Audience",
        audienceType: "Nigerian mothers, postpartum women, African women seeking weight loss after childbirth",
      },
      offers: {
        "@type": "Offer",
        price: "9800",
        priceCurrency: "NGN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/LimitedAvailability",
        itemCondition: "https://schema.org/NewCondition",
        url: SITE_URL,
        seller: { "@id": `${SITE_URL}/#organization` },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 30,
          returnMethod: "https://schema.org/ReturnByMail",
          refundType: "https://schema.org/FullRefund",
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "247",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Ngozi Okafor" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "I lost 5.5kg in 3 weeks. My husband noticed before I even told him what I was doing. This food timing method genuinely works and I still ate all my normal Nigerian foods.",
          datePublished: "2026-05-17",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Fatimah Danladi" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Lost 7kg in 4 weeks. I still eat rice and tuwo. My family doesn't even know I'm doing anything different. Wallahi this guide is the real thing.",
          datePublished: "2026-05-13",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Adaeze Nwosu" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "10.3kg gone in 6 weeks after my third child. I had completely given up on myself before this guide. Life-changing.",
          datePublished: "2026-05-06",
        },
      ],
    },

    /* ── HowTo ── */
    {
      "@type": "HowTo",
      name: "How to Lose Postpartum Belly Fat Without Giving Up Nigerian Foods",
      description:
        "A proven 21-day food timing method for Nigerian mothers to lose 7–15kg of postpartum belly fat without dieting, gym, or giving up rice, swallow, or eba.",
      totalTime: "P21D",
      estimatedCost: { "@type": "MonetaryAmount", currency: "NGN", value: "9800" },
      supply: [
        { "@type": "HowToSupply", name: "Common Nigerian pantry ingredients (ginger, lemon — for nighttime drink)" },
        { "@type": "HowToSupply", name: "Normal Nigerian household foods: rice, eba, ofe onugbu, egusi, fried plantain" },
      ],
      tool: [
        { "@type": "HowToTool", name: "The 21-Day Postpartum Belly Flatten Guide (digital download)" },
        { "@type": "HowToTool", name: "A kitchen scale or measuring cup (optional)" },
      ],
      step: [
        {
          "@type": "HowToStep",
          name: "Understand your Food Window",
          text: "Learn the specific times of day when your body burns fat naturally, and align your carbohydrate intake with these windows instead of cutting carbs entirely.",
        },
        {
          "@type": "HowToStep",
          name: "Avoid the 3 belly-bloating food combinations",
          text: "Identify the common Nigerian food combinations that silently cause gut inflammation and belly expansion, and swap them for better pairings.",
        },
        {
          "@type": "HowToStep",
          name: "Drink the Nighttime Belly Reset Drink",
          text: "Prepare a simple two-ingredient warm drink using common Nigerian market ingredients each night before bed to regulate blood sugar and reduce morning belly bloat.",
        },
        {
          "@type": "HowToStep",
          name: "Follow the 21-Day Nigerian Meal Plan",
          text: "Eat rice, eba, ofe onugbu, egusi, and your favourite Nigerian foods — just at the right times and in the right combinations as laid out in the day-by-day meal plan.",
        },
        {
          "@type": "HowToStep",
          name: "Do the 10-minute morning activation routine",
          text: "Complete a 10-minute at-home movement routine each morning to activate your metabolism — no gym, no equipment, no hour-long sessions required.",
        },
      ],
    },

    /* ── FAQPage ── */
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I still eat rice, eba, and swallow while losing postpartum belly fat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The 21-Day Postpartum Belly Flatten Guide is built around Nigerian foods including rice, eba, ofe onugbu, egusi, and fried plantain. The method works by changing WHEN you eat these foods and HOW you combine them — not by removing them from your diet.",
          },
        },
        {
          "@type": "Question",
          name: "How fast will I see results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most women begin noticing reduced morning bloat by Day 4–6. Visible changes in waist size typically appear by the end of Week 2. Average results across 247 women who have used this method are 4–7kg lost in the first 21 days.",
          },
        },
        {
          "@type": "Question",
          name: "Is this safe for breastfeeding mothers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Unlike crash diets or calorie restriction — which reduce milk supply — this method uses food timing and combination adjustments with normal nutritious Nigerian meals. It does not require cutting calories, skipping meals, or taking any supplements.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to exercise or join a gym?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No gym is required. The guide includes an optional 10-minute at-home morning activation routine that can be done in your living room. The core results come from the food timing method, not exercise.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the 21-Day Postpartum Belly Flatten Guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main guide includes: the Food Timing method, the 3 belly-bloating food combinations to avoid, Mama Rose's Nighttime Belly Reset Drink recipe, the full 21-Day Nigerian Meal Plan, the postpartum hormone reset method, and the 10-minute morning activation routine. Bonus items include the Postpartum Nutrition Reset Guide, Nigerian Food Swap Guide, Flat-Tummy Morning Ritual Checklist, Anti-Bloating Shopping List, Confidence Rebuilding Journal, 21-Day Belly Reset Tracker, and more.",
          },
        },
        {
          "@type": "Question",
          name: "What if the guide does not work for me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The guide comes with a 30-day money-back guarantee. If you follow the method for 30 days and see no difference in your weight or how your clothes fit, email hello@veluc.online and you will receive a full refund with no questions asked.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from other Nigerian weight loss programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Nigerian weight loss programs require you to cut carbs, skip meals, or buy expensive supplements. This method is based on food timing — eating your normal Nigerian foods at the right times to work with your postpartum hormones rather than against them. No starvation, no expensive herbs, no gym membership needed.",
          },
        },
        {
          "@type": "Question",
          name: "How much does the guide cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 21-Day Postpartum Belly Flatten Guide is available at a discounted price of ₦9,800 (approximately $8 USD). This is a one-time payment with instant digital access and includes all bonus guides and a 30-day money-back guarantee.",
          },
        },
      ],
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
