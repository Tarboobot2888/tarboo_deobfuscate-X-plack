import { motion } from 'framer-motion'

export default function AnimationIntro({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-neutral-950 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      onAnimationComplete={onDone}
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg"
      >
        TARBOO
      </motion.h1>
    </motion.div>
  )
}
