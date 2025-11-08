import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-200/60 blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-indigo-200/60 blur-3xl" />
          </div>

          <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Start free. Scale when you’re ready.</h3>
              <p className="mt-3 text-slate-600">No setup fees. Transparent pricing as you grow, with generous free tier for builders and startups.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:shadow-md transition-shadow">
                  Create account <ArrowRight size={16} />
                </a>
                <a href="#faq" className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-900 hover:bg-slate-50">Learn more</a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {["Free tier", "Usage-based"].map((title) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white/70 p-5">
                  <div className="text-sm font-medium text-slate-500">{title}</div>
                  <div className="mt-1 text-2xl font-semibold text-slate-900">Fair pricing</div>
                  <div className="mt-2 text-xs text-slate-500">Simple, predictable, and scalable.</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
