'use client'

import { useState } from 'react'
import Terminal from '@/components/Terminal'
import Canvas from '@/components/Canvas'
import Footer from '@/components/Footer'
import WhatsAppPanic from '@/components/WhatsAppPanic'

export type ModuleType = 
  | 'inicio'
  | 'quienes-somos' 
  | 'petshop' 
  | 'alimentos' 
  | 'especialidades' 
  | 'pacientes' 
  | 'contacto'

export default function TerminalSoberano() {
  const [currentModule, setCurrentModule] = useState<ModuleType>('inicio')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleModuleChange = async (newModule: ModuleType) => {
    if (newModule === currentModule) return
    
    setIsTransitioning(true)
    
    // Simular comando de terminal con delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    setCurrentModule(newModule)
    setIsTransitioning(false)
  }

  return (
    <>
      {/* TERMINAL - Header Persistente */}
      <Terminal 
        currentModule={currentModule} 
        onModuleChange={handleModuleChange}
        isTransitioning={isTransitioning}
      />

      {/* CANVAS - Área Central Intercambiable */}
      <Canvas 
        currentModule={currentModule}
        isTransitioning={isTransitioning}
      />

      {/* SELLO - Footer Persistente */}
      <Footer />

      {/* BOTÓN DE PÁNICO - WhatsApp CTA Flotante */}
      <WhatsAppPanic />
    </>
  )
}