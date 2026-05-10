# Mijares Gallery — Project Context

## Who This Is For

This site belongs to the family of **Jose Maria Mijares** — specifically, Mijares was the husband of Sam's grandmother. Sam and her family are continuing his legacy through a small art business that has historically operated through in-person relationships, galleries, and word-of-mouth networking. The goal of this project is to build them an online presence that can generate momentum and eventually replace or supplement that traditional sales model.

This is a personal, family-owned project. Every decision — copy, design, product structure, UX — should honor the seriousness and elegance of Mijares' legacy while being accessible to new buyers who may be discovering him for the first time.

---

## Who Jose Maria Mijares Was

**Jose Maria Mijares (1921–2004)** was one of Cuba's most important modern painters.

- Born in Havana; trained at the prestigious **San Alejandro Academy of Fine Arts** on scholarship at age 16
- Influenced by the Havana School: Carlos Enríquez, René Portocarrero, Cundo Bermúdez, and especially modernist painter **Fidelio Ponce**
- A founding member of **Los Diez Pintores Concretos** (The 10 Concrete Painters), a landmark movement in pre-Castro Cuban art history (1959–1961)
- Participated in the **Venice Biennial** (1952, 1956) and São Paulo Biennial (1953); exhibited in Paris, Tokyo, Caracas, Washington D.C., and Miami
- Left Cuba in 1968 following Castro's rise; settled in **Miami**, where he returned to figurative painting focused on people and landscapes
- Received an **Honorary Doctorate in Fine Arts** from Florida International University (2001)
- Opened the **Mijares Gallery in Coral Gables** (2002); passed away in March 2004
- Work held in **MoMA (New York)**, the Lowe Art Museum, the Cintas Foundation, and the Museum of Modern Art of Latin America (Washington D.C.)

**His artistic style** evolved across his lifetime:
1. Figurative modernism
2. Geometric abstraction — a pioneer of this in Cuban art during the 1950s
3. Surrealism (1970s)
4. Decorative expressionism

He is known for fusing **constructivism** and **biomorphic surrealism** with **baroque elements from colonial Caribbean design**, primarily working in oil. His work is rich, layered, and deeply rooted in Cuban cultural identity.

---

## The Business Model

The family sells three categories of product:

1. **Original paintings** — authenticated works from Mijares' estate; the highest-value offerings
2. **Certified prints** — limited edition reproductions with certificates of authenticity
3. **Art-on-product** — an emerging line applying his artwork to physical goods such as decorative ceramic plates; a newer revenue stream that broadens accessibility

All sales have historically been done **in person** — through art fairs, gallery relationships, direct collector outreach, and word of mouth. This site is the first step toward an online sales channel.

---

## Project Goals

- **Primary:** Build credibility and trust with new buyers who discover Mijares online for the first time
- **Secondary:** Create a channel where existing collectors and contacts can purchase directly without going through a middleman
- **Tertiary:** Introduce and validate the art-on-product line to a broader audience

The site should feel like a **curated fine art gallery** — not a generic e-commerce store. Buyers of original art expect discretion, quality presentation, and a sense that they are engaging with something rare and meaningful.

---

## Tone & Voice

- Dignified and warm — not corporate, not casual
- Treat the buyer as a collector, even if they are purchasing a $40 glass piece
- Avoid promotional clichés ("shop now", "limited time", "don't miss out")
- Copy should reflect the **story** behind the work: Cuban heritage, exile, artistic evolution, family legacy
- The family is still present — this is not a posthumous archive; it is a living business run by people who knew him
- Site is bilingual (English / Spanish) — the Cuban family connection makes Spanish support meaningful and appropriate
- Avoid Cuban flag imagery — Mijares was a Cuban exile who left following Castro's rise; the flag carries complicated associations for this family

---

## Technical Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, TypeScript, Vite, Material-UI |
| State | React Context (Auth, Cart) |
| Routing | React Router v6 (basename `/Mijares` for GitHub Pages) |
| i18n | i18next + react-i18next (EN/ES) |
| Backend | Express, Node.js, TypeScript |
| Database | PostgreSQL |
| Auth | JWT (7-day tokens, bcryptjs) |
| Build | Vite (client, port 5173) / tsx (server, port 3001) |
| Hosting | GitHub Pages (static frontend only via Actions workflow) |

**Key paths:**
- Client: `my-ecommerce/client/src/`
- Server: `my-ecommerce/server/src/`
- Translations: `my-ecommerce/client/src/i18n/` (en.ts, es.ts)
- Product images: `my-ecommerce/client/public/images/`
- API proxy: `/api` → `localhost:3001`

