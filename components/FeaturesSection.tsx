import { motion } from 'framer-motion'

export default function FeaturesSection() {
  const features = [
    { title: 'DeobfuscateJs', desc: 'خوارزميات متقدمة لفك التشويش عبر Web Workers.' },
    { title: 'CyberChef', desc: 'تشغيل وصفات تحليل متعددة مثل Beautify وEval JS.' },
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {features.map((f) => (
        <motion.div
          key={f.title}
          whileHover={{ scale: 1.02 }}
          className="feature-item bg-neutral-900 p-6 rounded-lg shadow"
        >
          <h3 className="text-xl mb-2 font-bold">{f.title}</h3>
          <p>{f.desc}</p>
        </motion.div>
      ))}
    </section>
  )
}
