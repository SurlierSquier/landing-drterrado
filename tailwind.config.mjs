/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		function ({ addUtilities }) {
		  addUtilities({
			'.hover-effect': {
			 '@apply transition hover:opacity-85 hover:scale-150': {}
			}
		  })
		}
	  ],
}
