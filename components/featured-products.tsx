import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Vestido Elegante",
    price: "$89.99",
    image: "/images/product-1.jpg",
    category: "Mujer",
  },
  {
    id: 2,
    name: "Traje Formal",
    price: "$129.99",
    image: "/images/product-2.jpg",
    category: "Hombre",
  },
  {
    id: 3,
    name: "Conjunto Casual",
    price: "$59.99",
    image: "/images/product-3.jpg",
    category: "Niños",
  },
  {
    id: 4,
    name: "Blusa Premium",
    price: "$49.99",
    image: "/images/product-4.jpg",
    category: "Mujer",
  },
]

export function FeaturedProducts() {
  return (
    <section id="featured" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Colección Destacada</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras prendas más exclusivas, diseñadas con los mejores materiales y la más alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-xl bg-gray-50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                  <Button className="bg-white text-teal-600 hover:bg-teal-50 rounded-full w-12 h-12 p-0 flex items-center justify-center shadow-lg">
                    <ShoppingBag className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <span className="text-lg font-semibold text-teal-700">{product.price}</span>
                </div>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>

              <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Nuevo
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-teal-6কিন্তon hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-md transition-all duration-300">
            Ver Toda la Colección
          </Button>
        </div>
      </div>
    </section>
  )
}
