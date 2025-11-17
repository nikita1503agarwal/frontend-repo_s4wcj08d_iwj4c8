import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Modules from './components/Modules'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Modules />
      <CTA />
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} OneHotel Suite — Tous droits réservés</p>
            <div className="flex items-center gap-5 text-white/50 text-sm">
              <a href="#" className="hover:text-white">Confidentialité</a>
              <a href="#" className="hover:text-white">Sécurité</a>
              <a href="#" className="hover:text-white">Statut</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
