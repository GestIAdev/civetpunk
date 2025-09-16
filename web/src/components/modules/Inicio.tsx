'use client'

export default function Inicio() {
  return (
    <div className="h-full flex items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Hero Principal */}
        <div className="mb-8">
          {/* Logo principal animado */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="paw-print scale-150 mx-auto mb-4"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-lime-electric rounded-full animate-ping"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold glow-lime mb-4">
            TERMINAL
            <span className="text-lime-electric block md:inline md:ml-4">
              VETERINARIO
            </span>
          </h1>

          <div className="text-lime-electric font-terminal text-sm md:text-base mb-6">
            <span className="terminal-prompt"></span>
            <span className="cursor">Conectado al sistema CIVET</span>
          </div>

          <p className="text-lg md:text-xl text-gray-soft max-w-2xl mx-auto mb-8 leading-relaxed">
            Atención veterinaria de <span className="text-lime-acid font-semibold">última generación</span> 
            {' '}con tecnología avanzada y el corazón de siempre. 
            Tu mascota merece el mejor cuidado.
          </p>
        </div>

        {/* Servicios rápidos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-black-soft border-2 border-gray-terminal p-4 hover:border-lime-acid transition-colors group">
            <div className="text-2xl mb-2">🏥</div>
            <h3 className="text-lime-acid font-terminal text-sm font-semibold mb-2">CONSULTAS</h3>
            <p className="text-xs text-gray-soft">Diagnósticos precisos y tratamientos personalizados</p>
          </div>

          <div className="bg-black-soft border-2 border-gray-terminal p-4 hover:border-lime-acid transition-colors group">
            <div className="text-2xl mb-2">🛒</div>
            <h3 className="text-lime-acid font-terminal text-sm font-semibold mb-2">PET SHOP</h3>
            <p className="text-xs text-gray-soft">Productos premium para el bienestar de tu mascota</p>
          </div>

          <div className="bg-black-soft border-2 border-gray-terminal p-4 hover:border-lime-acid transition-colors group">
            <div className="text-2xl mb-2">🚨</div>
            <h3 className="text-lime-acid font-terminal text-sm font-semibold mb-2">EMERGENCIAS</h3>
            <p className="text-xs text-gray-soft">Atención 24/7 para situaciones críticas</p>
          </div>
        </div>

        {/* Stats/Métricas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-lime-electric mb-1">500+</div>
            <div className="text-xs text-gray-soft font-terminal">MASCOTAS FELICES</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-lime-electric mb-1">24/7</div>
            <div className="text-xs text-gray-soft font-terminal">ATENCIÓN</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-lime-electric mb-1">15+</div>
            <div className="text-xs text-gray-soft font-terminal">AÑOS EXP.</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-lime-electric mb-1">100%</div>
            <div className="text-xs text-gray-soft font-terminal">DEDICACIÓN</div>
          </div>
        </div>

        {/* Call to Action Principal */}
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <button className="btn-terminal w-full md:w-auto">
            SOLICITAR CONSULTA
          </button>
          <button className="btn-terminal w-full md:w-auto border-lime-electric text-lime-electric hover:bg-lime-electric hover:text-black-void">
            VER ESPECIALIDADES
          </button>
        </div>

        {/* Indicador de sistema activo */}
        <div className="mt-8 text-xs text-gray-soft font-terminal">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-lime-acid rounded-full animate-pulse"></div>
            <span>Sistema operativo | Atención inmediata disponible</span>
          </div>
        </div>
      </div>
    </div>
  )
}