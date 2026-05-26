export type Struggle = "belly" | "food" | "energy" | "husband" | "body" | "consistency";

export type Rec = {
  emoji: string;
  tool: string;
  href: string;
  reason: string;
};

export function getRecommendations(struggles: Struggle[]): Rec[] {
  const pool: Rec[] = [];

  pool.push({
    emoji: "📗",
    tool: "21-Day Belly Flatten Guide",
    href: "/tools/guide",
    reason: "Start here — Day 1 sets everything else in motion.",
  });

  if (struggles.includes("belly") || struggles.includes("food")) {
    pool.push({
      emoji: "🥗",
      tool: "Nutrition Reset Guide",
      href: "/tools/nutrition",
      reason: "Understand exactly why your belly bloats and which foods fix it.",
    });
  }

  if (struggles.includes("food")) {
    pool.push({
      emoji: "🍲",
      tool: "Nigerian Food Swap Guide",
      href: "/tools/food-swaps",
      reason: "Eat the same Nigerian food — just smarter for your belly.",
    });
  }

  if (struggles.includes("consistency")) {
    pool.push({
      emoji: "☀️",
      tool: "Morning Ritual Checklist",
      href: "/tools/checklist",
      reason: "Track your daily habits — consistency is the whole method.",
    });
  }

  if (struggles.includes("energy")) {
    pool.push({
      emoji: "🏃",
      tool: "Busy Mum Workout Guide",
      href: "/tools/workout",
      reason: "Gentle morning activation that raises energy — not drains it.",
    });
  }

  if (struggles.includes("body")) {
    pool.push({
      emoji: "✏️",
      tool: "Confidence Rebuilding Journal",
      href: "/tools/journal",
      reason: "Daily prompts to rebuild how you feel about your postpartum body.",
    });
  }

  if (struggles.includes("husband")) {
    pool.push({
      emoji: "💗",
      tool: "The Intimacy Reset",
      href: "/intimacy",
      reason: "A dedicated 21-day programme for reconnecting with your husband.",
    });
  }

  pool.push({
    emoji: "📊",
    tool: "Belly Tracker",
    href: "/tools/tracker",
    reason: "Log measurements from Day 1 so you can see real progress.",
  });

  const seen = new Set<string>();
  const result: Rec[] = [];
  for (const r of pool) {
    if (!seen.has(r.href) && result.length < 3) {
      seen.add(r.href);
      result.push(r);
    }
  }
  return result;
}

export const WEEK_LABELS: Record<string, string> = {
  "0-2":  "Less than 2 weeks postpartum",
  "2-6":  "2–6 weeks postpartum",
  "6-12": "6 weeks–3 months postpartum",
  "12+":  "3+ months postpartum",
};
