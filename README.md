# Kaio Ribeiro — Portfolio

> Professional portfolio built with semantic **HTML5**, modular **CSS**, and **Vanilla JavaScript**. Zero framework dependencies, optimized for performance and accessibility.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## ✨ Features

- 🌓 **Dark/Light Theme** — Instant theme switching with CSS variables
- 🌐 **Bilingual (PT/EN)** — Complete internationalization without page reload
- 📜 **Scroll Progress Bar** — Visual reading progress indicator
- � **Active Navigation** — Auto-highlight current section in menu
- � **Smooth Animations** — Progressive fade effects on scroll
- 📱 **Fully Responsive** — Mobile-first design with touch-optimized interactions
- ⚡ **Zero Dependencies** — Pure vanilla JavaScript, no frameworks
- ♿ **Accessible** — Semantic HTML and ARIA labels

---

## 📂 Project Structure

```
Portfolio/
├── index.html              # Single-page semantic HTML5 structure
├── README.md               # Project documentation
└── src/
    ├── css/
    │   ├── global.css      # Design tokens, CSS reset, and global styles
    │   ├── header.css      # Navigation bar, theme toggle, language switcher
    │   ├── hero.css        # Hero section with profile image and tech stack
    │   ├── sobre.css       # About section
    │   ├── projetos.css    # Projects grid
    │   ├── contato.css     # Contact cards
    │   └── utils.css       # Reusable components (buttons, floating WhatsApp)
    ├── images/
    │   └── perfil.png      # Profile photo
    └── js/
        └── main.js         # All interaction logic (theme, i18n, scroll, observers)
```

---

## 🏗️ Architecture Decisions

### CSS — Component-Based Architecture
Each CSS file follows the **Single Responsibility Principle**. The `global.css` defines **design tokens** (CSS custom properties) consumed by all other files, ensuring consistency with a single source of truth.

**Key patterns:**
- CSS Variables for theming
- BEM-inspired naming conventions
- Mobile-first responsive design
- Glassmorphism effects with backdrop-filter

### JavaScript — Performance & Maintainability
- **Single scroll listener** manages multiple features (header hide, progress bar, fade effects)
- **IntersectionObserver API** for efficient section visibility detection
- **Pure functions** for translations — no side effects
- **Event delegation** for better performance
- **Passive event listeners** for smooth scrolling

### Design System
All colors, fonts, shadows, and spacing live in CSS variables in `global.css`. Theme switching only overrides necessary tokens in `body.light-mode`, avoiding code duplication.

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local server for development

### Installation

```bash
# Clone the repository
git clone https://github.com/kaioribeiro777/portfolio.git
cd portfolio

# Open directly in browser
open index.html

# Or use a local server (recommended)
npx serve .
# → Access http://localhost:3000
```

### Development
For hot-reload during development, use **Live Server** extension in VS Code or any static server.

---

## 🎨 Customization

### Changing Colors
Edit CSS variables in `src/css/global.css`:

```css
:root {
    --primary-color: #a30000;      /* Main red color */
    --primary-hover: #d10000;      /* Hover state */
    --bg-color-start: #000000;     /* Background gradient start */
    --bg-color-end: #0f0f0f;       /* Background gradient end */
}
```

### Adding Translations
Update the `translations` object in `src/js/main.js`:

```javascript
const translations = {
    pt: { 'key': 'Texto em português' },
    en: { 'key': 'Text in English' }
};
```

---

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ≥ 90    |
| Firefox | ≥ 88    |
| Safari  | ≥ 14    |
| Edge    | ≥ 90    |

**Note:** Uses modern CSS features like `backdrop-filter` and `IntersectionObserver`.

---

## 📬 Contact

| Platform | Link |
|----------|------|
| **Email** | [kaioribeirodesousa321@gmail.com](mailto:kaioribeirodesousa321@gmail.com) |
| **LinkedIn** | [linkedin.com/in/kaioribeiro777](https://www.linkedin.com/in/kaioribeiro777/) |
| **WhatsApp** | [(87) 98112-4207](https://wa.me/5587981124207) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <strong>Kaio Ribeiro</strong> | Software Engineer
</p>
