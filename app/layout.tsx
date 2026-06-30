import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Rubiotechlab.co - Tecnología al alcance de todos",
  description:
    "Sitio web profesional sobre tecnología, celulares, inteligencia artificial, ciberseguridad y sistemas operativos. Mantenimiento y reparación de computadores.",
  keywords: ["tecnología", "reparación PC", "mantenimiento computadores", "celulares", "ciberseguridad", "José Rubio"],
  authors: [{ name: "José Rubio", url: "https://rubiotechlab.co" }],
  creator: "José Rubio",
  publisher: "Rubiotechlab",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "https://i.imgur.com/K79zfqk.png",
        type: "image/png",
      },
    ],
    shortcut: "https://i.imgur.com/K79zfqk.png",
    apple: "https://i.imgur.com/K79zfqk.png",
  },
  openGraph: {
    title: "Rubiotechlab.co - Tecnología al alcance de todos",
    description:
      "Experto en tecnología, reparación y mantenimiento de computadores. Blog sobre celulares, IA y ciberseguridad.",
    url: "https://rubiotechlab.co",
    siteName: "Rubiotechlab",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubiotechlab.co - Tecnología al alcance de todos",
    description: "Experto en tecnología, reparación y mantenimiento de computadores.",
    creator: "@pcfixer_jose",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://i.imgur.com/K79zfqk.png" type="image/png" />
        <link rel="shortcut icon" href="https://i.imgur.com/K79zfqk.png" />
        <link rel="apple-touch-icon" href="https://i.imgur.com/K79zfqk.png" />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
