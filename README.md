# Rizzo Venezia — Strategic Web Blueprint

Questo documento traduce il brief in una proposta concreta e implementabile per il nuovo sito ufficiale di **Rizzo Venezia**.

## 1) Wireframe testuale dettagliato Homepage

### A. Header (sticky, mobile-first)
- **Top utility bar (solo mobile compatta)**: lingua `IT | EN`, telefono click-to-call, icona accessibilità.
- **Logo centrale** (Rizzo Venezia) con claim breve: `Bakery • Street Food • Venezia dal 19XX`.
- **Azioni rapide a destra**: ricerca, account, carrello (badge quantità).
- **Bottom navigation app-like (mobile)**:
  1. Home
  2. Menu
  3. Negozi
  4. Shop
  5. Contatti

---

### B. Hero video ad alto impatto
- **Video WebM in loop leggero**, muted, autoplay, playsinline.
- Scene: lievito madre, taglio focaccia fumante, spritz al tramonto.
- Overlay scuro leggero per leggibilità.
- **Headline**: “Il gusto autentico di Venezia, ogni giorno.”
- **Subheadline**: “Dal forno storico allo street food: artigianalità veneziana da gustare in negozio o online.”
- **Tre CTA principali above-the-fold**:
  - `Scopri i nostri Negozi a Venezia`
  - `Il Nostro Menu Street Food`
  - `Acquista i Dolci Veneziani Online`
- Microcopy trust: “Consegna in Italia e all’estero per selezione prodotti secchi”.

---

### C. Sezione “Best Seller del Giorno”
- Griglia/cards con 4–6 prodotti: Tramezzini, Mozzarelle in carrozza, Focacce, Baicoli.
- Ogni card include:
  - foto macro ottimizzata WebP/AVIF,
  - nome prodotto,
  - prezzo “da” (se applicabile),
  - label allergeni rapida,
  - tag visuali: Vegetariano / Vegano / Senza Lattosio.
- CTA secondaria per card: `Aggiungi al carrello` (se disponibile online) oppure `Disponibile in negozio`.

---

### D. Blocco “I nostri negozi a Venezia” (Local SEO conversion)
- Mini mappa statica + link a mappa interattiva.
- Tre location in card:
  - San Leonardo (Cannaregio)
  - Ca' D’Oro
  - Lido
- Per ogni card:
  - orari aggiornati,
  - stato live (`Aperto ora`/`Chiude alle ...`),
  - mini foto esterno,
  - CTA primaria: `Portami qui` (deep-link Google/Apple Maps).

---

### E. Blocco “Menu Street Food”
- Preview con tab teaser: `Pane e Lievitati`, `Gastronomia & Street Food`, `Pasticceria`.
- 1 prodotto highlight per tab.
- CTA: `Esplora il Menu completo`.

---

### F. Blocco “Shop Online”
- Focus prodotti secchi spedibili:
  - Baicoli,
  - Bussolai,
  - Kit regalo veneziano,
  - Panettone stagionale.
- Cross-sell visuale: `Spesso comprati insieme`.
- Trust badges: pagamenti sicuri, spedizioni tracciate, assistenza WhatsApp.
- CTA: `Vai allo Shop`.

---

### G. Storytelling breve “La nostra storia”
- Banda editoriale con immagine storica + testo teaser.
- CTA: `Scopri la nostra storia`.

---

### H. Prova sociale
- Review snippet (Google/Tripadvisor) con rating medio.
- UGC/Instagram strip (`#RizzoVenezia`).

---

### I. Newsletter + Lead Magnet (fine pagina)
- Headline: “Entra nel forno di Rizzo: -10% sul primo ordine online”.
- Form semplice (nome + email + lingua preferita).
- Checkbox privacy GDPR chiara.
- Conferma immediata con codice sconto.

---

### J. Footer SEO + utility
- NAP completo (Name, Address, Phone) per ogni sede.
- Link rapidi a Menu, Shop, Catering, FAQ, Spedizioni, Resi.
- Link social e WhatsApp.
- Link legali: Privacy, Cookie, Termini.
- Selettore lingua IT/EN con link in sottodirectory `/it/` e `/en/`.

## 2) Snippet HTML5 + Tailwind CSS — Hero section

> Snippet pronto per implementazione mobile-first, con video background, overlay, CTA e micro-interazioni leggere.

