import scrapedData from '../data/scraped-data.json'
import imagesData from '../data/images.json'

const Services = () => {
  const services = scrapedData.services.list

  const getServiceImage = (serviceName: string): string => {
    const services = imagesData.services as Record<string, string>
    return services[serviceName] || services["Pääurakointi"] || ""
  }

  return (
    <section id="palvelut" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 tracking-tight px-4">
            {scrapedData.services.mainHeading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {scrapedData.services.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
          {services.map((service, index) => {
            const serviceImage = getServiceImage(service)
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg card-hover cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={serviceImage}
                    alt={service}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 text-white transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black leading-tight">
                    {service}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            {scrapedData.services.description}
          </p>
          <a
            href="#yhteystiedot"
            className="inline-block bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-gray-800 apple-transition transform hover:scale-105 active:scale-95 shadow-xl touch-manipulation hover:shadow-2xl"
          >
            Kysy lisää palveluistamme
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services

