import { motion } from "framer-motion"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import MirrorPanel from "./MirrorPanel"
import Walkthrough from "./Walkthrough"
import Icon from "@/components/ui/icon"

export default function Overlay() {
  const [showMirror, setShowMirror] = useState(false)
  const [showWalkthrough, setShowWalkthrough] = useState(false)

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-2">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="font-black text-4xl md:text-5xl tracking-widest"
            style={{
              background: "linear-gradient(135deg, #FFD600 0%, #F59E0B 40%, #A855F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(255,214,0,0.4))"
            }}
          >
            HAVEN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase"
            style={{ color: "rgba(168,85,247,0.9)" }}
          >
            Wellness · Spa · Club
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-24 flex flex-col items-center gap-1"
        >
          <div className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
            Перетащи чтобы исследовать
          </div>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Icon name="MousePointer2" size={14} style={{ color: "rgba(168,85,247,0.6)" }} />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-3 px-4"
      >
        <button
          onClick={() => setShowMirror(true)}
          className="pointer-events-auto flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105 hover:shadow-lg"
          style={{
            background: "linear-gradient(135deg, #FFD600, #F59E0B)",
            color: "#0d0618",
            boxShadow: "0 0 24px rgba(255,214,0,0.35)"
          }}
        >
          <Icon name="Sparkles" size={16} />
          Умное зеркало
        </button>
        <button
          onClick={() => setShowWalkthrough(true)}
          className="pointer-events-auto flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105"
          style={{
            background: "rgba(168,85,247,0.2)",
            border: "1px solid rgba(168,85,247,0.5)",
            color: "#A855F7",
            backdropFilter: "blur(12px)"
          }}
        >
          <Icon name="MapPin" size={16} />
          Прогулка
        </button>
      </motion.div>

      <AnimatePresence>
        {showMirror && <MirrorPanel onClose={() => setShowMirror(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {showWalkthrough && <Walkthrough onClose={() => setShowWalkthrough(false)} />}
      </AnimatePresence>
    </>
  )
}
