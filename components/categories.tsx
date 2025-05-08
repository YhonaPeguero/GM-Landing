import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Mujer",
    image: "/images/category-women.jpg",
    description: "Elegancia y estilo para cada ocasión",
  },
  {
    id: 2,
    name: "Hombre",
    image: "/images/category-men.jpg",
    description: "Sofisticación y confort en cada prenda",
  },
  {
    id: 3,
    name: "Niños",
    image: "/images/category-kids.jpg",
    description: "Moda divertida y cómoda para los más pequeños",
  },
]

export function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Explora Nuestras Categorías</h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ropa para toda la familia con el estilo y la calidad que caracteriza a GM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-2xl shadow-lg h-96">
              <div className="absolute inset-0">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">{category.name}</h3>
                <p className="text-white/80 mb-6 transform translate-y-0 group-hover:translate-y-[-8px] transition-transform duration-300">
                  {category.description}
                </p>
                <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 group-hover:border-white/50 transition-all duration-300 flex items-center gap-2">
                  Explorar {category.name}
                  <ArrowRight className="h-4 w-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
