"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    setLoaded(true)

    const video = videoRef.current
    if (!video) return

    const handleVideoLoad = () => {
      console.log("Video loaded successfully")
      setVideoLoaded(true)
      video.play().catch((error) => {
        console.error("Video autoplay failed:", error)
        setVideoError(true)
      })
    }

    const handleVideoError = (error: Event) => {
      console.error("Video loading error:", error)
      setVideoError(true)
    }

    video.addEventListener("loadeddata", handleVideoLoad)
    video.addEventListener("error", handleVideoError)

    return () => {
      video.removeEventListener("loadeddata", handleVideoLoad)
      video.removeEventListener("error", handleVideoError)
    }
  }, [])

  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Video Background with Fallback */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        {(!videoLoaded || videoError) && (
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-gray-900 animate-pulse"></div>
        )}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`object-cover w-full h-full transition-opacity duration-1000 ${videoLoaded && !videoError ? "opacity-100" : "opacity-0"}`}
        >
          <source src="/video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      </div>

      {/* Wave Overlay Mejorado */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none" style={{ marginBottom: '-2px' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full block"
          style={{ display: 'block', width: '100vw', minHeight: '40px' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z"
            fill="#fff"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto h-full flex flex-col justify-center px-6 sm:px-8 pt-20">
        <div
          className={`max-w-3xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-md">
            Viste tu <span className="text-teal-400">mejor versión</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
            Descubre prendas que no solo vistes, sino que te transforman.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              onClick={scrollToCollection}
            >
              Ver Colección
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-pink-700 hover:bg-pink-800 text-white border-pink-600 hover:border-pink-500 px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              onClick={() => document.getElementById("women")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explorar
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="hidden">
            <span className="text-xs sm:text-sm text-gray-800 font-medium">¿Necesitas ayuda?</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-0 right-0 z-20 flex justify-center">
        <button
          className="animate-bounce cursor-pointer bg-white/10 backdrop-blur-sm p-3 rounded-full transition-colors hover:bg-white/20"
          onClick={scrollToCollection}
          aria-label="Scroll to collection"
        >
          <ChevronDown className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  )
}
