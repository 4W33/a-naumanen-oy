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
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Referenssit
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {scrapedData.references.intro}
          </p>
        </div>

        {/* Accordion by year */}
        <div className="space-y-3 sm:space-y-4">
          {years.map((year, index) => (
            <div
              key={year}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-200 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <button
                onClick={() => setExpandedYear(expandedYear === year ? null : year)}
                className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 text-left touch-manipulation"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">
                  {year}
                </h3>
                <svg
                  className={`w-6 h-6 text-gray-600 apple-transition ${
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
                <div className="px-3 sm:px-4 md:px-6 pb-4 sm:pb-6 space-y-2 sm:space-y-3 border-t border-gray-200 pt-3 sm:pt-4 animate-fade-in">
                  {groupedByYear[year].map((ref, index) => (
                    <div
                      key={index}
                      className="pb-2 sm:pb-3 border-b border-gray-100 last:border-b-0 last:pb-0 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-2 -mx-2"
                      style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
                    >
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                        {ref.title}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        {ref.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8 px-4">
          <a
            href="#yhteystiedot"
            className="inline-block bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-gray-800 apple-transition transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl touch-manipulation"
          >
            Ota yhteyttä ja kysy lisää
          </a>
        </div>
      </div>
    </section>
  )
}

export default References

