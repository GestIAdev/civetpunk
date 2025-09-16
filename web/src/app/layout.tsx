import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CIVET - Terminal Veterinario',
  description: 'Estandarte Publicitario - Veterinaria CIVET',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full">
      <body className="h-full font-terminal bg-black-void text-lime-acid overflow-hidden">
        {/* DOCTRINA: Terminal Soberano - Sin Scroll, Layout Fijo */}
        <div className="h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}