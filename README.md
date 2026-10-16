# Coiffeur Merveilleux: klickbare Salon-Demo

Die Startseite führt zur modernen Salon-Demo unter `demo/`: Originalbilder, Team, Preise, beworbene Angebote, Galerie, Öffnungszeiten und Kontakt aus der bestehenden Salon-Website. Bild- und Datenquellen sowie Grenzen stehen in `demo/SOURCES.md`. Die Terminanfrage bereitet eine Gesprächsnotiz vor und führt zum echten Telefonkontakt; sie sendet keine Nachricht und bestätigt keinen Termin.

Die ursprünglichen drei Konzeptstudien bleiben unter `vergleich.html` erhalten und enthalten weiterhin klar gekennzeichnete generierte Bildstudien.

## Zweite Demo und Design-Review

- [Demo 1](https://performiq-gmbh.github.io/website-coiffeurmerveilleux/demo/): bestehende Salon-Demo, unverändert erhalten.
- [Demo 2](https://performiq-gmbh.github.io/website-coiffeurmerveilleux/demo-2/): eigenständige Gestaltung aus Kundensicht, Preise früh, direkte Social-Profile und optionale Einbettungen.
- [Design-Review](https://performiq-gmbh.github.io/website-coiffeurmerveilleux/design-review/): Kundenargumente, Review-Ergebnisse und Grenzen.

Instagram und TikTok werden erst nach Klick eingebettet. Direkte Profil-Links bleiben bei blockierten Plattforminhalten und ohne JavaScript nutzbar. Es gibt keine Kontoverknüpfung, API-Synchronisierung oder Veröffentlichung von Posts. Die zweite Gesprächsnotiz bleibt lokal; der Salon wird telefonisch kontaktiert. Brief, Richtung und Quellen stehen in `demo-2/BRIEF.md`, der Review in `demo-2/REVIEW.md`.

## Entwicklung

Node.js 24 verwenden; die genaue Version steht in `.nvmrc`.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run preview
```

Der Build erzeugt acht HTML-Einstiege und gemeinsam genutzte Dateien in `dist/`.
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
