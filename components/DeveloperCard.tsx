import { FaGithub, FaLinkedin } from 'react-icons/fa'
import type { FC } from 'react'

const GithubIcon = FaGithub as unknown as FC
const LinkedinIcon = FaLinkedin as unknown as FC

export default function DeveloperCard() {
  return (
    <div className="max-w-sm mx-auto bg-neutral-900 p-6 rounded-lg text-center shadow">
      <img src="/logo.png" alt="developer" className="w-24 h-24 mx-auto rounded-full mb-4" />
      <h3 className="text-xl font-bold mb-2">TARBOO Developer</h3>
      <p className="mb-4">مطور أدوات الأمن السيبراني وتحليل الشيفرات</p>
      <div className="flex justify-center gap-4 text-2xl">
        <a href="https://github.com/tarboo" aria-label="GitHub"><GithubIcon /></a>
        <a href="https://linkedin.com" aria-label="LinkedIn"><LinkedinIcon /></a>
      </div>
    </div>
  )
}
