import scrapedData from '../data/scraped-data.json'

const Hero = () => {
  return (
    <section id="etusivu" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-20 overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Rakennustyöt"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center text-white px-4 sm:px-6 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 tracking-tight">
          {scrapedData.company.name}
        </h1>
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 mb-8 sm:mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {scrapedData.hero.title1}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-100 drop-shadow-md animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            {scrapedData.hero.title2}
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 drop-shadow-sm animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            {scrapedData.hero.title3}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-scale-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <a
            href="#palvelut"
            className="bg-white text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl touch-manipulation"
          >
            Palvelut
          </a>
          <a
            href="#yhteystiedot"
            className="bg-transparent border-2 sm:border-3 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm touch-manipulation"
          >
            Ota yhteyttä
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

