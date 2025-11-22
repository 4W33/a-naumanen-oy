import scrapedData from '../data/scraped-data.json'
import imagesData from '../data/images.json'

const Services = () => {
  const services = scrapedData.services.list

  return (
    <section id="palvelut" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight px-4">
            {scrapedData.services.mainHeading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            {scrapedData.services.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {services.map((service, index) => {
            const serviceImage = imagesData.services[service] || imagesData.services["Pääurakointi"]
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={serviceImage}
                    alt={service}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight">
                    {service}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            {scrapedData.services.description}
          </p>
          <a
            href="#yhteystiedot"
            className="inline-block bg-gray-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl touch-manipulation"
          >
            Kysy lisää palveluistamme
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services

