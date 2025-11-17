import {
  Boxes, ShoppingCart, BedDouble, Wrench, Users, Broom, CalendarCheck2, CalendarRange, MessageSquare, Calculator, BarChart3, Gauge
} from 'lucide-react'

const modules = [
  { icon: Boxes, title: 'Gestion des stocks', desc: 'Suivi en temps réel, alertes de seuil et inventaires multi-entrepôts.' },
  { icon: ShoppingCart, title: 'Points de vente', desc: 'POS omnicanal pour restaurants, bars et boutiques de l’hôtel.' },
  { icon: BedDouble, title: 'Hébergement', desc: 'Moteur de réservation, PMS, check-in/out, plans d’étage et tarifs.' },
  { icon: Wrench, title: 'Maintenance', desc: 'Tickets, priorités, SLA et suivi des interventions sur mobile.' },
  { icon: Users, title: 'Gestion du personnel', desc: 'Plannings, contrats, droits d’accès et portail collaborateur.' },
  { icon: Broom, title: 'Housekeeping', desc: 'Statuts des chambres, tournées, checklists et contrôle qualité.' },
  { icon: CalendarCheck2, title: 'Planning', desc: 'Planification intuitive des ressources, équipes et disponibilités.' },
  { icon: CalendarRange, title: 'Événements & MICE', desc: 'Salles, devis, BEOs, factures et parcours client unifié.' },
  { icon: MessageSquare, title: 'Messagerie', desc: 'Centralisation des conversations WhatsApp, SMS, email et web.' },
  { icon: Calculator, title: 'Comptabilité', desc: 'Écritures, rapprochements, TVA et exports comptables.' },
  { icon: BarChart3, title: 'Reporting', desc: 'Tableaux de bord, KPIs temps réel et rapports automatisés.' },
  { icon: Gauge, title: 'Yield Management', desc: 'Optimisation tarifaire dynamique basée sur la demande.' },
]

export default function Modules() {
  return (
    <section id="modules" className="relative py-20 sm:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-black" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Tous vos modules, un seul hub</h2>
          <p className="hidden sm:block text-white/60 max-w-xl">Conçu pour des équipes exigeantes. Chaque brique fonctionne seule, et encore mieux ensemble.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {modules.map((m) => (
            <div key={m.title} className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 hover:bg-white/[0.06] transition overflow-hidden">
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <m.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">{m.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{m.desc}</p>
              <div className="mt-4 text-xs text-white/40">Intégrable, API-first, mobile-ready</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
