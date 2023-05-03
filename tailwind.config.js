/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      },
      backgroundImage: {
        'main-background': "url('/bg-website-min.png')",
        "progress-bg": "url('/progress-bg .png')"
      },
      fontFamily: {
        "myfont": ['LabilGrotesk','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto,Oxygen','Ubuntu,Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif']
      }
    },
  },
  plugins: [],
}
