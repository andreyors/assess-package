# Contributing to Go Library Adoption Assessment Tool

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## 🌟 Ways to Contribute

- 🐛 Report bugs and issues
- 💡 Suggest new features or criteria
- 🌍 Add or improve translations
- 📝 Improve documentation
- 🎨 Enhance UI/UX
- ✅ Add new assessment criteria
- 🔧 Fix bugs or implement features

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Git installed on your machine
- Text editor (VS Code, Sublime, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Local Setup

1. **Fork the repository**
   - Click the "Fork" button on GitHub
   - Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/assess-package.git
   cd assess-package
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make changes**
   - Edit `index.html` for functionality/content changes
   - Test your changes locally by opening `index.html` in a browser

4. **Test thoroughly**
   - Test on different browsers (Chrome, Firefox, Safari)
   - Test on mobile devices or use browser DevTools
   - Test both light and dark themes
   - Test both English and Russian languages

5. **Commit and push**
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to GitHub and create a PR from your fork
   - Provide a clear description of your changes
   - Reference any related issues

## 📋 Pull Request Guidelines

### PR Title Format

Use conventional commit format:
- `feat: Add new assessment criterion for X`
- `fix: Correct tooltip positioning on mobile`
- `docs: Update README with setup instructions`
- `style: Improve dark theme contrast`
- `refactor: Simplify scoring logic`
- `i18n: Add German translation`

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Translation update
- [ ] Documentation update
- [ ] UI/UX improvement

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile
- [ ] Tested both themes
- [ ] Tested all languages

## Screenshots (if applicable)
Add screenshots for UI changes

## Related Issues
Closes #123
```

## 🌍 Translation Contributions

### Adding a New Language

1. **Locate the translations object** in `index.html`:
```javascript
const translations = {
  en: { /* English */ },
  ru: { /* Russian */ }
};
```

2. **Add your language**:
```javascript
const translations = {
  en: { /* English */ },
  ru: { /* Russian */ },
  de: { /* Your translation */ }
};
```

3. **Translate all fields**:
   - `title`: Page title
   - `toggleShow/toggleHide`: Toggle button text
   - `scoreLabel`: Score display label
   - `categories`: Array of categories, each with:
     - `title`: Category name
     - `items`: Array of criteria with `text`, `explanation`, and `check`

4. **Update HTML**: Add language option in mobile dropdown:
```html
<option value="de">🌐 Deutsch</option>
```

5. **Update JavaScript**: Add language button handler if needed

### Translation Quality Guidelines

- Use natural, conversational language (informal "you" form)
- Keep technical terms consistent
- Maintain the same level of detail as the original
- Use appropriate cultural references
- Test all tooltips and explanations

## ✅ Adding New Assessment Criteria

### Criteria Structure

Each criterion should have:
```javascript
{
  text: 'Clear, concise question?',
  explanation: 'Detailed explanation of why this matters',
  check: 'Specific command, tool, or resource to verify'
}
```

### Guidelines for New Criteria

1. **Relevant**: Must be actionable and relevant to Go library adoption
2. **Clear**: Question should be unambiguous
3. **Actionable**: Include specific verification method
4. **Balanced**: Consider existing categories for balance
5. **Translated**: Provide translations for all supported languages

### Example

```javascript
{
  text: 'Has continuous integration?',
  explanation: 'CI ensures code quality through automated testing on every commit. Look for GitHub Actions, Travis CI, or CircleCI badges.',
  check: 'Check for .github/workflows/ directory or CI badges in README'
}
```

## 🎨 UI/UX Contributions

### Design Principles

- **Minimalist**: Clean, distraction-free interface
- **Accessible**: WCAG 2.1 AA compliance
- **Responsive**: Mobile-first approach
- **Fast**: Optimize for performance
- **Consistent**: Follow existing patterns

### CSS Guidelines

- Use CSS variables for theming
- Follow existing naming conventions
- Ensure dark theme compatibility
- Test on all screen sizes
- Avoid inline styles

### Color Contrast

Ensure sufficient contrast ratios:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

## 🐛 Bug Reports

### Before Submitting

1. Check if the issue already exists
2. Test in multiple browsers
3. Try in incognito/private mode
4. Clear browser cache and localStorage

### Bug Report Template

```markdown
**Describe the bug**
Clear description of what happened

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
Add screenshots if applicable

**Environment:**
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14]
- Device: [e.g., iPhone 14, Desktop]
- Language: [e.g., English, Russian]
- Theme: [e.g., Dark, Light]

**Additional context**
Any other relevant information
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Problem Statement**
What problem does this solve?

**Proposed Solution**
Describe your proposed solution

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Mockups, examples, or references
```

## 📝 Code Style

### JavaScript

- Use ES6+ features
- Use jQuery for DOM manipulation (consistency)
- Use arrow functions for callbacks
- Use `const` and `let`, avoid `var`
- Comment complex logic
- Keep functions small and focused

### HTML

- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Include accessibility attributes
- Keep structure clean and organized

### CSS

- Use CSS custom properties for theming
- Mobile-first media queries
- Logical property grouping
- Consistent naming (kebab-case)
- Comment major sections

## ✨ Code Review Process

1. **Automated Checks**: GitHub Actions will run automatically
2. **Maintainer Review**: A maintainer will review your PR
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, your PR will be merged
5. **Deployment**: Changes automatically deploy to GitHub Pages

## 🏆 Recognition

Contributors will be:
- Listed in the repository contributors
- Mentioned in release notes for significant contributions
- Credited in the README for major features

## 📞 Getting Help

- **Questions**: Open a [GitHub Discussion](https://github.com/YOUR_USERNAME/assess-package/discussions)
- **Issues**: Create an [Issue](https://github.com/YOUR_USERNAME/assess-package/issues)
- **Chat**: Join our community discussions

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Every contribution, no matter how small, makes this tool better for the entire Go community. Thank you for taking the time to contribute!

---

**Happy Contributing! 🚀**

