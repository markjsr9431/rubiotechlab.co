import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog - PCFixer José",
  description: "Artículos sobre tecnología, mantenimiento de equipos y software libre por José Rubio",
}

export default function BlogPage() {
  return <BlogClientPage />
}
