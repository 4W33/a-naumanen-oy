import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    const mailtoLink = `mailto:office@anaumanenoy.fi?subject=Yhteydenottopyyntö&body=Nimi: ${formData.name}%0APuhelin: ${formData.phone}%0ASähköposti: ${formData.email}%0AViesti: ${formData.message}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 sm:mb-8">Yhteydenottolomake</h3>
      
      <div className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-base sm:text-lg font-bold text-gray-900 mb-2">
            Nimi *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none text-base sm:text-lg touch-manipulation"
            placeholder="Nimesi"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-base sm:text-lg font-bold text-gray-900 mb-2">
            Puhelinnumero *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none text-base sm:text-lg touch-manipulation"
            placeholder="Puhelinnumerosi"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-base sm:text-lg font-bold text-gray-900 mb-2">
            Sähköposti *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none text-base sm:text-lg touch-manipulation"
            placeholder="sähköposti@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-base sm:text-lg font-bold text-gray-900 mb-2">
            Lisätietoja
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none text-base sm:text-lg resize-none touch-manipulation"
            placeholder="Kerro meille projektistasi..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl touch-manipulation"
        >
          Lähetä
        </button>
      </div>
    </form>
  )
}

export default ContactForm

