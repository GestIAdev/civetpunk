'use client'

export default function QuienesSomos() {
  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header del módulo */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold glow-lime mb-4">
            ./quienes-somos
          </h2>
          <div className="text-lime-electric font-terminal text-sm">
            <span className="terminal-prompt"></span>
            <span>cat historia_civet.txt</span>
          </div>
        </div>

        {/* Historia principal */}
        <div className="bg-black-soft border-2 border-lime-acid p-6 mb-8">
          <h3 className="text-xl text-lime-acid font-terminal mb-4 flex items-center">
            <span className="paw-print scale-75 mr-3"></span>
            NUESTRA HISTORIA
          </h3>
          <div className="space-y-4 text-gray-soft text-sm leading-relaxed">
            <p>
              <span className="text-lime-electric">Hace más de 15 años</span>, CIVET comenzó como un sueño: 
              crear un espacio donde la tecnología y el amor por los animales se encontraran 
              para brindar la mejor atención veterinaria.
            </p>
            <p>
              Nuestro nombre, <span className="text-lime-acid font-semibold">CIVET</span>, 
              representa nuestra dedicación a la <span className="text-lime-electric">
              Ciencia, Innovación, Veterinaria y Tecnología</span>.
            </p>
            <p>
              Cada día trabajamos para que tu mascota reciba no solo tratamiento médico, 
              sino el cariño y respeto que merece como miembro de tu familia.
            </p>
          </div>
        </div>

        {/* Equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black-terminal border-2 border-gray-terminal p-6 hover:border-lime-acid transition-colors">
            <h4 className="text-lime-acid font-terminal text-lg mb-3">DR. MARTINEZ</h4>
            <p className="text-xs text-lime-electric mb-2">VETERINARIO PRINCIPAL</p>
            <p className="text-sm text-gray-soft">
              Especialista en medicina interna y cirugía. 15+ años de experiencia 
              salvando vidas peludas con tecnología de vanguardia.
            </p>
            <div className="mt-3 text-xs text-gray-terminal">
              <span>📚 Especialización: Cardiología Veterinaria</span><br/>
              <span>🎓 Universidad Nacional de Córdoba</span>
            </div>
          </div>

          <div className="bg-black-terminal border-2 border-gray-terminal p-6 hover:border-lime-acid transition-colors">
            <h4 className="text-lime-acid font-terminal text-lg mb-3">DRA. GONZALEZ</h4>
            <p className="text-xs text-lime-electric mb-2">ESPECIALISTA EN NUTRICIÓN</p>
            <p className="text-sm text-gray-soft">
              Experta en planes nutricionales personalizados y suplementación. 
              Cada mascota tiene necesidades únicas.
            </p>
            <div className="mt-3 text-xs text-gray-terminal">
              <span>📚 Especialización: Nutrición Clínica</span><br/>
              <span>🎓 Universidad de Buenos Aires</span>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="text-center">
            <h4 className="text-lime-electric font-terminal text-lg mb-4">MISIÓN</h4>
            <div className="bg-black-soft border border-gray-terminal p-4">
              <p className="text-sm text-gray-soft">
                Proporcionar atención veterinaria integral de excelencia, 
                combinando tecnología avanzada con el cuidado humano que 
                cada mascota merece.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-lime-electric font-terminal text-lg mb-4">VISIÓN</h4>
            <div className="bg-black-soft border border-gray-terminal p-4">
              <p className="text-sm text-gray-soft">
                Ser la clínica veterinaria de referencia en Mendoza, 
                reconocida por la innovación, calidad y el compromiso 
                con la salud animal.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-black-terminal border-2 border-lime-acid p-6">
          <h4 className="text-lime-acid font-terminal text-xl mb-4 text-center">NUESTROS VALORES</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-2">❤️</div>
              <h5 className="text-lime-electric font-terminal text-sm mb-2">COMPASIÓN</h5>
              <p className="text-xs text-gray-soft">Tratamos cada mascota como si fuera nuestra</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔬</div>
              <h5 className="text-lime-electric font-terminal text-sm mb-2">INNOVACIÓN</h5>
              <p className="text-xs text-gray-soft">Tecnología de vanguardia al servicio de la vida</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🤝</div>
              <h5 className="text-lime-electric font-terminal text-sm mb-2">COMPROMISO</h5>
              <p className="text-xs text-gray-soft">Disponibles cuando más nos necesitás</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}