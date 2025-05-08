"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setSubmitted(true)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-teal-800 to-teal-900 text-white relative overflow-hidden">
      {/* Abstract shapes for modern look */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-pink-500 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-teal-400 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Únete a Nuestra Comunidad</h2>

          <p className="text-lg text-white/80 mb-8">
            Suscríbete para recibir las últimas novedades, tendencias y ofertas exclusivas directamente en tu correo.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">¡Gracias por suscribirte!</h3>
              <p className="text-white/80">Pronto recibirás nuestras novedades.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-sm rounded-full"
            >
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow bg-white/10 border-transparent text-white placeholder:text-white/60 focus:border-pink-500 focus:ring-pink-500 rounded-full pl-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-6 py-2 flex items-center gap-2"
              >
                Suscribirse
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
