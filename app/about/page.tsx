"use client"

import { useState, useEffect } from "react"
import { FloatingHeader } from "@/components/floating-header"
import { AboutSection } from "@/components/about-section"
import { useLanguage } from "@/hooks/use-language"

export default function AboutPage() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <FloatingHeader language={language} setLanguage={setLanguage} />
      <main className="pt-20">
        <AboutSection language={language} />
      </main>
    </div>
  )
}
