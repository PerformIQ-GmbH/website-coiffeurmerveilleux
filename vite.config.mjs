import { fileURLToPath } from 'node:url';

const entry = (path) => fileURLToPath(new URL(path, import.meta.url));

export default {
  base: './',
  build: {
    rolldownOptions: {
      input: {
        vergleich: entry('./index.html'),
        atelier: entry('./atelier/index.html'),
        studio: entry('./studio/index.html'),
        galerie: entry('./galerie/index.html'),
      },
    },
  },
};
