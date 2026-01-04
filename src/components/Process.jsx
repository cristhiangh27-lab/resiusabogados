import React from 'react';

const steps = [
  {
    title: 'Diagnóstico por WhatsApp',
    description: 'Cuéntanos tu caso y aclaramos dudas iniciales para definir el siguiente paso.',
  },
  {
    title: 'Revisión de documentos y estrategia',
    description: 'Validamos documentos, explicamos escenarios y acordamos la ruta más conveniente.',
  },
  {
    title: 'Representación y seguimiento',
    description: 'Presentamos escritos, asistimos a audiencias y mantenemos comunicación constante.',
  },
];

function Process() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="section-title">Proceso</h2>
          <p className="section-subtitle mx-auto">
            Tres pasos claros para que sepas qué sigue y cómo avanzaremos en tu asunto.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={step.title} className="card h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-navy text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
