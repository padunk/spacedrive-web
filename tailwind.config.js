/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial-career": `linear-gradient(to bottom left, hsl(263, 67%, 34%) 0%,
          hsla(263, 67%, 34%, 0.738) 19%,
          hsla(263, 67%, 34%, 0.541) 34%,
          hsla(263, 67%, 34%, 0.382) 47%,
          hsla(263, 67%, 34%, 0.278) 56.5%,
          hsla(263, 67%, 34%, 0.194) 65%,
          hsla(263, 67%, 34%, 0.126) 73%,
          hsla(263, 67%, 34%, 0.075) 80.2%,
          hsla(263, 67%, 34%, 0.042) 86.1%,
          hsla(263, 67%, 34%, 0.021) 91%,
          hsla(263, 67%, 34%, 0.008) 95.2%,
          hsla(263, 67%, 34%, 0.002) 98.2%,
          hsla(263, 67%, 34%, 0) 100%)`,
      },
    },
  },
  plugins: [],
};
