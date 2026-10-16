# Prüfung der klickbaren Demo

Geprüft am 16.10.2026. Interne Browserbelege liegen unter
`/workspace/performiq-web-tools/validation/salon-demo/` und `demo-leo/`.

## Sichtprüfung nach den Korrekturen

ROUND 2

Seen in one second: Merves echtes Portrait und die grosse zweizeilige Überschrift.

Idea (one sentence): Der persönliche Empfang durch Merve und die kleine Salonfamilie
wird zur ungleichen Hängung der echten Salon-, Team- und Produktfotografien.

Live thing: Der Öffnungsstatus folgt der Ortszeit Zürich; Besuchende filtern echte
Fotos, vergleichen Preisbereiche und bereiten ihren Telefonwunsch vor.

Layout words by section: hero=Bildkomposition / Geschichte=Textpaar /
Galerie=ungleiche Hängung / Preise=Tabs und Tabelle / Aktionen=farbige Plakatfläche /
Team=versetzte Portraits / Pflege=Produktreihe / Besuch=Foto und Zeiten /
Kontakt=Gesprächseinladung / Footer=Namenszug.

Scores: design 7.8 · usability 8.0 · creativity 7.0 · content 8.4 → overall 7.8

Caps applied: Kreativität auf 7 begrenzt; persönliche Portrait-Komposition ist ein
bekannter Ansatz und kein nur für diesen Salon denkbares neuartiges Konzept.
Die Bewertungen sind eine interne gestalterische Einschätzung, keine Auszeichnung.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. Hero-Bildunterschrift lag unter dem kleinen Foto, besonders bei 768px.
   Korrektur: Die vollständige Bildkomposition erhält eigenen Platz, die Merve-
   Unterschrift folgt darunter. Leos erneute Geometrie- und Sichtprüfung bei
   390/768/1440px besteht; `hero-fixed-768.png` zeigt den korrigierten Zustand.
2. Inaktive Preis-Tabs hatten zu wenig Kontrast auf dem hellen Feld.
   Korrektur: Lokale dunkle Textfarbe im gesamten Preisabschnitt. Sichtbar in
   `demo/.taste-skill/inspect/tablet-page-01.jpg`; Kontrastmessung besteht.
3. Die zusätzliche Extensions-Überschrift benötigte auf dem Tablet vier Zeilen.
   Korrektur: Präzise auf «Microbands» gekürzt. Im finalen Tablet-Sheet passt sie
   in eine Zeile; sämtliche gemessenen Überschriften bleiben bei höchstens zwei.

Die finalen Desktop-, Tablet- und Mobil-Sheets wurden geöffnet und beurteilt:
klare Schriftgrössen, gemeinsame Textkanten, lesbare Preise, keine Überlagerung,
keine abgeschnittenen Bedienelemente, vollständige angeforderte Inhalte. Auf dem
Handy führt die Typografie, das Portrait folgt darunter; Fotos sind dort als eigene
zweispaltige Komposition gesetzt. Die limitierte Originalauswahl führt bewusst zu
wiederkehrenden Salon-/Teamfotos. Echte Frisurergebnisse wären die nächste inhaltliche
Verbesserung; ungeprüfte Transformationen wurden nicht ergänzt.

## Ausgeführte Prüfungen

- Taste-Quellen-Lint: 0 FAIL, 0 WARN.
- Taste-Browserinspektion: 0 FAIL, 1 WARN. Kein Video: auf den belegten Original-
  quellen ist kein passender Salonclip verfügbar. Bewegte Originalfotografie,
  Bildmasken, gestaffelte Eintritte und Dialogzustände erfüllen den Motion-Auftrag.
- Öffnungsstatus: vier Node-Tests, alle bestanden; Öffnungs-/Schliessgrenzen,
  Wochenende, Zürich-Datum und Sommer-/Winterzeit.
- Unabhängiger Leo-Check: Quellenabgleich, Tastaturbedienung, Galeriefilter,
  Dialoge/Fokus, Preisbereiche, Anfrage, Mobilmenü, Reduced Motion, ohne JavaScript.
- Gebautes `dist/` unter einem URL-Unterpfad: 1440/768/390px, Startweiterleitung,
  vier Preistabs, gefilterte Lightbox inklusive Vor/Zurück, beide Originalaktionen,
  Anfragevorbereitung ohne Übertragung, Mobilnavigation, Telefonnummern.
- Keine fehlenden Bilddateien, keine JavaScript- oder HTTP-Fehler, kein horizontaler
  Überlauf; kein externer Request beim Vorbereiten einer Anfrage.
- Ohne JavaScript bleiben alle vier Preisbereiche und echte Telefonlinks erreichbar.

Die Demo bestätigt keine Buchungen. Aktionsgültigkeit und Feiertagsabweichungen
sind durch den Salon zu bestätigen. Öffentliche Auslieferung wird nach dem Push
separat gegen den geprüften Build abgeglichen.
