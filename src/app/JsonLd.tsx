const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://velucwellness.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* ── Organization ── */
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Veluc Wellness Blog",
      url: SITE_URL,
      description: "Real wellness tips and digital health guides for African women.",
      sameAs: [],
    },

    /* ── WebPage ── */
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "The 21-Day Postpartum Belly Flatten Guide | Veluc Wellness Blog",
      description:
        "Retired Nutritionist reveals how Nigerian mothers are losing 7kg–15kg after childbirth without giving up rice, swallow or their favourite foods.",
      inLanguage: "en-NG",
      isPartOf: { "@id": `${SITE_URL}/#organization` },
      datePublished: "2026-05-12",
      dateModified: "2026-05-20",
      author: { "@id": `${SITE_URL}/#author` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".promise", ".guarantee"],
      },
    },

    /* ── Author / Person ── */
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#author`,
      name: "Chioma",
      description:
        "Nigerian wellness blogger, mother of two based in Lagos. Shares practical health tips for African women based on personal experience.",
      url: SITE_URL,
      knowsAbout: [
        "postpartum weight loss",
        "Nigerian nutrition",
        "women's health",
        "food timing for weight loss",
        "postpartum belly fat",
      ],
    },

    /* ── Product ── */
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#product`,
      name: "The 21-Day Postpartum Belly Flatten Guide",
      description:
        "A step-by-step food timing guide that helps Nigerian mothers lose 7kg–15kg of postpartum belly fat in 21 days — without giving up rice, swallow, or their favourite Nigerian foods. Includes a nighttime belly reset drink, 21-day Nigerian meal plan, and postpartum hormone reset method.",
      image: `${SITE_URL}/images/The%2021-Day%20Postpartum%20Belly%20Confidence%20Reset.jpeg`,
      brand: { "@id": `${SITE_URL}/#organization` },
      author: { "@id": `${SITE_URL}/#author` },
      url: SITE_URL,
      category: "Health & Wellness / Digital Guide",
      audience: {
        "@type": "Audience",
        audienceType: "Nigerian mothers, postpartum women, African women seeking weight loss",
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
        reviewCount: "500",
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
            text: "Most women begin noticing reduced morning bloat by Day 4–6. Visible changes in waist size typically appear by the end of Week 2. Average results across 500+ women who have used this method are 4–7kg lost in the first 21 days.",
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
            text: "The guide comes with a 30-day money-back guarantee. If you follow the method for 30 days and see no difference in your weight or how your clothes fit, you will receive a full refund with no questions asked.",
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
            text: "The 21-Day Postpartum Belly Flatten Guide is currently available at a discounted price of ₦9,800 (approximately $8 USD) for the first 50 buyers. This is a one-time payment with instant digital access and includes all bonus guides.",
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
