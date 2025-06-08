import { motion } from 'framer-motion'

export default function FeaturesSection() {
  const features = [
    { title: 'DeobfuscateJs', desc: 'خوارزميات متقدمة لفك التشويش عبر Web Workers.' },
    { title: 'CyberChef', desc: 'تشغيل وصفات تحليل متعددة مثل Beautify وEval JS.' },
    { title: 'استعادة المتغيرات', desc: 'إعادة تسمية المتغيرات لأسمائها الأصلية تلقائياً.' },
    { title: 'تنسيق ذكي', desc: 'تنظيم الشيفرة باستخدام Prettier وJS Beautify.' },
  ]

  return (
    <section className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f) => (
        <motion.div
          key={f.title}
          whileHover={{ y: -4 }}
          className="rounded-lg bg-neutral-900/70 p-6 shadow-lg backdrop-blur-lg"
        >
          <h3 className="text-lg font-semibold text-cyan-400 mb-1">{f.title}</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </section>
  )
}
