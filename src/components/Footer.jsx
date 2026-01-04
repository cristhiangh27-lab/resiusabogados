import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-600">
        <div className="flex items-center gap-2 text-navy font-semibold">
          <div className="h-9 w-9 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold">RA</div>
          <span>Resius Abogados</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="hover:text-navy transition">
            Aviso de privacidad
          </a>
          <span className="text-slate-400">•</span>
          <p>La información es orientativa y no sustituye asesoría legal personalizada.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
