export default function CTA() {
  return (
    <section id="demo" className="relative py-16 sm:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/30 via-slate-950 to-black" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-6 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Passez à la vitesse supérieure</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Installez, connectez vos canaux et commencez à piloter votre hôtel en quelques minutes, pas en semaines.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center rounded-lg bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">Démarrer l’essai gratuit</button>
            <button className="inline-flex items-center rounded-lg border border-white/15 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">Parler à un expert</button>
          </div>
          <p className="mt-3 text-xs text-white/50">Sécure par design • RGPD • Disponible sur web et mobile</p>
        </div>
      </div>
    </section>
  )
}
