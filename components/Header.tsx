import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex items-center gap-4 py-4">
      <h1 className="flex-1 text-xl">TARBOO Deobfuscate</h1>
      <nav className="flex gap-4 text-sm">
        <Link href="/">الرئيسية</Link>
        <Link href="/tools">الأدوات</Link>
        <Link href="/history">السجل</Link>
        <Link href="/about">عن المشروع</Link>
      </nav>
      <ThemeToggle />
    </header>
  )
}
