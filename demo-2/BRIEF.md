# Demo 2: Kundensicht, überzeugende Entscheidung

## Auftrag

Eine zweite, eigenständige, veröffentlichte Demo. Demo 1 unter `/demo/`, die
Startweiterleitung und ihre Funktionen bleiben unverändert. Neue Route `/demo-2/`.
Instagram und TikTok werden über die vom Nutzer genannten Profile angebunden.
Ein Design-Review mit passenden Skills gehört zum Auftrag.

Der Verweis auf Jack Nasher wird als Wunsch nach klarer Positionierung,
nachvollziehbarer Kompetenz, Wertorientierung und geringerer Unsicherheit verstanden.
Die Texte sind eigenständig; es wird keine persönliche Empfehlung, Beteiligung
oder Wortlaut-Übernahme durch Jack Nasher behauptet.

## Kundensicht vor Gestaltung

Die Persona ist eine Arbeitshypothese: ein neuer Salonbesucher mit einem Wunsch,
offenem Budgetrahmen und Unsicherheit über Team und Ablauf. Keine echte Befragung.

| Kundenfrage | Beleg und Antwort auf der Seite |
| --- | --- |
| Wer macht meine Haare? | Merve seit 2018 selbstständig, Ayse von Anfang an, echte Portraits |
| Was kostet mein Wunsch? | Alle Originalpreise, vier leicht verständliche Kategorien direkt nach dem Hero |
| Kann ich mir den Salon vorstellen? | Echte Räume, Bildvergrösserung, beide Social-Profile |
| Wie kläre ich eine offene Frage? | Deutlich benannter Telefonkontakt, kurze FAQ, lokale Gesprächsnotiz |
| Wann und wo kann ich kommen? | Echte Adresse, Karte und reguläre Öffnungszeiten in Zürich-Ortszeit |

Primäre Handlung: «Salon anrufen». Sekundär: «Preise ansehen». Es gibt keinen
erfundenen Buchungskalender, keine Testimonials und keine unbelegten Ergebnisse.

## Argument und Textdeck

1. «Dein Look. Gut beraten.» / Schnitt, Farbe und Extensions bei Merve und Ayse.
2. «Was hast du vor?» / Preistransparenz vor der Entscheidung, vollständige Beträge.
3. «Merve und Ayse. Dein Team.» / Persönliche Verantwortung statt anonymer Sterne.
4. «Bekomm ein Gefühl für Merveilleux.» / Salonbilder und echte öffentliche Profile.
5. «Deine Pflege. Auch zu Hause.» / Reale Produkte, reale Preise, Originalshop.
6. «Ein Extra für deinen Besuch.» / Originalangebote mit offen ausgewiesener Gültigkeit.
7. «Vor dem ersten Besuch» / Orientierung bei unklarem Wunsch, Preis und Extensions.
8. «Wir sehen uns an der Hugostrasse.» / Besuchsdaten und tatsächlicher Telefonweg.

Alternative Hero-Texte waren «Dein nächster Look beginnt hier» (zu austauschbar)
und «Merve und Ayse für dein Haar» (persönlich, weniger klare Handlungsorientierung).
Die gewählte kurze Variante lässt echte Namen und Leistungen im unterstützenden
Satz stehen. Keine neue Beratungsdauer oder kostenlose Leistung wird versprochen.

## Richtung und bewusste Abweichungen

Taste: `name-as-monument`, Seed 384905852, «Film title, bottom edge», Epilogue,
Graphit und Orange. Idee: Der Merveilleux-Schriftzug aus dem tatsächlichen
Salonempfang wird zum grossen Abschluss des Hero und kehrt im Footer zurück.
Das Portrait bleibt separat; Text verdeckt kein Gesicht und kein Bild beweist
eine nicht dokumentierte Frisurtransformation. Die Richtung ist markanter als
die zurückhaltende grüne erste Demo. Keine neue Ziehung aus Bequemlichkeit.

