import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="relative h-16 w-40">
                <Image
                  src="/images/gm-logo-new.png"
                  alt="GM Logo"
                  fill
                  className="object-contain brightness-200 contrast-125"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Ropa para toda la familia con el estilo y la calidad que nos caracteriza. Elegancia, confort y distinción
              en cada prenda.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors hover:scale-110 transform inline-block"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors hover:scale-110 transform inline-block"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors hover:scale-110 transform inline-block"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contacto
              <span className="absolute -bottom-2 left-0 right-0 md:right-auto w-12 h-0.5 bg-teal-500 mx-auto md:mx-0"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  La Romana, municipio Villa Hermosa, Calle V Centenario esquina de Amín Abel Hasbún.
                </span>
              </li>
              <li className="flex items-center group justify-center md:justify-start">
                <Phone className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0 group-hover:text-pink-400 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">+1 (849) 406-2906</span>
              </li>
              <li className="flex items-center group justify-center md:justify-start">
                <Mail className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0 group-hover:text-pink-400 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">info@gmclothing.com</span>
              </li>
              <li className="flex items-start group justify-center md:justify-start">
                <Clock className="h-5 w-5 text-teal-400 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Lun - Vie: 8:00 AM - 6:00 PM
                  <br />
                  Sáb: No laboral
                  <br />
                  Dom: 8:00 AM - 12:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block text-center md:text-left">
              Horario de Atención
              <span className="absolute -bottom-2 left-0 right-0 md:right-auto w-12 h-0.5 bg-teal-500 mx-auto md:mx-0"></span>
            </h3>
            <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Lunes - Viernes</span>
                  <span className="text-white">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sábado</span>
                  <span className="text-white font-medium text-pink-300">Cerrado</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Domingo</span>
                  <span className="text-white">8:00 - 12:00</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700 text-center md:text-left">
                <p className="text-gray-400 mb-2">¿Necesitas ayuda?</p>
                <p className="text-xl font-bold text-white">+1 (849) 406-2906</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} GM Clothing. Todos los derechos reservados.
            </p>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                Términos y Condiciones
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
