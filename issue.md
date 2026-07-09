# Issue: Dynamic Cat Product Detail Page Implementation

## Overview
Every cat (anabul) available for adoption, sale, or in auction needs a high-fidelity detail product page. We have a static HTML design mockup for **Luna** (`stitch_anabul_cat_shop/meet_luna_british_shorthair_anabul/code.html`) that must be converted into a dynamic, responsive React component in `ProductDetail.tsx` under `src/pages`. 

The goal of this issue is to outline the step-by-step instructions so a junior programmer or AI model can successfully implement or refactor this page.

---

## Key Requirements

1. **Dynamic Routing Setup**
   - The route must capture the dynamic parameter `:id` (e.g. `/cats/:id`) using React Router.
   - If the ID does not exist or is invalid, the page should fall back gracefully to a default cat (e.g., Luna).

2. **Expanded Cat Database (`catsData.ts`)**
   - A central mock database needs to be defined to house expanded details for each cat in `AvailableCats.tsx` and `LiveAuctions.tsx`.
   - Each entry must conform to a schema containing:
     - `id`: Unique identifier string
     - `name`: Cat name string
     - `breed`: Breed string
     - `price`: Numeric price
     - `ageWeeks`: Age in weeks
     - `gender`: 'Male' | 'Female'
     - `imageUrl`: Main portrait image URL
     - `badge`: Optional string badge (e.g. 'Vet-Approved')
     - `about`: Main description paragraph
     - `aboutSecondary`: Optional secondary description paragraph
     - `temperament`: Array of temperament traits (e.g. `['Good with Kids', 'Calm Nature', 'Affectionate']`)
     - `medicalStatus`: Array of medical checks (e.g. `['Fully vaccinated', 'Microchipped']`)
     - `wcfRegistered`: Boolean indicating certified lineage registration
     - `fatherName` / `fatherImage`: Optional name and portrait of the father
     - `motherName` / `motherImage`: Optional name and portrait of the mother
     - `gallery`: Array of extra gallery image URLs

3. **High-Fidelity UI Layout**
   - **Hero Header:** Displays the active cat image with a fading gradient overlay (`#fcf9f8`), title, breed, age, gender, and validation badges.
   - **Main Grid:** Standard two-column split on desktop viewports:
     - **Left Column (Details):** About section, Temperament Bento boxes, Health & Heritage card (with medical checklist and WCF certificate info), Parents card, and a Gallery.
     - **Right Column (Sticky Actions):** A sticky container containing the purchase price, premium delivery and welcome kit features, "Buy Now" button, "Start Adoption Application" button, and specialist consult banner.
   - **Integration:** Integrate existing layout header (`<Navbar />`) and footer (`<Footer />`) to match the rest of the application.

4. **Micro-interactions & Interactive States**
   - **Interactive Gallery:** Clicking any thumbnail in the gallery grid swaps the active Hero portrait image with that thumbnail, providing active styling indicators on the selected thumbnail.
   - **Buy Now Action:** Simulated cart addition. The button text should change to "Added to Cart!" for 3 seconds upon clicking.
   - **Adoption Application Action:** Simulated submission. The button should change state to "Application Started!" upon clicking.
   - **Image Hover Effects:** Images should scale or transition brightness on hover.

---

## Step-by-Step Implementation Guide

### Phase 1: Set Up Mock Database (`src/data/catsData.ts`)
Create a file to house detailed attributes of all cats. Ensure Luna has the exact details specified in the HTML mockup:
- *Father:* Lord Grey
- *Mother:* Lady Pearl
- *About details:* "Luna is the quintessential British Shorthair..."

### Phase 2: Add Router Links (`src/components/CompanionCard.tsx`)
1. Import `Link` from `react-router-dom`.
2. Wrap the image card container and the title card header with `<Link to={`/cats/${companion.id}`}>`.
3. Ensure the absolute-positioned "favorite" button has a higher `z-index` so clicking it does not trigger navigation.
4. Replace the "Buy Now" button on the card with "View Details" linking to `/cats/${companion.id}`.

### Phase 3: Create Page Layout (`src/pages/ProductDetail.tsx`)
1. Import `useParams` from `react-router-dom`.
2. Import `Navbar` and `Footer` components.
3. Import `catsData` from the mock database.
4. Fetch the dynamic `id` from `useParams`. Retrieve the cat detail from `catsData`.
5. Write the page markup following the HTML structure in `meet_luna_british_shorthair_anabul/code.html`.

### Phase 4: Implement Interactive States
1. Define a state variable `heroImage` initialized to `cat.imageUrl`. Add a `useEffect` hook to reset it when `cat` changes.
2. Render the gallery items. Bind `onClick` on each thumbnail to call `setHeroImage(thumbnailUrl)`.
3. Define boolean state variables for `isAddedToCart` and `isApplicationStarted` with temporary timeouts to reset back to initial states.
4. If Redux state is connected later, dispatch `setCartOpen(true)` on buy actions.

### Phase 5: Styling & Polish
- Use Tailwind CSS v4 styling matching the design. Ensure standard color variables are applied (`bg-background`, `text-on-surface`, `text-primary`).
- Apply the `.frosted-glass` or standard `backdrop-blur-md` classes on sticky elements and badges.
- Double-check mobile responsiveness: the sticky sidebar should stack cleanly beneath the main details column on mobile.
