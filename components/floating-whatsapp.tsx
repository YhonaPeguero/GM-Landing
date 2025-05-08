"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("Hola GM, me interesa conocer más sobre sus productos. ¿Podría ayudarme?")

  const openWhatsApp = () => {
    window.open(`https://wa.me/+18494062906?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-3 sm:p-4 mb-3 sm:mb-4 w-64 sm:w-72 transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center mb-2 sm:mb-3">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-1.5 sm:p-2 mr-2">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-gray-800">WhatsApp Chat</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 touch-manipulation"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
            Envíanos un mensaje por WhatsApp y te responderemos lo antes posible.
          </p>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-xs sm:text-sm mb-2 sm:mb-3 focus:ring-green-500 focus:border-green-500"
            rows={3}
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>

          <Button
            onClick={openWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 py-1.5 sm:py-2 text-xs sm:text-sm touch-manipulation"
          >
            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            Enviar por WhatsApp
          </Button>
        </div>
      )}

      {/* Hover Tooltip */}
      {!isOpen && isHovered && (
        <div className="flex items-center transition-all duration-300 ease-in-out mb-2 bg-white rounded-full shadow-lg pr-3 sm:pr-4 pl-2 py-1.5 sm:py-2">
          <span className="text-xs sm:text-sm text-gray-800 font-medium">¿Necesitas ayuda?</span>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "hover:scale-110"
        } touch-manipulation`}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat de WhatsApp"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </Button>
    </div>
  )
}
