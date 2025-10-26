# Adding New Translations

This guide explains how to add new language translations to the Go Library Assessment Tool.

## 📋 Overview

The translation system is **fully automatic** and based on a single source of truth:

- **`translations-data.js`** - Contains `window.translationsData` object with all translations
- Languages are automatically detected from this object
- UI elements (dropdowns, labels) are generated dynamically
- No need to modify HTML or add UI elements manually

## 🌍 Quick Start: Adding a New Language

### Step 1: Edit translations-data.js

Open `translations-data.js` and add your language to the `window.translationsData` object:

```javascript
window.translationsData = {
  "en": { ... },
  "ru": { ... },
  "de": { ... },
  "fr": {  // ← Add your new language here
    "title": "Évaluation de Bibliothèque Go",
    "toggleShow": "Afficher toutes les explications",
    "toggleHide": "Masquer toutes les explications",
    "scoreLabel": "Votre Score",
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
    "categories": [
      {
        "title": "Évaluation Initiale",
        "items": [
          {
            "text": "Résout-il un problème réel?",
            "explanation": "Le paquet doit résoudre une tâche spécifique...",
            "check": "Demandez-vous: cela permettra-t-il vraiment de gagner du temps?"
          }
          // ... more items
        ]
      }
      // ... more categories
    ]
  }
};
```

### Step 2: Update languageNames in ALL Languages

**Important**: Add your new language to the `languageNames` object in **every existing language**:

```javascript
// In English (en):
"languageNames": {
  "en": "🌐 English",
  "ru": "🌐 Russian",
  "de": "🌐 German",
  "fr": "🌐 French"  // ← Add this
}

// In Russian (ru):
"languageNames": {
  "en": "🌐 Английский",
  "ru": "🌐 Русский",
  "de": "🌐 Немецкий",
  "fr": "🌐 Французский"  // ← Add this
}

// In German (de):
"languageNames": {
  "en": "🌐 Englisch",
  "ru": "🌐 Russisch",
  "de": "🌐 Deutsch",
  "fr": "🌐 Französisch"  // ← Add this
}
```

### Step 3: Validate JavaScript

Run validation to ensure your JavaScript is syntactically correct:

```bash
node -c translations-data.js
```

If valid, you'll see no output. If there's an error, it will show the line number.

### Step 4: Test

Open `index.html` in your browser. Your new language should automatically appear in the language dropdown!

**That's it!** No HTML changes needed. No JavaScript changes needed. Everything is automatic.

---

## 📝 Translation Structure

### Required Fields

Each language object must contain:

```javascript
{
  "title": "Page title",
  "toggleShow": "Button text to show explanations",
  "toggleHide": "Button text to hide explanations",
  "scoreLabel": "Score label text",
  "languageNames": {
    // All available languages with their names in THIS language
  },
  "themeNames": {
    "light": "Light theme name",
    "dark": "Dark theme name"
  },
  "categories": [
    // Array of assessment categories
  ]
}
```

### Category Structure

```javascript
{
  "title": "Category Title",
  "items": [
    {
      "text": "Assessment criterion question",
      "explanation": "Detailed explanation for beginners",
      "check": "How to check or verify this criterion"
    }
  ]
}
```

---

## 🎨 Naming Conventions

### Language Names
- Format: `"🌐 Language Name"`
- Use the language's **native name** when defining itself (e.g., "🌐 Français" for French in the French translation)
- Use **localized names** in other languages (e.g., "🌐 French" in English, "🌐 Французский" in Russian)

### Theme Names
- Format: `"☀️ Name"` for light, `"🌙 Name"` for dark
- Keep them short (one word is best)

---

## ✅ Validation Checklist

Before committing your translation:

- [ ] JavaScript syntax is valid (`node -c translations-data.js`)
- [ ] All required fields are present
- [ ] `languageNames` includes ALL languages (including new ones) in ALL translations
- [ ] `themeNames` has both `light` and `dark`
- [ ] Same number of categories as other languages (6 categories)
- [ ] Each category has the same number of items as in English version
- [ ] Text fits well in UI (not too long)
- [ ] Tested in browser - language appears in dropdown
- [ ] All UI elements are translated when switching to new language

---

## 🔧 Technical Details

### How It Works

1. **Automatic Detection**
   ```javascript
   // Languages are auto-detected from the object keys
   const availableLanguages = Object.keys(window.translationsData);
   // Results: ['en', 'ru', 'de', 'fr']
   ```

