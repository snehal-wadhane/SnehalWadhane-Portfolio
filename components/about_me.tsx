'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Syncopate, Rajdhani } from 'next/font/google'
import { Code, Sparkles, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link";
const syncopate = Syncopate({
  weight: '400',
  subsets: ['latin'],
})

const rajdhani = Rajdhani({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
})

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animate only once
    threshold: 0.3,    // Trigger when 20% of the section is visible
  })

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2d2a4a] to-[#171728]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.1 } : {}}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mb-8 inline-block">
              <motion.span
                className="inline-block text-[#eee8aa]"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Code className="mr-2 inline-block h-5 w-5" />
                Developer
              </motion.span>
            </div>

            <h2
              className={`${syncopate.className} mb-6 text-2xl font-bold tracking-tight text-white md:text-2xl lg:text-4xl`}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="block"
              >
                Hello, I am
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="mt-2 block text-[#eee8aa] md:text-6xl"
              >
                Snehal Wadhane
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className={`${rajdhani.className} mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl`}
            >
              Curious and driven Computer Science student with a passion for learning and creating.
              I enjoy solving problems, organizing events, and exploring innovative ideas.
              Always eager to take on challenges and make a meaningful impact through collaboration and creativity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="https://www.linkedin.com/in/snehalwadhane/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#eee8aa] px-6 py-3 text-sm font-semibold text-[#2d2a4a] transition-all hover:bg-[#927898]"
              >
                Connect on LinkedIn
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="https://github.com/snehal-wadhane"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-600 px-6 py-3 text-sm font-semibold text-[#eee8aa] transition-all hover:border-[#927898] hover:text-[#927898]"
              >
                View Projects
                <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-lg lg:ml-auto"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                animate={inView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent p-0 backdrop-blur-sm"
              >
                <Image
                  src="snehal.png"
                  alt="Snehal Wadhane"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-yellow-500/10" />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 0.6, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 -z-10 h-10 w-24 rounded-full bg-purple-500/20 blur-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 0.6, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute -right-6 top-6 -z-10 h-10 w-24 rounded-full bg-yellow-500/20 blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
