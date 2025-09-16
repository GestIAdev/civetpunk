'use client'

export default function Footer() {
  return (
    <footer className="bg-black-terminal border-t-2 border-lime-acid p-3 relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between text-xs">
          {/* Marca y copyright */}
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <div className="paw-print scale-75"></div>
            <span className="text-lime-electric font-medium">
              CIVET © 2025
            </span>
            <span className="text-gray-soft hidden md:inline">
              | Sistema Terminal Veterinario
            </span>
          </div>

          {/* Info de contacto rápida */}
          <div className="flex items-center space-x-4 text-gray-soft">
            <div className="flex items-center space-x-1">
              <span>📧</span>
              <span className="hidden sm:inline">info@civet.vet</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📱</span>
              <span>+54 XXX XXX-XXXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📍</span>
              <span className="hidden md:inline">Mendoza, Argentina</span>
              <span className="md:hidden">MDZ</span>
            </div>
          </div>

          {/* Status del terminal */}
          <div className="hidden lg:flex items-center space-x-2 text-xs">
            <span className="w-2 h-2 bg-lime-acid rounded-full animate-pulse"></span>
            <span className="text-lime-acid font-terminal">TERMINAL_ACTIVO</span>
          </div>
        </div>

        {/* Línea de comandos decorativa */}
        <div className="mt-2 pt-2 border-t border-gray-terminal">
          <div className="text-xs text-gray-soft font-terminal opacity-60">
            <span className="text-lime-electric">civet@veterinaria:</span>
            <span>~$ tail -f /var/log/happiness.log | grep "mascotas_felices"</span>
          </div>
        </div>
      </div>
    </footer>
  )
}