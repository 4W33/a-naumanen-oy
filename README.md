# A. Naumanen Oy - Moderni Kotisivu

Täysin uusi moderni kotisivu A. Naumanen Oy -yritykselle, rakennettuna React + TypeScriptillä.

## Teknologiat

- **React 18** - Moderni UI-kirjasto
- **TypeScript** - Tyyppiturvallisuus
- **Vite** - Nopea build-työkalu
- **Tailwind CSS** - Moderni utility-first CSS-framework

## Asennus

1. Asenna riippuvuudet:
```bash
npm install
```

2. Käynnistä kehityspalvelin:
```bash
npm run dev
```

3. Avaa selaimessa:
```
http://localhost:5173
```

## Build tuotantoon

```bash
npm run build
```

Tuotantoversio löytyy `dist`-kansiosta.

## Projektin rakenne

```
├── src/
│   ├── components/      # React-komponentit
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── References.tsx
│   │   ├── About.tsx
│   │   ├── CTA.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── data/           # JSON-data
│   │   ├── services.json
│   │   └── references.json
│   ├── App.tsx         # Pääkomponentti
│   ├── main.tsx        # Entry point
│   └── index.css       # Globaalit tyylit
├── scraped-data.json    # Scrapattu data alkuperäiseltä sivulta
└── package.json
```

## Ominaisuudet

- ✅ Moderni, responsiivinen design
- ✅ Hero-sektio taustakuvalla
- ✅ Palvelukortit ikoneilla
- ✅ Referenssikuvagalleria grid-layoutilla
- ✅ Yrityksen esittely
- ✅ CTA-sektio yhteystiedoilla
- ✅ Smooth scroll navigointi
- ✅ Mobiilioptimoitu

## Sisältö

Sisältö on scrapattu alkuperäiseltä sivulta (https://www.anaumanen.fi) ja uudelleensanoitettu modernilla, neutraalilla yritystyylillä. Kuvat ovat placeholder-kuvia, jotka voidaan korvata oikeilla referenssikuvilla.

## Lisenssi

© A. Naumanen Oy

