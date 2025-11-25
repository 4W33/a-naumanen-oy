import scrapedData from '../data/scraped-data.json'
import imagesData from '../data/images.json'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 sm:py-12">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10">
          <div>
            <h3 className="text-white text-lg sm:text-xl font-black mb-3 sm:mb-4">{scrapedData.company.name}</h3>
            <p className="mb-2 text-sm sm:text-base">{scrapedData.company.address}</p>
            <p className="text-gray-500 text-xs sm:text-sm">Y-tunnus: {scrapedData.company.ytunnus}</p>
          </div>

          <div>
            <h3 className="text-white text-lg sm:text-xl font-black mb-3 sm:mb-4">Yhteystiedot</h3>
            <p className="mb-2 text-sm sm:text-base">
              <a href={`tel:${scrapedData.company.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors touch-manipulation">
                {scrapedData.company.phone}
              </a>
            </p>
            <p className="mb-2 text-sm sm:text-base">
              <a href={`mailto:${scrapedData.company.email}`} className="hover:text-white transition-colors touch-manipulation">
                {scrapedData.company.email}
              </a>
            </p>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-white text-lg sm:text-xl font-black mb-3 sm:mb-4">Navigointi</h3>
            <div className="space-y-1.5 sm:space-y-2">
              <a href="#etusivu" className="block hover:text-white apple-transition text-sm sm:text-base touch-manipulation">
                Etusivu
              </a>
              <a href="#palvelut" className="block hover:text-white apple-transition text-sm sm:text-base touch-manipulation">
                Palvelut
              </a>
              <a href="#referenssit" className="block hover:text-white apple-transition text-sm sm:text-base touch-manipulation">
                Referenssit
              </a>
              <a href="#yhteystiedot" className="block hover:text-white apple-transition text-sm sm:text-base touch-manipulation">
                Ota yhteyttä
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6">
            {imagesData.certifications.map((cert, index) => (
              <img
                key={index}
                src={cert}
                alt={`Sertifikaatti ${index + 1}`}
                className="h-10 sm:h-12 md:h-14 w-auto opacity-80 hover:opacity-100 apple-transition hover:scale-110"
              />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 sm:pt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">&copy; {new Date().getFullYear()} {scrapedData.company.name}. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

