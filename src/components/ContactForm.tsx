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
    <form onSubmit={handleSubmit} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl card-hover">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 sm:mb-6">Yhteydenottolomake</h3>
      
      <div className="space-y-3 sm:space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm sm:text-base font-bold text-gray-900 mb-1.5">
            Nimi *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none text-sm sm:text-base touch-manipulation apple-transition focus:ring-2 focus:ring-gray-900/20"
            placeholder="Nimesi"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm sm:text-base font-bold text-gray-900 mb-1.5">
            Puhelinnumero *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none text-sm sm:text-base touch-manipulation apple-transition focus:ring-2 focus:ring-gray-900/20"
            placeholder="Puhelinnumerosi"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm sm:text-base font-bold text-gray-900 mb-1.5">
            Sähköposti *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none text-sm sm:text-base touch-manipulation apple-transition focus:ring-2 focus:ring-gray-900/20"
            placeholder="sähköposti@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm sm:text-base font-bold text-gray-900 mb-1.5">
            Lisätietoja
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none text-sm sm:text-base resize-none touch-manipulation"
            placeholder="Kerro meille projektistasi..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-black text-sm sm:text-base hover:bg-gray-800 apple-transition transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl touch-manipulation"
        >
          Lähetä
        </button>
      </div>
    </form>
  )
}

export default ContactForm

