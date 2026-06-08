"use client"

import type React from "react"

import { motion } from "framer-motion"
import HeroSection from "@/components/hero-section"
import { ContentBlocks } from "@/components/content-blocks"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { FloatingButton } from "@/components/floating-button"
import { FloatingHeader } from "@/components/floating-header"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { useLanguage } from "@/hooks/use-language"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

// Componente wrapper para animaciones de scroll
function ScrollRevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isInView } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.15, delay: delay * 0.02 }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const { language, setLanguage } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <FloatingHeader language={language} setLanguage={setLanguage} />
      <section id="hero">
        <ScrollRevealSection>
          <HeroSection language={language} />
        </ScrollRevealSection>
      </section>
      <section id="content">
        <ScrollRevealSection delay={0.2}>
          <ContentBlocks language={language} />
        </ScrollRevealSection>
      </section>
      <section id="services">
        <ScrollRevealSection delay={0.6}>
          <ServicesSection language={language} />
        </ScrollRevealSection>
      </section>
      <section id="contact">
        <ScrollRevealSection delay={0.8}>
          <Footer language={language} />
        </ScrollRevealSection>
      </section>
      <FloatingButton language={language} />
      <ChatbotWidget language={language} />
    </main>
  )
}
