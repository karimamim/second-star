/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		colors: {
			navy: "#37517E",
			lightNavy: "#6182ba",
			darkNavy: "rgba(40, 58, 90, 0.9)",
			blue: "#47B2E4",
			skyBlue: "#209dd8",
			gray: "rgb(255,255,255,0.6)",
			darkGray: "#5e5e5e",
			darkish: "#777777",
			dark: "rgb(68, 68, 68)",

			white: "#ffffff",
			offWhite: "#f3f5fa",
			blueWhite: "#cbd6e9",
			mashWhite: "#dee2e6",
			lightBlueWhite: "#e7f5fb",
			transparent: "transparent",
		},
		fontFamily: {
			jost: "'Jost', sans-serif",
			poppins: "'Poppins', sans-serif",
			openSans: "'Open Sans', sans-serif",
		},
		keyframes: {
			goProgress: {
				"100%": { transform: "scaleX(1)" },
			},
		},
		animation: {
			goProgress: "goProgress 1s cubic-bezier (1,0,0.5,1) forwards",
		},
	},
	plugins: [],
};
