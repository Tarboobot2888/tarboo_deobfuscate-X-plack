import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col text-gray-200 font-sans">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}
