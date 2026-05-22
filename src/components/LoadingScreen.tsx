import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-black text-6xl mb-2 tracking-widest"
          style={{
            background: "linear-gradient(135deg, #FFD600 0%, #F59E0B 40%, #A855F7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px rgba(255,214,0,0.5))"
          }}
        >
          HAVEN
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs tracking-[0.4em] uppercase mb-6 font-bold"
          style={{ color: "rgba(168,85,247,0.8)" }}
        >
          Wellness · Spa · Club
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-px w-48 mx-auto origin-left"
          style={{ background: "linear-gradient(90deg, #FFD600, #A855F7)" }}
        />
      </div>
    </motion.div>
  )
}