import React from 'react';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos comunes', href: '#casos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

const whatsappUrl =
  'https://wa.me/527471111349?text=Hola%20Resius%20Abogados,%20quisiera%20informaci%C3%B3n%20sobre%20una%20consulta.';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2 font-semibold text-navy tracking-tight">
          <div className="h-10 w-10 rounded-full bg-navy text-white flex items-center justify-center font-bold">RA</div>
          <span className="text-lg">Resius Abogados</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-navy transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            className="btn-primary text-sm"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
     </div>
      <nav className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-3 overflow-x-auto text-sm text-slate-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap hover:text-navy transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
