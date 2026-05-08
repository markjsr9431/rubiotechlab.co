"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { translations } from "@/lib/translations"

interface HeroSectionProps {
  language: string
}

export default function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language as keyof typeof translations]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 group"
            >
              <Link href="https://wa.me/3197306999" target="_blank" className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:tracking-wide transition-all duration-300">{t.hero.button}</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
