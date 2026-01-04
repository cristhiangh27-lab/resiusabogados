import React from 'react';

const whatsappUrl =
  'https://wa.me/527471111349?text=Hola%20Resius%20Abogados,%20quisiera%20informaci%C3%B3n%20sobre%20una%20consulta.';

function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-sm text-navy font-semibold">
            <span className="h-[1px] w-8 bg-navy" aria-hidden />
            Servicios legales en Chilpancingo
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-navy leading-tight">
            Servicios legales en Chilpancingo
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Asesoría clara, acompañamiento y representación en procesos familiares, laborales y civiles.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Hablar por WhatsApp
            </a>
            <a href="#contacto" className="btn-outline">
              Agendar consulta
            </a>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {['Atención en Chilpancingo', 'Confidencialidad', 'Citas presenciales y por llamada'].map(
              (chip) => (
                <span key={chip} className="badge">
                  {chip}
                </span>
              )
            )}
          </div>
        </div>
        <div className="card">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Confianza y claridad</h2>
            <p className="text-slate-700 leading-relaxed">
              Conoce tu situación legal y los pasos concretos a seguir. Explicamos con claridad tus opciones y te acompañamos en cada etapa del proceso.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
              {["Familiar", "Laboral", "Civil", "Convenios"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-navy"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-navy text-white">
              <div>
                <p className="text-sm opacity-80">Atención inmediata</p>
                <p className="text-lg font-semibold">Respuesta por WhatsApp</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-navy px-4 py-2 text-sm font-semibold shadow"
              >
                Abrir chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
