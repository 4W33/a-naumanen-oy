import scrapedData from '../data/scraped-data.json'

const About = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight">
              Rakennusliike A. Naumanen Oy
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
              {scrapedData.content.tagline}
            </p>
          </div>
          
          <div className="mb-12 sm:mb-16 px-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
              {scrapedData.content.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4">
            {scrapedData.content.sections.map((section, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight">
                  {section.heading}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default About

