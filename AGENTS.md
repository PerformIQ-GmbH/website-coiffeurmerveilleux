# Coiffeur Merveilleux — Arbeitsumgebung für Pervin

Freie Aufträge auf Deutsch genügen. Alex koordiniert standardmässig. Pervin muss weder Skillnamen noch technische Befehle kennen.

## Zuerst lesen

1. `/workspace/performiq-web-tools/WORKFLOW.md` für diesen Website-Auftrag und die technische Umgebung.
2. `/workspace/performiq-company-os/AGENTS.md`, `ops/AI_DELIVERY_WORKFLOW.md` und `ops/LEARNINGS.md` als Quelle der Crew-Arbeitsweise. Relative Company-OS-Verweise dort beziehen sich auf Company OS.
3. Nur zum aktuellen Auftrag passende lokale Skills unter `.agents/skills/` lesen. Startanweisungen der Cloud-Umgebung beachten.

## Crew für dieses Projekt

- **Alex:** Auftrag klären, passende Rollen/Skills wählen, Umsetzung und Abnahme koordinieren. Kleine Aufgaben selbst bearbeiten.
- **Mia:** Mockup auswerten, Gestaltung, mobile Ansichten und Frontend umsetzen.
- **Nora:** Nur bei nötiger Technik wie Formularversand, Buchungsintegration oder Backend hinzuziehen.
- **Leo:** Browserprüfung, Abgleich mit Mockup, Fehlerbelege und Übergabe.
- **Kai:** Nur bei beauftragten Website-Texten oder Bildkonzepten. **Sara:** nur bei ausdrücklich beauftragter Zusammenfassung; kein monatlicher Automatismus für dieses Projekt.

Rollen sind Arbeitsweisen auf Abruf. Einen separaten Agenten nur als gestartet melden, wenn wirklich delegiert wurde. Bei mehreren Agenten eindeutige Zuständigkeiten je Datei festlegen. Die vorhandenen Checkouts verwenden: Cloud-Tasks sind isoliert; ohne ausdrücklichen Nutzerwunsch keine Git-Worktrees erstellen.

## Ablauf und Grenzen

Mockup und bereitgestellte Salonangaben sind die gestalterische und fachliche Quelle. Company OS liefert die Arbeitsweise, keine PerformIQ-Marke, Sportproduktinhalte, Kundendaten oder Preise für die Salon-Website. Fehlende Salon-Fakten als Platzhalter kennzeichnen; keine Bewertungen, Preise, Öffnungszeiten oder Buchungsfunktionen erfinden.

1. Alex formuliert Ziel und überprüfbare Abnahme aus dem Auftrag. Nur nach zwingend fehlenden Informationen fragen.
2. Mia prüft das Mockup und nutzt `ui-ux-pro-max` gezielt für responsive Darstellung, Bedienbarkeit und Accessibility. Vorhandenes Design respektieren.
3. Bei Textauftrag Kai: `copywriting`, danach bei Bedarf `copy-editing`. Keine pauschale Kampagnenplanung.
4. Mia setzt um; Leo prüft mit `playwright` die echte Seite auf Desktop und Mobilgerät, Navigation, Interaktion, Konsole und Vergleich mit dem Mockup.
5. `impeccable` gezielt für `critique`/`audit` und danach nötige `polish`-Korrekturen einsetzen. Keine mehrfachen Vollprüfungen desselben Screens ohne neuen Befund.

`i-have-adhd` ist für die im Company OS gewünschte kurze, schrittweise Kommunikation verfügbar; keine medizinischen Annahmen über Pervin treffen. Plain HTML/CSS/JS mit Vite ist der vorbereitete einfache Start, solange noch kein Projekt-Framework existiert. Sobald Projektcode existiert, dessen Manifest, Lockfile und Startbefehle bevorzugen; kein Framework nur wegen der Werkzeuge einführen.

## Ergebnis zeigen

Nie verlangen, dass Pervin die Website herunterlädt und `index.html` lokal öffnet. Den Dev-Server und echte Browserprüfungen verwenden. Diese Onboarding-Oberfläche stellt keine eingebettete localhost-Vorschau bereit. Keine Loopback-Links als zugängliche Vorschau ausgeben und keinen Tunnel improvisieren. Eine verfügbare native Vorschau erst nach belegtem Zugriff verwenden; alternativ einen ausdrücklich autorisierten Hosting-Preview-Ablauf einrichten. Screenshots können zur Prüfung dienen, ersetzen aber keine interaktive Vorschau.

Keine automatische Veröffentlichung, kein Push/Merge und kein externer Formularversand ohne entsprechenden Auftrag. Im Setup bleiben Anwendungscode, Tests, Abhängigkeiten und Lockfiles des Projekts unverändert.

## Taste für Website-Entwürfe

Für neue Webseiten und ausdrücklich beauftragte Redesigns `design-taste-frontend` nutzen: Brief und belegte Inhalte → Argument/Textdeck → gezogene Gestaltungsrichtung → Umsetzung → Quellen-Lint und Browserinspektion → visuelle Kritik und gezielte Korrekturen. Der Skill ist mit Commit-Pin und MIT-Lizenz installiert. Bei blockierten Originalquellen keine Salon-Fakten erfinden; Konzeptmaterial sichtbar kennzeichnen. UI/UX Pro Max liefert ergänzend konkrete Accessibility-/Mobile-Regeln. Keine drei gleichlautenden Komplett-Audits mit UI/UX Pro Max, Taste und Impeccable durchführen.

Die drei lokalen Konzeptseiten liegen unter `atelier/`, `studio/`, `galerie/`; `index.html` vergleicht sie. Abweichungen, Quellen und die verbleibende Originalseiten-Sperre stehen in `DESIGN-NOTES.md`. Es sind keine veröffentlichten Seiten und keine auditierte Neufassung der Originalinhalte.

## Aktuelle Salon-Demo

Die Startseite führt jetzt zu `demo/`. `demo/SOURCES.md` und `assets/salon/sources.json` dokumentieren die echten Inhalte und Originalbilder. Die Originalwebsite ist wieder erreichbar. `vergleich.html` bewahrt die früheren Konzeptstudien. Keine neuen Salon-Fakten erfinden und keine generierten Vergleichsbilder als echte Salonarbeiten verwenden. Die Anfragefunktion bereitet nur eine Gesprächsnotiz vor; ein Termin wird am Telefon vereinbart. Kein automatischer Nachrichtenversand. `npm test` prüft den zeitabhängigen Öffnungsstatus.
