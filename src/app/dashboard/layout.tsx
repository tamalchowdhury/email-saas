import Link from "next/link"
import React from "react"

type ReactProp = Readonly<{
  children: React.ReactNode
}>

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Lead Finder",
    path: "/dashboard/lead-finder",
  },
  {
    name: "Emails",
    path: "/dashboard/emails",
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
  },
]

export default function DashboardLayout({ children }: ReactProp) {
  return (
    <div className="grid grid-cols-[200px_1fr] h-full gap-4">
      <section className="sidebar bg-shell rounded-md p-4">
        <ul>
          {routes.map((route) => (
            <Link href={route.path} key={route.path}>
              <li className="p-2 hover:bg-menu transition cursor-pointer rounded-md mb-2">
                {route.name}
              </li>
            </Link>
          ))}
        </ul>
      </section>
      <main className="main">{children}</main>
    </div>
  )
}
