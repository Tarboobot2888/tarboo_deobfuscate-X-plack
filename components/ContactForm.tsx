import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

interface FormValues {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    window.location.href = `mailto:tarboo@example.com?subject=Contact from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(data.message)}%0A%0A${encodeURIComponent(data.email)}`
    reset()
  }

  return (
    <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <input className="w-full p-2 rounded bg-neutral-800" placeholder="الاسم" {...register('name', { required: true })} />
      <input className="w-full p-2 rounded bg-neutral-800" placeholder="البريد الإلكتروني" type="email" {...register('email', { required: true })} />
      <textarea className="w-full p-2 rounded bg-neutral-800" rows={4} placeholder="رسالتك" {...register('message', { required: true })} />
      <button type="submit" className="px-4 py-2 bg-cyan-500 text-black font-bold rounded">إرسال</button>
    </motion.form>
  )
}
