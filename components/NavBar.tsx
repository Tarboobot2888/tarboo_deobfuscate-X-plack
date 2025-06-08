import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function NavBar() {
  return (
    <nav className="bg-neutral-900/80 backdrop-blur sticky top-0 z-10">
      <div className="container mx-auto flex items-center gap-6 py-4 px-4">
        <h1 className="flex-1 text-lg font-bold text-cyan-400">TARBOO Deobfuscate</h1>
        <div className="flex gap-6 text-sm">
          <Link href="/">الرئيسية</Link>
          <Link href="/deobfuscate">الأداة</Link>
          <Link href="/about">عن المطور</Link>
          <Link href="/contact">تواصل</Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
