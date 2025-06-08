import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="p-4 border-r border-cyan-500 min-w-[150px]">
      <ul className="space-y-2 text-sm">
        <li><Link href="/tools">الأساسيات</Link></li>
        <li><Link href="/tools?recipe=beautify">Beautify</Link></li>
        <li><Link href="/tools?recipe=format">JS Formatter</Link></li>
        <li><Link href="/tools?recipe=decode">String Decoder</Link></li>
        <li><Link href="/tools?recipe=unpack">Array Unpacker</Link></li>
      </ul>
    </aside>
  )
}
