import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        karriere: resolve(__dirname, 'karriere.html'),
        kontakt: resolve(__dirname, 'kontakt.html'),
        leistungen: resolve(__dirname, 'leistungen.html'),
        referenzen: resolve(__dirname, 'referenzen.html'),
        ueberUns: resolve(__dirname, 'ueber-uns.html')
      }
    }
  }
});
