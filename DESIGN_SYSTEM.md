# BookMySession Design System Quick Reference

## Color System (3-5 Colors)

### Primary Brand Color
- **Name**: Teal / Primary
- **Hex**: `#0F766E` (darker) / `#14756E` (current)
- **Usage**: Headlines, buttons (CTA), links, accents
- **Contrast**: White text on this color: AA compliant

### Secondary Color
- **Name**: Orange / Secondary
- **Hex**: `#F97316` (primary) / `#FFCF59` (alternate)
- **Usage**: Secondary CTAs, highlights, accents
- **Contrast**: Black text on this color: AA compliant

### Neutrals
- **White**: `#FFFFFF` - Backgrounds, content areas
- **Light Gray**: `#F9FAFB` - Subtle backgrounds (gray-50)
- **Medium Gray**: `#6B7280` - Secondary text (gray-500)
- **Dark Gray**: `#111827` - Primary text (gray-900)
- **Dark Background**: `#111827` (gray-900) - Footer background

### Color Palette in Tailwind

```css
Primary (Teal):
  --color-primary: #0F766E
  Used with: bg-primary, text-primary, border-primary

Secondary (Orange):
  --color-secondary: #F97316 / #FFCF59
  Used with: bg-secondary, text-secondary, border-secondary

Neutrals:
  bg-white, bg-gray-50, bg-gray-900
  text-gray-900, text-gray-600, text-gray-400
  border-gray-200, border-gray-800
```

---

## Typography System

### Font Stack
```
Font Sans (Body): Geist, system fonts
Font Serif: (not used)
Font Mono: Geist Mono (for code)
Decorative: Mitr (headlines)
Fallback: Titillium Web
```

### Font Sizes & Line Heights
- **H1 (Display)**: `text-5xl md:text-6xl` - line-height: 1.2
- **H2 (Large)**: `text-4xl md:text-5xl` - line-height: 1.2
- **H3 (Medium)**: `text-2xl md:text-3xl` - line-height: 1.3
- **Body (Default)**: `text-base` (16px) - line-height: 1.5
- **Small Text**: `text-sm` (14px) - line-height: 1.4
- **Tiny Text**: `text-xs` (12px) - line-height: 1.4

### Font Weights
- **Regular**: 400 - Body text
- **Medium**: 500 - Section headers, emphasis
- **Semibold**: 600 - Buttons, strong text
- **Bold**: 700 - Headlines, important text

---

## Spacing System (8px Grid)

### Padding & Margin Scale
```
px-2 = 8px    px-4 = 16px   px-6 = 24px   px-8 = 32px
px-12 = 48px  px-16 = 64px
```

### Gap Spacing
```
gap-2 = 8px   gap-4 = 16px   gap-6 = 24px   gap-8 = 32px
gap-12 = 48px
```

### Common Spacing Patterns
- **Section padding**: `py-16 md:py-24` (vertical), `px-4` (horizontal)
- **Container**: `max-w-[container]` with `mx-auto`
- **Between elements**: `gap-6`, `gap-8`, `gap-12`
- **Content spacing**: `mb-4`, `mt-6`, `space-y-4`

---

## Border Radius

```
rounded-sm = 4px      (small, input fields)
rounded = 6px         (default)
rounded-lg = 12px     (cards, blocks)
rounded-xl = 16px     (larger components)
rounded-full = 9999px (circles, pills)
```

---

## Shadows & Effects

### Box Shadows
```
shadow-sm = subtle (used on small elements)
shadow = default (cards, dropdowns)
shadow-lg = pronounced (hover states)
shadow-xl = strong (modals, overlays)
```

### Hover Effects Pattern
```jsx
className="hover:shadow-lg transition-shadow"
className="hover:bg-primary/90 transition-colors"
className="hover:border-primary transition-colors"
```

---

## Button System

### Primary Button (CTA)
```jsx
className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
```

### Secondary Button (Outline)
```jsx
className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
```

### Small Button
```jsx
className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90"
```

---

## Card Components

### Standard Feature Card
```jsx
className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
```

### Stat Card
```jsx
className="text-center p-8 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow"
```

---

## Layout Patterns

### Hero Layout (2-Column)
```jsx
<div className="grid md:grid-cols-2 gap-12 items-center">
  <div>Content</div>
  <div>Illustration</div>
</div>
```

