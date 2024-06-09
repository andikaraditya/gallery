export default function Home() {
  const galery = [1, 9, 4, 2, 8, 3, 2, 4, 4, 10, 3, 9, 4, 6, 9, 9, 4, 2, 5]
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="w-[95%] mx-auto border-b-4 border-slate-900 py-11 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 text-center dark:text-gray-300">
          Lightstation Galery
        </h1>
      </div>
      <div className="md:columns-2 lg:columns-4 gap-8 space-y-8 w-[95%] mx-auto">
        {galery.map((el, index) => {
          const title = `Lorem Ipsum ${index}`
          const description =
            "Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum."
          const src = el % 2 === 0 ? "./tall.png" : "./wide.png"
          return <ImageItem src={src} title={title} description={description} key={index} />
        })}
      </div>
    </main>
  )
}

function ImageItem({
  src,
  title,
  description,
}: {
  src: string
  title: string
  description: string
}) {
  return (
    <div className="group hover:cursor-pointer relative overflow-hidden">
      <img className="w-full" src={src} alt="" />
      <div className="group-hover:block group-hover:absolute ease-in-out hidden bottom-0 p-3 bg-slate-900/20">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="line-clamp-3">{description}</p>
      </div>
    </div>
  )
}
