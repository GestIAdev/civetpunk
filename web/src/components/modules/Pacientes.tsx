'use client'

export default function Pacientes() {
  const pacientes = [
    { nombre: 'Max', tipo: '🐕', tratamiento: 'Cirugía exitosa' },
    { nombre: 'Luna', tipo: '🐱', tratamiento: 'Control nutricional' },
    { nombre: 'Rocky', tipo: '🐕', tratamiento: 'Vacunación completa' },
    { nombre: 'Mia', tipo: '🐰', tratamiento: 'Revisión dental' },
    { nombre: 'Zeus', tipo: '🐕', tratamiento: 'Rehabilitación' },
    { nombre: 'Cleo', tipo: '🐱', tratamiento: 'Medicina preventiva' }
  ]

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold glow-lime mb-4">./pacientes</h2>
          <div className="text-lime-electric font-terminal text-sm">
            <span className="terminal-prompt"></span>
            <span>find /casos_exitosos -name "*.jpg" | head -20</span>
          </div>
        </div>

        <div className="mb-8 text-center">
          <p className="text-gray-soft text-sm max-w-2xl mx-auto">
            Cada mascota que pasa por CIVET se convierte en parte de nuestra familia. 
            Aquí algunos de nuestros <span className="text-lime-acid">casos de éxito</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pacientes.map((paciente, index) => (
            <div key={index} className="bg-black-terminal border-2 border-gray-terminal hover:border-lime-acid transition-colors p-4">
              <div className="aspect-square bg-black-soft border border-gray-terminal mb-4 flex items-center justify-center">
                <div className="text-6xl">{paciente.tipo}</div>
              </div>
              <h3 className="text-lime-acid font-terminal text-lg mb-2">{paciente.nombre}</h3>
              <p className="text-xs text-gray-soft mb-3">{paciente.tratamiento}</p>
              <div className="flex items-center justify-between">
                <span className="text-lime-electric text-xs">✅ RECUPERADO</span>
                <button className="text-xs text-lime-acid hover:text-lime-electric">VER +</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black-soft border-2 border-lime-acid p-6 text-center">
          <h3 className="text-lime-acid font-terminal text-xl mb-4">ESTADÍSTICAS CIVET</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-lime-electric">500+</div>
              <div className="text-xs text-gray-soft">Casos exitosos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lime-electric">98%</div>
              <div className="text-xs text-gray-soft">Tasa de recuperación</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lime-electric">24h</div>
              <div className="text-xs text-gray-soft">Tiempo respuesta</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lime-electric">15+</div>
              <div className="text-xs text-gray-soft">Años experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}