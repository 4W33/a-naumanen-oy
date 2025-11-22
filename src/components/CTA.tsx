import scrapedData from '../data/scraped-data.json'
import ContactForm from './ContactForm'
import Map from './Map'

const CTA = () => {
  return (
    <section id="yhteystiedot" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Ota yhteyttä
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Kysy lisää palveluistamme tai pyydä tarjous. Vastaamme mielellämme 
            kaikkiin kysymyksiisi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 sm:mb-6">Työnjohto ja tilaukset</h3>
              <p className="text-lg sm:text-xl mb-2 sm:mb-3">
                <a href={`tel:${scrapedData.company.phone.replace(/\s/g, '')}`} className="text-gray-900 hover:text-gray-700 transition-colors duration-200 font-bold touch-manipulation">
                  {scrapedData.company.phone}
                </a>
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                <a href={`mailto:${scrapedData.company.emailWork}`} className="hover:text-gray-900 transition-colors duration-200 touch-manipulation">
                  {scrapedData.company.emailWork}
                </a>
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 sm:mb-6">Toimistoasiat</h3>
              <p className="text-lg sm:text-xl mb-2 sm:mb-3">
                <a href={`tel:${scrapedData.company.phoneOffice.replace(/\s/g, '')}`} className="text-gray-900 hover:text-gray-700 transition-colors duration-200 font-bold touch-manipulation">
                  {scrapedData.company.phoneOffice}
                </a>
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                <a href={`mailto:${scrapedData.company.email}`} className="hover:text-gray-900 transition-colors duration-200 touch-manipulation">
                  {scrapedData.company.email}
                </a>
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 sm:mb-6">Osoite</h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-2">
                {scrapedData.company.address}
              </p>
              <p className="text-base sm:text-lg text-gray-500">
                Y-tunnus: {scrapedData.company.ytunnus}
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-12">
          <Map />
        </div>
      </div>
    </section>
  )
}

export default CTA

