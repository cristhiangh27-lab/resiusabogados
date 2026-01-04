import React from 'react';

const faqs = [
  {
    question: '¿Qué necesito para iniciar un divorcio?',
    answer: 'Identificaciones, acta de matrimonio y, en su caso, actas de nacimiento de hijas e hijos. Prepararemos el convenio contigo.',
  },
  {
    question: '¿Cómo se fija la pensión alimenticia?',
    answer: 'Depende de ingresos y necesidades. Te orientamos para solicitar medidas provisionales y formalizar un acuerdo.',
  },
  {
    question: '¿Qué documentos debo llevar?',
    answer: 'Identificación oficial, comprobantes de ingresos, recibos, mensajes o pruebas relacionadas con tu asunto.',
  },
  {
    question: '¿Cuánto tarda un proceso?',
    answer: 'Varía según el asunto y el juzgado. Te explicamos escenarios y mantenemos comunicación constante.',
  },
  {
    question: '¿Qué hago si no cumplen un convenio?',
    answer: 'Podemos ejecutar el convenio ante la autoridad y solicitar medidas para garantizar su cumplimiento.',
  },
  {
    question: '¿Puedo llevar mi caso a distancia?',
    answer: 'Sí, coordinamos por llamada o videollamada y te indicamos cuándo es necesaria tu presencia.',
  },
];

const whatsappUrl =
  'https://wa.me/527471111349?text=Hola%20Resius%20Abogados,%20quisiera%20informaci%C3%B3n%20sobre%20una%20consulta.';

function FAQ() {
  return (
    <section id="casos" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="section-title">Casos comunes</h2>
            <p className="section-subtitle">
              Resolvemos dudas frecuentes con respuestas claras. Si necesitas más detalle, agenda una consulta personalizada.
            </p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary w-fit">
            Consultar ahora
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item) => (
            <div key={item.question} className="card">
              <h3 className="text-lg font-semibold text-navy mb-2">{item.question}</h3>
              <p className="text-slate-700 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
