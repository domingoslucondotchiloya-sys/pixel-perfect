# Rebuild pixel-perfect-replica-8484.lovable.app

## Steps
1. Open the shared site in a headless browser, take screenshots of every page (desktop and mobile), and collect its text, links, colors, fonts and images.
2. Rebuild the home page at `/` to match the layout, typography, colors, spacing and content.
3. Create a separate page for each other page found on the site, with matching navigation, header and footer.
4. Recreate images (download where allowed, otherwise generate close equivalents).
5. Copy interactive behavior (menus, forms, animations) visually; forms that need a backend will be front-end only unless you ask otherwise.
6. Compare screenshots side by side with the original and fix differences.

## Technical details
- Design tokens in `src/styles.css`, fonts via `<link>` in `__root.tsx`.
- One route file per page with its own title/description metadata.
