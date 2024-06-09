import fs from "fs"
import { ImageGallery } from "../page"

function getgalleryContent(slug: string) {
  const imgFolder = "./img/"
  const src = `${imgFolder}${slug}.jpg`
  return {
    src,
  }
}

export async function generateStaticParams() {
  const galery: ImageGallery[] = JSON.parse(fs.readFileSync("data/main.json", "utf-8"))
  return galery.map((el) => {
    return {
      slug: el.slug,
    }
  })
}

function ItemPage(props: any) {
  const slug = props.params.slug
  const data = getgalleryContent(slug)
  return (
    <main className="">
      <div className="w-[95%] mx-auto border-b-4 border-slate-900 py-11 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 text-center dark:text-gray-300 capitalize">
          Lightstation Gallery
        </h1>
      </div>
      <div className="w-[95%] mx-auto flex flex-col 2xl:flex-row gap-8 items-start justify-start">
        <img className="min-w-[40%] mx-auto" src={data.src} alt="" />
        <div>
          <h2 className="text-6xl text-center mb-7 font-bold capitalize">{slug}</h2>
          <p className="text-3xl text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eligendi, corrupti
            cupiditate et enim, porro officiis ratione eos exercitationem quas earum maxime
            recusandae quia commodi qui dicta magni, illo delectus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Delectus ipsa libero dolorem exercitationem labore quae
            aspernatur fugit inventore? Pariatur quidem, illo repellendus iusto dolorem ratione
            repellat quis veniam facere illum.
          </p>
        </div>
      </div>
    </main>
  )
}

export default ItemPage
