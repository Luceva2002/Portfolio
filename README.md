# Portfolio Spaziale - Luca Evangelista

Un portfolio con tema spaziale realizzato con React, Next.js e Tailwind CSS.

## Caratteristiche

- 🌌 Sfondo animato con particelle interattive
- 🚀 Elementi spaziali animati (astronauta, meteorite, navicella, alieno)
- ✨ Effetto "Variable Proximity" per il testo principale
- 📱 Design completamente responsive
- 🎨 Animazioni fluide con Framer Motion

## Installazione

1. Installa le dipendenze:
```bash
npm install
```

2. Avvia il server di sviluppo:
```bash
npm run dev
```

3. Apri [http://localhost:3000](http://localhost:3000) nel tuo browser.

## Tecnologie utilizzate

- **Next.js 14** - Framework React
- **Tailwind CSS** - Styling
- **Framer Motion** - Animazioni
- **TSParticles** - Effetto particelle di sfondo
- **TypeScript** - Type safety

## Struttura del progetto

```
nuovo-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ParticlesBackground.tsx
│   └── VariableProximityText.tsx
├── public/
│   ├── astronaut.png
│   ├── meteorite.png
│   ├── spacecraft.png
│   └── alien.png
└── ...
```

## Deploy

Per creare una build di produzione:

```bash
npm run build
npm start
```
