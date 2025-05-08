"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useMobile()
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store current scroll position
      setScrollPosition(window.pageYOffset)
      // Apply styles to body
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollPosition}px`
      document.body.style.width = "100%"
    } else {
      // Restore scroll position
      document.body.style.removeProperty("overflow")
      document.body.style.removeProperty("position")
      document.body.style.removeProperty("top")
      document.body.style.removeProperty("width")
      window.scrollTo(0, scrollPosition)
    }
  }, [isMobileMenuOpen, scrollPosition])

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    } else if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const navItems = [
    { name: "Inicio", href: "#hero", sectionId: "hero" },
    { name: "Colección", href: "#collection", sectionId: "collection" },
    { name: "Mujer", href: "#women", sectionId: "women" },
    { name: "Hombre", href: "#men", sectionId: "men" },
    { name: "Niños", href: "#kids", sectionId: "kids" },
    { name: "Nosotros", href: "#about", sectionId: "about" },
  ]

  const openWhatsApp = () => {
    const message = "Hola GM, me interesa conocer más sobre sus productos. ¿Podría ayudarme?"
    window.open(`https://wa.me/+18494062906?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {!isMobileMenuOpen && (
              <a href="#hero" onClick={(e) => scrollToSection("hero", e)} className="relative z-10">
                <div className="relative h-12 w-32 sm:h-14 sm:w-40">
                  <Image src="/images/gm-logo-new.png" alt="GM Logo" fill className="object-contain" priority />
                </div>
              </a>
            )}

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(item.sectionId, e)}
                  className={`text-sm font-medium transition-colors hover:text-teal-700 relative group ${
                    isScrolled ? "text-gray-800" : "text-white font-semibold drop-shadow-md"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full transition-transform hover:scale-110 hover:bg-transparent ${
                  isScrolled ? "text-gray-800 hover:text-teal-700" : "text-white hover:text-pink-400"
                }`}
                aria-label="Mi cuenta"
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full transition-transform hover:scale-110 hover:bg-transparent ${
                  isScrolled ? "text-gray-800 hover:text-teal-700" : "text-white hover:text-pink-400"
                }`}
                aria-label="Carrito de compras"
              >
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button
                onClick={openWhatsApp}
                className={`rounded-full transition-transform hover:scale-105 ${
                  isScrolled
                    ? "bg-teal-700 hover:bg-teal-800 text-white"
                    : "bg-white hover:bg-white/90 text-teal-800 hover:text-teal-900"
                }`}
              >
                Contacto
              </Button>
            </div>

            {/* Mobile Menu Button */}
            {!isMobileMenuOpen && (
              <button
                className="md:hidden relative z-50 p-2"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Abrir menú"
              >
                <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu - Completely separate from header */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden overflow-y-auto flex flex-col">
          {/* Botón X para cerrar menú */}
          <button
            className="absolute top-6 right-6 z-50 p-2"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <X className="h-7 w-7 text-gray-800" />
          </button>
          <div className="flex flex-col min-h-screen pt-24 px-6 pb-8 flex-1">
            <div className="flex justify-center mb-8">
              <div className="relative h-16 w-48">
                <Image src="/images/gm-logo-new.png" alt="GM Logo" fill className="object-contain" />
              </div>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 space-y-4 py-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(item.sectionId, e)}
                  className="text-xl font-medium text-gray-800 hover:text-teal-700 transition-colors py-2 px-4 rounded-md hover:bg-gray-50 text-center"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex justify-center gap-4 mt-8 mb-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-gray-800 hover:text-teal-700 hover:bg-teal-50 hover:border-teal-200 h-12 w-12 border-gray-200"
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-gray-800 hover:text-pink-600 hover:bg-pink-50 hover:border-pink-200 h-12 w-12 border-gray-200"
              >
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-auto pb-8 px-4">
              <Button onClick={openWhatsApp} className="w-full bg-teal-700 hover:bg-teal-800 text-white py-6 text-lg">
                Contacto
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
