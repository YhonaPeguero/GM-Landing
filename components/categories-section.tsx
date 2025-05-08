"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

const categories = [
  {
    id: "women",
    name: "Mujer",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
    description: "Elegancia y estilo para cada momento de tu vida",
  },
  {
    id: "men",
    name: "Hombre",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1000&auto=format&fit=crop",
    description: "Sofisticación y confort que refleja tu personalidad",
  },
  {
    id: "kids",
    name: "Niños",
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=1000&auto=format&fit=crop",
    description: "Moda divertida y cómoda para los que más quieres",
  },
]

export function CategoriesSection() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({
      ...prev,
      [id]: true,
    }))
  }

  const openWhatsApp = (category: string) => {
    const message = `Hola GM, estoy interesado/a en conocer más sobre su colección de ${category}. ¿Podría mostrarme las opciones disponibles?`
    window.open(`https://wa.me/+18494062906?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Encuentra Tu Estilo</h2>
          <div className="w-24 h-1 bg-pink-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto px-2 sm:px-0">
            Explora nuestras colecciones diseñadas para cada miembro de la familia. Porque el estilo no conoce edad ni
            género.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              id={category.id}
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px] md:h-[500px] transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gray-200">
                {!loadedImages[category.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Skeleton className="w-full h-full" />
                  </div>
                )}
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={`Colección de moda para ${category.name}`}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                    loadedImages[category.id] ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onLoad={() => handleImageLoad(category.id)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
                <h3 className="text-3xl font-serif font-bold mb-3">{category.name}</h3>
                <p className="text-white mb-6 transform translate-y-0 group-hover:translate-y-[-8px] transition-transform duration-300 px-2 sm:px-0">
                  {category.description}
                </p>
                <Button
                  onClick={() => openWhatsApp(category.name)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 group-hover:border-white/50 transition-all duration-300 flex items-center gap-2 group-hover:bg-white/40 mx-auto"
                >
                  Descubrir {category.name}
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
