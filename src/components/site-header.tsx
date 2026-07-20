import { ArrowUpRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(250,236,241,0.48))] px-4 py-3 shadow-[0_18px_55px_rgba(62,20,34,0.1),inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-[#6f1831]/5 backdrop-blur-[26px] backdrop-saturate-150 sm:px-5">
        <div className="pointer-events-none absolute inset-x-16 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(111,24,49,0.22),transparent)]" />
        <a
          href="#top"
          className="group flex items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6f1831]"
          aria-label="Avensyn Tech home"
        >
          <img
            src="/avensyn-logo.png"
            alt="Avensyn Tech"
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-2 text-[15px] text-[#554a4e] transition duration-300 hover:-translate-y-0.5 hover:text-[#6f1831]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(110deg,#6f1831,#8a1d3e)] px-5 py-2.5 text-[15px] font-medium text-white shadow-[0_8px_24px_rgba(111,24,49,0.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(111,24,49,0.28)] md:flex"
        >
          <span className="absolute inset-y-0 -left-10 w-7 skew-x-[-18deg] bg-white/20 blur-sm transition-transform duration-700 group-hover:translate-x-[250px]" />
          <span className="relative">Discuss your project</span>
          <ArrowUpRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-black/10 text-[#21191c] md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            className="mx-auto mt-2 grid max-w-7xl gap-1 rounded-2xl border border-black/8 bg-white p-3 shadow-2xl md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-base text-[#4f4549] transition-colors hover:bg-[#fbf5f7] hover:text-[#6f1831]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 flex items-center justify-between rounded-xl bg-[#6f1831] px-4 py-3 text-base font-medium text-white"
              onClick={() => setMenuOpen(false)}
            >
              Discuss your project
              <ArrowUpRight className="size-4" />
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
