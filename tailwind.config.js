
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customInter: ['Inter', 'sans-serif'],
        customInterBold: ['Inter-Bold', 'sans-serif'],
      },
      animation: {
        'slowspin': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}
