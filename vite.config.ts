import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

import { resolve } from 'node:path';
import  * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [
		react(),
		cloudflare(),
		tailwindcss(),
		svgr(),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@css': resolve(__dirname, './src/assets/css'),
			'@svg': resolve(__dirname, './src/assets/svg'),
			'@pages': resolve(__dirname, './src/components/pages'),
			'@layout': resolve(__dirname, './src/components/layout'),
			'@constants': resolve(__dirname, './src/constants'),
		}
	},
});
