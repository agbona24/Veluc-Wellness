import s from "../tools.module.css";

const morningActivation = [
  {
    name: "Pelvic Floor Squeeze",
    meta: "1 minute · Lying down",
    desc: "Lie on your back, knees bent. Squeeze the muscles you use to stop urination. Hold 5 seconds, release 5 seconds. Repeat. This heals the pelvic floor first — do not skip this step.",
  },
  {
    name: "Gentle Bridge Hold",
    meta: "1 minute · Lying down",
    desc: "Lie on your back, knees bent, feet flat. Slowly raise your hips until your body forms a straight line from shoulders to knees. Hold 3 seconds, lower slowly. Builds glute and core strength without straining the abdomen.",
  },
  {
    name: "Dead Bug Breathing",
    meta: "2 minutes · Lying down",
    desc: "Lie on your back, arms pointing to ceiling, knees bent at 90°. Slowly lower your right arm behind your head while extending your left leg straight. Return. Alternate sides. Breathe out on the extension. This teaches your core to activate with breath — key for postpartum recovery.",
  },
  {
    name: "Standing Side Bend",
    meta: "1 minute · Standing",
    desc: "Stand tall, feet hip-width apart. Slide your right hand down your right leg toward your knee. Feel the stretch in your left waist. Return and alternate. Gently activates the oblique muscles around the belly.",
  },
  {
    name: "March in Place",
    meta: "2 minutes · Standing",
    desc: "March in place, lifting your knees to hip height, swinging your arms naturally. Keep your core lightly engaged. Increases heart rate gently, activates blood flow without impact on healing tissue.",
  },
  {
    name: "Cat-Cow Stretch",
    meta: "2 minutes · On all fours",
    desc: "Start on hands and knees. Inhale and drop your belly toward the floor (Cow). Exhale and round your spine toward the ceiling (Cat). Move slowly and breathe deeply. Reduces lower back tension and stimulates gut motility — directly reduces morning bloat.",
  },
  {
    name: "Arm Circles + Shoulder Rolls",
    meta: "1 minute · Standing",
    desc: "Roll your shoulders backward 5 times, then forward 5 times. Then make large circles with your arms. Releases upper body tension from carrying and feeding your baby — most new mothers carry enormous tension here.",
  },
];

const weeklyPlan = [
  {
    week: "Week 1 — Foundation (Days 1–7)",
    note: "Your body is still healing. Do not push. The goal is gentle activation, not workout.",
    exercises: [
      { name: "Morning Activation Routine", meta: "Every morning · 10 minutes · On empty stomach", desc: "Do all 7 exercises above in sequence. This is your only workout in Week 1. Do not add anything else." },
      { name: "Walk", meta: "Daily · 10–15 minutes · Any time of day", desc: "A gentle walk is the most underrated postpartum exercise. It reduces cortisol, improves gut motility, and burns fat without stressing healing tissue." },
    ],
  },
  {
    week: "Week 2 — Build Strength (Days 8–14)",
    note: "If your pelvic floor feels stable and you have no abdominal doming during bridges, add these.",
    exercises: [
      { name: "Wall Push-Up", meta: "3 sets × 10 reps · After morning activation", desc: "Stand facing a wall, hands at shoulder height. Lower your chest to the wall and push back. Keeps arms and chest strong without abdominal strain." },
      { name: "Sumo Squat", meta: "3 sets × 12 reps · Feet wide, toes out", desc: "Stand with feet wider than shoulder-width, toes angled out. Lower slowly until thighs are parallel to the floor. Rise. Builds glutes and inner thighs without belly pressure." },
      { name: "Extended Walk", meta: "20–25 minutes daily", desc: "Increase your daily walk. Add a slight incline (hill or stairs) if comfortable. This is still the most powerful fat-burning tool at this stage." },
    ],
  },
  {
    week: "Week 3 — Intensity (Days 15–21)",
    note: "You have built 2 weeks of foundation. Now add light intensity. Stop immediately if you feel pelvic heaviness.",
    exercises: [
      { name: "Full Bridge with March", meta: "3 sets × 8 reps each side", desc: "From the bridge position, lift one foot 2 inches off the floor. Hold 3 seconds, lower, repeat on other side. Advanced core and glute activation." },
      { name: "Modified Plank Hold", meta: "3 sets × 20-second holds", desc: "Start on hands and knees. Walk your hands forward until your body is in a straight line from head to knees. Hold. This is a knee plank — not a full plank. No abdominal doming allowed." },
      { name: "Standing Hip Hinge", meta: "3 sets × 12 reps", desc: "Stand tall. Push your hips backward while keeping your back flat and chest up. Feel the stretch in your hamstrings. Return. Builds posterior chain strength critical for posture and back pain relief." },
      { name: "30-Minute Walk", meta: "Daily · Add pace or incline", desc: "A brisk 30-minute walk at this stage burns significant fat. Your metabolism is now reset from 2 weeks of proper eating — walking amplifies the effect." },
    ],
  },
];

export default function WorkoutPage() {
  return (
    <div className={s.page}>
      <div className={s.infoPageHeader}>
        <span className={s.infoPageHeaderEyebrow}>Bonus #2 + #10</span>
        <span className={s.infoPageHeaderTitle}>Busy Mum Workout Guide 🏃</span>
        <p className={s.infoPageHeaderSub}>
          A safe, progressive 21-day movement plan designed specifically for postpartum bodies.
          No gym. No equipment. 10–30 minutes a day.
        </p>
      </div>

      <div className={s.chiomaNoteCard} style={{ marginBottom: 24 }}>
        <div className={s.chiomaAvatar}>C</div>
        <div className={s.chiomaNoteBody}>
          <span className={s.chiomaNoteFrom}>Important — read before starting</span>
          <p className={s.chiomaNoteText}>
            Do not attempt intense exercise in the first 21 days postpartum. The goal of movement in this programme is hormone regulation and gentle activation — not calorie burning.
            The eating method does the fat loss. The movement accelerates it and heals your body. Stop and rest if you feel pain, heaviness in your pelvis, or leaking. — Chioma ❤️
          </p>
        </div>
      </div>

      <div className={s.workoutSection}>
        <p className={s.workoutSectionTitle}>🌅 Daily Morning Activation — 10 Minutes (All 21 Days)</p>
        <div className={s.exerciseGrid}>
          {morningActivation.map((ex, i) => (
            <div key={i} className={s.exerciseCard}>
              <div className={s.exerciseNum}>{i + 1}</div>
              <div className={s.exerciseInfo}>
                <p className={s.exerciseName}>{ex.name}</p>
                <span className={s.exerciseMeta}>{ex.meta}</span>
                <p className={s.exerciseDesc}>{ex.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {weeklyPlan.map((week) => (
        <div key={week.week} className={s.workoutSection}>
          <p className={s.workoutSectionTitle}>{week.week}</p>
          <div className={s.chiomaNoteCard} style={{ marginBottom: 14 }}>
            <div className={s.chiomaAvatar}>!</div>
            <div className={s.chiomaNoteBody}>
              <p className={s.chiomaNoteText}>{week.note}</p>
            </div>
          </div>
          <div className={s.exerciseGrid}>
            {week.exercises.map((ex, i) => (
              <div key={i} className={s.exerciseCard}>
                <div className={s.exerciseNum}>{i + 1}</div>
                <div className={s.exerciseInfo}>
                  <p className={s.exerciseName}>{ex.name}</p>
                  <span className={s.exerciseMeta}>{ex.meta}</span>
                  <p className={s.exerciseDesc}>{ex.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
