import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
