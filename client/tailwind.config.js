/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
      xs: "450px",
			sm: "550px",
			// => @media (min-width: 576px) { ... }

			md: "740px",
			// => @media (min-width: 960px) { ... }

      mdl: "860px",

			lg: "1000px",
			// => @media (min-width: 1440px) { ... }
		},
	},
	plugins: [],
};

