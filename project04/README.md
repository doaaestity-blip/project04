# Exercise 00: Personal Portfolio

A personal portfolio for **Doaa Estity**, built by hand with HTML5, CSS3 and
JavaScript ES6+. No frameworks, templates or UI libraries.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure: navbar, About Me, Skills, Projects 00-03, Contact form, footer |
| `style.css` | Theme variables, Flexbox layouts, media queries |
| `script.js` | Theme switcher, mobile menu, form validation |
| `assets/` | Images (`photo.jpg`) |
| `README.md` | This file |

## How to run

Open `index.html` in a browser. No build step is needed.

## Mandatory feature: theme switcher

The **Theme** button in the navbar switches between a light theme (soft pink with deep rose
accents) and a dark theme (deep aubergine with violet accents). The choice is saved in `localStorage`, so it is kept after a reload.

### How it works: the event lifecycle

1. **User action.** The visitor clicks the Theme button.
2. **Event firing.** The browser creates a `click` event and fires it on the
   button element (`#theme-toggle`). The event travels from the button up
   through its parents (event bubbling).
3. **JavaScript callback.** `script.js` registered a listener earlier with
   `themeButton.addEventListener("click", changeTheme)`. The browser calls
   `changeTheme()`, which finds the next theme in the `THEMES` array.
4. **DOM/CSS mutation.** `applyTheme()` calls
   `root.setAttribute("data-theme", ...)` on the `<html>` element and updates
   the button label. In `style.css` every colour is a CSS variable defined per
   `[data-theme="..."]`, so changing the attribute makes the browser recalculate
   styles and repaint the page. A `transition` on `body` makes the change smooth.

## Responsive design

- Flexbox is used for the navbar, About, Skills, Projects,
  Contact and footer. Cards use `flex-wrap` and `flex: 1 1 <width>`.
- `@media (max-width: 900px)`: About and Contact stack in one column (photo moves above the text).
- `@media (max-width: 700px)`: the nav links collapse into a menu button.
- `prefers-reduced-motion` is respected.

## Sections

Header/Navbar, About Me with photo, Skills grid, Project Showcase
(Projects 00-03), Contact form (validated with JavaScript), Footer.

## Author

Doaa Estity - doaaestity@gmail.com
