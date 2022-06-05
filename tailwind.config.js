module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      barlow: ["Barlow Condensed"],
      bellefair: ["Bellefair"],
    },
    extend: {
      colors: {
        "p-black": "#0B0D17",
        "p-blue": "#D0D6F9",
        "p-white": "#FFFFFF",
      },
      fontSize: {
        h1: "150px",
        h2: "100px",
        h3: "56px",
        h4: "32px",
        h5: "28px",
        "sub-h1": "28px",
        "sub-h2": "22px",
        "sub-h3": "14px",
        nav: "16px",
        body: "18px",
      },
      letterSpacing: {
        h5: "4.75px",
        "sub-h2": "2.35px",
        nav: "2.7px",
      },
      blur: {
        xs: "2px",
      },
      backgroundImage: {
        "home-desktop": "url('/home/background-home-desktop.jpg')",
        mars: "url('/mars/background-mars-desktop.jpg')",
      },
      spacing: {
        "landing-button": "274px",
      },
      backdropBlur: {
        nav: "82px",
      },
      minHeight: {
        "9/10": "90%",
        "6/10": "60%",
        "8/10": "80%",
        "2/10": "20%",
        "1/10": "10%",
        card: "500px",
      },
      maxWidth: {
        "9/10": "90%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
