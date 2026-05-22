import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

/* ─── Bubbles ─── */
function Bubbles() {
  const bubbles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    size: 14 + Math.random() * 44,
    left: Math.random() * 100,
    delay: Math.random() * 14,
    duration: 12 + Math.random() * 12,
  }))
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-0 bubble animate-float-up"
          style={{ width: b.size, height: b.size, left: `${b.left}%`, animationDelay: `${b.delay}s`, animationDuration: `${b.duration}s` }}
        />
      ))}
    </div>
  )
}

/* ─── Floating decor ─── */
type DecorItem = { emoji: string; top: string; left?: string; right?: string; delay: number; duration: number }
function FloatingDecor() {
  const items: DecorItem[] = [
    { emoji: "🫐", top: "10%", left: "5%", delay: 0, duration: 4 },
    { emoji: "🌿", top: "18%", right: "5%", delay: 1.2, duration: 5 },
    { emoji: "🫐", top: "52%", left: "3%", delay: 2, duration: 4.5 },
    { emoji: "🌱", top: "68%", right: "7%", delay: 0.5, duration: 3.8 },
    { emoji: "💧", top: "80%", left: "6%", delay: 3, duration: 3.5 },
    { emoji: "🫐", top: "88%", right: "4%", delay: 1.5, duration: 5 },
  ]
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-xl select-none opacity-25"
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
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
  const navigate = useNavigate()
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
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 30px rgba(91,33,182,0.07)" : "none",
      }}
    >
      <div>
        <span className="font-black text-lg tracking-tight leading-none block" style={{ fontFamily: "Unbounded, sans-serif", color: "#1E1B4B" }}>
          s <span style={{ color: "#10B981" }}>bar</span>
        </span>
        <span className="text-[9px] tracking-widest uppercase" style={{ color: "#9CA3AF" }}>special secret success</span>
      </div>

      <button
        onClick={() => navigate("/subscribe")}
        className="px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
        style={{ background: "linear-gradient(135deg, #5B21B6, #3730A3)" }}
      >
        Подписка
      </button>
    </motion.nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,33,182,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(16,185,129,0.05) 0%, transparent 60%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-widest"
        style={{ background: "rgba(91,33,182,0.07)", color: "#5B21B6", border: "1px solid rgba(91,33,182,0.14)" }}
      >
        <span>🫐</span> Велнес-пространство нового поколения
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="font-black leading-none tracking-tight mb-4"
        style={{ fontFamily: "Unbounded, sans-serif", fontSize: "clamp(2.8rem, 9vw, 7rem)" }}
      >
        <span style={{ color: "#1E1B4B" }}>s </span>
        <span style={{ background: "linear-gradient(135deg, #5B21B6 0%, #3730A3 50%, #10B981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          bar
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-sm font-bold uppercase tracking-[0.3em] mb-6"
        style={{ color: "#9CA3AF" }}
      >
        special · secret · success
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed mb-10"
        style={{ fontWeight: 300 }}
      ></motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <button
          onClick={() => navigate("/subscribe")}
          className="px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:scale-105 hover:shadow-2xl"
          style={{ background: "linear-gradient(135deg, #5B21B6, #3730A3)", boxShadow: "0 8px 32px rgba(91,33,182,0.22)" }}
        >
          Оформить подписку ✦
        </button>
        <a
          href="#story"
          className="px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105 text-center"
          style={{ background: "rgba(16,185,129,0.09)", color: "#059669", border: "1.5px solid rgba(16,185,129,0.28)" }}
        >
          Узнать больше 🌿
        </a>
      </motion.div>

      {/* Orbs */}
      <motion.div
        className="absolute -right-24 top-1/3 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 35% 35%, rgba(124,58,237,0.14), transparent 75%)" }}
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-16 bottom-1/4 w-52 h-52 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 35% 35%, rgba(16,185,129,0.12), transparent 70%)" }}
        animate={{ scale: [1, 1.09, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-gray-300">Листай вниз</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <Icon name="ChevronDown" size={16} className="text-gray-300" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ─── Story ─── */
const STORY_STEPS = [
  { icon: "🚿", color: "#0369A1", bg: "rgba(3,105,161,0.07)", title: "Сбрасываем усталость", text: "Первым делом — сбросить усталость вместе с одеждой и окунуться в освежающий душ." },
  { icon: "🔥", color: "#DC2626", bg: "rgba(220,38,38,0.07)", title: "Заряд энергии", text: "Динамичное хот‑занятие. Затем — баня: жар парилки, а следом — бодрящая купель." },
  { icon: "🌙", color: "#3730A3", bg: "rgba(55,48,163,0.07)", title: "Тишина и покой", text: "Мягкие качели, звуки природы, полное расслабление. Позволь себе немного поспать." },
  { icon: "🥗", color: "#059669", bg: "rgba(5,150,105,0.07)", title: "Лёгкий перекус", text: "Уютное кафе — боул, смузи, что-то приятное. Уделяем внимание деталям: маникюр, педикюр." },
  { icon: "✂️", color: "#BE185D", bg: "rgba(190,24,93,0.07)", title: "Образ совершенствуется", text: "Стрижка кончиков, пилинг, укладка. Рядом бутик с БАДами, косметикой и цветами." },
  { icon: "🍹", color: "#5B21B6", bg: "rgba(91,33,182,0.07)", title: "Вечер продолжается", text: "Свидание отменилось? Лёгкий макияж — и в кафе, которое к ночи становится клубом с ПП‑напитками." },
  { icon: "⛺", color: "#10B981", bg: "rgba(16,185,129,0.07)", title: "Остаться до утра", text: "Палатки, мягкие светильники, вайб. Не хочется уходить — не надо. Проснёшься здесь отдохнувшей." },
]

function StorySection() {
  return (
    <section id="story" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] mb-3 block">Один вечер в s bar</span>
          <h2 className="font-black text-[#1E1B4B] mb-4" style={{ fontFamily: "Unbounded, sans-serif", fontSize: "clamp(1.8rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
            После рабочего дня —<br />
            <span style={{ background: "linear-gradient(135deg, #5B21B6, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              время для себя
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STORY_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative rounded-3xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "rgba(255,255,255,0.85)", border: "1.5px solid rgba(0,0,0,0.05)" }}
              whileHover={{ boxShadow: `0 20px 50px ${step.bg}` }}
            >
              <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-500 group-hover:left-0 group-hover:right-0"
                style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }} />
              <span className="absolute top-3 right-4 font-black opacity-10 pointer-events-none select-none"
                style={{ fontFamily: "Unbounded, sans-serif", color: step.color, fontSize: "2.2rem", lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: step.bg }}>
                {step.icon}
              </div>
              <h3 className="text-sm font-black mb-2 leading-tight" style={{ fontFamily: "Unbounded, sans-serif", color: "#1E1B4B" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-8 py-5 rounded-3xl"
            style={{ background: "linear-gradient(135deg, rgba(91,33,182,0.05), rgba(16,185,129,0.05))", border: "1.5px solid rgba(91,33,182,0.09)" }}>
            <p className="text-base md:text-lg font-medium text-[#1E1B4B] leading-relaxed max-w-2xl">
              🫐 Всё что хочешь — и если не хочется идти домой по ночным улочкам,{" "}
              <span className="font-black" style={{ color: "#5B21B6" }}>можно остаться здесь.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Stats ─── */
function Stats() {
  const stats = [
    { num: "9+", label: "зон в одном\nпространстве", icon: "🗺️" },
    { num: "24/7", label: "открыто\nкаждый день", icon: "🕐" },
    { num: "1", label: "подписка —\nвсё включено", icon: "🫐" },
  ]
  return (
    <section className="py-16 px-6" style={{ background: "rgba(91,33,182,0.02)" }}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8 rounded-3xl card-glass"
          >
            <div className="text-3xl mb-3">{s.icon}</div>
            <div className="text-5xl font-black mb-2" style={{ fontFamily: "Unbounded, sans-serif", color: "#1E1B4B" }}>{s.num}</div>
            <div className="text-sm text-gray-400 leading-snug whitespace-pre-line">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ─── Subscribe CTA ─── */
function SubscribeCTA() {
  const navigate = useNavigate()
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(91,33,182,0.05) 0%, transparent 70%)" }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-5xl mb-6 block">🫐</span>
        <h2 className="font-black text-[#1E1B4B] mb-5" style={{ fontFamily: "Unbounded, sans-serif", fontSize: "clamp(1.8rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
          Готова к лучшей<br />
          <span style={{ background: "linear-gradient(135deg, #5B21B6, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            версии себя?
          </span>
        </h2>
        <p className="text-gray-400 text-base max-w-sm mx-auto mb-8">
          Одна подписка — доступ ко всему пространству.<br />Первый визит бесплатно.
        </p>
        <button
          onClick={() => navigate("/subscribe")}
          className="px-10 py-5 rounded-full text-lg font-black text-white transition-all hover:scale-105 hover:shadow-2xl"
          style={{ background: "linear-gradient(135deg, #5B21B6, #3730A3)", boxShadow: "0 12px 40px rgba(91,33,182,0.28)" }}
        >
          Смотреть подписку ✦
        </button>
      </motion.div>

      <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col items-center gap-1">
        <span className="font-black text-lg" style={{ fontFamily: "Unbounded, sans-serif", color: "#1E1B4B" }}>
          s <span style={{ color: "#10B981" }}>bar</span>
        </span>
        <span className="text-xs text-gray-400 uppercase tracking-widest">special · secret · success</span>
      </div>
    </section>
  )
}

/* ─── Page ─── */
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
        <SubscribeCTA />
      </main>
    </div>
  )
}