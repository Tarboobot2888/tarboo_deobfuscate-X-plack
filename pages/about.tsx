import Layout from '../components/Layout'
import DeveloperCard from '../components/DeveloperCard'

export default function About() {
  return (
    <Layout>
      <h2 className="my-4 text-xl font-bold">عن المطور</h2>
      <DeveloperCard />
      <p className="mt-6">هذا المشروع يهدف إلى فك تشفير أكواد جافاسكريبت واستخدام خوارزميات متقدمة مثل DeobfuscateJs و CyberChef.</p>
    </Layout>
  )
}
