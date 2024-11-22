/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./dist/**/*.html", "./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        animatedSettings: {
            animatedSpeed: 1000,
            heartBeatSpeed: 500,
            hingeSpeed: 2000,
            bounceInSpeed: 750,
            bounceOutSpeed: 750,
            animationDelaySpeed: 500,
            classes: [],
        },
        extend: {
            screens: {
                "-2xl": { max: "1535px" },
                "-xl": { max: "1279px" },
                "-lg": { max: "1023px" },
                "-md": { max: "767px" },
                "-sm": { max: "639px" },
            },
            colors: {
                "cream-50": "#faebd7",
                "cream-100": "#fcdeba",
                "cream-200": "#e7c7a5",
                "cream-300": "#d2b18f",
                "cream-400": "#bd9a7a",
                "cream-500": "#a98365",
                "cream-600": "#946c4f",
                "cream-700": "#7f563a",
                "cream-800": "#6a3f24",
                "cream-900": "#55280f",
            },
            animation: {
                fall: "fall 5s ease-in forwards",
                "navbar-open": "navbar-open 0.65s ease-out forwards",
                "navbar-close": "navbar-close 0.25s ease-in forwards",
            },
            keyframes: {
                fall: {
                    "0%, 5%": {
                        transform: "translate(0%, -1rem) scale(1.35) rotate(45deg)",
                    },
                    "50%, 51%": {
                        transform: "translate(-10%, 20%) scale(1.20) rotate(80deg)",
                        opacity: 1,
                    },
                    "70%": { opacity: 1 },
                    "100%": {
                        transform: "translate(250%, 300%) rotate(-10deg)",
                        opacity: 0,
                        display: "none",
                    },
                },
                "navbar-open": {
                    from: { height: "56px" },
                    to: { height: "100vh" },
                },
                "navbar-close": {
                    from: { height: "100vh" },
                    to: { height: "56px" },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animatecss")],
};
