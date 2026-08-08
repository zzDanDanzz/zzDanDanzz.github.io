# Portfolio Refactor To-Do List

**Goal:** Elevate the portfolio to a tier-one standard by unifying the architecture, implementing seamless i18n (English/Persian) and theme toggling, and polishing the responsive UX.

---

## 🌐 1. Routing, URLs & Consistency

- [x] **Rename Directory:** Change `src/pages/posts` to `src/pages/blog` to unify the URL structure.
- [x] **Update Header Links:** Change the navigation text from "Posts" to "Blog" and point the `href` to `/blog`.
- [x] **Update Metadata:** Ensure page titles and SEO metadata reflect the "Blog" nomenclature instead of "Posts".

## 🌍 2. Internationalization (i18n) & RTL Support

- [x] **Translation System:** Implement a system (e.g., Astro i18n or custom JSON dictionaries/contexts) to manage static UI text across the site.
- [x] **Language Toggle:** Build a Language Toggle button (e.g., a simple EN/FA text button or Globe icon).
- [x] **Dynamic Layout Direction:** Implement logic to flip the document direction (`dir="ltr"` for English, `dir="rtl"` for Persian).
- [x] **Direction-Aware Mobile Menu:** Configure the mobile `Sheet` component's `side` prop to respond to language direction:
    - [x] English (LTR): Sheet slides in from the `"right"`.
    - [x] Persian (RTL): Sheet slides in from the `"left"`.

## 🌗 3. Theme & Styling

- [x] **Theme Toggle:** Build a Dark/Light Mode toggle button (Sun/Moon icon).
- [x] **Set Default Theme:** Ensure the `ThemeProvider` is strictly configured to default to "light" mode on the initial load.
- [x] **Dark Mode QA Pass:** Review all pages in dark mode to verify that Tailwind utility classes render readable contrast, paying special attention to Markdown content, cards, and badges.

## 📱 4. Mobile Navigation & Responsiveness

- [x] **Install Sheet Component:** Integrate the `Sheet` component (via shadcn UI) for the mobile drawer.
- [x] **Refactor Desktop Header:** Ensure navigation links, resume button, theme toggle, and language toggle sit cleanly side-by-side on screens `md` and up.
- [x] **Refactor Mobile Header:** On screens smaller than `md`, hide the desktop layout and display a single hamburger icon.
- [x] **Populate Mobile Drawer:** Place the navigation links, resume button, and both toggles vertically inside the `Sheet` for easy touch-friendly access.

## 🪄 5. Header UX (Global)

- [x] **Auto-Hiding Logic:** Implement scroll-listener logic on the header wrapper to create a "smart" sticky header.
- [x] **Scroll Down:** Header translates out of view to maximize reading real estate.
- [x] **Scroll Up:** Header translates back into view immediately.
- [x] **Global Application:** Apply this header behavior globally across the Home, About, and Blog pages.

---

_Note for the AI Agent: Execute these tasks iteratively. Prioritize structural changes (routing, installing components) before addressing state-heavy logic (i18n, theme toggling)._
