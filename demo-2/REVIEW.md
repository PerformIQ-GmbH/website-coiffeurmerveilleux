# Design-Review: Demo 2

Aktuelles Update: Der Hero zeigt nun einen animierten, KI-aufbereiteten Fotofilm
aus vier vom Nutzer gelieferten Haarlooks. Siehe `HERO-FILM.md` für den engen
Komponentenreview und die ausgeführten Medienprüfungen. Die folgenden Abschnitte
bewahren den ursprünglichen Seitenreview vor diesem Update.

Datum: 17.10.2026 (Europe/Zurich). Ziel: `/demo-2/`. Bestehende Demo 1 und
Startweiterleitung sind quellseitig unverändert. Es geht um eine eigenständige
Variante, nicht um eine Messung von Kaufwahrscheinlichkeit oder Kundenzufriedenheit.

## Methode und Grenzen

Ausdrücklich angeforderter gstack-`design-review`, Pin
`3e8b34d892bae426ba40f60adceec0030e03d110`, MIT. Die separate gstack-/Aside-Laufzeit
ist nicht installiert. Dokumentierter Ersatz: echter Playwright/Chromium-Browser,
unabhängiger Leo-Renderreview und vorhandener Impeccable-Detektor. Keine Telemetrie,
keine Fremdprojekt-Learnings, kein weiterer KI-CLI. Ein vollständiger gstack-Lauf
wird nicht behauptet. Leo sah weder Anwendungsquellen noch Taste-/Detektorberichte.

Der Review prüfte Erstansicht, normal durchgescrollte Seite, 1440/768/390px,
Kundenorientierung, Hierarchie, Typografie, Kontrast, Layout, Zustände, Mobile,
Inhaltsqualität, Musterwiederholung, Motion und wahrgenommene Ladequalität.
Suchfeld und Breadcrumbs sind für diesen Salon-Einseiter nicht erforderlich.
Ein unabhängiger Durchgang plus gebündelter gezielter Recheck; keine endlose Politur.

## Findings und Behebung

| ID | Befund | Änderung / Commit | Status |
| --- | --- | --- | --- |
| 001 | Kleine Textzeilen unmittelbar vor dem monumentalen Namen schwächten den klaren Abschluss des Hero. | Bildcaption entfernt, Namen verbreitert, Tracking −0.04em; Live-Zeiten vollständig im Besuchsabschnitt. `c4f8c40`, `0667a85` | Hero und keine Überschneidung im Render geprüft |
| 002 | Der Notiz-Submit war ohne JavaScript aktiv und hätte einen nutzlosen Formular-GET auslösen können. | Button initial disabled, erst durch gestartete Anwendung freigegeben. `22f7dee` | Ohne JS disabled; Telefonlinks und alle Preise bleiben erreichbar |
| 003 | Reveal-Effekte machten Inhalte vor dem Scrollen transparent. | Sichtbarer Grundzustand (Opacity 1), Verschiebung und Bildbewegung bleiben. `445c40b` | Leo bestätigt Opacity 1 auf allen drei Breiten; Reduced Motion statisch |
| 004 | Der Fokusrahmen aktiver Preis-Tabs war hell auf hellem Grund. | Dunkler Fokusrahmen in allen hellen Abschnitten. `796a392` | 3px, rgb(24,25,27), Leo und Produktionsbrowser bestätigen |
| 005 | «Team» war 42px breit und unterschritt das Touch-Ziel knapp. | Horizontales Padding und min-width 44px. `4ed0cdb` | Team 49.7×44px; sichtbare Desktop-/Tablet-Navlinks mindestens 44×44px |

Pro Finding getrennte Korrektur-Commits; keine Änderung an fremden Dateien, kein
Revert. Die JS-/Markup-Korrektur bleibt auf die lokale Besuchsvorbereitung begrenzt.
Der reproduzierbare Browsercheck liegt unter
`/workspace/performiq-web-tools/check-built-demo2.mjs` und prüft den No-JS-Fall
mit einer echten Disabled-Assertion, nicht mit einer Implementierungskopie.

Leos Screenshots und Rohbefunde liegen unter
`/workspace/performiq-web-tools/validation/demo2-leo/`. Vorher/Nachher-Hero wird
auch öffentlich auf `/design-review/` gezeigt. Weitere konkrete Vorher/Nachher-
Belege: Preisfokus und sichtbarer Grundzustand in Leos Recheck-Verzeichnis.

## Bewertung aus Kundensicht

Stärken: konkrete Preise früh auf der Seite, echte Personen, klar benannter
Anruf statt einer scheinbar bestätigten Buchung, eine vorbefüllte Gesprächsnotiz
und verständliche Auswege bei blockierten Plattforminhalten. Die vier Kategorien
helfen bei der Orientierung, ohne schon eine definitive Behandlung wählen zu müssen.
Die Kundensicht ist eine nachvollziehbare Hypothese, keine durchgeführte Befragung.

