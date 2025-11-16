# Emplifi Layout - Component Library

## 📚 Overview

Atomický design system postavený na Web Components (Vanilla JavaScript) pro Emplifi layout aplikaci. Všechny komponenty následují **Soul Design System** a jsou plně znovupoužitelné.

---

## 🏗️ Architecture

### Atomic Design Principles

```
Atoms (7) → Molecules (8) → Organisms (4) → Pages (12)
```

- **Atoms**: Nejmenší stavební bloky (buttony, ikony, divider)
- **Molecules**: Kombinace atomů (nav item, header button)
- **Organisms**: Kompletní UI sekce (main navigation, header)
- **Pages**: Konkrétní implementace (unified-analytics.html, atd.)

---

## ⚛️ ATOMS (7 Components)

### 1. IconButton
**File**: `components/atoms/IconButton.js`

Znovupoužitelný button s ikonou.

**Atributy**:
- `icon-src`: Cesta k SVG ikoně
- `size`: Velikost buttonu (default: 36)
- `aria-label`: Accessibility label

**Použití**:
```html
<icon-button icon-src="assets/icon.svg" size="36" aria-label="Close"></icon-button>
```

**Použito v**: Header, Sub-navigation

---

### 2. Icon
**File**: `components/atoms/Icon.js`

Obecný SVG icon wrapper.

**Atributy**:
- `src`: Cesta k SVG
- `size`: Velikost v px (default: 18)
- `alt`: Alternativní text

**Použití**:
```html
<icon-el src="assets/icon.svg" size="18" alt="Home"></icon-el>
```

---

### 3. NavIcon
**File**: `components/atoms/NavIcon.js`

Main navigation ikona se 3 stavy (normal, hover, selected).

**Atributy**:
- `icon-normal`: Normal state icon
- `icon-hover`: Hover state icon
- `icon-selected`: Selected state icon
- `state`: Aktuální stav

**Metody**:
- `setState(newState)`: Změní stav ikony

---

### 4. NavLogo
**File**: `components/atoms/NavLogo.js`

Logo s open/close stavy pro main navigation.

**Atributy**:
- `icon-closed`: Closed state (malé logo)
- `icon-full`: Full logo
- `state`: closed | open

**Metody**:
- `setState(newState)`: Přepne mezi stavy

---

### 5. Divider
**File**: `components/atoms/Divider.js`

Vertikální divider čára.

**Atributy**:
- `height`: Výška v px (default: 24)

**Použití**:
```html
<divider-el height="24"></divider-el>
```

---

### 6. Badge
**File**: `components/atoms/Badge.js`

Status badge (Complete/Placeholder).

**Atributy**:
- `status`: complete | placeholder
- `text`: Text obsah

**Použití**:
```html
<badge-el status="complete" text="Complete"></badge-el>
```

---

### 7. Avatar
**File**: `components/atoms/Avatar.js`

User avatar obrázek.

**Atributy**:
- `src`: Cesta k obrázku
- `alt`: Alt text
- `size`: Velikost v px (default: 36)

---

## 🧬 MOLECULES (8 Components)

### 1. MainNavItem
**File**: `components/molecules/MainNavItem.js`

Single main navigation item (ikona + text).

**Atributy**:
- `label`: Text label
- `section`: Section ID pro routing
- `icon-normal`, `icon-hover`, `icon-selected`: Icon paths
- `selected`: Boolean

**Features**:
- Hover/selection states
- Navigace na section HTML

---

### 2. SubNavItem
**File**: `components/molecules/SubNavItem.js`

Sub-navigation item (3 varianty: simple, active, expandable).

**Atributy**:
- `label`: Text label
- `icon`: Icon path
- `active`: Boolean
- `expandable`: Boolean
- `chevron-icon`: Chevron icon path
- `page`: Page ID

---

### 3. SubNavActionButton
**File**: `components/molecules/SubNavActionButton.js`

Search/New button v sub-navigation.

**Atributy**:
- `type`: search | new
- `label`: Button label
- `icon`: Icon path

---

### 4. SubNavSectionHeader
**File**: `components/molecules/SubNavSectionHeader.js`

Section title v sub-navigation.

**Atributy**:
- `title`: Section title
- `color`: default | blue

---

### 5. HeaderButton
**File**: `components/molecules/HeaderButton.js`

Header action button (menu, search, fullscreen).

