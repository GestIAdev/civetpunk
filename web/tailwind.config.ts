import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta CIVET - Verde Lima Ácido sobre Negro Absoluto
        'lime-acid': '#32FF32',
        'lime-electric': '#00FF41',
        'lime-glow': '#7FFF00',
        'black-void': '#000000',
        'black-terminal': '#0A0A0A',
        'black-soft': '#1A1A1A',
        'gray-terminal': '#333333',
        'gray-soft': '#666666',
      },
      fontFamily: {
        'terminal': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-lime': 'pulse-lime 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'paw-bounce': 'paw-bounce 1s ease-in-out infinite',
      },
      keyframes: {
        'pulse-lime': {
          '0%, 100%': {
            opacity: '1',
            'box-shadow': '0 0 0 0 rgb(50, 255, 50, 0.7)',
          },
          '50%': {
            opacity: '.8',
            'box-shadow': '0 0 0 10px rgb(50, 255, 50, 0)',
          },
        },
        'glow': {
          'from': {
            'text-shadow': '0 0 5px #32FF32, 0 0 10px #32FF32, 0 0 15px #32FF32',
          },
          'to': {
            'text-shadow': '0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41',
          },
        },
        'paw-bounce': {
          '0%, 20%, 53%, 80%, 100%': {
            transform: 'translateY(0px)',
          },
          '40%, 43%': {
            transform: 'translateY(-8px)',
          },
        },
      },
      backgroundImage: {
        'terminal-grid': 'radial-gradient(circle, #333333 1px, transparent 1px)',
        'lime-gradient': 'linear-gradient(135deg, #32FF32 0%, #00FF41 50%, #7FFF00 100%)',
      },
      backgroundSize: {
        'terminal-grid': '20px 20px',
      },
    },
  },
  plugins: [],
}

export default config