/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**"],
  theme: {
    extend: {
      colors: {
        // Paletas específicas de página, migradas desde los antiguos
        // <script>tailwind.config = {...}</script> inline que usaban
        // el CDN de Tailwind. Cada una tenía el nombre "custom" en su
        // propia página; aquí se renombran a un nombre único porque
        // ahora comparten un único style.css compilado para todo el sitio.
        marina: {
          // jubilacion-marina-mercante (Azul Marino / Océano)
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        marisqueo: {
          // jubilacion-marisqueo
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        fuerzas: {
          // jubilacion-fuerzas-armadas (Tono Caqui Militar Base)
          50: '#f5f7f2',
          100: '#e8ece0',
          200: '#d1d8c1',
          300: '#b6bfa1',
          400: '#9ca385',
          500: '#7f8767',
          600: '#646a50',
          700: '#4c503d',
          800: '#3e4133',
          900: '#34372d',
        },
        estiba: {
          // jubilacion-estiba-portuaria
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        pesca: {
          // jubilacion-pesca (Base Cyan Pesca)
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
      },
    },
  },
  plugins: [],
};
