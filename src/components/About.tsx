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
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Rakennusliike A. Naumanen Oy
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
              {scrapedData.content.tagline}
            </p>
          </div>
          
          <div className="mb-8 sm:mb-12 px-4">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
              {scrapedData.content.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 px-4">
            {scrapedData.content.sections.map((section, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-gray-300 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-3 sm:mb-4 tracking-tight">
                  {section.heading}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
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

