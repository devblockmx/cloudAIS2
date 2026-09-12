import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Collections from './components/Collections.jsx'
import Bestsellers from './components/Bestsellers.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Bestsellers />
        <HowItWorks />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
