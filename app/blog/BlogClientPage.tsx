"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { FloatingHeader } from "@/components/floating-header"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"
import { FloatingButton } from "@/components/floating-button"
import { ChatbotWidget } from "@/components/chatbot-widget"

const blogArticles = {
  es: [
    {
      id: "refrigeracion-pc",
      title: "Guía Completa de Refrigeración para PC",
      excerpt:
        "Aprende todo sobre sistemas de refrigeración, desde ventiladores básicos hasta sistemas de refrigeración líquida avanzados.",
      content: `
        <h2>Introducción a la Refrigeración de PC</h2>
        <p>La refrigeración adecuada es crucial para el rendimiento y longevidad de tu computadora. Un sistema mal refrigerado puede causar throttling térmico, reduciendo significativamente el rendimiento.</p>
        
        <h2>Tipos de Refrigeración</h2>
        <h3>Refrigeración por Aire</h3>
        <p>Los sistemas de refrigeración por aire utilizan ventiladores y disipadores de calor para mantener las temperaturas bajo control. Son la opción más común y económica.</p>
        
        <h3>Refrigeración Líquida</h3>
        <p>Los sistemas de refrigeración líquida ofrecen mejor rendimiento térmico y menor ruido, pero requieren mayor inversión y mantenimiento.</p>
        
        <h2>Consejos de Mantenimiento</h2>
        <ul>
          <li>Limpia los ventiladores cada 3-6 meses</li>
          <li>Reemplaza la pasta térmica anualmente</li>
          <li>Verifica las temperaturas regularmente</li>
          <li>Asegúrate de tener flujo de aire adecuado</li>
        </ul>
        
        <h2>Conclusión</h2>
        <p>Una buena refrigeración es una inversión en el futuro de tu PC. No escatimes en este aspecto crítico del rendimiento.</p>
      `,
      image: "/images/blog/pc-cooling.jpg",
      category: "Hardware",
      date: "2024-01-15",
      readTime: "8 min",
      author: "José Rubio",
    },
    {
      id: "mantenimiento-preventivo",
      title: "Mantenimiento Preventivo de Computadoras",
      excerpt: "Rutinas esenciales para mantener tu equipo funcionando de manera óptima y prevenir fallos costosos.",
      content: `
        <h2>¿Por qué es Importante el Mantenimiento Preventivo?</h2>
        <p>El mantenimiento preventivo puede extender la vida útil de tu computadora hasta en un 50% y prevenir fallos inesperados que pueden resultar en pérdida de datos.</p>
        
        <h2>Mantenimiento de Hardware</h2>
        <h3>Limpieza Física</h3>
        <p>La acumulación de polvo es el enemigo número uno de las computadoras. Realiza limpieza profunda cada 6 meses.</p>
        
        <h3>Verificación de Componentes</h3>
        <p>Revisa regularmente el estado de cables, conectores y componentes internos para detectar signos de desgaste.</p>
        
        <h2>Mantenimiento de Software</h2>
        <ul>
          <li>Actualiza el sistema operativo regularmente</li>
          <li>Ejecuta análisis antivirus semanales</li>
          <li>Limpia archivos temporales mensualmente</li>
          <li>Desfragmenta el disco duro (HDD) trimestralmente</li>
        </ul>
        
        <h2>Calendario de Mantenimiento</h2>
        <p>Establece un calendario regular: semanal para software, mensual para limpieza básica, y semestral para mantenimiento profundo.</p>
      `,
      image: "/images/blog/computer-maintenance.jpg",
      category: "Mantenimiento",
      date: "2024-01-10",
      readTime: "6 min",
      author: "José Rubio",
    },
    {
      id: "pasta-termica",
      title: "Cómo Aplicar Pasta Térmica Correctamente",
      excerpt: "Tutorial paso a paso para aplicar pasta térmica y mejorar la transferencia de calor en tu procesador.",
      content: `
        <h2>¿Qué es la Pasta Térmica?</h2>
        <p>La pasta térmica es un compuesto que mejora la transferencia de calor entre el procesador y el disipador, eliminando las micro-cavidades de aire.</p>
        
        <h2>Cuándo Cambiar la Pasta Térmica</h2>
        <p>Reemplaza la pasta térmica cuando notes:</p>
        <ul>
          <li>Temperaturas más altas de lo normal</li>
          <li>Throttling térmico frecuente</li>
          <li>Han pasado más de 2 años desde la última aplicación</li>
        </ul>
        
        <h2>Proceso de Aplicación</h2>
        <h3>Preparación</h3>
        <p>Limpia completamente las superficies del procesador y disipador con alcohol isopropílico al 99%.</p>
        
        <h3>Aplicación</h3>
        <p>Aplica una cantidad del tamaño de un grano de arroz en el centro del procesador. La presión del disipador distribuirá la pasta uniformemente.</p>
        
        <h2>Tipos de Pasta Térmica</h2>
        <p>Desde pastas básicas de silicona hasta compuestos de metal líquido para usuarios avanzados. Elige según tu presupuesto y necesidades.</p>
      `,
      image: "/images/blog/thermal-paste.jpg",
      category: "Tutorial",
      date: "2024-01-05",
      readTime: "5 min",
      author: "José Rubio",
    },
    {
      id: "fdroid-apps",
      title: "Las Mejores Apps de F-Droid para Android",
      excerpt:
        "Descubre aplicaciones de código abierto que respetan tu privacidad y no contienen publicidad ni rastreadores.",
      content: `
        <h2>¿Qué es F-Droid?</h2>
        <p>F-Droid es una tienda de aplicaciones alternativa para Android que se enfoca exclusivamente en software libre y de código abierto (FOSS).</p>
        
        <h2>Aplicaciones Esenciales</h2>
        <h3>Comunicación</h3>
        <ul>
          <li><strong>Signal:</strong> Mensajería segura y privada</li>
          <li><strong>Element:</strong> Cliente Matrix para comunicación descentralizada</li>
          <li><strong>Briar:</strong> Mensajería peer-to-peer sin servidores</li>
        </ul>
        
        <h3>Productividad</h3>
        <ul>
          <li><strong>Simple Mobile Tools:</strong> Suite completa de aplicaciones básicas</li>
          <li><strong>Markor:</strong> Editor de texto y Markdown</li>
          <li><strong>OpenTasks:</strong> Gestor de tareas</li>
        </ul>
        
        <h3>Multimedia</h3>
        <ul>
          <li><strong>VLC:</strong> Reproductor multimedia universal</li>
          <li><strong>NewPipe:</strong> Cliente YouTube sin publicidad</li>
          <li><strong>AntennaPod:</strong> Reproductor de podcasts</li>
        </ul>
        
        <h2>Ventajas de F-Droid</h2>
        <p>Sin rastreadores, sin publicidad, código auditado y respeto total por tu privacidad.</p>
      `,
      image: "/images/blog/fdroid-apps.jpg",
      category: "Software Libre",
      date: "2023-12-28",
      readTime: "7 min",
      author: "José Rubio",
    },
    {
      id: "seguridad-android",
      title: "Configuración de Seguridad Avanzada en Android",
      excerpt: "Protege tu dispositivo Android con configuraciones avanzadas de seguridad y privacidad.",
      content: `
        <h2>Fundamentos de Seguridad Android</h2>
        <p>Android ofrece múltiples capas de seguridad, pero muchas funciones avanzadas están ocultas en configuraciones profundas del sistema.</p>
        
        <h2>Configuraciones Esenciales</h2>
        <h3>Bloqueo de Pantalla</h3>
        <p>Usa PIN de 6 dígitos mínimo, patrón complejo o biometría combinada con PIN de respaldo.</p>
        
        <h3>Cifrado de Dispositivo</h3>
        <p>Asegúrate de que el cifrado esté activado. En Android moderno viene habilitado por defecto.</p>
        
        <h2>Permisos de Aplicaciones</h2>
        <p>Revisa y limita los permisos de cada aplicación. Principio de menor privilegio: solo los permisos necesarios.</p>
        
        <h2>Configuraciones Avanzadas</h2>
        <ul>
          <li>Desactiva la depuración USB</li>
          <li>Habilita "Verificar aplicaciones"</li>
          <li>Configura bloqueo automático</li>
          <li>Desactiva notificaciones en pantalla de bloqueo para apps sensibles</li>
        </ul>
        
        <h2>Aplicaciones de Seguridad</h2>
        <p>Considera usar aplicaciones como Shelter para perfiles de trabajo o Island para aislamiento de aplicaciones.</p>
      `,
      image: "/images/blog/android-security.jpg",
      category: "Seguridad",
      date: "2023-12-20",
      readTime: "9 min",
      author: "José Rubio",
    },
    {
      id: "tiendas-alternativas",
      title: "Tiendas de Aplicaciones Alternativas Seguras",
      excerpt:
        "Explora alternativas seguras a Google Play Store que ofrecen mayor privacidad y variedad de aplicaciones.",
      content: `
        <h2>¿Por qué Considerar Alternativas?</h2>
        <p>Las tiendas alternativas ofrecen aplicaciones que no están disponibles en Google Play, mayor privacidad y control sobre tu experiencia móvil.</p>
        
        <h2>Tiendas Recomendadas</h2>
        <h3>F-Droid</h3>
        <p>La tienda de referencia para software libre. Todas las aplicaciones son de código abierto y auditadas.</p>
        
        <h3>Aurora Store</h3>
        <p>Cliente alternativo para Google Play que no requiere servicios de Google y ofrece mayor privacidad.</p>
        
        <h3>APKPure</h3>
        <p>Tienda confiable para APKs, útil cuando Google Play no está disponible en tu región.</p>
        
        <h2>Consideraciones de Seguridad</h2>
        <ul>
          <li>Verifica siempre las firmas de las aplicaciones</li>
          <li>Lee los permisos cuidadosamente</li>
          <li>Usa solo tiendas con buena reputación</li>
          <li>Mantén activada la verificación de aplicaciones</li>
        </ul>
        
        <h2>Instalación Segura</h2>
        <p>Habilita "Fuentes desconocidas" solo temporalmente y para tiendas específicas. Desactívalo después de la instalación.</p>
      `,
      image: "/images/blog/app-store-alternatives.jpg",
      category: "Software Libre",
      date: "2023-12-15",
      readTime: "6 min",
      author: "José Rubio",
    },
  ],
  en: [
    {
      id: "pc-cooling",
      title: "Complete PC Cooling Guide",
      excerpt: "Learn everything about cooling systems, from basic fans to advanced liquid cooling systems.",
      content: `
        <h2>Introduction to PC Cooling</h2>
        <p>Proper cooling is crucial for your computer's performance and longevity. A poorly cooled system can cause thermal throttling, significantly reducing performance.</p>
        
        <h2>Types of Cooling</h2>
        <h3>Air Cooling</h3>
        <p>Air cooling systems use fans and heat sinks to keep temperatures under control. They are the most common and economical option.</p>
        
        <h3>Liquid Cooling</h3>
        <p>Liquid cooling systems offer better thermal performance and lower noise, but require greater investment and maintenance.</p>
        
        <h2>Maintenance Tips</h2>
        <ul>
          <li>Clean fans every 3-6 months</li>
          <li>Replace thermal paste annually</li>
          <li>Check temperatures regularly</li>
          <li>Ensure adequate airflow</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Good cooling is an investment in your PC's future. Don't skimp on this critical aspect of performance.</p>
      `,
      image: "/images/blog/pc-cooling.jpg",
      category: "Hardware",
      date: "2024-01-15",
      readTime: "8 min",
      author: "José Rubio",
    },
    {
      id: "preventive-maintenance",
      title: "Computer Preventive Maintenance",
      excerpt: "Essential routines to keep your equipment running optimally and prevent costly failures.",
      content: `
        <h2>Why is Preventive Maintenance Important?</h2>
        <p>Preventive maintenance can extend your computer's lifespan by up to 50% and prevent unexpected failures that can result in data loss.</p>
        
        <h2>Hardware Maintenance</h2>
        <h3>Physical Cleaning</h3>
        <p>Dust accumulation is computers' number one enemy. Perform deep cleaning every 6 months.</p>
        
        <h3>Component Verification</h3>
        <p>Regularly check the condition of cables, connectors, and internal components to detect signs of wear.</p>
        
        <h2>Software Maintenance</h2>
        <ul>
          <li>Update the operating system regularly</li>
          <li>Run weekly antivirus scans</li>
          <li>Clean temporary files monthly</li>
          <li>Defragment hard drive (HDD) quarterly</li>
        </ul>
        
        <h2>Maintenance Calendar</h2>
        <p>Establish a regular schedule: weekly for software, monthly for basic cleaning, and semi-annually for deep maintenance.</p>
      `,
      image: "/images/blog/computer-maintenance.jpg",
      category: "Maintenance",
      date: "2024-01-10",
      readTime: "6 min",
      author: "José Rubio",
    },
    {
      id: "thermal-paste",
      title: "How to Apply Thermal Paste Correctly",
      excerpt: "Step-by-step tutorial for applying thermal paste and improving heat transfer in your processor.",
      content: `
        <h2>What is Thermal Paste?</h2>
        <p>Thermal paste is a compound that improves heat transfer between the processor and heat sink, eliminating air micro-cavities.</p>
        
        <h2>When to Change Thermal Paste</h2>
        <p>Replace thermal paste when you notice:</p>
        <ul>
          <li>Higher than normal temperatures</li>
          <li>Frequent thermal throttling</li>
          <li>More than 2 years since last application</li>
        </ul>
        
        <h2>Application Process</h2>
        <h3>Preparation</h3>
        <p>Thoroughly clean processor and heat sink surfaces with 99% isopropyl alcohol.</p>
        
        <h3>Application</h3>
        <p>Apply a rice grain-sized amount in the center of the processor. Heat sink pressure will distribute the paste evenly.</p>
        
        <h2>Types of Thermal Paste</h2>
        <p>From basic silicone pastes to liquid metal compounds for advanced users. Choose according to your budget and needs.</p>
      `,
      image: "/images/blog/thermal-paste.jpg",
      category: "Tutorial",
      date: "2024-01-05",
      readTime: "5 min",
      author: "José Rubio",
    },
    {
      id: "fdroid-apps",
      title: "Best F-Droid Apps for Android",
      excerpt: "Discover open-source applications that respect your privacy and contain no ads or trackers.",
      content: `
        <h2>What is F-Droid?</h2>
        <p>F-Droid is an alternative app store for Android that focuses exclusively on free and open-source software (FOSS).</p>
        
        <h2>Essential Applications</h2>
        <h3>Communication</h3>
        <ul>
          <li><strong>Signal:</strong> Secure and private messaging</li>
          <li><strong>Element:</strong> Matrix client for decentralized communication</li>
          <li><strong>Briar:</strong> Peer-to-peer messaging without servers</li>
        </ul>
        
        <h3>Productivity</h3>
        <ul>
          <li><strong>Simple Mobile Tools:</strong> Complete suite of basic applications</li>
          <li><strong>Markor:</strong> Text and Markdown editor</li>
          <li><strong>OpenTasks:</strong> Task manager</li>
        </ul>
        
        <h3>Multimedia</h3>
        <ul>
          <li><strong>VLC:</strong> Universal media player</li>
          <li><strong>NewPipe:</strong> YouTube client without ads</li>
          <li><strong>AntennaPod:</strong> Podcast player</li>
        </ul>
        
        <h2>F-Droid Advantages</h2>
        <p>No trackers, no ads, audited code, and complete respect for your privacy.</p>
      `,
      image: "/images/blog/fdroid-apps.jpg",
      category: "Free Software",
      date: "2023-12-28",
      readTime: "7 min",
      author: "José Rubio",
    },
    {
      id: "android-security",
      title: "Advanced Android Security Configuration",
      excerpt: "Protect your Android device with advanced security and privacy configurations.",
      content: `
        <h2>Android Security Fundamentals</h2>
        <p>Android offers multiple security layers, but many advanced features are hidden in deep system settings.</p>
        
        <h2>Essential Configurations</h2>
        <h3>Screen Lock</h3>
        <p>Use minimum 6-digit PIN, complex pattern, or biometrics combined with PIN backup.</p>
        
        <h3>Device Encryption</h3>
        <p>Ensure encryption is enabled. In modern Android it comes enabled by default.</p>
        
        <h2>App Permissions</h2>
        <p>Review and limit each app's permissions. Principle of least privilege: only necessary permissions.</p>
        
        <h2>Advanced Settings</h2>
        <ul>
          <li>Disable USB debugging</li>
          <li>Enable "Verify apps"</li>
          <li>Configure automatic lock</li>
          <li>Disable lock screen notifications for sensitive apps</li>
        </ul>
        
        <h2>Security Applications</h2>
        <p>Consider using apps like Shelter for work profiles or Island for app isolation.</p>
      `,
      image: "/images/blog/android-security.jpg",
      category: "Security",
      date: "2023-12-20",
      readTime: "9 min",
      author: "José Rubio",
    },
    {
      id: "alternative-stores",
      title: "Safe Alternative App Stores",
      excerpt: "Explore safe alternatives to Google Play Store that offer greater privacy and app variety.",
      content: `
        <h2>Why Consider Alternatives?</h2>
        <p>Alternative stores offer apps not available on Google Play, greater privacy, and control over your mobile experience.</p>
        
        <h2>Recommended Stores</h2>
        <h3>F-Droid</h3>
        <p>The reference store for free software. All applications are open-source and audited.</p>
        
        <h3>Aurora Store</h3>
        <p>Alternative Google Play client that doesn't require Google services and offers greater privacy.</p>
        
        <h3>APKPure</h3>
        <p>Reliable APK store, useful when Google Play isn't available in your region.</p>
        
        <h2>Security Considerations</h2>
        <ul>
          <li>Always verify app signatures</li>
          <li>Read permissions carefully</li>
          <li>Use only reputable stores</li>
          <li>Keep app verification enabled</li>
        </ul>
        
        <h2>Safe Installation</h2>
        <p>Enable "Unknown sources" only temporarily and for specific stores. Disable after installation.</p>
      `,
      image: "/images/blog/app-store-alternatives.jpg",
      category: "Free Software",
      date: "2023-12-15",
      readTime: "6 min",
      author: "José Rubio",
    },
  ],
}