**Atributy**:
- `type`: menu | search | fullscreen
- `icon`: Icon path
- `aria-label`: Accessibility label

---

### 6. HeaderTitle
**File**: `components/molecules/HeaderTitle.js`

Page title v headeru (Figma "Headline 2").

**Atributy**:
- `title`: Page title

---

### 7. SubNavCollapseButton
**File**: `components/molecules/SubNavCollapseButton.js`

Button pro collapse sub-navigation.

**Atributy**:
- `icon`: Icon path

---

### 8. UserProfile
**File**: `components/molecules/UserProfile.js`

User profile widget (avatar + ID + jméno).

**Atributy**:
- `avatar`: Avatar path
- `user-id`: User ID
- `user-name`: User name

---

## 🦠 ORGANISMS (4 Components)

### 1. MainNavigation
**File**: `components/organisms/MainNavigation.js`

Kompletní main navigation se všemi items, routing, state management.

**Atributy**:
- `current-section`: Aktuální section ID

**Features**:
- Icon hover/selection states
- Click naviguje na section HTML
- Logo click → index.html
- Highlight current section
- Open/close na hover

**Použití**:
```html
<main-navigation current-section="unified-analytics"></main-navigation>
```

**Používáno**: Na všech stránkách (truly shared)

---

### 2. SubNavigationContainer
**File**: `components/organisms/SubNavigationContainer.js`

Sub-navigation structure s behavior - config-driven.

**Atributy**:
- `section-name`: Section ID (načte config)

**Features**:
- Fixed header + scrollable content
- Collapse/expand funkcionalita
- Search/New buttons
- Items s expandable chevron hover
- Sections s titles
- Placeholder mode ("Coming soon")

**Config** (z `config/sections.js`):
```javascript
{
  showSearch: true,
  showNew: true,
  items: [{ label, icon, active, page }],
  sections: [{
    title, titleColor,
    items: [{ label, icon, expandable, page }]
  }],
  placeholder: false
}
```

**Použití**:
```html
<sub-navigation-container section-name="unified-analytics"></sub-navigation-container>
```

---

### 3. HeaderContainer
**File**: `components/organisms/HeaderContainer.js`

Header structure s behavior - config-driven.

**Atributy**:
- `section-name`: Section ID (načte config)

**Features**:
- Responsive visibility (1560px breakpoint)
- Fullscreen toggle
- Sub-nav toggle
- Config-driven button visibility

**Config** (z `config/sections.js`):
```javascript
{
  showMenu: true,
  showSearch: true,
  showDivider: true,
  showFullscreen: true,
  defaultTitle: 'Home'
}
```

**Použití**:
```html
<header-container section-name="unified-analytics"></header-container>
```

---

### 4. ContentContainer
**File**: `components/organisms/ContentContainer.js`

Simple content area wrapper - reused všemi sekcemi.

**Atributy**:
- `section-name`: Section ID (pro budoucí customizaci)

**Použití**:
```html
<content-container section-name="unified-analytics">
  <!-- Content zde -->
</content-container>
```

---

## ⚙️ Configuration

### Master Config
**File**: `config/sections.js`

Obsahuje konfiguraci pro všech 12 sekcí.

**Struktura**:
```javascript
export const sections = {
  'section-id': {
    id: 'section-id',
    name: 'Section Name',
    mainNav: { label, iconBase },
    subNav: { showSearch, showNew, items, sections, placeholder },
    header: { showMenu, showSearch, showDivider, showFullscreen, defaultTitle }
  }
};
```

**Přidání nového elementu**:
1. Přidej do `sections['section-id'].subNav.items` nebo `.sections`
2. Element se automaticky objeví v UI

---

## 📄 Page Structure

Každá sekce má vlastní HTML soubor se stejnou strukturou:

```html
<!DOCTYPE html>
<html lang="cs">
<head>
    <title>Section Name - Emplifi Layout</title>
    <link rel="stylesheet" href="styles/tokens.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="layout">
        <main-navigation current-section="section-id"></main-navigation>
        <sub-navigation-container section-name="section-id"></sub-navigation-container>
        <header-container section-name="section-id"></header-container>
        <content-container section-name="section-id"></content-container>
    </div>
    
    <script type="module" src="components/organisms/MainNavigation.js"></script>
    <script type="module" src="components/organisms/SubNavigationContainer.js"></script>
    <script type="module" src="components/organisms/HeaderContainer.js"></script>
    <script type="module" src="components/organisms/ContentContainer.js"></script>
</body>
</html>
```

