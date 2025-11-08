import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900"
          >
            Modern payments for ambitious teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-lg leading-relaxed text-slate-600"
          >
            Grow faster with an elegant, secure, and developer-friendly fintech platform.
            Built with a focus on clarity, speed, and an Apple-like attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:shadow-md transition-shadow">
              Start for free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-900 hover:bg-slate-50">
              See features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 grid grid-cols-3 gap-4 text-center"
          >
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
              <div className="text-2xl font-semibold text-slate-900">99.99%</div>
              <div className="text-xs text-slate-500">Uptime</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
              <div className="text-2xl font-semibold text-slate-900">3 days</div>
              <div className="text-xs text-slate-500">Time to go live</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
              <div className="text-2xl font-semibold text-slate-900">$0</div>
              <div className="text-xs text-slate-500">Setup fees</div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[480px] w-full">
          <div className="absolute inset-0 rounded-3xl border border-slate-200/70 bg-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
