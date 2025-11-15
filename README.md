# Emplifi Layout

Základní responzivní layout aplikace podle **Soul Design System** od Emplifi.

Tento layout slouží jako výchozí bod pro product designery k vytváření konzistentních aplikačních rozhraní.

## 📐 Struktura Layoutu

Layout se skládá ze 4 hlavních sekcí:

```
┌──────┬─────────────┬────────────────────────────┐
│      │             │         Header             │
│ Main │    Sub      ├────────────────────────────┤
│ Nav  │  Navigation │                            │
│      │             │         Content            │
│      │             │                            │
└──────┴─────────────┴────────────────────────────┘
```

### 1. Main Navigation (Platform Navigation)
- **Šířka:** 60px (fixed)
- **Pozice:** Fixed left
- **Barva:** `#24242b` (tmavá)
- **Účel:** Primární navigace mezi hlavními sekcemi platformy

### 2. Sub Navigation (Section Navigation)
- **Šířka:** 240px (fixed)
- **Pozice:** Fixed, vedle main navigation
- **Barva:** `#ffffff` (bílá)
- **Border:** Pravý border `rgba(0, 0, 0, 0.2)`
- **Účel:** Sekundární navigace v rámci sekce
- **Scrollování:** Ano (overflow-y: auto)

### 3. Header
- **Výška:** 60px (fixed)
- **Pozice:** Fixed top
- **Barva:** `#ffffff` (bílá)
- **Border:** Spodní border `#d7d8d9`
- **Účel:** Hlavička s aktuálním kontextem, vyhledáváním, uživatelským menu

### 4. Content Area
- **Pozice:** Zbývající prostor vpravo
- **Barva:** `#f3f3f5` (světle šedá)
- **Scrollování:** Ano (overflow-y: auto)
- **Padding:** Responzivní (viz níže)

## 📏 Rozměry a Breakpointy

### Rozměry Navigací
```css
Main Navigation:  60px
Sub Navigation:   240px
Total:            300px (fixed)
```

### Content Šířka
- **Minimální šířka:** 632px (celkem 932px s navigacemi)
- **Maximální šířka:** 1478px (celkem 1778px s navigacemi)
- **Chování:** Responzivní (100% šířka mezi min/max)

### Responzivní Breakpoint: **1560px**

Při této šířce okna se mění padding content oblasti:

| Breakpoint | Content Padding |
|------------|-----------------|
| < 1560px   | 24px           |
| ≥ 1560px   | 36px           |

**Proč?** Podle [Soul Design System specifikace](https://soul.emplifi.io/latest/patterns/patterns/layout-dcLK6TX1):
> "We have defined one breakpoint that changed margins between content and navigation components. This breakpoint is at 1560 px width."

## 🎨 Design Tokens (CSS Variables)

```css
/* Barvy */
--color-on-layer-primary: #24242b;  /* Tmavá hlavní nav */
--color-layer-level-1: #ffffff;     /* Bílé plochy */
--color-layer-level-0: #f3f3f5;     /* Světle šedé pozadí */
--color-border-primary: rgba(0, 0, 0, 0.2);
--color-border-header: #d7d8d9;

/* Rozměry */
--main-nav-width: 60px;
--sub-nav-width: 240px;
--header-height: 60px;
--content-padding: 24px; /* 36px při ≥1560px */
```

## 🚀 Použití

### Základní spuštění

Jednoduše otevřete `index.html` v prohlížeči:

```bash
open index.html
```

Nebo použijte lokální server:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve

# VS Code Live Server extension
```

### Struktura souborů

```
emplifi-layout/
├── index.html          # Základní HTML struktura
├── styles.css          # CSS s přesnými hodnotami z Figmy
├── script.js           # Vanilla JavaScript pro interaktivitu
└── README.md           # Tato dokumentace
```

## 💡 JavaScript Funkce

Layout obsahuje vanilla JavaScript s těmito funkcemi:

### Layout Manager
- **Detekce breakpointu** - automaticky detekuje a reaguje na změnu breakpointu
- **Toggle sub navigation** - skrytí/zobrazení boční navigace (Cmd/Ctrl + B)
- **Event handling** - připravené handlery pro budoucí funkce

### Utility Funkce
- `smoothScrollTo()` - plynulé scrollování
- `debounce()` - optimalizace event handlerů
- `isInViewport()` - detekce viditelnosti elementů

### Keyboard Shortcuts
- **Cmd/Ctrl + B** - Toggle sub navigation

### Debug Info
```javascript
// V konzoli prohlížeče:
EmplifiLayout.manager.getLayoutInfo()

// Výstup:
{
  breakpoint: "large",
  subNavVisible: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  contentPadding: "36px"
}
```

## 🎯 Pro Designery

### Jak přidat obsah

1. **Main Navigation**: Přidejte prvky do `<nav class="main-navigation">`
2. **Sub Navigation**: Přidejte menu items do `<aside class="sub-navigation">`
3. **Header**: Přidejte komponenty do `<header class="header">`
4. **Content**: Přidejte hlavní obsah do `<main class="content">`

### Příklad: Přidání menu item

```html
<aside class="sub-navigation">
    <ul class="nav-list">
        <li class="nav-item active">Dashboard</li>
        <li class="nav-item">Analytics</li>
        <li class="nav-item">Settings</li>
    </ul>
</aside>
```

Pak přidejte vlastní styly pro `.nav-list`, `.nav-item` atd.

## 📚 Reference

- **Soul Design System:** https://soul.emplifi.io/latest/patterns/patterns/layout-dcLK6TX1
- **Figma Design:** Použito přes Figma MCP
- **Technologie:** HTML5, CSS3 (Flexbox), Vanilla JavaScript (ES6+)

## 🔧 Další Kroky

Layout je připravený pro doplnění:

- [ ] Komponenty navigace (logo, menu items, ikony)
- [ ] Header komponenty (search, user menu, notifications)
- [ ] Content komponenty (cards, tables, forms)
- [ ] Interaktivní prvky (dropdowns, modals, tooltips)
- [ ] Dark mode varianta
- [ ] Animace a transitions

## 📝 Poznámky

- Layout je optimalizován pro **desktop** použití
- Minimální šířka okna: **932px**
- Používá Flexbox pro layout
- Vanilla JavaScript bez závislostí
- Připraveno pro rozšíření o další komponenty

## 👥 Pro Týmy

Tento layout můžete použít jako:
- **Výchozí bod** pro nové projekty
- **Referenci** pro konzistentní rozhraní
- **Playground** pro testování komponent
- **Dokumentaci** pro vývojáře

---

**Vytvořeno podle Soul Design System**  
© 2024 Emplifi
