"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export function AboutSection() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Sobre GM</h2>
            <div className="w-24 h-1 bg-teal-700 mb-8 mx-auto lg:mx-0"></div>

            <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
              Transformamos la moda en una experiencia única. En GM no solo vendemos ropa, creamos estilo que refleja tu
              personalidad y eleva tu confianza en cada ocasión.
            </p>

            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
              Nuestra misión es simple: ofrecer prendas excepcionales que te hagan sentir extraordinario, sin
              comprometer tu bolsillo.
            </p>

            <div className="space-y-6 mb-10 max-w-xl mx-auto lg:mx-0 text-left px-4 sm:px-0">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-teal-700 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Calidad que Perdura</h4>
                  <p className="text-gray-700">
                    Cada prenda está diseñada para resistir el paso del tiempo, tanto en estilo como en durabilidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-pink-700 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Diseño con Propósito</h4>
                  <p className="text-gray-700">
                    Creamos piezas que no solo se ven bien, sino que te hacen sentir increíble al usarlas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-teal-700 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Servicio Excepcional</h4>
                  <p className="text-gray-700">
                    Nuestro equipo está comprometido a convertir cada compra en una experiencia memorable.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-teal-700 hover:bg-teal-800 text-white flex items-center gap-2 transition-transform hover:scale-105 mx-auto lg:mx-0 px-6 py-3 text-lg">
              Descubre nuestra historia
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative order-first lg:order-last mb-10 lg:mb-0">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-200">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Skeleton className="w-full h-full" />
                </div>
              )}
              <Image
                src="/images/store-interior.jpg"
                alt="Interior de la tienda GM mostrando ropa elegante y de alta calidad"
                fill
                className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                onLoad={() => setImageLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs transform transition-transform hover:scale-105">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-teal-700 p-3 rounded-full text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Satisfacción Garantizada</h3>
              </div>
              <p className="text-gray-700">
                Si no estás completamente satisfecho, encontraremos la solución perfecta para ti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
