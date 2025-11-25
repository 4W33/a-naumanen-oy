import { useState } from 'react'
import imagesData from '../data/images.json'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-gray-800/50 apple-transition">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#etusivu" className="flex items-center">
            <img 
              src={imagesData.logo} 
              alt="A. Naumanen Oy" 
              className="h-10 sm:h-12 md:h-14 w-auto brightness-0 invert filter"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#etusivu" className="text-gray-300 hover:text-white font-semibold apple-transition text-base relative group">
              Etusivu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#palvelut" className="text-gray-300 hover:text-white font-semibold apple-transition text-base relative group">
              Palvelut
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#referenssit" className="text-gray-300 hover:text-white font-semibold apple-transition text-base relative group">
              Referenssit
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#yhteystiedot" className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-gray-100 apple-transition transform hover:scale-105 active:scale-95 text-base shadow-lg hover:shadow-xl">
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
          <div className="md:hidden pb-4 space-y-3 pt-3">
            <a href="#etusivu" className="block text-gray-300 hover:text-white font-semibold transition-colors text-base py-2" onClick={() => setIsOpen(false)}>
              Etusivu
            </a>
            <a href="#palvelut" className="block text-gray-300 hover:text-white font-semibold transition-colors text-base py-2" onClick={() => setIsOpen(false)}>
              Palvelut
            </a>
            <a href="#referenssit" className="block text-gray-300 hover:text-white font-semibold transition-colors text-base py-2" onClick={() => setIsOpen(false)}>
              Referenssit
            </a>
            <a href="#yhteystiedot" className="block bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform active:scale-95 text-center text-base" onClick={() => setIsOpen(false)}>
              Ota yhteyttä
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

