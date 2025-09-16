'use client'

export default function Especialidades() {
  const especialidades = [
    { icon: '🏥', titulo: 'MEDICINA GENERAL', desc: 'Consultas, diagnósticos y tratamientos integrales' },
    { icon: '🔬', titulo: 'LABORATORIO', desc: 'Análisis clínicos y estudios especializados' },
    { icon: '⚕️', titulo: 'CIRUGÍA', desc: 'Procedimientos quirúrgicos con tecnología avanzada' },
    { icon: '🦷', titulo: 'ODONTOLOGÍA', desc: 'Limpieza dental y tratamientos bucales' },
    { icon: '💉', titulo: 'VACUNACIÓN', desc: 'Plan de vacunas personalizado y preventivo' },
    { icon: '🚨', titulo: 'EMERGENCIAS', desc: 'Atención de urgencia 24 horas' }
  ]

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold glow-lime mb-4">./especialidades</h2>
          <div className="text-lime-electric font-terminal text-sm">
            <span className="terminal-prompt"></span>
            <span>grep -r "servicios_medicos" /var/civet/</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {especialidades.map((servicio, index) => (
            <div key={index} className="bg-black-terminal border-2 border-gray-terminal hover:border-lime-acid transition-colors p-6 text-center">
              <div className="text-4xl mb-4">{servicio.icon}</div>
              <h3 className="text-lime-acid font-terminal text-sm mb-3">{servicio.titulo}</h3>
              <p className="text-xs text-gray-soft">{servicio.desc}</p>
              <button className="mt-4 text-xs text-lime-electric hover:text-lime-acid transition-colors">
                MÁS INFO →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 bg-black-soft border-2 border-lime-acid p-6">
          <h3 className="text-lime-acid font-terminal text-xl mb-4">TECNOLOGÍA AVANZADA</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-soft">
            <div>📡 Rayos X Digitales</div>
            <div>🖥️ Ecografía HD</div>
            <div>🔬 Microscopía Avanzada</div>
          </div>
        </div>
      </div>
    </div>
  )
}