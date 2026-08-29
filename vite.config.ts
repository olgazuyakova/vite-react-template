import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

import { resolve } from 'node:path';
import  * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [react(), cloudflare(), tailwindcss()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@css': resolve(__dirname, './src/assets/css'),
			'@svg': resolve(__dirname, './src/assets/svg'),
		}
	},
});
