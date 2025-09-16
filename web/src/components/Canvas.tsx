'use client'

import { ModuleType } from '@/app/page'
import Inicio from '@/components/modules/Inicio'
import QuienesSomos from '@/components/modules/QuienesSomos'
import PetShop from '@/components/modules/PetShop'
import Alimentos from '@/components/modules/Alimentos'
import Especialidades from '@/components/modules/Especialidades'
import Pacientes from '@/components/modules/Pacientes'
import Contacto from '@/components/modules/Contacto'

interface CanvasProps {
  currentModule: ModuleType
  isTransitioning: boolean
}

export default function Canvas({ currentModule, isTransitioning }: CanvasProps) {
  const renderModule = () => {
    if (isTransitioning) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="text-2xl glow-electric mb-4">
              █ CARGANDO MÓDULO <span className="loading-dots"></span>
            </div>
            <div className="text-sm text-gray-soft">
              Inicializando sistema veterinario...
            </div>
          </div>
        </div>
      )
    }

    switch (currentModule) {
      case 'inicio':
        return <Inicio />
      case 'quienes-somos':
        return <QuienesSomos />
      case 'petshop':
        return <PetShop />
      case 'alimentos':
        return <Alimentos />
      case 'especialidades':
        return <Especialidades />
      case 'pacientes':
        return <Pacientes />
      case 'contacto':
        return <Contacto />
      default:
        return <Inicio />
    }
  }

  return (
    <main className="flex-1 bg-black-void relative overflow-hidden">
      {/* Efecto de grid de fondo */}
      <div 
        className="absolute inset-0 bg-terminal-grid bg-terminal-grid opacity-10 pointer-events-none"
        style={{ backgroundPosition: '0 0, 10px 10px' }}
      />
      
      {/* Contenido del módulo */}
      <div className={`
        relative z-10 h-full
        ${isTransitioning ? 'opacity-50' : 'opacity-100 module-enter'}
        transition-opacity duration-300
      `}>
        {renderModule()}
      </div>

      {/* Efectos visuales decorativos */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-lime-acid to-transparent opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-lime-electric to-transparent opacity-20" />
    </main>
  )
}