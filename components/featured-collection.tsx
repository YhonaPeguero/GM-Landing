"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, X } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

const featuredProducts = [
  {
    id: 1,
    name: "Blusa Bordada",
    price: "$350",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/203ea704-8ca0-47bd-b2d5-603834f57caa.jpg-oAdjqzoxBEmAUNvZng7rIN7SO42lEc.jpeg",
    category: "Mujer",
    isNew: true,
  },
  {
    id: 2,
    name: "Camisa Elegante",
    price: "$250",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ebc1bd94-2cee-42ff-ba4c-a4d7f4a41c30.jpg-reuJ7bNTGrK5JWU4Lg1vebhKtT73C7.jpeg",
    category: "Hombre",
  },
  {
    id: 3,
    name: "Conjunto Deportivo",
    price: "$250",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b65018a9-45dc-4c4b-b8f0-48025b65f19b.jpg-i7Cn4TYGNFW9u86giLQ5ccjplKM2ig.jpeg",
    category: "Niños",
    isNew: true,
  },
  {
    id: 4,
    name: "Top Veraniego",
    price: "$200",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c7217062-b0df-4f1d-912a-6b013c7a5810.jpg-C5DY8Sb3BgjDs9ASo5yJuhTrg9sOZf.jpeg",
    category: "Mujer",
  },
]

export function FeaturedCollection() {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({})
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({
      ...prev,
      [id]: true,
    }))
  }

  const scrollToCategory = (categoryId: string) => {
    document.getElementById(categoryId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleEyeClick = (e: React.MouseEvent, product: any) => {
    e.stopPropagation()
    setSelectedImage(product.image)
    setIsImageModalOpen(true)
  }

  return (
    <section id="collection" className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4 text-center md:text-left">
              Piezas que Inspiran
            </h2>
            <div className="w-24 h-1 bg-teal-700 mb-6 mx-auto md:mx-0"></div>
            <p className="text-lg text-gray-700 max-w-2xl text-center md:text-left px-2 sm:px-0">
              Descubre nuestra colección cuidadosamente seleccionada. Cada prenda cuenta una historia de estilo, calidad
              y distinción.
            </p>
          </div>

          <Button
            variant="ghost"
            className="hidden md:flex items-center text-teal-700 hover:text-teal-800 mt-4 md:mt-0 font-semibold group"
            onClick={() => {
              const sections = ["women", "men", "kids"]
              const randomSection = sections[Math.floor(Math.random() * sections.length)]
              scrollToCategory(randomSection)
            }}
          >
            Ver todo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-4 bg-gray-100">
                {!loadedImages[product.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Skeleton className="w-full h-full" />
                  </div>
                )}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                    loadedImages[product.id] ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  onLoad={() => handleImageLoad(product.id)}
                />

                {/* Mejorado: Hover Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 via-teal-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {/* Quick Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-pink-600/80 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                  <Button
                    size="icon"
                    className="rounded-full bg-white hover:bg-pink-50 text-pink-600 h-10 w-10 shadow-md hover:shadow-lg transform hover:scale-110 transition-all"
                    aria-label="Ver detalles"
                    onClick={(e) => handleEyeClick(e, product)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* New Tag */}
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-pink-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform group-hover:scale-110 transition-all duration-300">
                    Nuevo
                  </div>
                )}
              </div>

              {/* Product Info - Modernized */}
              <div className="px-1 group-hover:translate-y-[-4px] transition-transform duration-300">
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full cursor-pointer hover:bg-teal-100 transition-colors group-hover:bg-teal-100"
                    onClick={() => {
                      const categoryMap: Record<string, string> = {
                        Mujer: "women",
                        Hombre: "men",
                        Niños: "kids",
                      }
                      const sectionId = categoryMap[product.category] || "collection"
                      scrollToCategory(sectionId)
                    }}
                  >
                    {product.category}
                  </span>
                  <span className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                    {product.price}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-800 group-hover:text-teal-700 transition-colors truncate">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button
            variant="outline"
            className="text-teal-700 border-teal-700 hover:bg-teal-50 font-semibold flex items-center gap-2 mx-auto"
            onClick={() => {
              const sections = ["women", "men", "kids"]
              const randomSection = sections[Math.floor(Math.random() * sections.length)]
              scrollToCategory(randomSection)
            }}
          >
            Ver toda la colección
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {/* Modal de imagen */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg">
            <Button
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white"
              onClick={() => setIsImageModalOpen(false)}
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </Button>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Vista ampliada"
              width={800}
              height={1000}
              className="object-contain max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}
