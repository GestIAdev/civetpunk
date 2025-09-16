'use client'

import { ModuleType } from '@/app/page'

interface TerminalProps {
  currentModule: ModuleType
  onModuleChange: (module: ModuleType) => void
  isTransitioning: boolean
}

const moduleCommands = {
  'inicio': 'home',
  'quienes-somos': 'about',
  'petshop': 'shop', 
  'alimentos': 'food',
  'especialidades': 'services',
  'pacientes': 'gallery',
  'contacto': 'contact'
}

const moduleLabels = {
  'inicio': 'Inicio',
  'quienes-somos': 'Quiénes Somos',
  'petshop': 'Pet Shop',
  'alimentos': 'Alimentos',
  'especialidades': 'Especialidades',
  'pacientes': 'Pacientes',
  'contacto': 'Contacto'
}

export default function Terminal({ currentModule, onModuleChange, isTransitioning }: TerminalProps) {
  const modules: ModuleType[] = [
    'inicio',
    'quienes-somos',
    'petshop', 
    'alimentos',
    'especialidades',
    'pacientes',
    'contacto'
  ]

  return (
    <header className="bg-black-terminal border-b-2 border-lime-acid p-4 relative z-50">
      <div className="max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {/* Huella de mascota animada */}
            <div className="paw-print"></div>
            <h1 className="text-xl md:text-2xl font-bold glow-lime">
              CIVET<span className="text-lime-electric">.vet</span>
            </h1>
          </div>
          
          {/* Status del sistema */}
          <div className="hidden md:flex items-center space-x-2 text-xs">
            <span className="text-gray-soft">STATUS:</span>
            <span className={`${isTransitioning ? 'text-yellow-400 loading-dots' : 'text-lime-acid'}`}>
              {isTransitioning ? 'LOADING' : 'ONLINE'}
            </span>
          </div>
        </div>

        {/* Terminal Prompt */}
        <div className="mb-3">
          <div className="text-sm text-lime-electric">
            <span className="terminal-prompt cursor"></span>
            {isTransitioning ? (
              <span className="loading-dots text-yellow-400">Cargando</span>
            ) : (
              <span>{moduleCommands[currentModule]}</span>
            )}
          </div>
        </div>

        {/* Navigation Menu - Mobile First */}
        <nav className="space-y-2 md:space-y-0">
          {/* Mobile: Dropdown style */}
          <div className="md:hidden">
            <select 
              value={currentModule}
              onChange={(e) => onModuleChange(e.target.value as ModuleType)}
              className="w-full bg-black-soft border-2 border-gray-terminal text-lime-acid p-2 font-terminal text-sm focus:border-lime-acid outline-none"
              disabled={isTransitioning}
            >
              {modules.map(module => (
                <option key={module} value={module} className="bg-black-soft">
                  {moduleLabels[module]}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: Horizontal buttons */}
          <div className="hidden md:flex flex-wrap gap-2">
            {modules.map(module => (
              <button
                key={module}
                onClick={() => onModuleChange(module)}
                disabled={isTransitioning}
                className={`
                  px-3 py-1 text-sm font-terminal border transition-all duration-200
                  ${currentModule === module 
                    ? 'bg-lime-acid text-black-void border-lime-acid glow-lime' 
                    : 'bg-transparent text-lime-acid border-gray-terminal hover:border-lime-acid hover:text-lime-electric'
                  }
                  ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                ./{moduleCommands[module]}
              </button>
            ))}
          </div>
        </nav>

        {/* Command History (decorativo) */}
        <div className="mt-3 text-xs text-gray-soft hidden lg:block">
          <span className="opacity-60">Últimos comandos: ./gallery, ./services, ./contact</span>
        </div>
      </div>
    </header>
  )
}