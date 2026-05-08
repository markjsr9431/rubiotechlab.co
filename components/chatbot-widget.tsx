"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { translations } from "@/lib/translations"

interface ChatbotWidgetProps {
  language: string
}

export function ChatbotWidget({ language }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const t = translations[language as keyof typeof translations]

  const toggleChatbot = () => {
    if (isOpen && !isMinimized) {
      setIsOpen(false)
      setIsMinimized(false)
    } else {
      setIsOpen(true)
      setIsMinimized(false)
    }
  }

  const minimizeChatbot = () => {
    setIsMinimized(true)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 left-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl w-96 h-[500px] mb-4 overflow-hidden"
          >
            <iframe
              src="https://copilotstudio.microsoft.com/environments/Default-6ca34ae1-466f-44bc-a7aa-0ac5a78c61b1/bots/cr3a3_tecnicoEnSoporteMantenimientoYRepara/webchat?__version__=2"
              frameBorder="0"
              className="w-full h-full"
              title="Chatbot"
              allow="microphone"
            />
          </motion.div>
        )}

        {/* Indicador minimizado */}
        {isOpen && isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 left-0 bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg shadow-lg mb-4 cursor-pointer"
            onClick={() => setIsMinimized(false)}
          >
            <div className="flex items-center space-x-2 text-white">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">{language === "es" ? "Asistente" : "Assistant"}</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        onClick={toggleChatbot}
        className={`flex items-center justify-center rounded-full w-14 h-14 shadow-lg transition-colors duration-300 ${
          isOpen && !isMinimized
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={
          isOpen && !isMinimized
            ? language === "es"
              ? "Cerrar asistente"
              : "Close assistant"
            : language === "es"
              ? "Abrir asistente técnico"
              : "Open technical assistant"
        }
      >
        {isOpen && !isMinimized ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </motion.button>

      {/* Tooltip informativo */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-2 left-16 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
        >
          {language === "es" ? "Asistente virtual" : "Virtual assistant"}
        </motion.div>
      )}
    </div>
  )
}
