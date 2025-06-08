import { motion } from 'framer-motion'

export default function HeroSection({ onStart }: { onStart: () => void }) {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center rounded-xl bg-gradient-to-br from-purple-700/40 to-cyan-500/20 p-8 shadow-lg">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        فك التشفير بضغطة زر
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-md shadow-md"
        onClick={onStart}
      >
        ابدأ الآن
      </motion.button>
    </section>
  )
}
