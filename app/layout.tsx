import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import Header from "@/components/navigation/header"
import Footer from "@/components/layout/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "NB Professional - Cosméticos Profissionais",
    template: "%s | NB Professional",
  },
  description:
    "Descubra produtos premium selecionados pelas melhores marcas profissionais do mundo. Resultados de salão direto na sua casa.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
