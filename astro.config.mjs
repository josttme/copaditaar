// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare(),
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': '/src',
				'@components': '/src/components',
				'@layouts': '/src/layouts',
				'@pages': '/src/pages',
				'@utils': '/src/utils',
				'@lib': '/src/lib',
				'@styles': '/src/styles',
				'@ypes': '/src/types',
				'@data': '/src/data',
				'@assets': '/src/assets',
				'@public': '/public'
				// Agrega más alias según necesites
			}
		}
	},
	server: { port: 8080 }
})
