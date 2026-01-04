import React from 'react';

const services = [
  {
    title: 'Divorcio',
    description: 'Divorcio express o necesario. Redacción de convenios y acompañamiento en audiencias.',
  },
  {
    title: 'Pensión alimenticia',
    description: 'Cálculo y solicitud de pensión, medidas provisionales y ejecución de convenios.',
  },
  {
    title: 'Custodia y convivencia',
    description: 'Definición de custodia, convivencia segura y acuerdos que protegen a las y los menores.',
  },
  {
    title: 'Despido injustificado',
    description: 'Revisión de tu caso laboral, finiquitos, convenios y representación ante la autoridad.',
  },
  {
    title: 'Contratos y asesoría civil',
    description: 'Elaboración y revisión de contratos, arrendamientos y solución de controversias civiles.',
  },
  {
    title: 'Acompañamiento legal',
    description: 'Seguimiento continuo, informes claros y estrategias orientadas a resolver tu asunto.',
  },
];

const whatsappUrl =
  'https://wa.me/527471111349?text=Hola%20Resius%20Abogados,%20quisiera%20informaci%C3%B3n%20sobre%20una%20consulta.';

function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="section-title">Servicios</h2>
            <p className="section-subtitle">
              Orientamos cada paso para que tengas claridad en tiempos, requisitos y costos. Atención discreta y oportuna.
            </p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary w-fit">
            Consultar por WhatsApp
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="card">
              <div className="h-10 w-10 rounded-full bg-slate-100 text-navy flex items-center justify-center font-bold mb-4">
                •
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">{service.title}</h3>
              <p className="text-slate-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
