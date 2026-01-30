# Copilot Instructions for ernest-porto

## Project Overview
Personal portfolio website built with pure vanilla HTML5, CSS3, and JavaScript. No frameworks - intentionally minimal and performance-focused. Static site hosted on GitHub Pages.

## Architecture & Key Patterns

### CSS-in-CSS Design System
- **CSS Variables**: Dark/light theme system using CSS custom properties in `:root` and `.dark` classes
- **Utility-First**: Custom utility classes (`.text-3xl`, `.flex`, `.space-y-10`) mimicking Tailwind but written from scratch
- **Component Classes**: Semantic components like `.work-card`, `.skill-badge`, `.dock-container`
- **Animation System**: Custom keyframe animations with `.animate-fade-in` and `.animate-fade-in-delay`

### JavaScript Architecture  
- **No Frameworks**: Pure vanilla JS with ES6+ features
- **Event-Driven**: All functionality initialized in single `DOMContentLoaded` listener
- **Real-time Updates**: Age counter updates every 100ms using `setInterval` for smooth animation
- **Theme Management**: Respects system preferences + local storage persistence

### Key Components

#### Dynamic Age Counter ([script.js](script.js))
```javascript
// Birth date hardcoded: 2005-05-31
// Updates to 8 decimal places every 100ms
function calculatePreciseAge() { /* ... */ }
```

#### Theme Toggle System
- Auto-detects system preference via `prefers-color-scheme`
- Persists choice in `localStorage`
- Manual toggle button in dock with animated icons

#### Work Experience Cards ([index.html](index.html#L60-L400))
- Hover effects reveal descriptions (CSS transitions)
- Consistent card structure: logo + title/company + dates + description
- Real organization logos stored in `/image/` directory

#### Bottom Navigation Dock
- macOS-style dock with social links and theme toggle
- Fixed positioning with backdrop blur
- Hover effects with scale transforms

## Development Conventions

### File Organization
```
/
├── index.html          # Single page application
├── styles.css          # All styles (455 lines, utility-first)
├── script.js           # All functionality (211 lines)
├── image/              # Profile + organization logos
└── .github/workflows/  # GitHub Pages deployment
```

### Styling Patterns
- **Responsive**: Mobile-first with `sm:`, `md:`, `lg:`, `xl:` prefixes
- **Dark Mode**: Always default to dark theme, light as option
- **Animations**: Staggered fade-ins with blur and transform effects
- **Hover States**: Consistent `translateY(-2px)` and opacity transitions

### Content Updates
- **Experience Cards**: Update dates and descriptions directly in HTML
- **Age**: Auto-calculated, only change birth date in `calculatePreciseAge()`  
- **Skills**: Add new `.skill-badge` elements (including humorous ones like "deadlifting 140kg, once")
- **Images**: Add new logos to `/image/` directory, reference in HTML

## Development Workflow

### Local Development
- No build process required - open `index.html` directly in browser
- Live reload via VS Code Live Server extension recommended
- Test both light/dark themes

### Deployment
- Auto-deploys to GitHub Pages via [.github/workflows/static.yml](.github/workflows/static.yml)
- Triggers on pushes to `main` branch
- No build step - serves static files directly

### Adding New Sections
1. Add semantic HTML section with proper heading structure
2. Use `.animate-fade-in-delay` for consistent reveal animations  
3. Follow existing card pattern for consistency
4. Add hover effects with `.hover-effect` class
5. Update navigation if needed (though current design is single-page)

## Performance Considerations
- **Images**: Optimize logos to reasonable sizes (current ~50KB each)
- **Fonts**: Only loads Inter font weights actually used (400,500,600,700)
- **CSS**: Single file, no unused styles due to utility approach
- **JS**: Minimal DOM queries, event delegation where possible