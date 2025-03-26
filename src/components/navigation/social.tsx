import {
  SiInstagram,
  SiGithub,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export const socials = [
  {
    name: 'Instagram',
    icon: (
      <SiInstagram className="size-8 text-[var(--foreground-muted)] transition-colors duration-300 ease-out hover:text-[var(--accent)] 2xl:size-14 " />
    ),
    href: 'https://www.instagram.com/himanshu._.kumawat/',
  },
  {
    name: 'GitHub',
    icon: (
      <SiGithub className="size-8 text-[var(--foreground-muted)] transition-colors duration-300 ease-out hover:text-[var(--accent)] 2xl:size-14 " />
    ),
    href: 'https://github.com/Himanshu-8905',
  },
  {
    name: 'LinkedIn',
    icon: (
      <SiLinkedin className="size-8 text-[var(--foreground-muted)] transition-colors duration-300 ease-out hover:text-[var(--accent)] 2xl:size-14 " />
    ),
    href: 'https://www.linkedin.com/in/himanshu-kumawat-250938257/',
  },
]
