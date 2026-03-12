module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61',
        secondary: '#6FA3EF',
        accent: '#FFD700',
        background: '#F5F5F5',
        text: '#333333',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}