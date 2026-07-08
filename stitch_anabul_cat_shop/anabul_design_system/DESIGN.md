---
name: Anabul Design System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#56423e'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#89726d'
  outline-variant: '#ddc0ba'
  surface-tint: '#9f402d'
  primary: '#9f402d'
  on-primary: '#ffffff'
  primary-container: '#e2725b'
  on-primary-container: '#5a0d02'
  inverse-primary: '#ffb4a5'
  secondary: '#4a654e'
  on-secondary: '#ffffff'
  secondary-container: '#c9e8cb'
  on-secondary-container: '#4e6952'
  tertiary: '#605e5a'
  on-tertiary: '#ffffff'
  tertiary-container: '#95928d'
  on-tertiary-container: '#2c2b28'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a5'
  on-primary-fixed: '#3e0500'
  on-primary-fixed-variant: '#802918'
  secondary-fixed: '#cceace'
  secondary-fixed-dim: '#b0ceb2'
  on-secondary-fixed: '#07200f'
  on-secondary-fixed-variant: '#334d38'
  tertiary-fixed: '#e6e2dc'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#484743'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-xl:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  headline-xl-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system for this brand is built on the philosophy of "Elevated Play." It targets discerning cat owners who view their pets as family members deserving of both premium quality and joyful experiences. The aesthetic balances the warmth of a boutique lifestyle brand with the precision of a high-end e-commerce platform.

The design style is **Modern-Organic**. It utilizes a sophisticated take on minimalism, replacing clinical sharpness with soft, human-centric geometry. The interface feels light and airy (generous whitespace), yet grounded by tactile elements and rich, natural color tones. The emotional response is one of safety, warmth, and quiet delight.

## Colors
This palette is inspired by natural materials and domestic comfort. 

- **Primary (Terracotta/Soft Coral):** Used for calls to action, active states, and highlighting the brand's energetic personality.
- **Secondary (Sage Green):** Applied to health-related badges, organic product lines, and secondary interactive elements to evoke trust.
- **Tertiary (Creamy Off-White):** The foundation of the UI. It replaces harsh pure whites to provide a softer, more premium "paper-like" reading experience.
- **Neutral (Charcoal):** Reserved for high-contrast typography and structural borders. Avoid pure black to maintain the soft visual profile.

Functional colors for Success, Warning, and Error should be desaturated to align with the organic palette (e.g., a dusty rose for errors rather than a neon red).

## Typography
The typography uses a duo of rounded and geometric typefaces to signal friendliness and modern efficiency.

**Headlines:** Quicksand provides a "whimsical" yet structural feel. Its rounded terminals mirror the anatomy of cat paws and playfulness. Use this for all hero sections and product titles.

**Body & UI:** Plus Jakarta Sans is used for long-form descriptions and interface elements. It is exceptionally legible at small sizes while maintaining a soft, approachable character that matches the headline font.

**Styling Note:** Headlines should use tighter letter spacing to feel "tight" and branded, while body text requires generous line heights to enhance the premium, airy feel.

## Layout & Spacing
The layout follows a 12-column fluid grid on desktop and a 4-column grid on mobile. 

The spacing rhythm is based on an **8px linear scale**. To maintain the "premium" feel, prioritize "Large" spacing (32px, 48px, 64px) between major sections to allow the photography to breathe. 

- **Desktop:** 40px external margins with 24px gutters. Content should be centered with a max-width of 1280px.
- **Tablet:** 24px external margins.
- **Mobile:** 16px external margins. Use full-bleed imagery where possible to maximize visual impact on smaller screens.

## Elevation & Depth
This design system avoids heavy shadows and high-contrast skeuomorphism. Instead, it uses **Ambient Tonal Layers**.

- **Level 0 (Base):** The Creamy Off-white background.
- **Level 1 (Cards/Floating elements):** White (#FFFFFF) surfaces with an extremely soft, diffused shadow. Use a 10% opacity Charcoal shadow with a large blur radius (20-30px) and a slight Y-offset (4-8px) to suggest light floating.
- **Transitions:** Use soft blurs for navigation bars that scroll over content, creating a subtle frosted-glass effect that maintains the warmth of the background colors.

## Shapes
Shape language is defined by the "Anabul Curve." 

The system uses **Rounded (0.5rem base)** settings. This ensures that no corner in the UI feels sharp or "dangerous," reinforcing the caring and pet-friendly nature of the brand.

- **Standard Elements (Buttons, Inputs):** 8px (0.5rem) radius.
- **Large Elements (Cards, Featured Images):** 16px (1rem) radius.
- **Specialty Elements (Search bars, Pills):** Fully rounded (Pill-shaped) to lean into the whimsical/playful aspect of the brand.

## Components

### Buttons
- **Primary:** Terracotta background with white text. Pill-shaped for a friendly, "tossable" look. 
- **Secondary:** Sage Green background or a Charcoal outline.
- **Interaction:** On hover, buttons should subtly lift (increase shadow depth) or shift slightly in hue to a deeper tone.

### Cards
Product cards should have a white background, Level 1 elevation (soft shadow), and 16px rounded corners. Images within cards should have a subtle 8px radius to create a "nested" softness.

### Input Fields
Inputs use the Off-white background with a thin Charcoal border at 20% opacity. Upon focus, the border transitions to Primary Terracotta with a 2px width.

### Navigation
The top navigation should be minimalist, using Label-MD typography. Include a "Playful" indicator (a small dot or an organic underline) for the active page state.

### Badges/Chips
Use the Sage Green color for "Organic," "Vet-Approved," or "Premium" badges. Use the Terracotta color for "Sale" or "New" badges. Badges should always be pill-shaped.