import { useState } from 'react'
import imagesData from '../data/images.json'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <a href="#etusivu" className="flex items-center">
            <img 
              src={imagesData.logo} 
              alt="A. Naumanen Oy" 
              className="h-12 sm:h-16 md:h-20 w-auto brightness-0 invert filter"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#etusivu" className="text-gray-300 hover:text-white font-semibold transition-colors text-lg">
              Etusivu
            </a>
            <a href="#palvelut" className="text-gray-300 hover:text-white font-semibold transition-colors text-lg">
              Palvelut
            </a>
            <a href="#referenssit" className="text-gray-300 hover:text-white font-semibold transition-colors text-lg">
              Referenssit
            </a>
            <a href="#yhteystiedot" className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg">
              Ota yhteyttä
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 pt-4">
            <a href="#etusivu" className="block text-gray-300 hover:text-white font-semibold transition-colors text-lg py-2" onClick={() => setIsOpen(false)}>
              Etusivu
            </a>
            <a href="#palvelut" className="block text-gray-300 hover:text-white font-semibold transition-colors text-lg py-2" onClick={() => setIsOpen(false)}>
              Palvelut
            </a>
            <a href="#referenssit" className="block text-gray-300 hover:text-white font-semibold transition-colors text-lg py-2" onClick={() => setIsOpen(false)}>
              Referenssit
            </a>
            <a href="#yhteystiedot" className="block bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform active:scale-95 text-center text-lg" onClick={() => setIsOpen(false)}>
              Ota yhteyttä
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

