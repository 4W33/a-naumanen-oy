import scrapedData from '../data/scraped-data.json'
import imagesData from '../data/images.json'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 sm:py-16">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-black mb-4 sm:mb-6">{scrapedData.company.name}</h3>
            <p className="mb-2 text-base sm:text-lg">{scrapedData.company.address}</p>
            <p className="text-gray-500 text-sm sm:text-base">Y-tunnus: {scrapedData.company.ytunnus}</p>
          </div>

          <div>
            <h3 className="text-white text-xl sm:text-2xl font-black mb-4 sm:mb-6">Yhteystiedot</h3>
            <p className="mb-2 sm:mb-3 text-base sm:text-lg">
              <a href={`tel:${scrapedData.company.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors touch-manipulation">
                {scrapedData.company.phone}
              </a>
            </p>
            <p className="mb-2 sm:mb-3 text-base sm:text-lg">
              <a href={`mailto:${scrapedData.company.email}`} className="hover:text-white transition-colors touch-manipulation">
                {scrapedData.company.email}
              </a>
            </p>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-white text-xl sm:text-2xl font-black mb-4 sm:mb-6">Navigointi</h3>
            <div className="space-y-2 sm:space-y-3">
              <a href="#etusivu" className="block hover:text-white transition-colors text-base sm:text-lg touch-manipulation">
                Etusivu
              </a>
              <a href="#palvelut" className="block hover:text-white transition-colors text-base sm:text-lg touch-manipulation">
                Palvelut
              </a>
              <a href="#referenssit" className="block hover:text-white transition-colors text-base sm:text-lg touch-manipulation">
                Referenssit
              </a>
              <a href="#yhteystiedot" className="block hover:text-white transition-colors text-base sm:text-lg touch-manipulation">
                Ota yhteyttä
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 pt-8 sm:pt-12 mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {imagesData.certifications.map((cert, index) => (
              <img
                key={index}
                src={cert}
                alt={`Sertifikaatti ${index + 1}`}
                className="h-12 sm:h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-sm sm:text-base">&copy; {new Date().getFullYear()} {scrapedData.company.name}. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

