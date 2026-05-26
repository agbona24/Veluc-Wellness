"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import s from "./tools.module.css";
import { getRecommendations, type Struggle } from "./recommendations";

// ── Data ──────────────────────────────────────────────────────
const STRUGGLE_OPTIONS: { key: Struggle; emoji: string; label: string }[] = [
  { key: "belly",       emoji: "🫄", label: "My belly and bloating won't go down" },
  { key: "food",        emoji: "🍽️", label: "I'm not sure what to eat anymore" },
  { key: "energy",      emoji: "😴", label: "I feel exhausted and have no energy" },
  { key: "husband",     emoji: "💔", label: "I feel emotionally distant from my husband" },
  { key: "body",        emoji: "🪞", label: "I'm not happy with how my body looks" },
  { key: "consistency", emoji: "🔄", label: "I start things but can't stay consistent" },
];

const WEEK_OPTIONS = [
  { key: "0-2",  label: "Less than 2 weeks",           note: "Your body is still in early healing" },
  { key: "2-6",  label: "2 to 6 weeks",                note: "Early recovery — ready to begin gently" },
  { key: "6-12", label: "6 weeks to 3 months",         note: "A great time to start the full reset" },
  { key: "12+",  label: "More than 3 months",          note: "Time to take back control fully" },
  { key: "other",label: "I want belly confidence",     note: "This programme works for anyone — no birth required" },
];

export const GOAL_OPTIONS = [
  { key: "flat",       emoji: "🫄", label: "Visibly flatter belly",           note: "Reduce bloating and see your belly change within 21 days" },
  { key: "weight",     emoji: "👗", label: "Back in my pre-pregnancy clothes", note: "Lose the weight holding you back from feeling like yourself" },
  { key: "confidence", emoji: "💪", label: "Confident in my body",            note: "Rebuild your self-image and feel comfortable in your skin" },
  { key: "intimacy",   emoji: "💗", label: "Reconnect with my husband",       note: "Rebuild emotional and physical closeness after birth" },
];

const TOTAL_DATA_STEPS = 5; // steps 1–5 show progress bar

// ── Chioma response builder ───────────────────────────────────
function buildChiomaResponse(name: string, struggles: Struggle[], weeks: string, goal: string): string[] {
  const first = name.split(" ")[0] || "Mama";

  const stageMap: Record<string, string> = {
    "0-2":  `${first}, you are just days postpartum. Your body is still in active recovery — and starting the right habits now gives you the strongest possible foundation for the weeks ahead.`,
    "2-6":  `${first}, weeks 2 to 6 is when bloating and hormone imbalance are usually most visible. This is also exactly when the method works fastest — you are in the right window.`,
    "6-12": `${first}, at 6 weeks to 3 months postpartum, your body is ready for the full reset. Your hormonal foundation is stabilising and you can now actively drive change.`,
    "12+":  `${first}, three months postpartum — your body is fully ready. Women at this stage often see faster visible results because the hormones are more stable and the body responds more predictably.`,
  };

  const struggleMap: Record<string, string> = {
    belly:       "The belly bloat you are describing is almost certainly water retention from the postpartum hormone crash — not fat. Most women see a visible difference within 4 to 7 days once we correct the insulin cycle. You will too.",
    food:        "The confusion about what to eat is one of the most common things I hear. The answer is simpler than you think: it is not what you eat — it is when you eat it and what you combine it with. This programme fixes exactly that.",
    energy:      "Low energy postpartum is almost always a combination of iron depletion, elevated cortisol, and blood sugar crashes from irregular eating. The method corrects all three. Most women feel noticeably better within the first week.",
    husband:     "What you are feeling with your husband is hormonal — prolactin and cortisol actively suppress the bonding hormones after birth. This is not your marriage. This is biology. And it is reversible. Your plan addresses this directly.",
    body:        "How you see your body right now is not an accurate reflection of your body — it is your hormones speaking. As the reset works, your self-perception shifts too. That is not motivation or mindset. It is measurable biology.",
    consistency: "The struggle to stay consistent is rarely a willpower problem — it is a system problem. When the right actions are built into your daily rhythm, consistency happens almost automatically. That is exactly what your plan is designed to do.",
  };

  const goalMap: Record<string, string> = {
    flat:       "Your goal is a visibly flatter belly and less bloating. Achievable in 21 days with this plan. Here is exactly where to start today.",
    weight:     "Your goal is to fit back into your clothes. This plan will get you there — and unlike crash dieting, you will stay there. Here is where to begin.",
    confidence: "Your goal is to feel comfortable and confident in your own body again. Follow this plan for 21 days. Then look in the mirror and tell me it has not changed.",
    intimacy:   "Your goal is to feel emotionally closer to your husband. Your plan includes something specific for this. Start here — the reconnection begins with you feeling good in yourself first.",
  };

  const primaryStruggle = struggles[0] ?? "belly";

  return [
    stageMap[weeks] ?? `${first}, your body is ready to reset and I am here to guide you.`,
    struggleMap[primaryStruggle],
    (goalMap[goal] ?? "Here is your personalised starting plan. Follow it faithfully for 7 days. — Chioma ❤️"),
  ];
}

