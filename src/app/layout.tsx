import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Email SaaS Example",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`h-[100vh] ${inter.className}`}>
        <header className="header bg-accent p-2">
          <Link href="/">
            <div className="logo font-bold text-white/70">Logo</div>
          </Link>
        </header>
        <section className="p-4 bg-slate-200 h-full">{children}</section>
      </body>
    </html>
  )
}
