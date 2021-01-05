module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: 'Bungee Outline',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
