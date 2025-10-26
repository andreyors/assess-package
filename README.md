# Go Library Adoption Assessment Tool

A comprehensive interactive checklist for evaluating Go libraries before adopting them in your project. This tool helps developers make informed decisions by covering security, code quality, compliance, testing, and monitoring aspects.

[![Deploy to GitHub Pages](https://github.com/andreyors/assess-package/actions/workflows/deploy.yml/badge.svg)](https://github.com/andreyors/assess-package/actions/workflows/deploy.yml)

## 🌟 Features

- **42 Assessment Criteria** across 6 key categories
- **Multilingual Support**: English, Russian, and German translations (more coming!)
- **Dark/Light Theme**: Eye-friendly interface for any time of day
- **Interactive Tooltips**: Detailed explanations for every criterion
- **Verification Resources**: Direct links and commands to check each criterion
- **Real-time Score**: Percentage-based scoring system (0-100%)
- **Mobile Optimized**: Fully responsive design for phones, tablets, and desktops
- **Persistent State**: Your selections and preferences are saved locally

## 📋 Assessment Categories

1. **Initial Assessment** (7 criteria)
   - Problem validation, alternatives comparison, official packages, performance

2. **Security & Sources** (7 criteria)
   - Repository trust, author reputation, license compliance, security scanning

3. **Code Quality** (7 criteria)
   - Active development, bug fixes, test coverage, code readability, linting

4. **Security & Compliance** (7 criteria)
   - Vulnerability scanning, licensing, regulatory compliance, audit documentation

5. **Testing** (7 criteria)
   - Sandbox testing, fuzzing, integration tests, load testing, update process

6. **Monitoring** (7 criteria)
   - Alerts setup, dependency checks, rollback plans, maintainer responsiveness

## 🚀 Quick Start

### View Online

Visit the live version: [https://andreyors.github.io/assess-package/](https://andreyors.github.io/assess-package/)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/andreyors/assess-package.git
cd assess-package
```

2. Open `index.html` in your browser:
```bash
open index.html
# or
python -m http.server 8000
# then visit http://localhost:8000
```

## 🔧 Custom Domain Setup

To use your custom domain with GitHub Pages:

1. **Add CNAME file**:
```bash
echo "your-domain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. **Configure DNS**:
   - Add an `A` record pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a `CNAME` record pointing to `andreyors.github.io`

3. **Enable HTTPS**:
   - Go to repository Settings → Pages
   - Check "Enforce HTTPS"
   - Wait for SSL certificate provisioning (may take a few minutes)

## 📱 Mobile Experience

The tool is fully optimized for mobile devices:
- **Compact Dropdowns**: Language and theme selection via dropdowns
- **Always-on Explanations**: All helpful tips are visible by default
- **Clean Interface**: Icons hidden on mobile for better readability
- **Touch-friendly**: Large touch targets for easy interaction
- **Floating Score**: Persistent score display in bottom-left corner

## 🎨 Customization

### Theme Colors

Edit CSS variables in `index.html`:
```css
:root {
  --bg-primary: #f8f9fa;
  --text-primary: #212529;
  --accent-color: #0d6efd;
  /* ... more variables ... */
}
```

### Adding New Criteria

Edit the `translations-data.js` file:
```javascript
{
  text: 'Your question?',
  explanation: 'Detailed explanation here',
  check: 'How to verify: command or link'
}
```

### Translations

We use an **translation system** - just edit one file and you're done!

**Adding a new language is simple:**

1. **Edit `translations-data.js`** and add your language:
```javascript
window.translationsData = {
  "en": { ... },
  "ru": { ... },
  "de": { ... },
  "fr": {  // ← Your new language
    "title": "Évaluation de Bibliothèque Go",
    "languageNames": {
      "en": "🌐 Anglais",
      "ru": "🌐 Russe", 
      "de": "🌐 Allemand",
      "fr": "🌐 Français"
    },
    "themeNames": {
      "light": "☀️ Clair",
      "dark": "🌙 Sombre"
    },
    "categories": [ ... ]
  }
}
```

2. **That's it!** The language will automatically appear in the dropdown.

**Detailed guide**: See [ADDING_TRANSLATIONS.md](docs/ADDING_TRANSLATIONS.md) for complete instructions.

**Current languages:**
- 🇬🇧 English (en) - Complete, original version
- 🇷🇺 Russian (ru) - Complete, informal tone (ты)
- 🇩🇪 German (de) - Complete, formal tone (Sie)

**Want to add your language?** It takes ~30 minutes and requires no HTML/JS knowledge! Check our [contribution guide](CONTRIBUTING.md#translation-contributions).

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **JavaScript (ES6+)**: Dynamic UI generation with jQuery
- **Bootstrap 5**: UI components and responsive grid
- **Bootstrap Icons**: Icon set
- **translations-data.js**: Automatic translation system with i18n
- **GitHub Actions**: CI/CD automation with deployment
- **GitHub Pages**: Static site hosting

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on:
- How to submit changes
- Code style guidelines
- Translation contributions
- Bug reporting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built for Go developers by Go developers
- Inspired by best practices from the Go community
- UI/UX designed for developer productivity

## 📧 Contact

- **Issues**: [GitHub Issues](https://github.com/andreyors/assess-package/issues)
- **Discussions**: [GitHub Discussions](https://github.com/andreyors/assess-package/discussions)

---

**Made with ❤️ for the Go community**

