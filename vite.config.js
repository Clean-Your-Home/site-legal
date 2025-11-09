import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	root: '.', // корень проекта (по умолчанию можно даже не писать)
	build: {
		outDir: 'dist', // папка для сборки в корне
		rollupOptions: {
			input: {
				terms: resolve(__dirname, 'src/pages/terms.html'),
				policy: resolve(__dirname, 'src/pages/policy.html'),
				offer: resolve(__dirname, 'src/pages/offer.html'),
			},
		},
	},
})
