/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-start': '#454f84',
				'custom-end': '#35bdb5',
				'custom-top': '#039DE8',
				'custom-bot': '#EFF6FF',
				'blue-700-70': 'rgba(29, 78, 216, 0.7)',
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
