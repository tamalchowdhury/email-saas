import Link from "next/link"
import React from "react"

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

export default function Nav() {
  return (
    <ul>
      {routes.map((route) => (
        <Link href={route.path} key={route.path}>
          <li className="p-2 hover:bg-menu transition cursor-pointer rounded-md mb-2">
            {route.name}
          </li>
        </Link>
      ))}
    </ul>
  )
}
