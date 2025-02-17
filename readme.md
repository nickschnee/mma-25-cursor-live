# Projekt mit Vite und ES Modules

## Initial Setup (wenn wir das Projekt selber von Grund auf erstellen)

```bash
npm init -y
```

Erstelle `package.json` mit Flag -y für Default Werte

```bash
npm install vite --save-dev
```

Installiert Vite als Development Dependency

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

Füge die scripts zum package.json file hinzu

```bash
npm run dev
```

Startet den Vite Server auf `http://localhost:5173`

```bash
npm run build
```

Buildet das Projekt für Production

## Installation, wenn von GitHub geklont wird

```bash
npm install
```

Installiert alle Dependencies, die in 'package.json' definiert sind.

## Starten des Projekts

```bash
npm run dev
```

Startet den Vite Server auf `http://localhost:5173`
