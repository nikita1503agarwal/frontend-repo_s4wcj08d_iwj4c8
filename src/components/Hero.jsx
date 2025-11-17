import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-slate-950 to-black" />
        <div className="absolute -top-32 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Le QG moderne pour votre hôtel
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0"
            >
              Unifiez stocks, points de vente, hébergement, maintenance, RH, housekeeping, planning, événements, calendrier, messagerie, comptabilité, reporting et yield management — en une seule plateforme élégante.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <a href="#modules" className="inline-flex items-center rounded-lg bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">Explorer les modules</a>
              <a href="#demo" className="inline-flex items-center rounded-lg border border-white/15 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">Voir une démo</a>
            </motion.div>
            <p className="mt-4 text-xs text-white/50">Essai gratuit • Sans carte • Installation en 60 secondes</p>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
