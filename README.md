# Ephraim Designs MkDocs Marketing Site

Welcome to the Ephraim Designs MkDocs marketing site repository. This project is designed to showcase the artistic works and services of Ephraim Designs, led by Jason E. Rakich, through a beautifully crafted static site using MkDocs.

## Table of Contents

- [Ephraim Designs MkDocs Marketing Site](#ephraim-designs-mkdocs-marketing-site)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Directory Structure](#directory-structure)
  - [Customization](#customization)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Project Overview

Ephraim Designs specializes in creating transformative, faith-centered art that inspires and elevates spaces. This MkDocs site serves as a digital portfolio and marketing platform, highlighting custom murals, canvas paintings, live art events, and community projects.

## Features

- **Responsive Design**: Ensures optimal viewing on all devices.
- **Custom Themes**: Utilizes the Material theme for MkDocs with tailored color palettes and typography.
- **SEO Optimized**: Includes metadata and structured data for improved search engine visibility.
- **Interactive Elements**: Engages visitors with live art showcases and community project highlights.
- **Easy Navigation**: Intuitive structure with clear sections for services, portfolio, and contact information.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/ephraim-designs.git
   cd ephraim-designs
   ```

2. **Install MkDocs and dependencies**:
   Ensure you have Python 3.13.0+ installed, then run:

   ```bash
   pip install mkdocs mkdocs-material
   ```

3. **Install additional plugins**:
   ```bash
   pip install mkdocs-minify-plugin mkdocs-macros-plugin
   ```

## Usage

To preview the site locally, use the following command:

```bash
mkdocs serve
```

Access the site at `http://127.0.0.1:8000`.

## Directory Structure

The project is organized as follows:

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

## Customization

- **Theme Configuration**: Modify `mkdocs.yml` to change the theme settings, including colors and fonts.
- **CSS Styling**: Add custom styles in `stylesheets/extra.css` to enhance the site's appearance.

## Deployment

To deploy the site to GitHub Pages, run:

```bash
mkdocs gh-deploy
```

Ensure your repository is linked to a GitHub account and has GitHub Pages enabled.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
