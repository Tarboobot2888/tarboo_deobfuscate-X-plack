import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import AnimationIntro from '../components/AnimationIntro'
import FeaturesSection from '../components/FeaturesSection'
import { useRouter } from 'next/router'

export default function Home() {
  const [intro, setIntro] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      {intro && <AnimationIntro onDone={() => setIntro(false)} />}
      <HeroSection onStart={() => router.push('/deobfuscate')} />
      <FeaturesSection />
    </Layout>
  )
}
