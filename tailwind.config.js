/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EEF5FF",
      },
      backgroundImage: {
        "desktop-sidebar": "url('/bg-sidebar-desktop.svg')",
        "mobile-sidebar": "url('/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
