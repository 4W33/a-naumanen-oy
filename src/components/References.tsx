import { useState } from 'react'
import scrapedData from '../data/scraped-data.json'

const References = () => {
  const references = scrapedData.references.items
  const [expandedYear, setExpandedYear] = useState<string | null>('2025')
  
  // Group references by year
  const groupedByYear = references.reduce((acc, ref) => {
    if (!acc[ref.year]) {
      acc[ref.year] = []
    }
    acc[ref.year].push(ref)
    return acc
  }, {} as Record<string, typeof references>)

  const years = Object.keys(groupedByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <section id="referenssit" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Referenssit
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {scrapedData.references.intro}
          </p>
        </div>

        {/* Accordion by year */}
        <div className="space-y-3 sm:space-y-4">
          {years.map((year, index) => (
            <div
              key={year}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <button
                onClick={() => setExpandedYear(expandedYear === year ? null : year)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 text-left touch-manipulation"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                  {year}
                </h3>
                <svg
                  className={`w-6 h-6 text-gray-600 transition-transform ${
                    expandedYear === year ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expandedYear === year && (
                <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 space-y-3 sm:space-y-4 border-t border-gray-200 pt-4 sm:pt-6 animate-fade-in">
                  {groupedByYear[year].map((ref, index) => (
                    <div
                      key={index}
                      className="pb-3 sm:pb-4 border-b border-gray-100 last:border-b-0 last:pb-0 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-2 -mx-2"
                      style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
                    >
                      <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                        {ref.title}
                      </h4>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        {ref.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <a
            href="#yhteystiedot"
            className="inline-block bg-gray-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl touch-manipulation"
          >
            Ota yhteyttä ja kysy lisää
          </a>
        </div>
      </div>
    </section>
  )
}

export default References

