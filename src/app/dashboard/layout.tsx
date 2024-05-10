import Link from "next/link"
import React from "react"
import Nav from "./nav"

type ReactProp = Readonly<{
  children: React.ReactNode
}>

export default function DashboardLayout({ children }: ReactProp) {
  return (
    <div className="grid grid-cols-[200px_1fr] h-full gap-4">
      <section className="sidebar bg-shell rounded-md p-4">
        <Nav />
      </section>
      <main className="main">{children}</main>
    </div>
  )
}
