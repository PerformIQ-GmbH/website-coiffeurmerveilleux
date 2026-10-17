# Hero-Fotofilm

Stand 17.10.2026. Der Nutzer wünscht im Hero von Demo 2 Haararbeiten statt
des Portraits der Inhaberin. Demo 1 und Merves Team-Portrait bleiben erhalten.

## Herkunft und Verfahren

Higgsfield hat in dieser Sitzung keine aufrufbaren Connector-Werkzeuge, und
auch die CLI ist nicht installiert. Kein Higgsfield-Auftrag wurde ausgeführt,
kein externer Login begonnen, kein Credit-Verbrauch bei Higgsfield behauptet.

Die vier vom Nutzer bereitgestellten Haarfotos waren als Referenzbilder im Chat
verfügbar. `image_gen` bereitete sie als Kontaktbogen auf und entfernte die
sichtbaren Carousel-Overlays. Die Ausgabe ist KI-bearbeitet und keine pixelgenaue
Kopie der Originale. Der sichtbare Hinweis nennt darum ausdrücklich
«Animierte Bildinszenierung» und «mit KI aufbereitet». Sie wird weder als
unveränderte Portfolioaufnahme noch als Originalvideo oder Vorher/Nachher belegt.

Der Kontaktbogen liegt unter `assets/work/hair-editorial-master.png`, Herkunft,
Ausschnittgrenzen und Prüfsummen unter `assets/work/sources.json`. Das Master
bleibt im Quellcode, wird aber nicht als zusätzliche grosse Bilddatei ausgeliefert.

`python3 scripts/render-hero-film.py` erzeugt mit FFmpeg den fertigen Film und
das Poster. Die tatsächlichen Kontaktbogen-Grenzen wurden geprüft (x=543,
y=705); 2px Innenabstand verhindert Fremdbildstreifen. Die Videoberechnung
erhält die Seitenverhältnisse und erzeugt keine neuen Haarstrukturen.

## Inszenierung und Budget

Vier langsame Kamerafahrten von höchstens 3,5% über Bordeaux, Eisblond, Braun und
Balayage. Übergänge dauern 650ms; der letzte Übergang führt wieder zum Startbild.
18,07 Sekunden, 720×960, 30fps, H.264/yuv420p, kein Audio, Faststart, etwa 2,4MB.
Kein schweres Animationsframework und keine extern eingebetteten Videodienste.

Der Film ist der eine neue Bewegungsmoment. Die bestehende Gestaltung, Texte,
Preise, Social-Profile und Teams bleiben erhalten. Desktop: Steuerung neben
dem Bild unter dem Text; Mobil: Steuerung unter dem Bild. Keine Haarspitze wird
von einem Button überdeckt. Alle Bedienelemente sind mindestens 48px hoch.

## Bedienung und Fallbacks

- Stummer Start nur im sichtbaren Bereich, sofern Motion-/Datensparpräferenz
  ihn erlauben. Ohne JavaScript bleiben Poster und fachliche Inhalte sichtbar.
- Pause/Start mit Tastatur und Touch; manuelle Pause bleibt nach Scrollen erhalten.
- Vier Look-Buttons halten die passende Szene als Standbild an.
- Offscreen und bei verborgenem Dokument pausiert der Film. Sichtbarkeit kann
  die automatische Wiedergabe wieder aufnehmen; die Nutzerpause hat Vorrang.
- Reduced Motion und Save Data verhindern automatische Medienanforderungen.
  Eine ausdrückliche Wiedergabe oder Standbild-Auswahl ist weiterhin möglich.
- Geänderte Motion-Präferenz stoppt laufende Wiedergabe.
- Blockiertes Autoplay erhält einen manuellen Start. Bei Medienfehler bleiben
  Poster, verständlicher Status und deaktivierte Filmsteuerung erhalten.
- Die neutrale Alt-Beschreibung nennt alle vier Looks; Status und gedrückter
  Button kennzeichnen den gewählten Look, ohne einen falschen Bordeaux-Alttext.

## Ausgeführte Prüfung

Vorhandenes Taste-System und Impeccable-`animate` für die enge Erweiterung,
kein erneutes Gesamt-Redesign. Leo prüfte unabhängig den gerenderten Hero und
fand drei Probleme: Button über Haarspitzen, Kontaktbogenstreifen, falscher
Poster-Alttext nach Lookwechsel. Alle drei wurden korrigiert und vom Hauptagenten
im finalen Render kontrolliert. Leos anschliessender vollständiger Abschluss
war nicht verfügbar; kein weiterer Agentenlauf wird behauptet.

Produktionsbrowser unter `/dist/` mit Vite Preview (HTTP-Range-Unterstützung):

- 1440/768/390px: stummes Abspielen, vier unterschiedliche dekodierte Looks,
  pausiertes Standbild, Pause/Start, Offscreen-Pause, Scroll-Wiederaufnahme,
  beibehaltene Nutzerpause, Motion-Änderung, keine Überläufe oder JS-Fehler.
- Initial Reduced Motion: keine MP4-Anforderung vor Nutzeraktion, sichtbares
  Poster und funktionierende manuelle Standbildauswahl.
- Ohne JavaScript: Poster sichtbar, keine toten Film-Buttons.
- Bewusst blockierte MP4: Poster und verständlicher Fehlerzustand.
- Kontrolliert abgewiesenes Autoplay: manueller Start funktioniert danach.

Das Verhalten bei real verborgenem Betriebssystem-Tab und ein echtes Save-Data-
Endgerät wurden nicht separat gemessen; die entsprechenden Plattformsignale
sind implementiert. Kein physisches iPhone-/Android-Gerät wurde behauptet.

Der erste Testserver (`python -m http.server`) lieferte keine Byte-Ranges;
Chromium meldete dort einen Suchbereich von [0,0]. Das war ein Fehler der
Prüfumgebung, nicht der Lookauswahl. Der unterstützte Produktions-Preview-Server
belegt danach den vollständigen Suchbereich und alle vier Szenen.

Belege: `/workspace/performiq-web-tools/validation/hero-film/` und `hero-film-leo/`.
Reproduzierbarer Browserlauf: `node /workspace/performiq-web-tools/check-hero-film.mjs`.
Taste-Lint und abschliessende Browsermessung: 0 FAIL, 0 WARN. Drei bekannte
Innenabstands-Hinweise des Impeccable-Quellenscans bleiben die bereits gemessenen
CSS-Variablen-Fehlalarme der unveränderten Preis-/Social-/FAQ-Abschnitte.

Visuelle Kritik des aktuellen Hero: ein klarer Haarlook führt, grosse Schrift
schliesst die Szene ab; Farben und Aufnahmeorte unterscheiden die vier Kapitel.
Steuerung und Hinweis sind lesbar, das mobile Bild hat eine eigene volle Breite.
Die Bildbasis ist sichtbar als KI-Aufbereitung gekennzeichnet. Grenzen bleiben
das rekonstruierte Fotomaterial und das fehlende Originalbewegungsvideo. Keine
neue Gesamt-Design- oder Conversion-Note für diese begrenzte Komponentenänderung.
