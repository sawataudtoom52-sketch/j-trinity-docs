# CODEX_NEXT_STEPS.md

Copy this prompt into Codex after uploading this repository/package.

```text
You are building a professional learning website for J-TRINITY C4ISR from the Markdown files in /docs.

This is an educational documentation platform, not an operational C2 system.

Use Docusaurus.

Requirements:
- Use docs/parts as the primary content source.
- Create a polished homepage.
- Create sidebar navigation grouped by doctrine/architecture/technical/guardian/operational/AAR sections.
- Add search support if available.
- Add dark tactical theme: dark green, black, slate, amber warning, red critical accents.
- Add Mermaid diagrams for:
  1. JD → JM → JB → JG → HUMAN
  2. operationalTimeline event flow
  3. Truth > Speed doctrine
  4. Guardian Red Line flow
  5. AAR Replay flow
- Keep all pages readable on desktop and mobile.
- Do not build SIM-LAB yet.
- Do not build Firebase/backend yet.
- Do not create real-world command, weapon, drone, GPS, vehicle, actuator, or external-control features.
- Keep SIMULATION_ONLY / ADVISORY_ONLY / HUMAN_FINAL visible in the website footer and relevant pages.

Deliver:
- Working Docusaurus project
- README with run commands
- Sidebar config
- Clean theme customization
- Report files changed
- Report limitations and next phase recommendations
```

## Suggested phases

1. PHASE 0 — Docusaurus setup
2. PHASE 1 — Import Markdown and sidebar
3. PHASE 2 — Homepage and theme
4. PHASE 3 — Search and glossary
5. PHASE 4 — Mermaid diagrams
6. PHASE 5 — Polish and deploy
