import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function NavBar() {
  return (
    <nav className="bg-neutral-900/70 backdrop-blur-lg sticky top-0 z-10">
      <div className="container mx-auto flex items-center gap-6 py-4 px-4">
        <h1 className="flex-1 text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">TARBOO Deobfuscate</h1>
        <div className="flex gap-6 text-sm">
          <Link className="hover:text-cyan-400" href="/">الرئيسية</Link>
          <Link className="hover:text-cyan-400" href="/deobfuscate">الأداة</Link>
          <Link className="hover:text-cyan-400" href="/about">عن المطور</Link>
          <Link className="hover:text-cyan-400" href="/contact">تواصل</Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
