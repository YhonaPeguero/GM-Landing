"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
      <Button
        onClick={scrollToTop}
        className={`
          h-14 w-14 rounded-full bg-teal-700 hover:bg-teal-800 text-white shadow-lg 
          transition-all duration-300 hover:scale-110 touch-manipulation
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        `}
        aria-label="Volver arriba"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  )
}
