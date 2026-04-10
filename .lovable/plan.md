

# Zebra Golf Cart Website — World-Class Redesign Plan

## Problem Summary
The current site has a flat, monotone black background throughout with no visual separation between sections. Forms look blended and unprofessional. The site structure is too simple compared to premium competitors like Costa Carts.

## What You Need to Provide
Based on the uploaded images and existing assets, here is what is **already covered** vs. **still needed**:

**Already have (from your uploads + existing assets):**
- White cart (image00001) — already in project as `cart-white.webp`
- Burgundy/Maroon cart (image00002) — already as `cart-burgundy.png`
- Blue cart (image00003) — already as `cart-blue.png`
- Black cart (image00004 & image00005) — already as `cart-black.png`

**Still needed from you (optional but ideal):**
- A **grey cart** photo (for the missing Grey color option in configurator)
- Any **lifestyle/environment photos** (cart at a resort, coastal community, estate) for the new "Experience" page
- A higher-res **logo** if available (current `zebra-logo.png` works but a vector/SVG would be sharper)

Everything else can be built with existing assets and the uploaded photos.

---

## Design Overhaul Strategy

### 1. Visual Identity Upgrade
- Add **distinct section backgrounds** — alternating between pure black, dark charcoal (#0a0a0a), subtle gradient panels, and textured overlays
- Introduce **full-bleed image dividers** between major sections (using uploaded cart photos)
- Add a **warm gold accent** alongside the red to create a luxury two-tone palette (like Costa's gold text)
- Improve glass-morphism cards with stronger contrast and better borders
- Add subtle **noise/grain texture** overlay for premium feel

### 2. Homepage Redesign (Index page)
- **Hero**: Full-viewport cinematic hero with one of the uploaded images as background, larger typography, vertical "SCROLL" indicator on the right edge (Costa-style)
- **"The Zebra Difference"** section: New storytelling section with numbered feature blocks (01, 02, 03, 04) like Costa's "Built Different. By Design." — emphasizing craftsmanship, performance, lifestyle, technology
- **Models Showcase**: Larger cards with full-bleed images, hover reveals, "Explore" CTAs
- **Full-width image break**: A parallax lifestyle image divider between sections (using the white or blue cart photo)
- **Stats Counter**: Redesign with bigger numbers, gold accent color
- **Features**: Bento grid layout with mixed sizes (some large, some small)
- **Gallery**: Expanded to 6-8 images, masonry-style layout
- **Testimonials**: Larger quote format with quotation marks, dark card with gold accent
- **Financing**: Cleaner card design with more whitespace
- **CTA Banner**: Cinematic full-width section with background image

### 3. New Pages

**a. Models Page (`/models`)**
- Full-screen hero with "Luxury in Motion" heading
- Individual model sections: large image left, specs/features right
- Side-by-side comparison table
- CTA to configure each model

**b. Experience Page (`/experience`)**
- Storytelling page about the Zebra brand philosophy
- "You Can Feel It" emotional copy section
- Numbered pillars (Elevated Design, Performance, Lifestyle, Craftsmanship)
- Full-bleed lifestyle imagery between sections

**c. Warranty Page (`/warranty`)**
- Coverage details: 5-year battery, 1-year frame
- What's covered vs. what's not
- FAQ accordion
- Support contact CTA

### 4. Form Redesign (Major Fix)
- **All forms** (Test Drive, Contact, Book Demo, Dealer Application): redesigned with:
  - Solid dark input backgrounds (#111 or #141414) instead of transparent/blended
  - Clear white borders on focus
  - Larger padding and font sizes
  - Floating labels or clearly visible labels above fields
  - Form split into a two-column layout: form on left, contextual info/image on right
  - Success states with confetti or checkmark animation

### 5. Navbar Enhancement
- Transparent on hero, solid on scroll (already exists)
- Add dropdown for "Models" showing Breeze 4L, Terrain 6, Terrain 6 Pro
- Add social media icons in navbar (Instagram, Facebook, YouTube)

### 6. Footer Redesign
- Larger, more structured footer with newsletter signup
- Social links row
- "Designed & Engineered in the USA" badge
- Subtle background texture

---

## Technical Approach
- All changes are React components with Tailwind CSS and Framer Motion (existing stack)
- New pages added to `App.tsx` routes
- Uploaded cart images copied into `src/assets/` for use as section backgrounds and hero images
- No backend changes needed
- No new dependencies (everything uses existing framer-motion + tailwind + lucide)

---

## Files to Create
- `src/pages/Models.tsx`
- `src/pages/Experience.tsx`
- `src/pages/Warranty.tsx`

## Files to Heavily Modify
- `src/pages/Index.tsx` (new section ordering + dividers)
- `src/index.css` (new section background utilities, grain texture, gold accents)
- `src/components/HeroSection.tsx` (cinematic redesign)
- `src/components/ModelsShowcase.tsx` (larger cards)
- `src/components/FeaturesGrid.tsx` (bento layout)
- `src/components/TestDriveForm.tsx` (form field styling overhaul)
- `src/components/GalleryStrip.tsx` (masonry layout)
- `src/components/TestimonialSection.tsx` (premium redesign)
- `src/components/CTABanner.tsx` (full-bleed image background)
- `src/components/Footer.tsx` (expanded layout)
- `src/components/Navbar.tsx` (dropdown + social icons)
- `src/components/StatsCounter.tsx` (gold accents)
- `src/components/FinancingSection.tsx` (cleaner cards)
- `src/pages/Contact.tsx` (form styling fix)
- `src/pages/BookDemo.tsx` (form styling fix)
- `src/pages/DealerApplication.tsx` (form styling fix)
- `src/App.tsx` (new routes)

## New Component
- `src/components/ZebraDifference.tsx` (storytelling section with numbered pillars)
- `src/components/ParallaxImageDivider.tsx` (full-bleed image break component)

