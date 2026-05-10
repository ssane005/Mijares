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
3. **Art-on-product** — an emerging line applying his artwork to physical goods such as glass pieces, bowls, and decorative objects; a newer revenue stream that broadens accessibility

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

---

## Technical Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, TypeScript, Vite, Material-UI |
| State | React Context (Auth, Cart) |
| Routing | React Router v6 |
| Backend | Express, Node.js, TypeScript |
| Database | PostgreSQL |
| Auth | JWT (7-day tokens, bcryptjs) |
| Build | Vite (client, port 5173) / tsx (server, port 3001) |

**Key paths:**
- Client: `my-ecommerce/client/src/`
- Server: `my-ecommerce/server/src/`
- API proxy: `/api` → `localhost:3001`

---

## Design Principles

- Color palette: deep navy `#213D57`, slate gray `#475F76`, light gray background `#C6D1D8`
- Typography: **Cormorant Garamond** (headings) + **Montserrat** (body)
- Zero border-radius throughout — sharp edges reinforce the gallery aesthetic
- Artwork images should dominate; UI should recede
- Art terminology preferred: "Collection" not "Shop", "Add to Collection" not "Add to Cart", "Work" not "Product"

---

## Known Gaps to Address

- Database seed data is currently placeholder tech products — needs real Mijares artworks
- About page needs real biographical content reflecting Mijares' actual history
- Product categories (originals / prints / art-on-product) are not yet represented in the schema
- No image management or upload workflow exists yet
- No inquiry/contact flow for high-value original sales (buyers of originals may want to talk before purchasing)
