import React from 'react';

const testimonials = [
  {
    name: 'M. R.',
    quote: 'Me explicaron cada paso y siempre tuve claridad sobre tiempos y documentos.',
  },
  {
    name: 'J. L.',
    quote: 'Resolví mi asunto familiar con acompañamiento constante y respuestas rápidas.',
  },
  {
    name: 'A. P.',
    quote: 'Profesionales y cercanos. Agradezco la comunicación clara durante el proceso.',
  },
];

function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="section-title">Testimonios</h2>
          <p className="section-subtitle mx-auto">
            Experiencias de clientes que valoran la comunicación y el acompañamiento profesional.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card h-full">
              <p className="text-slate-700 leading-relaxed mb-4">“{testimonial.quote}”</p>
              <div className="text-sm font-semibold text-navy">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
