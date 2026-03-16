# Rizzo Venezia — Homepage production-grade

Homepage statica responsive, accessibile e SEO-oriented per presentare il brand **Rizzo Venezia** con UX mobile-first.

## Miglioramenti implementati
- Struttura semantica completa con CTA conversion-oriented.
- Navigazione desktop + bottom navigation mobile.
- Hero visiva ad alto impatto con contrasto e leggibilità ottimizzata.
- Sezione negozi con stato `Aperto/Chiuso` calcolato in automatico su timezone `Europe/Rome`.
- Tab menu accessibili (ruoli ARIA, tastiera: Arrow/Home/End).
- Form newsletter con validazione robusta email, privacy obbligatoria e honeypot anti-bot.
- JSON-LD `Bakery` / `Restaurant` / `LocalBusiness` per Local SEO.
- CSS con focus-visible, `prefers-reduced-motion` e componenti riusabili.

## Struttura file
- `index.html` — markup completo, metadata SEO e dati strutturati.
- `styles.css` — design system responsive e accessibilità visuale.
- `script.js` — tab accessibili, stato negozi dinamico, validazione newsletter.

## Avvio locale
```bash
python3 -m http.server 4173
```
Apri: `http://localhost:4173`