// ── Confetti ──────────────────────────────────────────────────
const CONFETTI_COLORS = ["#0F4C5C", "#6BAA75", "#C8A96A", "#C8849A", "#F4C430", "#ffffff"];

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: (i * 3.5) % 100,
        delay: (i * 0.065) % 1.1,
        duration: 0.85 + (i % 5) * 0.14,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        size: 6 + (i % 4) * 2,
        isCircle: i % 3 === 0,
        rotate: (i * 43) % 360,
      })),
    []
  );

  return (
    <div className={s.confettiWrap} aria-hidden="true">
      {pieces.map((p) => (
        <div
          key={p.id}
          className={s.confettiPiece}
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: p.color,
            width: p.size,
            height: p.size,
            borderRadius: p.isCircle ? "50%" : "2px",
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}

// ── Main Onboarding ───────────────────────────────────────────
export default function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<"fwd" | "back">("fwd");
  const [name, setName] = useState("");
  const [weeks, setWeeks] = useState("");
  const [breastfeeding, setBreastfeeding] = useState("");
  const [struggles, setStruggles] = useState<Struggle[]>([]);
  const [goal, setGoal] = useState("");

  function go(next: number) {
    setDir(next > step ? "fwd" : "back");
    setStep(next);
  }

  function toggleStruggle(key: Struggle) {
    setStruggles((prev) =>
      prev.includes(key)
        ? prev.filter((k) => k !== key)
        : prev.length < 3
        ? [...prev, key]
        : prev
    );
  }

  function finish() {
    const finalStruggles = struggles.length > 0 ? struggles : (["belly"] as Struggle[]);
    localStorage.setItem("veluc_name", name.trim() || "Friend");
    localStorage.setItem("veluc_postpartum_weeks", weeks || "6-12");
    localStorage.setItem("veluc_breastfeeding", breastfeeding || "yes");
    localStorage.setItem("veluc_struggles", JSON.stringify(finalStruggles));
    localStorage.setItem("veluc_goal", goal || "flat");
    localStorage.setItem("veluc_onboarded", "1");
    onComplete();
  }

  const recs = getRecommendations(struggles.length > 0 ? struggles : ["belly"]);
  const chiomaLines = buildChiomaResponse(name, struggles.length > 0 ? struggles : ["belly"], weeks || "6-12", goal || "flat");
  const animClass = dir === "fwd" ? s.obFwd : s.obBack;

  return (
    <div className={s.onboardingOverlay}>
      <div className={s.onboardingCard}>

        {/* Progress bar — steps 1–5 */}
        {step >= 1 && step <= TOTAL_DATA_STEPS && (
          <div className={s.obProgressWrap}>
            <div className={s.obProgressTrack}>
              <div className={s.obProgressFill} style={{ width: `${(step / TOTAL_DATA_STEPS) * 100}%` }} />
            </div>
            <span className={s.obProgressText}>{step} of {TOTAL_DATA_STEPS}</span>
          </div>
        )}

        {/* ── STEP 0: Welcome ── */}
        {step === 0 && (
          <div key="s0" className={`${s.onboardingStep} ${animClass}`}>
            <div className={s.onboardingWelcomeIcon}>🌿</div>
            <h1 className={s.onboardingTitle}>Welcome to Veluc Wellness</h1>
            <p className={s.onboardingSub}>
              Let&apos;s spend 60 seconds setting up your personal plan — so every tool
              is already tailored to where you are and what you need most right now.
            </p>
            <div className={s.onboardingChiomaNote}>
              <span className={s.onboardingChiomaAvatar}>C</span>
              <p className={s.onboardingChiomaText}>
                Every woman&apos;s body is unique. Your journey should be too. Tell me a little
                about yourself and I will build your personalised starting plan. — Chioma ❤️
              </p>
            </div>
            <div className={s.obSocialProof}>
              <span>👭</span>
              <span>247+ Nigerian mothers on this journey with you</span>
            </div>
            <button className={s.onboardingBtn} onClick={() => go(1)}>
              Let&apos;s Get Started →
            </button>
            <p className={s.obPrivacyNote}>🔒 Your answers are saved only on your device</p>
          </div>
        )}

        {/* ── STEP 1: Name ── */}
        {step === 1 && (
          <div key="s1" className={`${s.onboardingStep} ${animClass}`}>
            <div className={s.onboardingStepEmoji}>👋</div>
            <h2 className={s.onboardingTitle}>What shall we call you?</h2>
            <p className={s.onboardingSub}>Your name appears across all your tools and daily screens.</p>
            <input
              className={s.onboardingInput}
              type="text"
              placeholder="Your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && name.trim() && go(2)}
              autoFocus
              autoComplete="given-name"
            />
            <div className={s.onboardingBtnRow}>
              <button className={s.onboardingBtnSecondary} onClick={() => go(0)}>← Back</button>
              <button className={s.onboardingBtn} onClick={() => go(2)} disabled={!name.trim()}>
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Postpartum stage ── */}
        {step === 2 && (
          <div key="s2" className={`${s.onboardingStep} ${animClass}`}>
            <div className={s.onboardingStepEmoji}>🌸</div>
            <h2 className={s.onboardingTitle}>Where are you on your journey?</h2>
            <p className={s.onboardingSub}>This adjusts your starting pace and recommendations.</p>
            <div className={s.onboardingRadioGroup}>
              {WEEK_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  className={`${s.onboardingRadioItem} ${weeks === opt.key ? s.onboardingRadioItemActive : ""}`}
                  onClick={() => setWeeks(opt.key)}
                >
                  <span className={s.onboardingRadioLabel}>{opt.label}</span>
                  <span className={s.onboardingRadioNote}>{opt.note}</span>
                  <span className={s.onboardingRadioCheck}>{weeks === opt.key ? "●" : "○"}</span>
                </button>
              ))}
            </div>
            {weeks === "0-2" && (
              <div className={s.obEarlyWarning}>
                <span className={s.obEarlyWarningIcon}>⚠️</span>
                <div>
                  <strong>You are in very early recovery.</strong> The programme works at this stage, but we
                  start you on the gentle Week 1 plan only — no workout intensity until Week 2.
                  Your healing comes first.
                </div>
              </div>
            )}
            <div className={s.onboardingBtnRow}>
              <button className={s.onboardingBtnSecondary} onClick={() => go(1)}>← Back</button>
              <button className={s.onboardingBtn} onClick={() => go(weeks === "other" ? 4 : 3)} disabled={!weeks}>Continue →</button>
            </div>
          </div>
        )}

        {/* ── STEP 3: Breastfeeding ── */}
        {step === 3 && (
          <div key="s3" className={`${s.onboardingStep} ${animClass}`}>
            <div className={s.onboardingStepEmoji}>🍼</div>
            <h2 className={s.onboardingTitle}>Are you currently breastfeeding?</h2>
            <p className={s.onboardingSub}>
              Breastfeeding affects your hormones and changes which food timings and water targets work best for you.
            </p>
            <div className={s.onboardingRadioGroup}>
              <button
                className={`${s.onboardingRadioItem} ${breastfeeding === "yes" ? s.onboardingRadioItemActive : ""}`}
                onClick={() => setBreastfeeding("yes")}
              >
                <span className={s.onboardingRadioLabel}>Yes — I am breastfeeding</span>
                <span className={s.onboardingRadioNote}>We increase your water targets and adjust meal sizing</span>
                <span className={s.onboardingRadioCheck}>{breastfeeding === "yes" ? "●" : "○"}</span>
              </button>
              <button
                className={`${s.onboardingRadioItem} ${breastfeeding === "no" ? s.onboardingRadioItemActive : ""}`}
                onClick={() => setBreastfeeding("no")}
              >
                <span className={s.onboardingRadioLabel}>No — I have stopped or not started</span>
                <span className={s.onboardingRadioNote}>Standard hormone reset timings apply</span>
                <span className={s.onboardingRadioCheck}>{breastfeeding === "no" ? "●" : "○"}</span>
              </button>
            </div>
            <div className={s.onboardingBtnRow}>
              <button className={s.onboardingBtnSecondary} onClick={() => go(2)}>← Back</button>
              <button className={s.onboardingBtn} onClick={() => go(4)} disabled={!breastfeeding}>Continue →</button>
            </div>
          </div>
        )}

        {/* ── STEP 4: Struggles ── */}
        {step === 4 && (
          <div key="s4" className={`${s.onboardingStep} ${animClass}`}>
            <div className={s.onboardingStepEmoji}>🎯</div>
            <h2 className={s.onboardingTitle}>What is your biggest challenge right now?</h2>
            <p className={s.onboardingSub}>Pick up to 3. We personalise your plan around your answers.</p>
            <div className={s.onboardingCheckGroup}>
              {STRUGGLE_OPTIONS.map((opt) => {
                const selected = struggles.includes(opt.key);
                const maxed = !selected && struggles.length >= 3;
                return (
                  <button
                    key={opt.key}
                    className={`${s.onboardingCheckItem} ${selected ? s.onboardingCheckItemActive : ""} ${maxed ? s.onboardingCheckItemDisabled : ""}`}
                    onClick={() => !maxed && toggleStruggle(opt.key)}
                    disabled={maxed}
                  >
                    <span className={s.onboardingCheckEmoji}>{opt.emoji}</span>
                    <span className={s.onboardingCheckLabel}>{opt.label}</span>
                    <span className={s.onboardingCheckbox}>{selected ? "✓" : ""}</span>
                  </button>
                );
              })}
            </div>
            {struggles.length === 3 && (
              <p className={s.onboardingCheckMeta}>Maximum 3 selected — deselect one to change</p>
            )}
            <div className={s.onboardingBtnRow}>
              <button className={s.onboardingBtnSecondary} onClick={() => go(3)}>← Back</button>
              <button className={s.onboardingBtn} onClick={() => go(5)}>Continue →</button>
            </div>
          </div>
        )}

        {/* ── STEP 5: Goal ── */}
        {step === 5 && (
          <div key="s5" className={`${s.onboardingStep} ${animClass}`}>
            <div className={s.onboardingStepEmoji}>🌟</div>
            <h2 className={s.onboardingTitle}>What do you most want to feel after 21 days?</h2>
            <p className={s.onboardingSub}>This becomes your personal target for the programme.</p>
            <div className={s.obGoalGrid}>
              {GOAL_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  className={`${s.obGoalCard} ${goal === opt.key ? s.obGoalCardActive : ""}`}
                  onClick={() => setGoal(opt.key)}
                >
                  {goal === opt.key && <span className={s.obGoalTick}>✓</span>}
                  <span className={s.obGoalEmoji}>{opt.emoji}</span>
                  <span className={s.obGoalLabel}>{opt.label}</span>
                  <span className={s.obGoalNote}>{opt.note}</span>
                </button>
              ))}
            </div>
            <div className={s.onboardingBtnRow}>
              <button className={s.onboardingBtnSecondary} onClick={() => go(4)}>← Back</button>
              <button className={s.onboardingBtn} onClick={() => go(6)} disabled={!goal}>
                See My Plan →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 6: Chioma responds + Plan + Confetti ── */}
        {step === 6 && (
          <div key="s6" className={`${s.onboardingStep} ${animClass}`}>
            <Confetti />
            <div className={s.onboardingRevealHeader}>
              <div className={s.onboardingRevealCheck}>✓</div>
              <h2 className={s.onboardingTitle} style={{ marginTop: 14 }}>
                Your plan is ready, {name || "Mama"}!
              </h2>
            </div>

            {/* Chioma's personalised response */}
            <div className={s.obChiomaReveal}>
              <span className={s.obChiomaRevealAvatar}>C</span>
              <div className={s.obChiomaRevealBody}>
                <span className={s.obChiomaRevealFrom}>Chioma says</span>
                {chiomaLines.map((line, i) => (
                  <p key={i} className={s.obChiomaRevealText}>{line}</p>
                ))}
              </div>
            </div>

            <p className={s.obRevealSubheading}>Your 3 starting tools</p>
            <div className={s.onboardingRevealRecs}>
              {recs.map((rec, i) => (
                <div key={rec.href} className={s.onboardingRevealRec}>
                  <span className={s.onboardingRevealNum}>{i + 1}</span>
                  <span className={s.onboardingRevealEmoji}>{rec.emoji}</span>
                  <div className={s.onboardingRevealInfo}>
                    <span className={s.onboardingRevealTool}>{rec.tool}</span>
                    <span className={s.onboardingRevealReason}>{rec.reason}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className={s.onboardingBtn} onClick={finish} style={{ marginTop: 20 }}>
              Open My Dashboard →
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

// ── ProfilePlanCard (shown on dashboard) ─────────────────────
type ProfileData = {
  struggles: Struggle[];
  weeksKey: string;
  bf: string;
  goal: string;
};

const WEEK_LABEL: Record<string, string> = {
  "0-2":  "< 2 weeks postpartum",
  "2-6":  "2–6 weeks postpartum",
  "6-12": "6 wks–3 months postpartum",
  "12+":  "3+ months postpartum",
};

export function ProfilePlanCard() {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("veluc_struggles");
    const struggles: Struggle[] = raw ? JSON.parse(raw) : ["belly"];
    const weeksKey = localStorage.getItem("veluc_postpartum_weeks") ?? "";
    const bf = localStorage.getItem("veluc_breastfeeding") ?? "";
    const goal = localStorage.getItem("veluc_goal") ?? "";
    setProfile({ struggles, weeksKey, bf, goal });
  }, []);

  if (!profile) return null;

  const recs = getRecommendations(profile.struggles);
  const goalObj = GOAL_OPTIONS.find((g) => g.key === profile.goal);

  return (
    <div className={s.planCard}>
      <div className={s.planCardHeader}>
        <div className={s.planCardTitleRow}>
          <span className={s.planCardTitle}>📋 Your Personalised Starting Plan</span>
          <Link href="/tools/profile" className={s.planCardEditLink}>Edit profile →</Link>
        </div>
        <div className={s.planProfileChips}>
          {profile.weeksKey && <span className={s.planChip}>{WEEK_LABEL[profile.weeksKey]}</span>}
          {profile.bf && (
            <span className={s.planChip}>{profile.bf === "yes" ? "🤱 Breastfeeding" : "Not breastfeeding"}</span>
          )}
          {goalObj && <span className={s.planChip}>{goalObj.emoji} {goalObj.label}</span>}
        </div>
      </div>
      <div className={s.planCardRecs}>
        {recs.map((rec, i) => (
          <Link key={rec.href} href={rec.href} className={s.planCardRec}>
            <span className={s.planCardRecNum}>{i + 1}</span>
            <span className={s.planCardRecEmoji}>{rec.emoji}</span>
            <div className={s.planCardRecInfo}>
              <span className={s.planCardRecTool}>{rec.tool}</span>
              <span className={s.planCardRecReason}>{rec.reason}</span>
            </div>
            <span className={s.planCardRecArrow}>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
