'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { socials } from './social'

const Footer = () => {
  const pathname = usePathname()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex h-[300px] flex-col items-center justify-center space-y-8 border-t border-[var(--foreground)] py-20">
      <div className="flex flex-row space-x-6">
        {socials.map((social) => (
          <div
            key={social.name}
            className="cursor-pointer font-bold text-neutral-400 transition-colors duration-300 ease-out hover:text-[var(--accent)]"
          >
            <Link href={social.href}>{social.name}</Link>
          </div>
        ))}
      </div>
      <div className="text-[15px] sm:text-medium text-neutral-400 flex justify-center items-center ">
        © {currentYear} • Himanshu Kumawat • All Rights Reserved.
      </div>
      <div className="flex space-x-2">
        <div className="h-6 w-6 rounded-full bg-[var(--primary)] shadow shadow-zinc-500" />
        <div className="h-6 w-6 rounded-full bg-[var(--primary-light)] shadow shadow-zinc-500" />
        <div className="h-6 w-6 rounded-full bg-[var(--accent)] shadow shadow-zinc-500" />
        <div className="h-6 w-6 rounded-full bg-[var(--foreground)] shadow shadow-zinc-500" />
        <div className="h-6 w-6 rounded-full bg-[var(--foreground-muted)] shadow shadow-zinc-500" />
        <div className="h-6 w-6 rounded-full bg-[var(--background)] shadow shadow-zinc-500" />
        <div className="h-6 w-6 rounded-full bg-[var(--background-muted)] shadow shadow-zinc-500" />
      </div>
    </footer>
  )
}

export default Footer
