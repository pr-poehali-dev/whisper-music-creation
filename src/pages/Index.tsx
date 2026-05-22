import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

/* ─── Bubbles background ─── */
function Bubbles() {
  const bubbles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: 18 + Math.random() * 52,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 10 + Math.random() * 14,
    drift: Math.random() * 8 - 4,
  }))

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-0 bubble animate-float-up"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            transform: `translateX(${b.drift}px)`,
          }}
        />
      ))}
    </div>
  )
}

/* ─── Floating berry/leaf decorations ─── */
type DecorItem = { emoji: string; top: string; left?: string; right?: string; delay: number; duration: number }

function FloatingDecor() {
  const items: DecorItem[] = [
    { emoji: "🫐", top: "12%", left: "7%", delay: 0, duration: 4 },
    { emoji: "🌿", top: "20%", right: "6%", delay: 1.2, duration: 5 },
    { emoji: "🫐", top: "55%", left: "4%", delay: 2, duration: 4.5 },
    { emoji: "🌱", top: "70%", right: "8%", delay: 0.5, duration: 3.8 },
    { emoji: "🫐", top: "38%", right: "3%", delay: 1.8, duration: 6 },
    { emoji: "🌿", top: "82%", left: "6%", delay: 0.8, duration: 4.2 },
    { emoji: "💧", top: "46%", left: "2%", delay: 3, duration: 3.5 },
    { emoji: "🫐", top: "90%", right: "5%", delay: 1.5, duration: 5 },
  ]

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl select-none opacity-30"
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{ y: [0, -14, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: item.duration, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  )
}

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 30px rgba(91,33,182,0.08)" : "none",
      }}
    >
      <span className="font-black text-xl tracking-tight" style={{ fontFamily: "Unbounded, sans-serif", color: "#1E1B4B" }}>
        HA<span style={{ color: "#10B981" }}>VE</span>N
      </span>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
        {["Зоны", "Услуги", "Кафе", "Beauty"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-[#5B21B6] transition-colors">{l}</a>
        ))}
      </div>
      <button
        className="px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
        style={{ background: "linear-gradient(135deg, #5B21B6, #3730A3)" }}
      >
        Записаться
      </button>
    </motion.nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,33,182,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(16,185,129,0.06) 0%, transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-widest"
        style={{ background: "rgba(91,33,182,0.08)", color: "#5B21B6", border: "1px solid rgba(91,33,182,0.15)" }}
      >
        <span>🫐</span> Велнес-комплекс нового поколения
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="text-5xl md:text-8xl font-black leading-none tracking-tight mb-6"
        style={{ fontFamily: "Unbounded, sans-serif" }}
      >
        <span style={{ color: "#1E1B4B" }}>ТВОЁ</span>
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #5B21B6 0%, #3730A3 40%, #10B981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ЛУЧШЕЕ
        </span>
        <br />
        <span style={{ color: "#1E1B4B" }}>МЕСТО</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mb-10"
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}
      >
        Зашёл после работы — сбросил всё лишнее.<br />
        Йога, баня, спа, кафе, клуб — всё в одном.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <button
          className="px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:scale-105 hover:shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #5B21B6, #3730A3)",
            boxShadow: "0 8px 32px rgba(91,33,182,0.25)",
          }}
        >
          Хочу попробовать ✦
        </button>
        <button
          className="px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105"
          style={{ background: "rgba(16,185,129,0.1)", color: "#059669", border: "1.5px solid rgba(16,185,129,0.3)" }}
        >
          Прогулка по комплексу 🌿
        </button>
      </motion.div>

      {/* Big berry orb */}
      <motion.div
        className="absolute -right-20 top-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 35% 35%, rgba(124,58,237,0.18), rgba(55,48,163,0.08) 60%, transparent 80%)",
          filter: "blur(1px)",
        }}
        animate={{ scale: [1, 1.06, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-16 bottom-1/4 w-60 h-60 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 35% 35%, rgba(16,185,129,0.14), transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-gray-400">Листай вниз</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <Icon name="ChevronDown" size={18} className="text-gray-300" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ─── Story Section ─── */
const STORY_STEPS = [
  {
    icon: "🚿",
    color: "#0369A1",
    bg: "rgba(3,105,161,0.07)",
    title: "Сбрасываем усталость",
    text: "После рабочего дня — время для себя. Первым делом — сбросить усталость вместе с одеждой и окунуться в освежающий душ.",
  },
  {
    icon: "🔥",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.07)",
    title: "Заряд энергии",
    text: "Динамичное хот‑занятие, чтобы почувствовать прилив энергии. Затем — баня: жар парилки, а следом — бодрящая купель.",
  },
  {
    icon: "🌙",
    color: "#3730A3",
    bg: "rgba(55,48,163,0.07)",
    title: "Тишина и покой",
    text: "Зона медитации: устроиться на мягких качелях, закрыть глаза и позволить себе немного поспать. Тишина, покой и полное расслабление.",
  },
  {
    icon: "🥗",
    color: "#059669",
    bg: "rgba(5,150,105,0.07)",
    title: "Лёгкий перекус",
    text: "Лёгкий перекус в уютном кафе — и пора уделить внимание деталям. Маникюр и педикюр с нежным массажем стоп и молочной ванночкой.",
  },
  {
    icon: "✂️",
    color: "#BE185D",
    bg: "rgba(190,24,93,0.07)",
    title: "Образ становится совершеннее",
    text: "Аккуратная стрижка кончиков волос, освежающий пилинг и стильная укладка. Рядом — магазинчик с БАДами, косметикой и цветами.",
  },
  {
    icon: "🍹",
    color: "#5B21B6",
    bg: "rgba(91,33,182,0.07)",
    title: "Вечер продолжается",
    text: "Свидание отменилось — не беда. Лёгкий макияж и — в кафе, которое к вечеру превращается в уютный клуб с ПП‑напитками.",
  },
  {
    icon: "⛺",
    color: "#10B981",
    bg: "rgba(16,185,129,0.07)",
    title: "Остаться до утра",
    text: "Не хочется уходить? В медитативной зоне ставят палатки, зажигают мягкие светильники. Вайбовая атмосфера — и просыпаешься отдохнувшим.",
  },
]

function StorySection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(16,185,129,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] mb-3 block">Один вечер в HAVEN</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1E1B4B] leading-none" style={{ fontFamily: "Unbounded, sans-serif" }}>
            После рабочего дня —<br />
            <span style={{ background: "linear-gradient(135deg, #5B21B6, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              время для себя
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STORY_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative rounded-3xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1.5px solid rgba(0,0,0,0.05)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
              }}
              whileHover={{ boxShadow: `0 16px 48px ${step.bg}` }}
            >
              {/* colored accent top bar */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0"
                style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
              />

              {/* step number */}
              <span
                className="absolute top-4 right-5 text-xs font-black opacity-20"
                style={{ fontFamily: "Unbounded, sans-serif", color: step.color, fontSize: "2.5rem", lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: step.bg }}
              >
                {step.icon}
              </div>

              <h3
                className="text-base font-black mb-2 leading-tight"
                style={{ fontFamily: "Unbounded, sans-serif", color: "#1E1B4B", fontSize: "0.9rem" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-block px-8 py-5 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(91,33,182,0.06), rgba(16,185,129,0.06))",
              border: "1.5px solid rgba(91,33,182,0.1)",
            }}
          >
            <p className="text-base md:text-lg font-medium text-[#1E1B4B] leading-relaxed max-w-2xl">
              🫐 Всё что хочешь — и если после нет желания идти по ночным улочкам домой,{" "}
              <span className="font-black" style={{ color: "#5B21B6" }}>можно остаться здесь.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Zones ─── */
const ZONES = [
  {
    icon: "🧘",
    color: "#5B21B6",
    bg: "rgba(91,33,182,0.06)",
    border: "rgba(91,33,182,0.12)",
    title: "Йога & Пилатес",
    sub: "Hot · Aerial · Reformer",
    desc: "38° тепла, парящий воздух, полный релакс мышц. Hot yoga, hot cycle, реформер-пилатес.",
    tag: "Движение",
  },
  {
    icon: "🔥",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.05)",
    border: "rgba(220,38,38,0.1)",
    title: "Баня & Купель",
    sub: "Пар · Лёд · Контраст",
    desc: "Русская баня, берёзовый веник, контрастная купель. Перезагрузка за 40 минут.",
    tag: "Восстановление",
  },
  {
    icon: "🌙",
    color: "#3730A3",
    bg: "rgba(55,48,163,0.06)",
    border: "rgba(55,48,163,0.12)",
    title: "Медитация",
    sub: "Качели · Гамаки · Тишина",
    desc: "Парящие качели, мягкий свет, звуки природы. Ночью — уютные палатки для ночёвки.",
    tag: "Тишина",
  },
  {
    icon: "💅",
    color: "#BE185D",
    bg: "rgba(190,24,93,0.05)",
    border: "rgba(190,24,93,0.1)",
    title: "Beauty & СПА",
    sub: "Ногти · Волосы · Кожа",
    desc: "Маникюр, педикюр, молочная ванночка, укладка, макияж, пилинг — всё за один визит.",
    tag: "Красота",
  },
  {
    icon: "🍹",
    color: "#059669",
    bg: "rgba(5,150,105,0.06)",
    border: "rgba(5,150,105,0.12)",
    title: "Кафе → Клуб",
    sub: "День · Ночь · ПП",
    desc: "Суперфуд-боулы и смузи днём. Ночью — приглушённый свет, музыка, ПП-коктейли.",
    tag: "Вкус",
  },
  {
    icon: "🌿",
    color: "#0369A1",
    bg: "rgba(3,105,161,0.05)",
    border: "rgba(3,105,161,0.1)",
    title: "Бутик",
    sub: "БАДы · Косметика · Цветы",
    desc: "Органические БАДы, натуральная косметика, одежда для тренировок и живые цветы.",
    tag: "Магазин",
  },
]

function ZoneCard({ zone, index }: { zone: typeof ZONES[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-3xl p-6 cursor-pointer transition-all duration-300 overflow-hidden"
      style={{
        background: hovered ? zone.bg : "rgba(255,255,255,0.8)",
        border: `1.5px solid ${hovered ? zone.border : "rgba(0,0,0,0.06)"}`,
        boxShadow: hovered
          ? `0 20px 60px ${zone.bg}, 0 2px 8px rgba(0,0,0,0.04)`
          : "0 2px 16px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{zone.icon}</span>
        <span
          className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
          style={{ background: zone.bg, color: zone.color, border: `1px solid ${zone.border}` }}
        >
          {zone.tag}
        </span>
      </div>
      <h3 className="text-lg font-black mb-1" style={{ color: "#1E1B4B", fontFamily: "Unbounded, sans-serif", fontSize: "1rem" }}>
        {zone.title}
      </h3>
      <p className="text-xs font-semibold mb-3" style={{ color: zone.color }}>{zone.sub}</p>
      <p className="text-sm leading-relaxed text-gray-500">{zone.desc}</p>

      <motion.div
        className="absolute bottom-4 right-4"
        animate={{ x: hovered ? 0 : 4, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: zone.color }}
        >
          <Icon name="ArrowRight" size={14} className="text-white" />
        </div>
      </motion.div>
    </motion.div>
  )
}

function Zones() {
  return (
    <section id="зоны" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B21B6] mb-3 block">Пространство</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1E1B4B] mb-4" style={{ fontFamily: "Unbounded, sans-serif", lineHeight: 1.1 }}>
            Всё, что нужно<br />
            <span
              style={{
                background: "linear-gradient(135deg, #5B21B6, #10B981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              в одном месте
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Зашёл — сбросил всё. Вышел — другой человек.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ZONES.map((z, i) => <ZoneCard key={z.title} zone={z} index={i} />)}
        </div>
      </div>
    </section>
  )
}

/* ─── Day flow ─── */
const FLOW = [
  { time: "17:00", icon: "🚿", label: "Душ & переодевание", color: "#5B21B6" },
  { time: "17:30", icon: "🔥", label: "Hot Yoga / Пилатес", color: "#DC2626" },
  { time: "18:30", icon: "🪣", label: "Баня → Купель", color: "#0369A1" },
  { time: "19:15", icon: "🌙", label: "Дрёма на качелях", color: "#3730A3" },
  { time: "20:00", icon: "🥗", label: "Кафе · Боул + Смузи", color: "#059669" },
  { time: "20:30", icon: "💅", label: "Маникюр · Укладка", color: "#BE185D" },
  { time: "21:30", icon: "🛍️", label: "Бутик · БАДы & Цветы", color: "#D97706" },
  { time: "22:00", icon: "🍹", label: "Кафе → Клуб", color: "#059669" },
  { time: "00:00", icon: "⛺", label: "Остаться · Палатка в медитации", color: "#3730A3" },
]

function DayFlow() {
  return (
    <section className="py-24 px-6" style={{ background: "rgba(91,33,182,0.02)" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] mb-3 block">Твой вечер</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B]" style={{ fontFamily: "Unbounded, sans-serif", lineHeight: 1.1 }}>
            Идеальный день<br />
            <span style={{ background: "linear-gradient(135deg, #5B21B6, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              в HAVEN
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[52px] top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(91,33,182,0.2) 5%, rgba(91,33,182,0.2) 95%, transparent)" }} />

          <div className="flex flex-col gap-3">
            {FLOW.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-center gap-4 group"
              >
                <span className="w-16 text-right text-xs font-bold shrink-0" style={{ color: "#9CA3AF", fontVariantNumeric: "tabular-nums" }}>
                  {step.time}
                </span>

                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 relative z-10 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${step.color}15`, border: `2px solid ${step.color}30` }}
                >
                  {step.icon}
                </div>

                <div
                  className="flex-1 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 group-hover:shadow-md"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    border: "1.5px solid rgba(0,0,0,0.05)",
                    color: "#1E1B4B",
                  }}
                >
                  {step.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Mirror CTA banner ─── */
function MirrorBanner() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, #1E1B4B 0%, #3730A3 50%, #5B21B6 100%)",
          }}
        >
          {/* decorative bubbles inside banner */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 40 + i * 20,
                height: 40 + i * 20,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                top: `${10 + i * 12}%`,
                left: `${5 + i * 16}%`,
                filter: "blur(1px)",
              }}
            />
          ))}

          <div className="relative z-10">
            <span className="text-5xl mb-4 block">✨</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "Unbounded, sans-serif", lineHeight: 1.15 }}>
              Умное зеркало
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-lg mx-auto mb-8">
              Загрузи своё фото и подбери причёску, образ и стиль прямо в зеркале комплекса — наши мастера воплотят это вживую.
            </p>
            <button
              className="px-8 py-4 rounded-full font-black text-base transition-all hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #6EE7B7, #10B981)",
                color: "#064E3B",
                boxShadow: "0 0 40px rgba(16,185,129,0.3)",
              }}
            >
              Попробовать зеркало 🪞
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Stats row ─── */
function Stats() {
  const stats = [
    { num: "9", label: "зон в одном\nпространстве", icon: "🗺️" },
    { num: "24/7", label: "режим работы\nбез выходных", icon: "🕐" },
    { num: "∞", label: "комбо услуг\nза один визит", icon: "🫐" },
  ]
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8 rounded-3xl card-glass"
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <div className="text-5xl font-black mb-2" style={{ fontFamily: "Unbounded, sans-serif", color: "#1E1B4B" }}>{s.num}</div>
            <div className="text-sm text-gray-400 leading-snug whitespace-pre-line">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ─── Footer CTA ─── */
function FooterCTA() {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(91,33,182,0.06) 0%, transparent 70%)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-6xl mb-6 block">🫐</span>
        <h2 className="text-4xl md:text-6xl font-black text-[#1E1B4B] mb-6" style={{ fontFamily: "Unbounded, sans-serif", lineHeight: 1.1 }}>
          Готова к лучшей<br />
          <span style={{ background: "linear-gradient(135deg, #5B21B6, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            версии себя?
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
          Первое посещение — бесплатно.<br />Просто приходи.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            className="px-10 py-5 rounded-full text-lg font-black text-white transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #5B21B6, #3730A3)",
              boxShadow: "0 12px 40px rgba(91,33,182,0.3)",
            }}
          >
            Первый визит бесплатно ✦
          </button>
          <button
            className="px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105"
            style={{ background: "rgba(16,185,129,0.08)", color: "#059669", border: "1.5px solid rgba(16,185,129,0.25)" }}
          >
            📍 Как добраться
          </button>
        </div>
      </motion.div>

      <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col items-center gap-2">
        <span className="font-black text-xl tracking-tight" style={{ fontFamily: "Unbounded, sans-serif", color: "#1E1B4B" }}>
          HA<span style={{ color: "#10B981" }}>VE</span>N
        </span>
        <span className="text-xs text-gray-400">Wellness · Spa · Club · Beauty · Boutique</span>
      </div>
    </section>
  )
}

/* ─── Main ─── */
export default function Index() {
  return (
    <div className="relative bg-white min-h-screen">
      <Bubbles />
      <FloatingDecor />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <StorySection />
        <Stats />
        <Zones />
        <DayFlow />
        <MirrorBanner />
        <FooterCTA />
      </main>
    </div>
  )
}