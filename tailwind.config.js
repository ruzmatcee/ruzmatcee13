/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "node_modules/preline/dist/*.js",
    ],
    theme: {
        extend: {
            container: {
                padding: {
                    DEFAULT: "1rem",
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2rem",
                    lg: "2rem",
                    xl: "3.5rem",
                    "2xl": "5rem",
                    "3xl": "5rem",
                },
            },
            screens: {
                xs: "540px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
                "3xl": "1780px",
            },
            fontFamily: {
                tradeWinds: ["'Trade Winds'", "serif"],
            },
        },
    },
    plugins: [require("preline/plugin")],
    darkMode: "class",
};
