import scrapedData from '../data/scraped-data.json'
import ContactForm from './ContactForm'
import Map from './Map'

const CTA = () => {
  return (
    <section id="yhteystiedot" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Ota yhteyttä
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Kysy lisää palveluistamme tai pyydä tarjous. Vastaamme mielellämme 
            kaikkiin kysymyksiisi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl card-hover animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 sm:mb-4">Työnjohto ja tilaukset</h3>
              <p className="text-base sm:text-lg mb-2">
                <a href={`tel:${scrapedData.company.phone.replace(/\s/g, '')}`} className="text-gray-900 hover:text-gray-700 transition-colors duration-200 font-bold touch-manipulation">
                  {scrapedData.company.phone}
                </a>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                <a href={`mailto:${scrapedData.company.emailWork}`} className="hover:text-gray-900 transition-colors duration-200 touch-manipulation">
                  {scrapedData.company.emailWork}
                </a>
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 sm:mb-4">Toimistoasiat</h3>
              <p className="text-base sm:text-lg mb-2">
                <a href={`tel:${scrapedData.company.phoneOffice.replace(/\s/g, '')}`} className="text-gray-900 hover:text-gray-700 transition-colors duration-200 font-bold touch-manipulation">
                  {scrapedData.company.phoneOffice}
                </a>
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                <a href={`mailto:${scrapedData.company.email}`} className="hover:text-gray-900 transition-colors duration-200 touch-manipulation">
                  {scrapedData.company.email}
                </a>
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-3 sm:mb-4">Osoite</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-2">
                {scrapedData.company.address}
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Y-tunnus: {scrapedData.company.ytunnus}
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-8">
          <Map />
        </div>
      </div>
    </section>
  )
}

export default CTA

