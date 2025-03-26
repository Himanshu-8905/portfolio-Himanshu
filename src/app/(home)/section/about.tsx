'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { motion, Variants, useAnimation, useInView } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'
import { Timeline } from '@/components/timeline'

const About = () => {
  return (
    <motion.div className="space-y-16 py-16">
      <Heading heading="About Me" />
      <div className="grid h-full w-full grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
        <ProfileImage />
        <ProfileContent />
      </div>
      <Experience />
    </motion.div>
  )
}

const ProfileImage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const profileImageVariants: Variants = {
    hidden: { width: '100%' },
    visible: {
      width: '0%',
      transition: {
        ease: 'circOut',
        duration: 1.2,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="relative aspect-square h-full w-full md:max-h-[450px] md:max-w-[450px]"
    >
      <Image
        src="/Profile_image2.jpg"
        alt={'profile picture'}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        className="aspect-square rounded object-contain"
      />
      <motion.div
        variants={profileImageVariants}
        initial="hidden"
        animate={controls}
        className="absolute h-full w-full bg-[var(--foreground)]"
      />
    </motion.div>
  )
}

const ProfileContent = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const profileContentVariants: Variants = {
    hidden: {
      x: 0.1,
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.4,
        staggerChildren: 0.25,
        staggerDirection: 1,
        when: 'beforeChildren',
      },
    },
  }

  const profileContentChildVariants: Variants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={profileContentVariants}
      initial="hidden"
      animate={controls}
      className="flex flex-col items-start space-y-4"
    >
      <motion.div
        variants={profileContentChildVariants}
        className="text-2xl font-semibold"
      >
        Hi, I&apos;m{' '}
        <span className="text-[var(--primary)]">Himanshu Kumawat</span>
      </motion.div>
      <div className="space-y-4 text-justify">
        <motion.div variants={profileContentChildVariants}>
          🌟 A software developer with a strong passion for learning, designing,
          problem solving and developing seamlessly interactive, scalable, and
          efficient applications, focusing on web technologies and user
          experience.
        </motion.div>
        <motion.div variants={profileContentChildVariants}>
          🎓 I am graduating student at Indian Institute of Information Technology, Bhagalpur with a Bachelor of Engineering
          Technology degree with a major in Computer Engineering Technology.
        </motion.div>
        <motion.div variants={profileContentChildVariants}>
          💻Currently, I am focusing and expanding my expertise on software
          development using modern technologies. I&apos;m looking forward to
          learning more about other technologies. I am also interested in
          learning about artificial intelligence, and Machine Learning in the future.
        </motion.div>
      </div>
      <motion.div variants={profileContentChildVariants}>
        <Link
          href="https://www.linkedin.com/in/himanshu-kumawat-250938257/"
          target="_blank"
        >
          <Button>
            Certicates
            <ArrowTopRightOnSquareIcon className="ml-2 size-4" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <div className="w-full max-w-[800px] space-y-8">
      <div className="text-xl font-semibold uppercase">Experience</div>
      {/* timeline */}
      <div className="px-1">
        <Timeline
          role="Full Stack Developer"
          from="january 2025"
          to="February 2025"
          company="NullClass"
          experiences={[
            'Makes Twitter-clone',
            'Track User Location and Weather: Under Profile, users can obtain their location (City, State, Country) and view it on Google Maps with real-time weather updates',
            'Audio Tweets and Subscriptions: Users can post 5-min/100MB audio tweets (2-7 PM IST) after OTP verification',
            'Subscription plans (100–1000/month) limit tweets; payments allowed only from 10-11 AM IST'
          ]}
        />
        <Timeline
          role="Lead Frontend Developer"
          from="April 2024"
          to="May 2024"
          company="College's Ecell's Website(Frontend)"
          experiences={[
            'Led the frontend team for my college E-Cell website, developing an interactive platform using ReactJS and TailwindCSS',
            'Managed a team, ensuring seamless UI/UX and optimizing performance for a dynamic user experience'
          ]}
        />
      </div>
    </div>
  )
}

export default About
