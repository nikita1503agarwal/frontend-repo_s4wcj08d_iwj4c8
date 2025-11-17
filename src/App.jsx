import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Modules from './components/Modules'
import CTA from './components/CTA'
import ErrorBoundary from './components/ErrorBoundary'

const Hero = lazy(() => import('./components/Hero'))

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <ErrorBoundary
        fallback={
          <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-slate-950 to-black" />
              <div className="absolute -top-32 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Le QG moderne pour votre hôtel</h1>
                  <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-2xl">Chargement de l’expérience 3D…</p>
                </div>
                <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/5 to-white/10" />
                </div>
              </div>
            </div>
          </section>
        }
      >
        <Suspense
          fallback={
            <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="h-8 w-64 bg-white/10 rounded mb-4" />
                    <div className="h-4 w-80 bg-white/10 rounded" />
                  </div>
                  <div className="h-[420px] sm:h-[520px] lg:h-[580px] rounded-2xl border border-white/10 bg-white/5" />
                </div>
              </div>
            </section>
          }
        >
          <Hero />
        </Suspense>
      </ErrorBoundary>

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
