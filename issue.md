# Issue: Implement Live Cat Auctions Page

## Goal
Implement a fully responsive and interactive **Live Cat Auctions** page (`LiveAuctions.tsx`) within the Anabul e-commerce platform. The page must display current live cat auctions, handle real-time countdown timers, and simulate micro-interactions (placing bids, toggling favorites).

---

## 1. Prerequisites & Design Specs
- **Mockup File**: `stitch_anabul_cat_shop/live_cat_auctions_anabul/code.html`
- **Asset Directory**: Contains mockup screenshots and color codes.
- **Design Guidelines**:
  - Global `Navbar` and `Footer` must be reused.
  - Active navigation state in `Navbar.tsx` needs to support the `/auctions` path.
  - Tailwind styling must follow color schemes defined in `tailwind.config.js` (such as `primary` rust, `secondary` green, `error` red, and `surface-container-*` variants).
  - Include custom CSS hover translation springs (e.g. `transform: translateY(-8px)`) for the cards to match the design system.

---

## 2. Implementation Steps

### Step 2.1: Navigation Setup
Integrate the route and navigation links so users can access the new page:
1. **Router Registration**: Map the path `/auctions` to the `<LiveAuctions />` page component in `src/routes/AppRoutes.tsx`.
2. **Navbar Link**: In `src/components/Navbar.tsx`, add the "Auctions" option to the `navLinks` list:
   ```typescript
   { label: 'Auctions', to: '/auctions' }
   ```
3. **Active Path Highlighting**: Update active link highlighting in `Navbar.tsx` to mark "Auctions" as active when the route matches `/auctions`.

### Step 2.2: Define the Data Structure
Create a TypeScript interface for the auction entries so the data remains structured:
```typescript
interface AuctionCat {
  id: string;
  name: string;
  breed: string;
  bidsCount: number;
  currentBid: number;
  imageUrl: string;
  badge?: 'LIVE' | 'FEATURED' | 'NEW ENTRY' | 'RISING STAR';
  initialTime: number; // remaining time in seconds
}
```
Define dummy mock data for the 6 cats shown in the mockup:
- **Sir Sterling**: British Shorthair, 14 bids, $1,250, badge: `LIVE`, initialTime: 3400 (56 min)
- **Moonlight**: Blue-Point Ragdoll, 8 bids, $2,100, badge: `FEATURED`, initialTime: 82000 (~22 hrs)
- **Atlas**: Exotic Bengal, 0 bids, $3,500, badge: `NEW ENTRY`, initialTime: 172800 (48 hrs)
- **Snowy King**: Maine Coon, 32 bids, $4,200, badge: `LIVE`, initialTime: 1200 (20 min)
- **Onyx**: Bombay, 11 bids, $1,800, badge: none, initialTime: 45000 (12.5 hrs)
- **Button**: Scottish Fold, 26 bids, $2,450, badge: `RISING STAR`, initialTime: 54000 (15 hrs)

### Step 2.3: Implement Countdown Timer State
To support counting down in real-time:
1. Initialize react state with the list of cats (`auctions` state).
2. Set up a `useEffect` hook with `setInterval` running every 1000ms:
   - Decrement the `initialTime` parameter by `1` for all cats.
   - Clear the interval on component unmount to prevent memory leaks.
3. Write a helper function `formatTime(seconds)` to translate seconds into `HH:MM:SS` format.
4. Add warning color styling: If remaining time is less than 1 hour (< 3600 seconds), apply class `text-error` (red text) to emphasize urgency.

### Step 2.4: Bidding Simulation
Simulate bidding micro-interactions locally:
1. Maintain a state tracking active bidding request actions (`biddingCatIds` Set).
2. When the user clicks the "Place Bid" button:
   - Temporarily toggle the button text to `"Bid Placed!"` and swap the background-color style to green (`bg-secondary`).
   - Increment the cat's `bidsCount` by 1 and the `currentBid` value by a set increment (e.g. +$150).
   - Use `setTimeout` (2 seconds delay) to revert the button text and color back to primary.
3. Disable the bidding button when the countdown timer hits `0` (or `initialTime <= 0`), showing `"Auction Ended"`.

### Step 2.5: Favorites Toggling
1. Maintain a state tracking favorited cats (`favorites` Set).
2. Toggling the button should insert/remove the cat ID from the Set.
3. Apply Material Symbol's font feature settings to fill the heart icon when active (e.g. `fontVariationSettings: "'FILL' 1"` and change color to `text-primary`).

### Step 2.6: Sorting Functionality
Enable the "Ending Soon" and "Newest" header sorting buttons to filter the grid list:
1. Maintain state `sortBy` ('ending' | 'newest').
2. Sort the array dynamically before rendering the grid:
   - **Ending Soon**: Sort by `initialTime` ascending (cats ending soonest appear first). Expired items go to the end.
   - **Newest**: Sort by descending IDs or entry position.

---

## 3. Verification & Acceptance Criteria
1. Run local build using `npm run build` to verify there are no TypeScript or bundle compiler errors.
2. Verify visual styling matches the mockup container layouts, spacings, and typography.
3. Assert that micro-interactions function correctly (countdowns ticks, bids increment values and revert visual state, favorites toggle correctly).
