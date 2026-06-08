"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Languages, Home } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface FloatingHeaderProps {
  language: string
  setLanguage: (lang: string) => void
}

export function FloatingHeader({ language, setLanguage }: FloatingHeaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  // Evitar hidration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // El header siempre está visible, pero puede cambiar su opacidad
      setIsVisible(true)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const scrollToSection = (sectionId: string) => {
    // Si estamos en una página que no es la principal, ir a la página principal primero
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { id: "hero", label: language === "es" ? "Inicio" : "Home", type: "scroll" },
    { id: "about", label: language === "es" ? "Sobre Mí" : "About Me", type: "link", href: "/about" },
    { id: "content", label: language === "es" ? "Contenido" : "Content", type: "scroll" },
    { id: "services", label: language === "es" ? "Servicios" : "Services", type: "scroll" },
    { id: "blog", label: language === "es" ? "Blog" : "Blog", type: "link", href: "/blog" },
    { id: "contact", label: language === "es" ? "Contacto" : "Contact", type: "scroll" },
  ]

  // No renderizar hasta que esté montado para evitar hydration issues
  if (!mounted) {
    return null
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-cyan-950/50"
          >
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                {/* Logo / Home */}
                <div className="flex items-center space-x-4">
                  {pathname !== "/" && (
                    <Link
                      href="/"
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-cyan-950/50 hover:bg-gray-200 dark:hover:bg-cyan-950/70 text-gray-700 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-cyan-300 transition-colors"
                    >
                      <Home className="h-4 w-4" />
                      <span className="text-sm font-medium hidden sm:inline">
                        {language === "es" ? "Inicio" : "Home"}
                      </span>
                    </Link>
                  )}

                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-cyan-950/50 hover:bg-gray-200 dark:hover:bg-cyan-950/70 text-gray-700 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-cyan-300 transition-colors"
                  >
                    <Languages className="h-4 w-4" />
                    <span className="text-sm font-medium">{language.toUpperCase()}</span>
                  </button>
                </div>

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex items-center space-x-6">
                  {menuItems.map((item) =>
                    item.type === "scroll" ? (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-gray-600 dark:text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        key={item.id}
                        href={item.href || "#"}
                        className={`text-gray-600 dark:text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium ${
                          pathname === item.href ? "text-cyan-600 dark:text-cyan-400" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                </nav>

                {/* Controls */}
                <div className="flex items-center space-x-2">
                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-cyan-950/50 hover:bg-gray-200 dark:hover:bg-cyan-950/70 text-gray-700 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-cyan-300 transition-colors"
                    title={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </button>

                  {/* Mobile Menu Toggle */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-cyan-950/50 hover:bg-gray-200 dark:hover:bg-cyan-950/70 text-gray-700 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-cyan-300 transition-colors"
                    title="Toggle Menu"
                  >
                    {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.nav
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-cyan-950/50 overflow-hidden"
                  >
                    <div className="flex flex-col space-y-3">
                      {menuItems.map((item) =>
                        item.type === "scroll" ? (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-left text-gray-600 dark:text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-2"
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            key={item.id}
                            href={item.href || "#"}
                            className={`text-left text-gray-600 dark:text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-2 ${
                              pathname === item.href ? "text-cyan-600 dark:text-cyan-400" : ""
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  )
}
