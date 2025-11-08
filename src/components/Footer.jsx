export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200/70 bg-white/70">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} LumenPay, Inc. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Security</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
