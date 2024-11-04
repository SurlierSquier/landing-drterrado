/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-start': '#454f84',
				'custom-end': '#35bdb5',
			  },
			borderRadius:{
				'4xl':'2rem',
			}
		},
	},
	plugins: [
		function ({ addUtilities }) {
		  addUtilities({
			'.hover-scale': {
			 '@apply transition hover:opacity-85 hover:scale-150': {}
			},
			'.hover-effect': {
			 '@apply transition hover:opacity-85': {}
			}
		  })
		}
	  ],
}
