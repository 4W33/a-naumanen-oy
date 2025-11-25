import scrapedData from '../data/scraped-data.json'

const Hero = () => {
  return (
    <section id="etusivu" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-16 overflow-hidden">
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 tracking-tight">
          {scrapedData.company.name}
        </h1>
        <div className="max-w-2xl mx-auto space-y-2 sm:space-y-3 md:space-y-4 mb-5 sm:mb-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {scrapedData.hero.title1}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-100 drop-shadow-md animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            {scrapedData.hero.title2}
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 drop-shadow-sm animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            {scrapedData.hero.title3}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center px-4 animate-scale-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <a
            href="#palvelut"
            className="bg-white text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 apple-transition transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-3xl touch-manipulation"
          >
            Palvelut
          </a>
          <a
            href="#yhteystiedot"
            className="bg-transparent border-2 border-white text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-white/10 apple-transition transform hover:scale-105 active:scale-95 backdrop-blur-sm touch-manipulation"
          >
            Ota yhteyttä
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative">
          {/* Animated background circle - transparent with pulsing effect */}
          <div className="absolute inset-0 -m-4 rounded-full bg-white/20 backdrop-blur-sm animate-pulse-scale"></div>
          <div className="relative">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white opacity-90 hover:opacity-100 transition-opacity animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

