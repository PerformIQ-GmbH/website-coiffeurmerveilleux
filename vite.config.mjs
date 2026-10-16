import { fileURLToPath } from 'node:url';

const entry = (path) => fileURLToPath(new URL(path, import.meta.url));

export default {
  base: './',
  build: {
    rolldownOptions: {
      input: {
        index: entry('./index.html'),
        vergleich: entry('./vergleich.html'),
        demo: entry('./demo/index.html'),
        demo2: entry('./demo-2/index.html'),
        designReview: entry('./design-review/index.html'),
        atelier: entry('./atelier/index.html'),
        studio: entry('./studio/index.html'),
        galerie: entry('./galerie/index.html'),
      },
    },
  },
};