Leos unabhängige Noten nach dem gstack-Raster: Design A, AI-Slop A. Das Raster startet
jede Kategorie bei A und zieht nur für konkrete Befunde ab; die zwei mittleren
und eine kleine Feststellung wurden behoben. Die Note ist eine interne heuristische
Gestaltungsprüfung, keine Auszeichnung oder externe Zertifizierung.

ROUND 3

Seen in one second: Merves echtes Portrait und die direkte Einladung «Dein Look.
Gut beraten.», mit dem grossen Salonnamen als Abschluss.

Idea (one sentence): Der Schriftzug des wirklichen Salonempfangs wird zur
Architektur des Hero und des Footer; echte Menschen füllen ihn mit Bedeutung.

Live thing: Preiswahl nach dem eigenen Wunsch, passende Gesprächsnotiz und
Öffnungsstatus nach Zürich-Ortszeit; Social-Profile sind optional nachladbar.

Layout words by section: hero=Filmtitel / Preise=Auswahl und Tabelle /
Team=versetzte Portraits / Social=Raumfotografien und Profile / Pflege=Produktreihe /
Aktionen=Plakatpaar / FAQ=aufklappbare Fragen / Besuch=Zeiten und Vorbereitung /
Footer=Namenszug.

Scores: design 7.6 · usability 8.2 · creativity 6.8 · content 8.2 → overall 7.7

Caps applied: Kreativität höchstens 7; grosse Namen und persönliche Portraits sind
auch bei anderen Salons denkbar. Kein Anspruch auf ein unverwechselbar neues Konzept.

Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. Transparente Inhalte im ersten Fullpage (`demo2-leo/desktop-1440.png`): nach
   `445c40b` sichtbar, inklusive Reduced-Motion-Recheck.
2. Unsichtbarer Preisfokus (`demo2-leo/price-farbe.png`): nach `796a392` dunkel
   sichtbar; Produktionsbrowser prüft die berechnete Farbe.
3. Schmaler Team-Link (`demo2-leo/hero-1440.png`): nach `4ed0cdb` über 44px breit.

Die drei Breiten und die vollständigen Bildsheets wurden visuell gelesen.
Die limitierte Auswahl wiederholt Merves Portrait und einige Salonmotive; echte
Frisurergebnisse wären ein sinnvoller nächster Inhalt. Die mobile Teamdarstellung
bleibt bewusst schmaler, aber lesbar. Keine weiteren kosmetischen Vollrunden.

## Technische Ergebnisse

- Vite-Build erzeugt acht HTML-Einstiege, relative Pfade für Pages-Unterverzeichnis.
- Vier bestehende Öffnungsstatus-Tests bestanden.
- Demo 1 erneut im Produktionsbuild geprüft, bei 1440/768/390px und ohne JavaScript:
  Preis-Tabs, Galerie, Originalaktionen, Anfrage, Mobilmenü, Bilder und Startweiterleitung.
- Demo 2 im Produktionsbuild unter `/dist/` auf 1440/768/390px: zwölf Original-
  Preiszeilen, Tastatur-Home/End/Pfeile, Auswahlübergabe, vier Dialoge, Fokus-Rückgabe,
  FAQ, Mobilmenü, Notiz ohne Übertragung, Social-Nachladen und Schliessen,
  blockierte Drittanbieter, direkte Profil-Links, Review-Route.
- Ohne JavaScript: alle vier Preisbereiche und Telefon-/Social-Links nutzbar;
  Notizbutton deaktiviert. Keine Browserfehler, fehlenden Bilder oder Überläufe.
- Vor dem Social-Klick keine externen Requests; Notizvorbereitung sendet nichts.
- Reduced Motion: keine gemessenen Animationen oder Übergänge, sichtbare Inhalte.
- Impeccable-Quellendetektor: drei Hinweise `cramped-padding` an hellen Abschnitten.
  Sichtprüfung und berechnete Einrückung von 20px mobil bis 57.6px Desktop widerlegen
  sie; CSS-Variablen wurden im Quellenscan nicht aufgelöst. Keine Regeln abgeschaltet.
- Taste-Quellen-Lint: 0 FAIL, 0 WARN. Abschliessende Taste-Browsermessung: 0 FAIL, 1 WARN
  (`no-footage`). Kein eigenes Originalvideo verfügbar; die
  bewegte Originalfotografie bleibt die ehrliche Alternative.

## Offen vor echtem Betrieb

Die tatsächliche Darstellung der Instagram-/TikTok-Feeds ist von der Plattform,
Region, Cookies und möglichen Logins abhängig und wurde nicht verlässlich bestätigt.
Lokales Nachladen, Abschalten und die blockierten Fallbacks sind geprüft. Kein
API-Kontozugriff, keine Posting-Automatik, kein TLS-Bypass. Direkte Links sind der
verlässliche vom Einbettungszustand unabhängige Weg zum jeweiligen Profil.

Aktuelle Preise und Aktionsgültigkeit vom Salon bestätigen; echte zusammengehörende
Vorher-Nachher-Fotos beistellen; gewünschte Online-Buchung gesondert integrieren.
