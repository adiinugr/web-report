import type { Metadata } from "next"
import { Outfit } from "next/font/google"

// ** CSS
import "./globals.css"

// ** Custom Componenst
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatButton from "@/components/FloatButton"
import { SidebarProvider } from "@/context/SidebarContext"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "REPORT DATABASE BADKO LPQ KAB",
  description:
    "LAPORAN LEMBAGA PENDIDIKAN AL QUR`AN BADAN KOORDINASI LEMBAGA PENDIDIKAN AL QUR`AN (BADKO LPQ KABUPATEN REMBANG"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="emerald">
      <SidebarProvider>
        <body className={`${outfit.className}`}>
          <main className={`overflow-hidden`}>
            <Header />
            {children}
            <Footer />
            <FloatButton />
          </main>
        </body>
      </SidebarProvider>
    </html>
  )
}