```html
<section class="relative isolate min-h-[88svh] overflow-hidden bg-[#2B2D42] text-[#FDFBF7]" aria-label="Hero Rizzo Venezia">
  <!-- Background video -->
  <video
    class="absolute inset-0 h-full w-full object-cover"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    poster="/assets/hero-poster.avif"
  >
    <source src="/assets/hero-rizzo.webm" type="video/webm" />
    <source src="/assets/hero-rizzo.mp4" type="video/mp4" />
  </video>

  <!-- Overlay for contrast -->
  <div class="absolute inset-0 bg-[#2B2D42]/55"></div>

  <!-- Content -->
  <div class="relative mx-auto flex min-h-[88svh] w-full max-w-7xl flex-col justify-end px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pb-20">
    <p class="mb-3 inline-flex w-fit rounded-full bg-[#E3B448]/20 px-3 py-1 text-xs font-semibold tracking-wide text-[#E3B448] ring-1 ring-[#E3B448]/40">
      Venezia autentica • Bakery & Street Food
    </p>

    <h1 class="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
      Il gusto autentico di Venezia, ogni giorno.
    </h1>

    <p class="mt-4 max-w-2xl text-sm text-[#FDFBF7]/90 sm:text-base">
      Dal forno storico allo street food: artigianalità veneziana da gustare subito in città o da ricevere a casa con il nostro shop online.
    </p>

    <!-- CTA cluster -->
    <div class="mt-8 grid gap-3 sm:grid-cols-3">
      <a
        href="/it/negozi"
        class="group inline-flex items-center justify-center rounded-2xl bg-[#C1121F] px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#C1121F]/30 transition hover:scale-[1.02] hover:bg-[#a50f1a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDFBF7]"
      >
        Scopri i nostri Negozi a Venezia
      </a>

      <a
        href="/it/menu"
        class="group inline-flex items-center justify-center rounded-2xl bg-[#E3B448] px-4 py-3 text-center text-sm font-semibold text-[#2B2D42] shadow-lg shadow-[#E3B448]/30 transition hover:scale-[1.02] hover:bg-[#d1a53f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDFBF7]"
      >
        Il Nostro Menu Street Food
      </a>

      <a
        href="/it/shop"
        class="group inline-flex items-center justify-center rounded-2xl border border-[#FDFBF7]/60 bg-[#FDFBF7]/10 px-4 py-3 text-center text-sm font-semibold text-[#FDFBF7] backdrop-blur-sm transition hover:scale-[1.02] hover:bg-[#FDFBF7]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDFBF7]"
      >
        Acquista i Dolci Veneziani Online
      </a>
    </div>

    <p class="mt-4 text-xs text-[#FDFBF7]/80 sm:text-sm">
      Spediamo prodotti selezionati in Italia e all'estero • Iscriviti alla newsletter e ottieni -10% sul primo ordine.
    </p>
  </div>
</section>
```

## 3) JSON-LD Schema Markup — Sede Cannaregio

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["Bakery", "Restaurant", "LocalBusiness"],
  "@id": "https://www.rizzovenezia.it/it/negozi/cannaregio#store",
  "name": "Rizzo Venezia - Cannaregio (San Leonardo)",
  "image": [
    "https://www.rizzovenezia.it/assets/stores/cannaregio-esterno.avif",
    "https://www.rizzovenezia.it/assets/stores/cannaregio-banco.avif"
  ],
  "url": "https://www.rizzovenezia.it/it/negozi/cannaregio",
  "telephone": "+39-041-000-0000",
  "priceRange": "€€",
  "servesCuisine": ["Venetian", "Bakery", "Street Food", "Italian"],
  "description": "Forno storico veneziano con pane artigianale, tramezzini, gastronomia e dolci tradizionali nel cuore di Cannaregio.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rio Terà San Leonardo 000",
    "addressLocality": "Venezia",
    "addressRegion": "VE",
    "postalCode": "30121",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.4444,
    "longitude": 12.3262
  },
  "hasMap": "https://maps.google.com/?q=45.4444,12.3262",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/rizzovenezia",
    "https://www.facebook.com/rizzovenezia"
  ],
  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.rizzovenezia.it/it/shop",
      "inLanguage": "it",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "873"
  }
}
</script>
```

## 4) Piano editoriale blog (5 articoli per turisti stranieri)

1. **What to Eat in Venice on the Go: 7 Local Street Food Picks Near the Grand Canal**
   - Keyword target: `what to eat in venice`, `venice street food`, `quick lunch venice`
   - Intent: informazionale + visita in negozio
   - CTA: “Find the nearest Rizzo store now”

2. **The Real Story of the Venetian Tramezzino (and Where to Try It Fresh)**
   - Keyword target: `venetian tramezzino`, `history of tramezzino`
   - Intent: storytelling culturale + brand authority
   - CTA: “Taste our daily tramezzini in Cannaregio / Ca' D’Oro”

3. **Cannaregio Food Guide: Breakfast, Aperitivo and Bakery Stops in One Walk**
   - Keyword target: `cannaregio food guide`, `best bakery cannaregio`
   - Intent: local SEO + itinerario turistico
   - CTA: mappa interattiva con pulsante `Portami qui`

4. **Venetian Cookies You Can Bring Home: Baicoli, Bussolai and Gift Boxes**
   - Keyword target: `venetian cookies`, `baicoli`, `what food souvenirs from venice`
   - Intent: conversion e-commerce
   - CTA: “Shop online — international shipping available”

5. **How to Eat Well in Venice If You Have Allergies or Dietary Needs**
   - Keyword target: `vegan venice`, `lactose free venice`, `allergy friendly bakery venice`
   - Intent: fiducia + inclusività + conversione mobile immediata
   - CTA: “Check menu tags (vegan, vegetarian, lactose-free) before you arrive”

---

## Note operative finali (implementazione consigliata)
- Stack suggerito: **Next.js + Tailwind + headless Shopify/WooCommerce** per performance e scalabilità.
- Architettura lingua: routing dedicato `/it` e `/en` con hreflang reciproci.
- Analytics: GA4 + eventi su CTA chiave (`portami qui`, `aggiungi al carrello`, `newsletter submit`).
- KPI primari: click-to-navigation map, conversion rate shop, iscrizioni newsletter, store visits assisted.
