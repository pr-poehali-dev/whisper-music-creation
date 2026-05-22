import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

/* ─── Bubbles ─── */
function Bubbles() {
  const bubbles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: 12 + Math.random() * 36,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 10,
  }))
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {bubbles.map((b) => (
        <div key={b.id} className="absolute bottom-0 bubble animate-float-up"
          style={{ width: b.size, height: b.size, left: `${b.left}%`, animationDelay: `${b.delay}s`, animationDuration: `${b.duration}s` }} />
      ))}
    </div>
  )
}

const INCLUDES = [
  { icon: "🚿", label: "Душевые & раздевалки", desc: "Приходи прямо с работы" },
  { icon: "🧘", label: "Hot Yoga & Пилатес", desc: "Hot yoga, hot cycle, reformer" },
  { icon: "🏋️", label: "Тренировки", desc: "Групповые и индивидуальные" },
  { icon: "🔥", label: "Баня & Купель", desc: "Русская баня, контрастная купель" },
  { icon: "🌙", label: "Зона медитации", desc: "Качели, гамаки, тишина" },
  { icon: "⛺", label: "Ночёвка в пространстве", desc: "Палатки и светильники" },
  { icon: "🥗", label: "Кафе (завтраки & обеды)", desc: "ПП-боулы, смузи, суперфуд" },
  { icon: "🍹", label: "Клуб по вечерам", desc: "ПП-коктейли, музыка, атмосфера" },
  { icon: "💅", label: "Beauty & СПА*", desc: "Маникюр, педикюр, уход" },
  { icon: "✂️", label: "Волосы & Макияж*", desc: "Стрижка, пилинг, укладка" },
  { icon: "🛍️", label: "Скидка 15% в бутике", desc: "БАДы, косметика, одежда, цветы" },
  { icon: "🪞", label: "Умное зеркало", desc: "Подбор образа и стиля" },
]

const PLANS = [
  {
    id: "day",
    name: "День",
    price: "990",
    period: "разовый визит",
    color: "#059669",
    bg: "rgba(5,150,105,0.07)",
    border: "rgba(5,150,105,0.2)",
    highlight: false,
    features: ["Все зоны пространства", "Душ & раздевалка", "Баня & купель", "Зона медитации", "Кафе (скидка 10%)"],
  },
  {
    id: "month",
    name: "Месяц",
    price: "5 990",
    period: "в месяц",
    color: "#5B21B6",
    bg: "rgba(91,33,182,0.08)",
    border: "rgba(91,33,182,0.3)",
    highlight: true,
    features: ["Всё из «День»", "Безлимитные посещения", "Приоритетная запись", "Скидка 15% в бутике", "Ночёвка 2× в месяц", "Beauty-сессия 1× в месяц"],
  },
  {
    id: "year",
    name: "Год",
    price: "49 990",
    period: "в год · экономия 20%",
    color: "#3730A3",
    bg: "rgba(55,48,163,0.07)",
    border: "rgba(55,48,163,0.2)",
    highlight: false,
    features: ["Всё из «Месяц»", "Безлимитные ночёвки", "Beauty без ограничений", "Персональный куратор", "Гость бесплатно 1× в мес", "Закрытые мероприятия"],
  },
]

export default function Subscription() {
  const navigate = useNavigate()

  return (
    <div className="relative bg-white min-h-screen">
      <Bubbles />

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
        style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#5B21B6] transition-colors">
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>
        <div className="text-center">
          <span className="font-black text-base leading-none block" style={{ fontFamily: "Unbounded, sans-serif", color: "#1E1B4B" }}>
            s <span style={{ color: "#10B981" }}>bar</span>
          </span>
          <span className="text-[9px] tracking-widest uppercase text-gray-400">подписка</span>
        </div>
        <div className="w-16" />
      </div>

      <main className="relative z-10 pt-24 pb-16 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B21B6] mb-3 block">Велнес-пространство</span>
          <h1 className="font-black text-[#1E1B4B] mb-4" style={{ fontFamily: "Unbounded, sans-serif", fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.05 }}>
            Одна подписка —<br />
            <span style={{ background: "linear-gradient(135deg, #5B21B6, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              всё пространство
            </span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Доступ ко всем зонам s bar: от йоги и бани до кафе и ночёвки в медитативной зоне.
          </p>
        </motion.div>

        {/* What's included */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8"
          >
            Что входит в пространство
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {INCLUDES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl p-4 text-center group hover:-translate-y-1 transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.85)", border: "1.5px solid rgba(0,0,0,0.05)", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}
              >
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-200 inline-block">{item.icon}</span>
                <p className="text-xs font-bold text-[#1E1B4B] leading-tight mb-1">{item.label}</p>
                <p className="text-[11px] text-gray-400 leading-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">* Beauty-услуги со скидкой или по тарифу «Месяц»/«Год»</p>
        </div>

        {/* Plans */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-10"
          >
            Выбери формат
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: plan.highlight ? plan.bg : "rgba(255,255,255,0.9)",
                  border: `2px solid ${plan.highlight ? plan.border : "rgba(0,0,0,0.06)"}`,
                  boxShadow: plan.highlight ? `0 20px 60px ${plan.bg}` : "0 4px 20px rgba(0,0,0,0.04)",
                }}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-black text-white"
                      style={{ background: "linear-gradient(135deg, #5B21B6, #3730A3)" }}>
                      Популярный
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: plan.color }}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-black text-4xl" style={{ fontFamily: "Unbounded, sans-serif", color: "#1E1B4B" }}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-400">₽</span>
                  </div>
                  <p className="text-xs text-gray-400">{plan.period}</p>
                </div>

                <ul className="flex-1 flex flex-col gap-2.5 mb-7">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: plan.bg, border: `1.5px solid ${plan.border}` }}>
                        <Icon name="Check" size={10} style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm text-gray-600 leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-105"
                  style={plan.highlight
                    ? { background: `linear-gradient(135deg, ${plan.color}, #3730A3)`, color: "white", boxShadow: `0 8px 24px ${plan.bg}` }
                    : { background: plan.bg, color: plan.color, border: `1.5px solid ${plan.border}` }
                  }
                >
                  Выбрать {plan.name.toLowerCase()} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* App link CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center"
        >
          <div className="rounded-3xl p-8"
            style={{ background: "linear-gradient(135deg, #1E1B4B, #3730A3, #5B21B6)", position: "relative", overflow: "hidden" }}>
            {/* inner bubbles */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="absolute rounded-full pointer-events-none"
                style={{ width: 30 + i * 20, height: 30 + i * 20, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", top: `${15 + i * 18}%`, right: `${5 + i * 10}%` }} />
            ))}
            <div className="relative z-10">
              <span className="text-4xl mb-4 block">📱</span>
              <h3 className="font-black text-white text-xl mb-2" style={{ fontFamily: "Unbounded, sans-serif" }}>
                Приложение s bar
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Управляй подпиской, бронируй время в зонах и отслеживай свои визиты прямо в приложении.
              </p>
              <button
                className="w-full py-3.5 rounded-2xl font-black text-sm transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #6EE7B7, #10B981)", color: "#064E3B" }}
              >
                Скачать приложение 🫐
              </button>
              <p className="text-white/30 text-xs mt-3">App Store & Google Play · скоро</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
