const Map = () => {
  // Reunatie 38, 01830 Lepsämä coordinates
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.5!2d25.123456!3d60.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4691f5c123456789%3A0x1234567890abcdef!2sReunatie%2038%2C%2001830%20Leps%C3%A4m%C3%A4!5e0!3m2!1sfi!2sfi!4v1234567890123!5m2!1sfi!2sfi"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="A. Naumanen Oy sijainti - Reunatie 38, 01830 Lepsämä"
      ></iframe>
    </div>
  )
}

export default Map