### Feature Grid (4 Columns)
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Cards */}
</div>
```

### Container with Padding
```jsx
<div className="container mx-auto px-4 py-16 md:py-24">
  {/* Content */}
</div>
```

---

## Responsive Breakpoints (Tailwind)

| Prefix | Screen Size | Use Case |
|--------|------------|----------|
| None | < 640px | Mobile-first default |
| sm: | ≥ 640px | Small mobile |
| md: | ≥ 768px | Tablet |
| lg: | ≥ 1024px | Small desktop |
| xl: | ≥ 1280px | Desktop |
| 2xl: | ≥ 1536px | Large desktop |

### Common Patterns
```jsx
// Hide on mobile, show on md+
className="hidden md:block"

// Different layout per breakpoint
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Responsive text
className="text-2xl md:text-3xl lg:text-4xl"

// Responsive padding
className="px-4 md:px-6 lg:px-8"
```

---

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Contrast Ratio**: All text must have 4.5:1 (normal) or 3:1 (large)
- **Color**: Don't rely on color alone to convey information
- **Touch Targets**: Minimum 44×44 pixels for interactive elements
- **Text**: Minimum 16px for body text, proper line-height (1.4+)

### Implementation
```jsx
// Good: descriptive button text
<button>Book Free Demo</button>

// Good: aria-label on icon buttons
<button aria-label="Toggle menu">☰</button>

// Good: alt text on images
<img alt="Student learning with tutor" src="..." />

// Good: semantic HTML
<header><nav></nav></header>
<main></main>
<footer></footer>
```

---

## Icons & Images

### Icon Sizing
- **Inline**: 16px, 20px (text icon)
- **Button**: 20px, 24px (icon in button)
- **Large**: 32px, 48px (decorative, hero)
- **XL**: 64px+ (background element)

### Image Optimization
- Use SVG for icons and logos
- Use optimized PNG/WebP for illustrations
- Always include alt text
- Use Next.js Image component for optimization

---

## Common Component Sizes

### Page Sections
- **Header Height**: 64px (py-4)
- **Section Padding**: py-16 (mobile) / py-24 (desktop)
- **Container Width**: 1280px (max-w-7xl)
- **Content Width**: 768px (md:) for text-heavy sections

### Cards & Components
- **Card Padding**: p-6 (small), p-8 (default), p-10 (large)
- **Card Border Radius**: rounded-lg (12px)
- **Input Height**: h-10 (40px)
- **Button Height**: py-2.5 or py-3 (10-12px padding)

---

## Dark Mode (Future Implementation)

Currently light mode only. For dark mode implementation:
```jsx
// Use CSS variables with prefers-color-scheme
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0f172a;
    --foreground: #e2e8f0;
    --primary: #06b6d4;
  }
}
```

---

## Common Patterns & Code Snippets

### Status Badge
```jsx
<div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full">
  <span className="w-2 h-2 bg-primary rounded-full"></span>
  <span className="text-sm font-semibold text-primary">Label</span>
</div>
```

### Feature Card with Icon
```jsx
<div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
    📚
  </div>
  <h3 className="text-xl font-bold text-gray-900 mb-3">Title</h3>
  <p className="text-gray-600">Description text here</p>
</div>
```

### CTA Section
```jsx
<section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary/80">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">Headline</h2>
    <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100">
      CTA Text
    </button>
  </div>
</section>
```

---

## File Structure

```
src/
├── pages/
│   └── index.js (home page)
├── components/
│   ├── Header.js
│   ├── HeroSection.js
│   ├── FeaturesSection.js
│   ├── StatsSection.js
│   ├── CTASection.js
│   └── Footer.js
└── styles/
    └── globals.css (CSS variables, Tailwind)
```

---

## Performance Best Practices

1. **Images**: Use Next.js Image component
2. **Fonts**: Use next/font for Google Fonts
3. **CSS**: Rely on Tailwind for styles (no inline CSS when possible)
4. **Components**: Use React.memo for expensive renders
5. **Code Splitting**: Dynamic imports for heavy components
6. **Bundle Size**: Monitor with Next.js build output

---

## Maintenance Tips

1. Keep color values in globals.css as CSS variables
2. Use consistent spacing scale (8px grid)
3. Define reusable classes for repeated patterns
4. Update this document when adding new colors/sizes
5. Test changes across all breakpoints
6. Check accessibility with axe DevTools
7. Validate HTML with W3C validator

