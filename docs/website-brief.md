# Website Brief

## Project Goal
Build a professional personal presentation website in **React + TypeScript** for deployment on **Cloudflare Pages**.

The site should feel:
- polished
- technical
- executive-friendly
- structured
- visually refined
- not flashy
- not generic
- not a student-style portfolio dump

The site should communicate:
- technical depth
- structured thinking
- good communication
- ownership
- credible execution

---

## Current Stack
- React
- TypeScript
- React Router
- Bootstrap is allowed, especially for navbar structure and responsive behavior
- Custom CSS for branding and visual identity

---

## Routes / Pages
The site currently uses these routes:

- `/` → Home
- `/profile` → Profile
- `/timeline` → Timeline
- `/demos` → Demos
- `/contact` → Contact

---

## Routing Structure
App uses a `Layout` component with:
- `Navbar`
- `Outlet`

The page content renders inside the `Outlet`.

High-level structure:
- `App.tsx` → route definitions
- `components/Navbar.tsx` → top navigation
- `pages/Home.tsx` → landing page
- `pages/Profile.tsx`
- `pages/Timeline.tsx`
- `pages/Demos.tsx`
- `pages/Contact.tsx`

---

## Design Direction
### Overall Style
Use a **deep winter** visual style:
- deep dark blues
- near-black tones
- frost whites
- muted gray-blue text
- restrained berry / burgundy accents
- optional deep winter green accents used sparingly

Avoid:
- bright saturated colors
- neon accents
- excessive gradients
- playful or overly casual styling

The site should feel like:
- premium
- thoughtful
- technical
- calm
- modern

---

## Design Tokens
Global CSS variables should live in `index.css` under `:root`.

### Suggested palette
```css
:root {
  --dw-blue-950: #071018;
  --dw-blue-900: #0b1420;
  --dw-blue-850: #101a27;
  --dw-blue-800: #141d2b;

  --dw-red-900: #4a1e2b;
  --dw-red-800: #7a3848;

  --dw-frost: #e8eef5;
  --dw-mist: #9fb0c2;

  --color-bg-page: var(--dw-blue-950);
  --color-bg-section: var(--dw-blue-900);
  --color-bg-section-alt: var(--dw-blue-850);
  --color-surface: #182433;
  --color-border: rgba(232, 238, 245, 0.10);

  --color-text: var(--dw-frost);
  --color-text-soft: var(--dw-mist);

  --color-accent-primary: #7d9ec4;
  --color-accent-secondary: var(--dw-red-900);
}