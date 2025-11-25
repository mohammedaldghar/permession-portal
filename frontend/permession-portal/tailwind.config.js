/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006633',     // أخضر سعودي رسمي
        success: '#006633',
        warning: '#FFC107',
        danger: '#DC3545',
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif']
      }
    }
  },
  plugins: [],
}