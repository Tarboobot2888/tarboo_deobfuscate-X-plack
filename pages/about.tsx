import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <main className="container">
      <NavBar />
      <h2 className="my-4">عن المشروع</h2>
      <p>هذا المشروع يهدف إلى فك تشفير أكواد جافاسكريبت واستخدام خوارزميات متقدمة مثل DeobfuscateJs و CyberChef.</p>
      <Footer />
    </main>
  )
}
