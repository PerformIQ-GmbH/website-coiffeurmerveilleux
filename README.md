# Coiffeur Merveilleux: drei Gestaltungsstudien

Vergleichsseite mit den drei eigenständigen Entwürfen Atelier, Studio und Galerie.
Alle Bildmotive sind KI-generierte Studien, die Texte sind Entwurfsvorschläge.
Reale Salonangebote, Preise, Teamfotos und Kontaktwege müssen vor einem
Produktivstart abgeglichen werden. Dies ist eine Konzeptvorschau.

## Entwicklung

Node.js 24 verwenden; die genaue Version steht in `.nvmrc`.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

Der Build erzeugt vier HTML-Einstiege und gemeinsam genutzte Dateien in `dist/`.
Relative Asset-Pfade unterstützen auch GitHub-Pages-Projektadressen.
Die beiden geprüften ZIP-Pakete liegen unter `public/downloads/` und werden
unverändert in den Build kopiert. Lizenztexte der Schriften liegen unter
`assets/fonts/`; Bildherkunft und Entwurfsgrenzen stehen in `DESIGN-NOTES.md`.

## GitHub Pages

Der Branch `gh-pages` enthält die fertigen statischen Dateien einschließlich
Download-Paketen und `.nojekyll`. Bei GitHub unter Settings → Pages als Quelle
"Deploy from a branch", Branch `gh-pages`, Ordner `/ (root)` auswählen.
Pages muss vom Repository-/Organisationsplan unterstützt und durch die
Organisationsrichtlinie erlaubt sein. Das Repository muss dafür nicht öffentlich
gemacht werden; eine Pages-Vorschau kann trotzdem öffentlich erreichbar sein.

Änderungen in `main` veröffentlichen sich nicht automatisch. Nach Änderungen den
Build prüfen und die gebauten Dateien im Pages-Branch aktualisieren. Die
Produktivdomain des Salons wird durch diese Vorschau nicht geändert.
