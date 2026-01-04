import React from 'react';

function LocationMap() {
  return (
    <section id="ubicacion" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-3">
          <h2 className="section-title">Ubicación</h2>
          <p className="section-subtitle">
            Galo Soberón y Parra 2, Centro, Chilpancingo, Guerrero, 39000
          </p>
          <p className="text-slate-700 leading-relaxed">
            Agenda tu visita para que podamos dedicarte el tiempo necesario. También podemos coordinar llamadas si no puedes asistir en persona.
          </p>
        </div>
        <div className="card p-2">
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
            <iframe
              title="Mapa de Resius Abogados"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2872171756126!2d-99.502559!3d17.553388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85caf85b6b1d7b03%3A0x0000000000000000!2sChilpancingo%20de%20los%20Bravo%2C%20Gro.!5e0!3m2!1ses-419!2smx!4v0000000000000"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Reemplaza la URL del iframe con la de Google Maps del despacho si se requiere más precisión. */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
