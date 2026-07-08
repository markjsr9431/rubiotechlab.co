"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Puzzle, Shield } from "lucide-react"

interface AboutSectionProps {
  language: string
}

export function AboutSection({ language }: AboutSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-12"
        >
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img
                  src="/images/favicon.ico"
                  alt="Rubiotechlab - Tecnología al alcance de todos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Conoce a José: El Diseñador que{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Domina la Tecnología
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                ¡Hola! Soy José, el rostro y las manos detrás de Rubiotechlab. Mi objetivo es simple: resolver tus
                problemas tecnológicos con una perspectiva única. Como diseñador de corazón y técnico por vocación, no
                solo reparo tu equipo, sino que busco optimizar tu experiencia completa.
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>

            {/* Mi Historia y Formación */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mi Historia y Formación</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Mi viaje profesional es una fusión única. Me gradué como{" "}
                <strong className="text-blue-600 dark:text-blue-400">Diseñador Multimedial</strong> de la FADP, una
                carrera que me enseñó a crear, comunicar y resolver problemas visualmente, con énfasis en la producción
                audiovisual.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Sin embargo, mi curiosidad innata por la tecnología nunca se detuvo. Esa pasión por entender "cómo
                funcionan las cosas" me llevó a sumergirme en el mundo del hardware y el software. De manera empírica y
                con <strong className="text-blue-600 dark:text-blue-400">más de 7 años de experiencia práctica</strong>,
                he convertido esa pasión en mi oficio, especializándome en el mantenimiento y reparación de equipos.
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>

            {/* Mi Filosofía de Trabajo */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mi Filosofía de Trabajo</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Mi formación como diseñador influye directamente en cómo abordo los problemas técnicos. Mi enfoque se
                basa en:
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pasión por Aprender</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      La tecnología no se detiene, y yo tampoco. Mi camino autodidacta me ha hecho un experto en
                      investigar y encontrar soluciones, desde los problemas más comunes en{" "}
                      <strong className="text-blue-600 dark:text-blue-400">Windows</strong> hasta los desafíos
                      específicos de <strong className="text-blue-600 dark:text-blue-400">macOS</strong> y{" "}
                      <strong className="text-blue-600 dark:text-blue-400">Android</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Puzzle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Soluciones Integrales</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      No veo solo componentes, veo un sistema completo. Al entender de{" "}
                      <strong className="text-blue-600 dark:text-blue-400">
                        software libre, inteligencia artificial, redes y ciberseguridad
                      </strong>
                      , te ofrezco una visión holística para garantizar que la solución sea duradera y eficiente, no un
                      simple parche.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Honestidad Radical</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      La confianza es la base de todo. Siempre te explicaré el problema en términos que puedas entender,
                      te presentaré las opciones disponibles y te daré un diagnóstico transparente. Cero jerga
                      complicada, cien por ciento claridad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-blue-500 to-purple-600"></div>

            {/* Más Allá de las Pantallas */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Más Allá de las Pantallas</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Cuando no estoy entre computadores y programas, mi mundo se llena de{" "}
                <strong className="text-blue-600 dark:text-blue-400">música</strong> que inspira,{" "}
                <strong className="text-blue-600 dark:text-blue-400">cine</strong> que cuenta grandes historias, el
                cariño incondicional de los <strong className="text-blue-600 dark:text-blue-400">animales</strong> y la
                emoción de planear el próximo <strong className="text-blue-600 dark:text-blue-400">viaje</strong>. Estas
                pasiones alimentan mi creatividad y me dan una perspectiva fresca, algo que aplico en cada desafío
                técnico que enfrento.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