2. **Dynamic Dropdown Generation**
   ```javascript
   function initLanguageSelect() {
     const availableLanguages = Object.keys(translations);
     const currentLang = state.lang;
     const t = translations[currentLang];
     
     availableLanguages.forEach(langCode => {
       // Creates option with text from current translation
       const option = $('<option></option>')
         .val(langCode)
         .text(t.languageNames[langCode]);
     });
   }
   ```

3. **Localized Option Labels**
   - When user selects Russian, dropdown shows: "🌐 Английский", "🌐 Русский", "🌐 Немецкий"
   - When user selects German, dropdown shows: "🌐 Englisch", "🌐 Russisch", "🌐 Deutsch"

### File Structure

```
assess-package/
├── index.html                    # Main HTML file (no translation data here)
├── translations-data.js          # ALL translations (single source of truth)
├── docs/
│   └── ADDING_TRANSLATIONS.md   # This file
└── .github/
    └── workflows/
        └── deploy.yml           # CI/CD (no JSON validation needed)
```

---

## 🌏 Example: Adding Spanish

Complete example of adding Spanish translation:

```javascript
// 1. Add to translations-data.js
"es": {
  "title": "Evaluación de Biblioteca Go",
  "toggleShow": "Mostrar todas las explicaciones",
  "toggleHide": "Ocultar todas las explicaciones",
  "scoreLabel": "Tu Puntuación",
  "languageNames": {
    "en": "🌐 Inglés",
    "ru": "🌐 Ruso",
    "de": "🌐 Alemán",
    "fr": "🌐 Francés",
    "es": "🌐 Español"
  },
  "themeNames": {
    "light": "☀️ Claro",
    "dark": "🌙 Oscuro"
  },
  "categories": [
    {
      "title": "Evaluación Inicial",
      "items": [
        {
          "text": "¿Resuelve un problema real?",
          "explanation": "El paquete debe abordar una tarea específica que enfrentes regularmente.",
          "check": "Pregúntate: ¿realmente ahorrará tiempo o resolverá un problema importante?"
        }
        // ... 6 more items
      ]
    }
    // ... 5 more categories (6 total)
  ]
}

// 2. Update en.languageNames
"languageNames": {
  "en": "🌐 English",
  "ru": "🌐 Russian",
  "de": "🌐 German",
  "fr": "🌐 French",
  "es": "🌐 Spanish"  // ← Added
}

// 3. Update ru.languageNames
"languageNames": {
  "en": "🌐 Английский",
  "ru": "🌐 Русский",
  "de": "🌐 Немецкий",
  "fr": "🌐 Французский",
  "es": "🌐 Испанский"  // ← Added
}

// 4. Update de.languageNames
"languageNames": {
  "en": "🌐 Englisch",
  "ru": "🌐 Russisch",
  "de": "🌐 Deutsch",
  "fr": "🌐 Französisch",
  "es": "🌐 Spanisch"  // ← Added
}
```

**Result**: Spanish automatically appears in the language dropdown with no other changes needed!

---

## 🐛 Troubleshooting

### Language doesn't appear in dropdown
- Check JavaScript syntax: `node -c translations-data.js`
- Verify the language code is a direct key in `window.translationsData`
- Check browser console for errors

### Dropdown shows "undefined"
- Verify `languageNames` exists in the **current** language
- Ensure your new language code is listed in `languageNames` of ALL languages

### Theme names don't change
- Check `themeNames` exists in your translation
- Verify it has both `light` and `dark` keys

### Content doesn't update when switching languages
- Clear browser cache
- Hard refresh (Cmd+Shift+R / Ctrl+F5)
- Check localStorage: `localStorage.clear()` in console

---

## 📚 Resources

### Current Translations
- **English** (`en`) - Original, complete
- **Russian** (`ru`) - Complete, informal tone (ты)
- **German** (`de`) - Complete, formal tone (Sie)

### Translation Guidelines
- Keep tone consistent with existing translations
- Prefer shorter text (fits better in mobile UI)
- Use emojis in `languageNames` and `themeNames` for visual appeal
- Test on mobile devices - text should not overflow

### Getting Help
- Open an issue on GitHub
- Check existing translations for reference
- Use English version as the canonical structure

---

## ✨ Contributing

When submitting a translation:

1. Fork the repository
2. Add your translation to `translations-data.js`
3. Update all `languageNames` in existing translations
4. Test locally
5. Create a Pull Request with:
   - Screenshot showing the language in the dropdown
   - Brief description of any localization choices made
   - Confirmation that all criteria are translated

Thank you for helping make this tool accessible to more developers! 🌍
