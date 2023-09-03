/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        orange: '#F3603C',
        dark: '#1D1E25',
        red: '#F33C3C',
        cream: '#FFF0EC',
        gray: '#FAFAFA',
        placeholer: '#8D8D8D',
        'light-gray': '#9297A9',
        'dark-gray': '#9196A8',
        'gray-hover': '#FCF6F5',
        'dark-blue': '#242D52',
        'orange-hover': '#F98F75'
      }
    },
    fontFamily: {
      sans: ['Be Vietnam Pro', 'sans-serif']
    },
    backgroundImage: {
      'pattern-body-mobile': 'url("/bg-pattern-body-mobile.svg")',
      'pattern-body-desktop': 'url("/bg-pattern-body-desktop.svg")',
      'pattern-main-mobile': 'url("/bg-pattern-main-mobile.svg")',
      'pattern-main-desktop': 'url("/bg-pattern-main-desktop.svg")',
      'simplify-section-mobile': 'url("/bg-simplify-section-mobile.svg")',
      'simplify-section-desktop': 'url("/bg-simplify-section-desktop.svg")',
      overlay: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.33%, rgba(0, 0, 0, 0.60) 99.79%)'
    },
    fontSize: {
      h1: '3.5rem', // 56px
      h2: '2.5rem', // 40px
      h3: '2rem', // 32px
      h4: '1.875rem', // 30px
      lg: '1rem', // 15px
      md: '0.9375rem', // 15px
      sm: '0.8125rem' // 13px
    },
    lineHeight: {
      h1: '4rem', // 64px
      h2: '3.125rem', // 50px
      h3: '2.8125rem', // 45px
      h4: '2.8125rem', // 45px
      lg: '1.75rem', // 28px
      md: '1.375rem', // 22px
      sm: '1.25rem' // 20px
    },
    maxWidth: {
      container: '1110px'
    },
    borderRadius: {
      sm: '4px',
      lg: '22px',
      xl: '39px',
      full: '50%'
    },
    boxShadow: {
      btn: '0px 15px 15px -10px #FF9F8E',
      menu: '0px 10px 20px 0px rgba(80, 86, 98, 0.03)',
      'btn-white': '0px 15px 15px -10px #DB5943'
    },
    screens: {
      md: '768px',
      xl: '1110px'
    }
  },
  plugins: []
}
