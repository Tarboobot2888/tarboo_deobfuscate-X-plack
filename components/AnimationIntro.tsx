import { motion } from 'framer-motion'

export default function AnimationIntro({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      onAnimationComplete={onDone}
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-cyan-400 drop-shadow-lg"
      >
        TARBOO
      </motion.h1>
    </motion.div>
  )
}
