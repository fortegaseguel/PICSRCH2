module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      height: {
        0.5: '2px',
      },
      fontSize: {
        'logo': '250px', 
      },
      letterSpacing: {
        play: '0.03em',
        menu: '0.1em',
        stretch: '-0.05em',
        custom: '0.25em',
        custom2: '0.4em',
        extra: '1em',
      },
      outline: {
        thin: '1px solid',
        medium: '2px solid',
        thick: '4px solid',
      },
      fontFamily: {
        'author': ['Author-Medium', 'sans-serif'],
        'author-bold': ['Author-Bold', 'sans-serif'],
        'chillax': ['Chillax-Semibold', 'sans-serif'],
        'din': ['DIN-Condensed-Bold', 'sans-serif'],
        'futura': ['Futura-CondensedMedium', 'sans-serif'],
        'montserrat': ['Monserrat-Regular', 'sans-serif'],
        'montserrat-bold': ['Montserrat-Bold', 'sans-serif'],
        'mshtakan': ['Mshtakan-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
