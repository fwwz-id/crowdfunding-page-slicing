const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"moderate-cyan": "#3cb4ac",
				"dark-cyan": "#147b74",
				"dark-gray": "#7a7a7a",
        "black-65": "#000000a6"
			},
			fontFamily: {
				sans: ["Commissioner", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