---

## 🎨 Soul Design System Integration

### Design Tokens
**File**: `styles/tokens.css`

Obsahuje všechny Soul DS tokeny:
- Colors (layer, on-layer, surface, interactive, border, feedback)
- Spacing (6px grid system)
- Shadows
- Border Radius
- Motion (duration, easing, transitions)
- Typography (font-family, sizes, weights, line-heights)
- Layout (navigation widths, header height, breakpoints)
- Z-index scale

**Použití**:
```css
.my-component {
  background: var(--color-layer-level-1);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  transition: var(--transition-normal);
}
```

---

## 🚀 How to Add New Component

### AI-Assisted Workflow

Když vytváříš nový UI element, AI automaticky:

1. **Analyzuje element** - Co to je? Button? Input? Card?
2. **Ověří existující komponenty** - Existuje již podobná komponenta?
3. **Navrhne atomic level**:
   - "This should be a new **atom** called `PrimaryButton`"
   - "This should be a new **molecule** combining `Icon` + `Button`"
   - "This can use existing `IconButton` with new props"
4. **Auto-vytvoří soubor** v správném adresáři
5. **Použije Soul DS tokeny** automaticky
6. **Aktualizuje component registry**

**Příklad**:
```
Ty: "Chci přidat dropdown menu do headeru"

AI:
- "Dropdown menu by měl být **molekula** `DropdownMenu.js`"
- "Bude kombinovat atom `IconButton` (trigger) + nový atom `MenuList` (items)"
- "Vytvoříme: components/atoms/MenuList.js + components/molecules/DropdownMenu.js"
- "Použiju Soul DS tokeny: --spacing-sm, --shadow-md, --color-layer-level-2"
- [Creates both files with proper structure]
```

---

## 📦 Component Checklist

Při vytváření nové komponenty:

- [ ] **Atomic level správně určen** (atom/molecule/organism)
- [ ] **Soubor v správném adresáři** (`components/atoms/`, `/molecules/`, `/organisms/`)
- [ ] **JSDoc komentáře** (popis, atributy, příklady)
- [ ] **Soul DS tokeny použity** (žádné hardcoded hodnoty)
- [ ] **Custom element registered** (`customElements.define()`)
- [ ] **Styles isolated** (shadowRoot nebo scoped styles)
- [ ] **Atributy dokumentovány**
- [ ] **Použití příklady v komentářích**
- [ ] **Reusable** (nespecifické pro jednu stránku)

---

## 🔄 State Management

### Body Classes
- `subnav-closed`: Sub-navigation je zavřená
- `mainnav-hidden`: Main navigation je skrytá (fullscreen mode)

### Transitions
Všechny transitions používají Soul DS tokeny:
```css
transition: transform var(--duration-slow) var(--easing-ease-out);
```

---

## 📱 Responsive Behavior

### Breakpoint: 1560px
- **Content padding**: 24px → 36px
- **Header padding**: 24px → 36px
- **Header buttons**: Conditional visibility

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Všechny 12 section pages se načtou
- [ ] Main navigation funguje na všech stránkách
- [ ] Logo click vrací na index.html
- [ ] UNA page má plnou funkcionalitu
- [ ] Placeholder pages zobrazují "Coming soon"
- [ ] Asset paths se správně řeší
- [ ] Responsive behavior (1560px)
- [ ] Hover states fungují
- [ ] Fullscreen toggle funguje
- [ ] Sub-nav collapse funguje

---

## 🎯 Benefits

✅ **Zero Duplication** - Každý button, icon, item je JEDNA komponenta  
✅ **Easy to Extend** - Nový element do template → dostupný všude  
✅ **Consistent** - Stejný button vypadá/chová se identicky všude  
✅ **Maintainable** - Fix bug jednou, aplikuje se všude  
✅ **Scalable** - Nová sekce? Jen config, komponenty už máš  
✅ **Soul DS Compliant** - Všechny komponenty následují Soul DS  

---

## 📚 References

- **Soul Design System**: https://soul.emplifi.io/
- **Web Components**: https://developer.mozilla.org/en-US/docs/Web/Web_Components
- **Atomic Design**: https://atomicdesign.bradfrost.com/

---

**Version**: 1.0.0  
**Last Updated**: 2024-11-16  
**Maintainer**: Jan Čermák