Die Preissektion des Deals setzt ein einzelnes Angebot voraus, hier existieren
mehrere unterschiedliche Leistungen. Daher vollständige Originalpreistabellen
statt eines erfundenen Pakets; die Kategorien dienen als lebendige Entscheidungshilfe.
Die angebotenen Küstenbilder passen nicht zum Zürcher Salon: ausschliesslich
bereits autorisierte Originalfotos aus `assets/salon/` verwendet. Keine Stockbilder.
Orange wurde für lesbaren dunklen Buttontext leicht aufgehellt. Alle Schriften
sind lokal; Epilogue Variable 5.3.0 aus Fontsource, SIL OFL 1.1.

## Social-Einbindung

- Instagram: https://www.instagram.com/coiffeurmerveilleux/
- TikTok: https://www.tiktok.com/@coiffeurmerveilleux
- Öffentliche Profil-Einbettungen über `/coiffeurmerveilleux/embed/` und
  `/embed/@coiffeurmerveilleux`, erst nach Klick auf «… hier laden».
- Kein API-Token, Login, Scraping, Posting, Followerzähler oder erfundener Feed.
- Beide direkten Profil-Links bleiben sichtbar, auch bei blockiertem Embed,
  Login-Schranke, Zeitüberschreitung und ohne JavaScript.
- Keine automatische Übertragung an diese Plattformen beim Seitenaufruf.
- Ein iframe-Load-Ereignis beweist keine sichtbaren Drittinhalte; die Rückmeldung
  behauptet darum keinen erfolgreichen Feed-Abruf.

Alle fachlichen Fakten und Bilder stammen aus den bereits verifizierten Quellen
in `../demo/SOURCES.md` und `../assets/salon/sources.json`. Preise und Aktionen
wurden unverändert übernommen. Keine neuen Salon-Fakten wurden recherchiert
oder erfunden. Die regulären Zeiten verwenden die geprüfte Funktion aus Demo 1.

## Skills und Abnahme

Taste für Konzeption und Renderprüfung; Copywriting für Kundennutzen und belegte
Argumente; UI/UX Pro Max gezielt für Kontrast, Fokus, Touch und Reduced Motion.
Die Suchvorschläge waren optisch zu allgemein; keine Sterne, generische
Testimonial-Carousel oder nicht belegten Claims daraus übernommen.

Der ausdrücklich gewünschte `design-review` von garrytan/gstack wurde mit
Commit `3e8b34d892bae426ba40f60adceec0030e03d110` und MIT-Lizenz lokal geladen.
Seine gstack-/Aside-Helfer sind nicht installiert; die dokumentierte Degradation
verwendet den vorhandenen Playwright-Browser, manuelle Renderbeurteilung und den
vorhandenen Impeccable-Detektor. Kein vollständiger gstack-Lauf behauptet.
Keine zusätzliche Telemetrie, Cloud-Auswertung oder Fremdprojekt-Learnings.

Abnahme: zwei getrennte erreichbare Demos; alle Quellenpreise erreichbar;
Tastatur-/Mobilnavigation; sichere Dialoge; Social-Links und Embed-Fallback;
lokale Anfrage ohne Versand; keine Änderungen an Demo 1. Review unter
`/design-review/`, technische Belege ausserhalb des Anwendungs-Repositories.

## Update: dynamischer Hero

Am 17.10.2026 wurde der Hero auf ausdrücklichen Wunsch durch einen Fotofilm aus
vier bereitgestellten Haarlooks ersetzt. Bildbasis mit KI aufbereitet und sichtbar
so gekennzeichnet; keine Originalvideoaufnahme. Herkunft, Wiedergabeverhalten,
Prüfergebnis und Higgsfield-Grenze stehen in `HERO-FILM.md`. Merve bleibt im Team,
Demo 1 bleibt unverändert. Die vorstehenden Gestaltungsnotizen dokumentieren den
Stand vor diesem gezielten Update.
