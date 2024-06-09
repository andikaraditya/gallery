import fs from "fs"
import Link from "next/link"

type ImageGallery = {
  title: string
  src: string
  slug: string
  description: string
}

export default function Home() {
  const galery: ImageGallery[] = JSON.parse(fs.readFileSync("data/main.json", "utf-8"))
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="w-[95%] mx-auto border-b-4 border-slate-900 py-11 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 text-center dark:text-gray-300">
          Lightstation Galery
        </h1>
      </div>
      <div className="md:columns-2 md:gap-6 md:space-y-6 lg:columns-4 lg:gap-8 lg:space-y-8 w-[95%] mx-auto">
        {galery.map((el, index) => {
          return (
            <ImageItem
              src={el.src}
              title={el.title}
              description={el.description}
              slug={el.slug}
              key={index}
            />
          )
        })}
      </div>
    </main>
  )
}

function ImageItem({
  src,
  title,
  description,
  slug,
}: {
  src: string
  title: string
  description: string
  slug: string
}) {
  return (
    <div className="group hover:cursor-pointer relative rounded-2xl overflow-hidden">
      <Link href={slug}>
        <img className="w-full" src={src} alt="" />
        <div className="group-hover:block group-hover:absolute ease-in-out hidden bottom-0 p-3 bg-slate-900/50 backdrop-blur-[1px]">
          <h2 className="text-2xl text-white capitalize font-bold">{title}</h2>
          <p className="line-clamp-3 text-white">{description}</p>
        </div>
      </Link>
    </div>
  )
}
