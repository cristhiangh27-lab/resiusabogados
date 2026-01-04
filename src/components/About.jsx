import React from 'react';

function About() {
  return (
    <section id="nosotros" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="section-title">Nosotros</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            En Resius Abogados atendemos cada caso con seriedad, cercanía y comunicación clara. Nos enfocamos en explicar tus opciones, anticipar escenarios y mantenerte informado en todo momento.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Nuestro compromiso es darte atención personalizada, preparar estrategias realistas y acompañarte durante todo el proceso, ya sea en asuntos familiares, laborales o civiles.
          </p>
        </div>
        <div className="card bg-navy text-white space-y-4">
          <h3 className="text-2xl font-semibold">Qué puedes esperar</h3>
          <ul className="space-y-3 text-slate-100">
            <li className="flex gap-3">
              <span className="text-slate-300">•</span>
              <span>Seguimiento puntual de audiencias y fechas clave.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-300">•</span>
              <span>Explicaciones sencillas sobre tus derechos y obligaciones.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-300">•</span>
              <span>Confidencialidad y acompañamiento en cada decisión.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
