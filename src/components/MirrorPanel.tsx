import { useState, useRef, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { motion, AnimatePresence } from "framer-motion"
import MirrorRoom from "./MirrorRoom"
import Icon from "@/components/ui/icon"

const STYLES = [
  { id: "natural", label: "Натуральный", emoji: "🌿", desc: "Лёгкий макияж, свежесть" },
  { id: "glam", label: "Гламур", emoji: "💅", desc: "Яркий образ, блеск" },
  { id: "sport", label: "Спорт", emoji: "⚡", desc: "Спортивный, энергичный" },
  { id: "evening", label: "Вечерний", emoji: "✨", desc: "Элегантный, загадочный" },
]

export default function MirrorPanel({ onClose }: { onClose: () => void }) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [selectedStyle, setSelectedStyle] = useState("natural")
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setAvatarUrl(url)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 40 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(10, 3, 25, 0.92)", backdropFilter: "blur(20px)" }}
    >
      <div className="relative w-full max-w-5xl h-[90vh] rounded-3xl overflow-hidden flex flex-col md:flex-row"
        style={{ border: "1px solid rgba(168,85,247,0.4)", background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(10,3,25,0.95) 50%, rgba(255,214,0,0.08) 100%)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "rgba(168,85,247,0.3)", border: "1px solid rgba(168,85,247,0.5)" }}
        >
          <Icon name="X" size={16} className="text-white" />
        </button>

        <div className="flex-1 min-h-[300px]">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true }}>
            <Suspense fallback={null}>
              <MirrorRoom avatarUrl={avatarUrl} selectedStyle={selectedStyle} />
            </Suspense>
          </Canvas>
        </div>

        <div className="w-full md:w-72 p-6 flex flex-col gap-5 overflow-y-auto"
          style={{ borderLeft: "1px solid rgba(168,85,247,0.2)" }}>
          <div>
            <h2 className="text-xl font-black mb-1" style={{ color: "#FFD600" }}>
              ✨ Умное зеркало
            </h2>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Загрузи фото и подбери свой образ
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(168,85,247,0.8)" }}>
              Твоё фото
            </p>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            <button
              onClick={() => fileRef.current?.click()}
              className="w-full py-3 rounded-2xl text-sm font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{
                background: avatarUrl ? "rgba(34,197,94,0.2)" : "rgba(168,85,247,0.2)",
                border: `1px solid ${avatarUrl ? "rgba(34,197,94,0.5)" : "rgba(168,85,247,0.5)"}`,
                color: avatarUrl ? "#34D399" : "#A855F7"
              }}
            >
              <Icon name={avatarUrl ? "CheckCircle" : "Camera"} size={16} />
              {avatarUrl ? "Фото загружено!" : "Загрузить фото"}
            </button>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(168,85,247,0.8)" }}>
              Выбери стиль
            </p>
            <div className="grid grid-cols-2 gap-2">
              {STYLES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedStyle(s.id)}
                  className="p-3 rounded-2xl text-left transition-all hover:scale-105"
                  style={{
                    background: selectedStyle === s.id
                      ? "rgba(255,214,0,0.2)"
                      : "rgba(255,255,255,0.05)",
                    border: `1px solid ${selectedStyle === s.id ? "rgba(255,214,0,0.6)" : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  <div className="text-lg mb-1">{s.emoji}</div>
                  <div className="text-xs font-bold" style={{ color: selectedStyle === s.id ? "#FFD600" : "white" }}>
                    {s.label}
                  </div>
                  <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <button
              className="w-full py-3 rounded-2xl font-black text-sm transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #FFD600, #F59E0B)",
                color: "#1a0a2e",
                boxShadow: "0 0 20px rgba(255,214,0,0.4)"
              }}
            >
              Записаться на образ ✨
            </button>
            <p className="text-center text-[10px] mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
              Наши мастера воплотят твой стиль
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
