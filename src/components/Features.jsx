import { Shield, Zap, Code, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'End-to-end encryption, tokenization, and granular controls to keep your data safe.'
  },
  {
    icon: Zap,
    title: 'Lightning fast',
    desc: 'Sub-100ms APIs and real-time updates so your product always feels instant.'
  },
  {
    icon: Code,
    title: 'Developer friendly',
    desc: 'Clean SDKs, clear docs, and webhooks that just work. Build in days, not months.'
  },
  {
    icon: Globe,
    title: 'Global-ready',
    desc: 'Multi-currency support, localized experiences, and international compliance.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Crafted for scale</h2>
          <p className="mt-4 text-slate-600">Everything you need to launch, grow, and operate your fintech product with confidence.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                <it.icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
