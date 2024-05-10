import React from "react"

export default async function Emails() {
  const response = await fetch("https://dummyjson.com/comments?limit=7")
  const data = await response.json()

  return (
    <div className="grid grid-cols-[400px_1fr] gap-4 h-full">
      <section className="sidebar bg-shell rounded-md p-4">
        <ul>
          {data.comments.map((item) => (
            <div
              key={item.id}
              className="p-2 hover:bg-menu transition cursor-pointer rounded-md mb-2"
            >
              <div className="flex justify-between">
                <span className="font-bold mb-2">
                  {item.user.username}@gmail.com
                </span>
                <span>May 10, 2024</span>
              </div>
              <p className="text-black/70 mb-2">RE: {item.body}</p>
              <p className="text-black/70 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, beatae.
              </p>
            </div>
          ))}
        </ul>
      </section>
      <main className="main bg-shell rounded-md p-4">Select and Email</main>
    </div>
  )
}
