'use client'

export default function Alimentos() {
  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold glow-lime mb-4">./alimentos</h2>
          <div className="text-lime-electric font-terminal text-sm">
            <span className="terminal-prompt"></span>
            <span>cat nutricion_especializada.db</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black-terminal border-2 border-lime-acid p-6">
            <h3 className="text-lime-acid font-terminal text-xl mb-4">NUTRICIÓN PREMIUM</h3>
            <ul className="space-y-2 text-sm text-gray-soft">
              <li>🐕 Alimento para perros - Todas las edades</li>
              <li>🐱 Alimento para gatos - Fórmulas específicas</li>
              <li>🐰 Alimentación para conejos y roedores</li>
              <li>🐦 Semillas premium para aves</li>
            </ul>
          </div>
          
          <div className="bg-black-terminal border-2 border-lime-acid p-6">
            <h3 className="text-lime-acid font-terminal text-xl mb-4">DIETAS TERAPÉUTICAS</h3>
            <ul className="space-y-2 text-sm text-gray-soft">
              <li>💊 Alimentos medicinales</li>
              <li>⚕️ Dietas para problemas renales</li>
              <li>❤️ Nutrición cardiosaludable</li>
              <li>🦴 Suplementos articulares</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="btn-terminal">CONSULTA NUTRICIONAL</button>
        </div>
      </div>
    </div>
  )
}