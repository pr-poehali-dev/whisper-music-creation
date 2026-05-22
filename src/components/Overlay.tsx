import { motion } from "framer-motion"

export default function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-serif text-3xl md:text-4xl font-light tracking-widest"
          style={{ color: "#e8c49a" }}
        >
          HAVEN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-xs md:text-sm font-light tracking-[0.3em] uppercase"
          style={{ color: "rgba(232,196,154,0.6)" }}
        >
          Wellness · Spa · Club
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="text-xs tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Перетащи, чтобы исследовать
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="h-px w-16 origin-center"
          style={{ background: "rgba(232,196,154,0.4)" }}
        />
      </div>
    </div>
  )
}