import type { Metadata } from "next"
import BlogArticleClientPage from "./BlogArticleClientPage"

// Agregar al inicio del componente, después de los imports:
export const metadata: Metadata = {
  title: "Artículo - PCFixer José",
  description: "Artículo del blog de tecnología de José Rubio",
}

export default function BlogArticlePage() {
  return <BlogArticleClientPage />
}
