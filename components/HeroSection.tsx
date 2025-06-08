import { motion } from 'framer-motion'

export default function HeroSection({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative isolate overflow-hidden rounded-xl bg-gradient-to-br from-[#24124d] via-[#1c1e2b] to-[#00151f] p-8 shadow-2xl text-center flex flex-col items-center justify-center min-h-[70vh]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-6"
      >
        افكك الكود، ببساطة
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-2xl mb-8 text-lg md:text-xl text-gray-300"
      >
        استخدم أقوى الخوارزميات لاستعادة الشيفرة الأصلية بدقة وسرعة.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-md shadow-lg"
        onClick={onStart}
      >
        ابدأ الآن
      </motion.button>
    </section>
  )
}
