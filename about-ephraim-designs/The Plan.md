### **Branding Overview**

#### **Fonts:**

1. **Primary Font (Logo):**

   - **Font:** _Playfair Display_
   - **Style:** Bold, serif, elegant.

2. **Supporting Fonts (Body and Contact Details):**

   - **Font:** _Open Sans_
   - **Style:** Clean, sans-serif, modern, and highly readable.

3. **Tagline Font:**
   - **Font:** _Playfair Display Italic_
   - **Style:** Italicized serif, adding personality and emphasis.

#### **Colors:**

1. **Primary Color (Dark Blue/Navy):**

   - **HEX:** `#003366`

2. **Accent Color (Gold):**

   - **HEX:** `#FFD700`

3. **Background Color (Soft Beige):**
   - **HEX:** `#F5F5DC`

---

### **Updated `mkdocs.yml` Configuration**

Here’s the most updated and refined version of the `mkdocs.yml` file:

```yaml
site_name: Ephraim Designs
site_url: https://dev3l.github.io/ephraim-designs/
site_description: "Transforming spaces with faith-centered art."

theme:
  name: material
  palette:
    primary: "#003366" # Dark Blue/Navy
    accent: "#FFD700" # Gold
    background: "#F5F5DC" # Soft Beige
  font:
    text: "Open Sans, sans-serif" # Clean sans-serif for body text
    code: "Roboto Mono, monospace" # Modern monospace for code blocks
    headings: "Playfair Display, serif" # Elegant serif for headings
  favicon: "images/favicon.png"
  logo: "images/logo.png"

nav:
  - Home: index.md
  - About: about.md
  - Portfolio:
      - Murals: portfolio/murals.md
      - Paintings: portfolio/paintings.md
  - Services: services.md
  - Testimonials: testimonials.md
  - Contact: contact.md

extra_css:
  - stylesheets/extra.css

markdown_extensions:
  - admonition
  - codehilite
  - toc:
      permalink: true
  - pymdownx.details
  - pymdownx.superfences
  - pymdownx.inlinehilite

plugins:
  - search
  - macros
  - ultralytics
  - minify_html
```

---

### **Custom CSS for Enhanced Branding**

Add the following to `stylesheets/extra.css` for additional styling:

```css
/* General link styling */
a {
  color: #003366; /* Dark Blue/Navy */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #ffd700; /* Gold */
}

/* Style headings with Playfair Display */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display", serif;
  color: #003366; /* Dark Blue/Navy */
}

/* Italicize the tagline */
.tagline {
  font-family: "Playfair Display", serif;
  font-style: italic;
  color: #ffd700; /* Gold */
}

/* Code block styling */
code,
pre {
  background-color: #f5f5dc; /* Soft Beige */
  border-radius: 4px;
  padding: 5px;
}

/* Footer styling */
footer {
  text-align: center;
  padding: 20px 0;
  font-size: 0.9em;
  color: #003366;
  background-color: #f5f5dc; /* Soft Beige */
}
```

---

### **Image Descriptions and Suggestions**

If you don't have images ready, here are suggestions based on MidJourney prompts:

#### **Logo**

- **Description:** A circular logo with concentric spirals symbolizing faith and creativity, dark blue (#003366) and gold (#FFD700) as primary colors. Elegant serif typography (Playfair Display). Background soft beige (#F5F5DC). Ratio: 1:1.
- **Prompt:** "A modern circular logo with elegant concentric spirals, in dark blue and gold, featuring a serif typography, minimalistic and professional, soft beige background, 1:1 aspect ratio."

#### **Homepage Banner**

- **Description:** A large banner showcasing a mural blending faith-based symbols, community storytelling, and nature elements. Vibrant colors complementing dark blue and gold tones. Ratio: 16:9.
- **Prompt:** "A captivating mural combining faith-based imagery, nature themes, and abstract storytelling, in bold colors with dark blue and gold accents, 16:9 aspect ratio."

---

### **Project Directory Structure**

Organize your project to match this structure:

```
ephraim-designs/
├── docs/
│   ├── index.md
│   ├── about.md
│   ├── portfolio/
│   │   ├── murals.md
│   │   └── paintings.md
│   ├── services.md
│   ├── testimonials.md
│   └── contact.md
├── images/
│   ├── logo.png
│   ├── favicon.ico
│   └── banner.jpg
├── stylesheets/
│   └── extra.css
└── mkdocs.yml
```

---

### **Next Steps**

1. **Finalize Content:**

   - Add content to each page in Markdown format.
   - Use the suggested prompts to generate visuals with MidJourney or other tools.

2. **Preview Locally:**

   ```bash
   mkdocs serve
   ```

   Access the site at `http://127.0.0.1:8000`.

3. **Deploy to GitHub Pages:**

   ```bash
   mkdocs gh-deploy
   ```

4. **Test SEO and Responsiveness:**
   - Validate SEO optimizations (meta tags, descriptions).
   - Ensure mobile and desktop responsiveness.
