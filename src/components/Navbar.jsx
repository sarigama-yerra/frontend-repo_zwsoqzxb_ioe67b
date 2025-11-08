import { useState } from 'react';
import { Menu, X, CreditCard } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
              <CreditCard size={18} />
            </span>
            <span className="text-xl font-semibold tracking-tight text-slate-900">LumenPay</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 rounded-lg text-slate-700 hover:text-slate-900 transition-colors">Sign in</a>
            <a href="#" className="px-4 py-2 rounded-lg bg-slate-900 text-white shadow-sm hover:shadow-md transition-shadow">Get Started</a>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 hover:bg-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 grid gap-2 text-slate-700">
            <a href="#features" className="rounded-lg px-3 py-2 hover:bg-white">Features</a>
            <a href="#pricing" className="rounded-lg px-3 py-2 hover:bg-white">Pricing</a>
            <a href="#faq" className="rounded-lg px-3 py-2 hover:bg-white">FAQ</a>
            <div className="h-px bg-slate-200 my-2" />
            <a href="#" className="rounded-lg px-3 py-2 hover:bg-white">Sign in</a>
            <a href="#" className="rounded-lg px-3 py-2 bg-slate-900 text-white">Get Started</a>
          </div>
        )}
      </div>
    </header>
  );
}
