import React from 'react';

const whatsappUrl =
  'https://wa.me/527471111349?text=Hola%20Resius%20Abogados,%20quisiera%20informaci%C3%B3n%20sobre%20una%20consulta.';

function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            Cuéntanos tu caso por WhatsApp o agenda una llamada. Responderemos con la mayor prontitud.
          </p>
          <div className="space-y-2 text-slate-700">
            <p className="text-lg font-semibold text-navy">Teléfono: 747 111 1349</p>
            <p>Horarios: L-V 9:00–18:00, Sáb 10:00–14:00</p>
            <p className="text-sm text-slate-600">La información es confidencial y no compartimos tus datos.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Abrir WhatsApp
            </a>
            <a href="tel:+527471111349" className="btn-outline">
              Llamar ahora
            </a>
          </div>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold text-navy mb-2">Privacidad</h3>
          <p className="text-slate-700 leading-relaxed">
            La información es orientativa y no sustituye asesoría legal personalizada. Respetamos tu privacidad y utilizamos tus datos únicamente para dar seguimiento a tu consulta.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
