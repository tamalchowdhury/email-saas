import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      Hello. Go to <Link href="/dashboard" className="text-accent">Dashboard</Link>
    </main>
  )
}
