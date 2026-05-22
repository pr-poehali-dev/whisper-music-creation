import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const ZONES = [
  {
    id: "yoga",
    icon: "🧘",
    title: "Хот-йога & Пилатес",
    subtitle: "Зона движения",
    desc: "Прогрей тело в 38° и почувствуй как уходит напряжение. Hot-Cycle, реформер-пилатес, воздушная йога.",
    color: "#FFD600",
    glow: "rgba(255,214,0,0.3)",
    tags: ["Hot Yoga", "Пилатес", "Hot Cycle"],
  },
  {
    id: "banya",
    icon: "🔥",
    title: "Баня & Купель",
    subtitle: "Зона восстановления",
    desc: "Русская баня с берёзовым веником, контрастная купель со льдом. Перезагрузка тела за 40 минут.",
    color: "#F472B6",
    glow: "rgba(244,114,182,0.3)",
    tags: ["Баня", "Купель", "Пар"],
  },
  {
    id: "meditation",
    icon: "🌙",
    title: "Зона медитации",
    subtitle: "Качели & Тишина",
    desc: "Парящие качели, гамаки, подушки. Засыпай под звуки природы. Ночью — тентовые палатки для ночёвки.",
    color: "#A855F7",
    glow: "rgba(168,85,247,0.3)",
    tags: ["Качели", "Медитация", "Ночёвка"],
  },
  {
    id: "beauty",
    icon: "💅",
    title: "Beauty & Спа",
    subtitle: "Зона красоты",
    desc: "Маникюр, педикюр, молочная ванночка, пилинг, укладка, макияж. Всё за один визит.",
    color: "#34D399",
    glow: "rgba(52,211,153,0.3)",
    tags: ["Маникюр", "Макияж", "Спа"],
  },
  {
    id: "cafe",
    icon: "🍹",
    title: "Кафе → Клуб",
    subtitle: "Зона вкуса",
    desc: "Днём — полезные боулы и суперфуд-смузи. Ночью — клуб с ПП-коктейлями и тёмным светом.",
    color: "#FFD600",
    glow: "rgba(255,214,0,0.3)",
    tags: ["ПП-еда", "Смузи", "Ночной клуб"],
  },
  {
    id: "shop",
    icon: "🌿",
    title: "Бутик & Магазин",
    subtitle: "Зона заботы",
    desc: "БАДы, органическая косметика, одежда для тренировок, цветы. Всё что нужно — здесь.",
    color: "#F472B6",
    glow: "rgba(244,114,182,0.3)",
    tags: ["БАДы", "Косметика", "Цветы"],
  },
]

export default function Walkthrough({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState(0)
  const zone = ZONES[active]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "rgba(8,2,20,0.97)", backdropFilter: "blur(24px)" }}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ background: "rgba(168,85,247,0.25)", border: "1px solid rgba(168,85,247,0.4)" }}
      >
        <Icon name="X" size={16} className="text-white" />
      </button>

      <div className="flex flex-col items-center pt-8 pb-4 px-4">
        <motion.div
          key="header"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] mb-1" style={{ color: "rgba(168,85,247,0.7)" }}>
            Прогулка по комплексу
          </p>
          <h2 className="text-2xl md:text-3xl font-black" style={{ color: "#FFD600" }}>
            HAVEN
          </h2>
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-4 px-4 pb-4 overflow-hidden">
        <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-y-auto md:w-52 flex-shrink-0 pb-2 md:pb-0">
          {ZONES.map((z, i) => (
            <button
              key={z.id}
              onClick={() => setActive(i)}
              className="flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all hover:scale-105"
              style={{
                background: active === i ? `rgba(${z.color === "#FFD600" ? "255,214,0" : z.color === "#A855F7" ? "168,85,247" : z.color === "#F472B6" ? "244,114,182" : "52,211,153"},0.2)` : "rgba(255,255,255,0.04)",
                border: `1px solid ${active === i ? z.color : "rgba(255,255,255,0.08)"}`,
                minWidth: "160px"
              }}
            >
              <span className="text-xl">{z.icon}</span>
              <div>
                <div className="text-xs font-bold leading-tight" style={{ color: active === i ? z.color : "white" }}>
                  {z.title}
                </div>
                <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {z.subtitle}
                </div>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={zone.id}
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-3xl p-6 md:p-10 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: `radial-gradient(ellipse at 30% 30%, ${zone.glow} 0%, rgba(8,2,20,0.95) 70%)`,
              border: `1px solid ${zone.glow.replace("0.3", "0.5")}`,
            }}
          >
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 70% 50%, ${zone.color} 0%, transparent 60%)`,
                filter: "blur(60px)"
              }}
            />

            <div className="relative z-10">
              <div className="text-6xl md:text-8xl mb-4">{zone.icon}</div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: zone.color, opacity: 0.7 }}>
                {zone.subtitle}
              </p>
              <h3 className="text-3xl md:text-5xl font-black mb-4" style={{ color: zone.color }}>
                {zone.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
                {zone.desc}
              </p>
            </div>

            <div className="relative z-10 mt-6 flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {zone.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: `${zone.color}20`, border: `1px solid ${zone.color}50`, color: zone.color }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setActive((active - 1 + ZONES.length) % ZONES.length)}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <Icon name="ChevronLeft" size={18} className="text-white" />
                </button>
                <button
                  onClick={() => setActive((active + 1) % ZONES.length)}
                  className="flex-1 py-2 rounded-full font-bold text-sm transition-all hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${zone.color}, ${zone.color}aa)`, color: "#0d0618" }}
                >
                  Следующая зона →
                </button>
              </div>
              <div className="flex gap-1 justify-center">
                {ZONES.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className="rounded-full transition-all"
                    style={{
                      width: active === i ? "24px" : "8px",
                      height: "8px",
                      background: active === i ? zone.color : "rgba(255,255,255,0.2)"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
