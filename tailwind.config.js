/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#121214',
          secondary: '#1a1a1e',
        },
        accent: {
          cyan: '#fde047',
          purple: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'float-slow': 'float 9s infinite ease-in-out',
        'float-fast': 'float 4s infinite ease-in-out',
        'mesh-spin': 'mesh-spin 25s infinite linear',
        'pulse-subtle': 'pulse-subtle 3s infinite ease-in-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4', filter: 'blur(40px)' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8', filter: 'blur(60px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        'mesh-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