export default function BlogClientPage() {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const articles = blogArticles[language as keyof typeof blogArticles] || blogArticles.es
  const categories = ["all", ...Array.from(new Set(articles.map((article) => article.category)))]

  const filteredArticles =
    selectedCategory === "all" ? articles : articles.filter((article) => article.category === selectedCategory)

  const categoryLabels = {
    es: {
      all: "Todos",
      Hardware: "Hardware",
      Mantenimiento: "Mantenimiento",
      Tutorial: "Tutorial",
      "Software Libre": "Software Libre",
      Seguridad: "Seguridad",
    },
    en: {
      all: "All",
      Hardware: "Hardware",
      Maintenance: "Maintenance",
      Tutorial: "Tutorial",
      "Free Software": "Free Software",
      Security: "Security",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <FloatingHeader language={language} setLanguage={() => {}} />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            {language === "es" ? "Blog Tecnológico" : "Tech Blog"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "es"
              ? "Artículos sobre tecnología, mantenimiento de equipos y software libre"
              : "Articles about technology, equipment maintenance and free software"}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {categoryLabels[language as keyof typeof categoryLabels][category as keyof typeof categoryLabels.es] ||
                category}
            </Button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={article.image || "/placeholder.svg?height=200&width=400"}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-cyan-600 hover:bg-cyan-700">{article.category}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString(language === "es" ? "es-ES" : "en-US")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm text-muted-foreground">{article.author}</span>
                    </div>

                    <Link href={`/blog/${article.id}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        {language === "es" ? "Leer más" : "Read more"}
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Buttons */}
      <FloatingButton />
      <ChatbotWidget />
    </div>
  )
}
