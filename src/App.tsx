import Hero from './components/Hero'
import Services from './components/Services'
import References from './components/References'
import About from './components/About'
import CTA from './components/CTA'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <References />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

