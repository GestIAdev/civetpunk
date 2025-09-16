'use client'

export default function Contacto() {
  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold glow-lime mb-4">./contacto</h2>
          <div className="text-lime-electric font-terminal text-sm">
            <span className="terminal-prompt"></span>
            <span>ping civet.vet -c 1</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="bg-black-terminal border-2 border-lime-acid p-6">
              <h3 className="text-lime-acid font-terminal text-xl mb-4">DATOS DE CONTACTO</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-lime-electric">📱</span>
                  <div>
                    <p className="text-lime-acid">WhatsApp: +54 261 XXX-XXXX</p>
                    <p className="text-xs text-gray-soft">Respuesta inmediata 24/7</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-lime-electric">📧</span>
                  <div>
                    <p className="text-lime-acid">info@civet.vet</p>
                    <p className="text-xs text-gray-soft">Consultas y turnos online</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-lime-electric">📍</span>
                  <div>
                    <p className="text-lime-acid">Av. San Martín 1234, Mendoza</p>
                    <p className="text-xs text-gray-soft">Fácil acceso y estacionamiento</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-lime-electric">🕒</span>
                  <div>
                    <p className="text-lime-acid">Lun-Vie: 9:00-19:00</p>
                    <p className="text-lime-acid">Sáb: 9:00-14:00</p>
                    <p className="text-xs text-gray-soft">Emergencias 24hs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black-soft border-2 border-gray-terminal p-6">
              <h4 className="text-lime-electric font-terminal text-lg mb-4">EMERGENCIAS</h4>
              <p className="text-sm text-gray-soft mb-4">
                Para situaciones críticas, contáctanos inmediatamente:
              </p>
              <button className="btn-terminal w-full bg-red-600 border-red-600 text-white hover:bg-red-700">
                🚨 EMERGENCIA WHATSAPP
              </button>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-black-terminal border-2 border-lime-acid p-6">
            <h3 className="text-lime-acid font-terminal text-xl mb-4">SOLICITAR TURNO</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-lime-electric font-terminal text-sm mb-2">
                  NOMBRE DEL DUEÑO:
                </label>
                <input 
                  type="text"
                  className="w-full bg-black-soft border-2 border-gray-terminal text-lime-acid p-2 font-terminal text-sm focus:border-lime-acid outline-none"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-lime-electric font-terminal text-sm mb-2">
                  NOMBRE DE LA MASCOTA:
                </label>
                <input 
                  type="text"
                  className="w-full bg-black-soft border-2 border-gray-terminal text-lime-acid p-2 font-terminal text-sm focus:border-lime-acid outline-none"
                  placeholder="Nombre de tu mascota"
                />
              </div>

              <div>
                <label className="block text-lime-electric font-terminal text-sm mb-2">
                  TIPO DE CONSULTA:
                </label>
                <select className="w-full bg-black-soft border-2 border-gray-terminal text-lime-acid p-2 font-terminal text-sm focus:border-lime-acid outline-none">
                  <option>Seleccionar...</option>
                  <option>Consulta general</option>
                  <option>Vacunación</option>
                  <option>Emergencia</option>
                  <option>Cirugía</option>
                  <option>Nutrición</option>
                </select>
              </div>

              <div>
                <label className="block text-lime-electric font-terminal text-sm mb-2">
                  TELÉFONO:
                </label>
                <input 
                  type="tel"
                  className="w-full bg-black-soft border-2 border-gray-terminal text-lime-acid p-2 font-terminal text-sm focus:border-lime-acid outline-none"
                  placeholder="+54 261 XXX-XXXX"
                />
              </div>

              <div>
                <label className="block text-lime-electric font-terminal text-sm mb-2">
                  MENSAJE:
                </label>
                <textarea 
                  rows={3}
                  className="w-full bg-black-soft border-2 border-gray-terminal text-lime-acid p-2 font-terminal text-sm focus:border-lime-acid outline-none resize-none"
                  placeholder="Detalles adicionales..."
                ></textarea>
              </div>

              <button type="submit" className="btn-terminal w-full">
                ENVIAR SOLICITUD
              </button>
            </form>
          </div>
        </div>

        {/* Mapa placeholder */}
        <div className="mt-8 bg-black-soft border-2 border-gray-terminal p-6 text-center">
          <h4 className="text-lime-electric font-terminal text-lg mb-4">UBICACIÓN</h4>
          <div className="aspect-video bg-black-terminal border border-lime-acid flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-lime-acid font-terminal">MAPA INTERACTIVO</p>
              <p className="text-xs text-gray-soft mt-2">Av. San Martín 1234, Mendoza</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}