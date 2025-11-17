import { Menu, Building2, LogIn } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-cyan-500">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-tight text-white/90">OneHotel Suite</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a href="#modules" className="hover:text-white transition">Modules</a>
              <a href="#features" className="hover:text-white transition">Fonctionnalités</a>
              <a href="#pricing" className="hover:text-white transition">Tarifs</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10 transition">
                <LogIn className="h-4 w-4" /> Se connecter
              </button>
              <button className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/80 hover:bg-white/10">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