**GitHub Pages notes:**
- Deployed via `.github/workflows/deploy.yml` on every push to `main`
- Vite base is `/Mijares/` — all asset and image paths must include this prefix
- `BrowserRouter` uses `basename="/Mijares"`
- `404.html` handles React Router deep-link redirects on GitHub Pages
- Live URL: `https://ssane005.github.io/Mijares/`

---

## Design Principles

- **Color palette:** warm linen `#F8F4EE` (background), near-black `#1A140C` (text), sienna `#8C4A2F` (accent), warm gray `#9E9189` (secondary text)
- **Typography:** **Cormorant Garamond** (headings, display, italic captions) + **DM Sans** (body, UI) — Cormorant at light weights (300–400) with generous letter-spacing
- Zero border-radius throughout — sharp edges reinforce the gallery aesthetic
- Artwork images should dominate; UI should recede
- Art terminology preferred: "Collection" not "Shop", "Inquire" not "Buy Now", "Works" not "Products"
- Sienna appears as hover/accent state — never as a dominant block color
- Dark near-black `#1A140C` sections used sparingly for quote bands, footer, and dramatic emphasis

---

## Current State of the Site

### Pages Built
- **Home** — split hero (Havana Lady painting / artist intro text), featured works grid (4 plates), pull quote band, footer
- **Collection (`/products`)** — all 5 plates with market-estimated prices, medium, dimensions, and per-piece mailto inquiry buttons
- **About (`/about`)** — full Mijares biography (real content), real studio photo of Mijares at work, gallery mission statement

### Features Implemented
- English / Spanish language toggle (i18next) with first-visit selection modal and navbar toggle
- Mobile hamburger menu (drawer) — hamburger icon | language toggle on mobile; full nav on desktop
- GitHub Pages deployment via GitHub Actions (auto-deploys on push to `main`)
- MG monogram favicon

### Current Product Images (in `public/images/`)
All are ceramic plates with Mijares artwork — photographed by Sam's mom. Better photos needed.

| Filename | Estimated Price | Notes |
|---|---|---|
| `plate-cream-girl-with-rose.jpg` | $1,100 | Figurative, warm tones — used as hero on homepage |
| `plate-harbor-geometric.jpg` | $1,200 | Has visible styrofoam in photo — needs retake |
| `plate-blue-abstract-figures.jpg` | $950 | Vibrant blue, signed 1972 |
| `plate-blue-geometric-figure.jpg` | $900 | Strong geometric abstraction |
| `plate-mauve-biomorphic.jpg` | $850 | Deep mauve/rust tones |
| `mijares.jpg` | — | Real photo of Mijares at work in his Miami studio — used on About page |

Prices are **market estimates based on auction comparables** ($600–$1,000 secondary market + gallery premium). Not confirmed by Sam's mom.

---

## Known Gaps to Address

- Backend/database not connected on GitHub Pages — all product data is currently hardcoded in the frontend
- No image management or upload workflow exists yet
- Product categories (originals / prints / art-on-product) not yet represented in the DB schema
- About page self-portrait image still sourced from Cernuda Arte (third-party) — should be replaced with family-owned image

---

## Open Action Items

### Email & Inquiry Flow
- [ ] Confirm the gallery contact email (currently placeholder `info@mijaresgallery.com`) — should this be Sam's personal email, a dedicated gallery address, or forwarded somewhere?
- [ ] Decide on inquiry workflow: does Sam's mom receive emails directly and reply manually, or does someone else manage incoming inquiries?
- [ ] Consider whether a contact form (vs. raw mailto link) is needed to reduce spam and keep a paper trail

### Sales & Inventory Workflow
- [ ] Confirm pricing on all 5 plates before going public — current prices are market estimates ($850–$1,200), not confirmed by Sam's mom
- [ ] Decide how "sold" items are handled — removed from site immediately, marked as sold, or left up as archive?
- [ ] Determine who is responsible for updating inventory when a piece sells (Sam, Sam's mom, or Josh via code)
- [ ] Clarify whether plates are one-of-a-kind originals or if multiples exist — affects how availability is presented
- [ ] Decide if shipping is offered or local pickup only — needs to be communicated on the site

### Photography
- [ ] Retake photo of harbor geometric plate — visible styrofoam packaging in current shot
- [ ] Better photos of all plates — currently shot in home setting; professional or better-lit shots will significantly improve presentation
- [ ] More product photos — only 5 plates currently; are there additional pieces (originals, prints) to add?

### Content Still Needed from Sam/Sam's Mom
- [ ] Correct titles and dates for each plate if known
- [ ] Any certificates of authenticity or provenance documentation to reference on product pages
- [ ] Confirmation or correction of the market-estimated prices
