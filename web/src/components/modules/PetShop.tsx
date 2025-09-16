'use client'

export default function PetShop() {
  const productos = [
    { id: 1, nombre: 'Alimento Premium Plus', precio: '$15.000', categoria: 'Alimentación' },
    { id: 2, nombre: 'Collar Anti-Pulgas Tech', precio: '$8.500', categoria: 'Accesorios' },
    { id: 3, nombre: 'Vitaminas ProHealth', precio: '$12.000', categoria: 'Salud' },
    { id: 4, nombre: 'Juguete Interactivo', precio: '$6.500', categoria: 'Entretenimiento' },
  ]

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold glow-lime mb-4">
            ./petshop
          </h2>
          <div className="text-lime-electric font-terminal text-sm">
            <span className="terminal-prompt"></span>
            <span>ls -la tienda/ | grep productos</span>
          </div>
        </div>

        {/* Categorías */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button className="bg-black-soft border-2 border-gray-terminal p-4 hover:border-lime-acid transition-colors group">
            <div className="text-2xl mb-2">🍖</div>
            <span className="text-lime-acid font-terminal text-sm">ALIMENTOS</span>
          </button>
          <button className="bg-black-soft border-2 border-gray-terminal p-4 hover:border-lime-acid transition-colors group">
            <div className="text-2xl mb-2">🎾</div>
            <span className="text-lime-acid font-terminal text-sm">JUGUETES</span>
          </button>
          <button className="bg-black-soft border-2 border-gray-terminal p-4 hover:border-lime-acid transition-colors group">
            <div className="text-2xl mb-2">💊</div>
            <span className="text-lime-acid font-terminal text-sm">SALUD</span>
          </button>
          <button className="bg-black-soft border-2 border-gray-terminal p-4 hover:border-lime-acid transition-colors group">
            <div className="text-2xl mb-2">👔</div>
            <span className="text-lime-acid font-terminal text-sm">ACCESORIOS</span>
          </button>
        </div>

        {/* Productos destacados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productos.map(producto => (
            <div key={producto.id} className="bg-black-terminal border-2 border-gray-terminal hover:border-lime-acid transition-colors p-4">
              <div className="aspect-square bg-black-soft mb-4 flex items-center justify-center border border-gray-terminal">
                <div className="paw-print"></div>
              </div>
              <h3 className="text-lime-acid font-terminal text-sm mb-2">{producto.nombre}</h3>
              <p className="text-xs text-gray-soft mb-2">{producto.categoria}</p>
              <div className="flex justify-between items-center">
                <span className="text-lime-electric font-bold">{producto.precio}</span>
                <button className="text-xs bg-lime-acid text-black-void px-3 py-1 hover:bg-lime-electric transition-colors">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="btn-terminal">
            VER CATÁLOGO COMPLETO
          </button>
        </div>
      </div>
    </div>
  )
}