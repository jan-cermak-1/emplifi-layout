# Emplifi Layout

Funkční responzivní layout aplikace podle **Soul Design System** od Emplifi.

🔗 **Live Demo:** [https://jan-cermak-1.github.io/emplifi-layout/](https://jan-cermak-1.github.io/emplifi-layout/)

Tento layout slouží jako výchozí bod pro product designery k vytváření konzistentních aplikačních rozhraní. Vše je implementováno 1:1 dle Figma designů s plně funkční interaktivitou.

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
- **Barva:** `#111114` (tmavá)
- **Účel:** Primární navigace mezi hlavními sekcemi platformy
- **Funkce:**
  - Hover efekt - rozbalení navigace s texty
  - Ikony ve 3 stavech: normal, hover, selected
  - Logo s reakcí na otevřený/zavřený stav
  - Kliknutí na logo reloadne stránku

### 2. Sub Navigation (Section Navigation)
- **Šířka:** 240px (fixed)
- **Pozice:** Fixed, vedle main navigation
- **Barva:** `#ffffff` (bílá)
- **Border:** Pravý border `rgba(0, 0, 0, 0.2)`
- **Účel:** Sekundární navigace v rámci sekce (např. Unified Analytics)
- **Funkce:**
  - Collapse/expand button s animací
  - Scrollovatelný obsah s fixním headerem
  - Search a New tlačítka
  - Expandable items s chevron hover efektem
  - Sekce s různými barvami nadpisů

### 3. Header
- **Výška:** 60px (fixed)
- **Pozice:** Fixed top
- **Barva:** `#ffffff` (bílá)
- **Border:** Spodní border `rgba(0, 0, 0, 0.2)`
- **Účel:** Hlavička s kontextem a ovládáním
- **Funkce:**
  - Menu button (hamburger) - toggle sub-navigation
  - Search button (pouze na malých obrazovkách)
  - Divider (1px × 24px, vertikálně vycentrovaný)
  - Nadpis stránky (Headline 2 typografie)
  - Fullscreen button - schová/ukáže hlavní navigaci
  - 4 responzivní stavy dle breakpointu a stavu submenu

### 4. Content Area
- **Pozice:** Zbývající prostor vpravo
- **Barva:** `#f3f3f5` (světle šedá)
- **Scrollování:** Ano (overflow-y: auto)
- **Padding:** Responzivní (24px / 36px)
- **Chování:** Dynamické roztažení při zavírání navigací

## 📏 Rozměry a Breakpointy

### Rozměry Navigací
```css
Main Navigation:  60px
Sub Navigation:   240px
Total:            300px (když obě viditelné)
```

### Content Šířka
- **Minimální šířka:** 632px (celkem 932px s navigacemi)
- **Maximální šířka:** 1478px (celkem 1778px s navigacemi)
- **Chování:** Responzivní (100% šířka mezi min/max)

### Responzivní Breakpoint: **1560px**

Při této šířce okna se mění padding content oblasti a chování headeru:

| Breakpoint | Content Padding | Header Padding |
|------------|----------------|----------------|
| < 1560px   | 24px          | 24px          |
| ≥ 1560px   | 36px          | 36px          |

**Zdroj:** [Soul Design System - Layout](https://soul.emplifi.io/latest/patterns/patterns/layout-dcLK6TX1)

## 🎨 Design Tokens (CSS Variables)

```css
/* Barvy */
--color-on-layer-primary: #111114;       /* Tmavá hlavní nav, text */
--color-on-layer-tertiary: #9d9da0;      /* Sekundární text */
--color-layer-level-1: #ffffff;          /* Bílé plochy */
--color-layer-level-0: #f3f3f5;          /* Světle šedé pozadí */
--color-border-primary: rgba(0, 0, 0, 0.2); /* Bordery */

/* Rozměry */
--main-nav-width: 60px;
--sub-nav-width: 240px;
--header-height: 60px;
--total-nav-width: 300px;
--content-padding: 24px; /* 36px při ≥1560px */
```

## 🚀 Použití

### Live Demo
Stránka je dostupná na: **[https://jan-cermak-1.github.io/emplifi-layout/](https://jan-cermak-1.github.io/emplifi-layout/)**

### Lokální spuštění

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve

# Pak otevřete: http://localhost:8000
```

### Struktura souborů

```
emplifi-layout/
├── index.html                  # HTML struktura
├── styles.css                  # CSS s Figma hodnotami
├── script.js                   # Vanilla JavaScript
├── favicon.svg                 # Emplifi logo favicon
├── assets/                     # Všechny assety
│   ├── logo/                   # Loga (closed/open)
│   ├── icons-main navigation/  # Ikony hlavní navigace
│   │   ├── normal/            # Výchozí stav
│   │   ├── hover/             # Hover stav
│   │   └── is selected/       # Selected stav
│   ├── submenu-UNA/           # Ikony submenu Unified Analytics
│   └── header-UNA/            # Ikony v headeru
└── README.md                   # Dokumentace
```

## 💡 Implementované Funkce

### Main Navigation
✅ Hover efekt - rozbalení na 168px s texty  
✅ Ikony ve 3 stavech (normal, hover, selected)  
✅ Logo switch mezi closed (36×36px) a open (116×36px) stavem  
✅ Kliknutí na logo reloadne stránku bez změny URL  
✅ Selected state pro aktivní sekci  

### Sub Navigation
✅ Collapse/expand s plynulou animací (slide)  
✅ Fixed header (60px) s názvem a collapse buttonem  
✅ Scrollovatelný obsah při malé výšce viewportu  
✅ Search a New tlačítka side-by-side  
✅ Expandable items s chevron double-hover efektem  
✅ Sekce s různými barvami (Early Access, Discover)  
✅ Správné paddiny, marginy, dividery  

### Header
✅ 4 responzivní stavy (menu closed/opened × small/big screen)  
✅ Menu button (hamburger) - toggle sub-navigation  
✅ Search button s borderem (pouze malé obrazovky)  
✅ Divider (1px × 24px, vertikálně vycentrovaný)  
✅ Nadpis s Headline 2 typografiíí  
✅ Fullscreen button:
  - Schová hlavní navigaci (slide vlevo)
  - Vymění ikonu (Maximize ↔ Minimize)
  - Vše se plynule roztáhne
  - Zachována funkcionalita sub-navigace  
✅ Ikony 18×18px v 36×36px buttonech  
✅ Responzivní padding (24px / 36px)  

### Animace a Transitions
✅ Všechny animace synchronizované (0.3s ease)  
✅ Žádné "cukání" - plynulé přechody  
✅ Transform pro slide efekty  
✅ Smooth hover efekty na všech interaktivních prvcích  

### Typografie
✅ Inter font (self-hosted z Emplifi CDN)  
✅ Přesné font-weights, sizes, line-heights z Figmy  
✅ Font-feature-settings pro správné renderování  
✅ Slashed zero, ligatury vypnuté  

## 🎯 Pro Designery

### Jak používat tento layout

1. **Otevřete live demo** nebo spusťte lokálně
2. **Zkopírujte HTML strukturu** pro váš prototyp
3. **Upravte content area** - přidejte své komponenty
4. **Zachovejte layout strukturu** - neměňte navigace a header

### Příklad: Přidání vlastního obsahu

```html
<main class="content">
    <!-- Váš obsah zde -->
    <div class="your-component">
        <h1>Můj Prototyp</h1>
        <p>Obsah...</p>
    </div>
</main>
```

### Co můžete upravit
- ✅ Obsah v content area
- ✅ Barvy (přes CSS variables)
- ✅ Přidat nové komponenty
- ✅ Upravit sub-navigation items

### Co nemění
- ❌ Rozměry navigací (60px, 240px)
- ❌ Header výška (60px)
- ❌ Breakpoint (1560px)
- ❌ Layout struktura (Flexbox)

## 📚 Reference

- **Soul Design System:** https://soul.emplifi.io/
- **Figma Design:** Web komponenty (rMUIzDqQ35jYFbesGJ9TaC)
- **Live Demo:** https://jan-cermak-1.github.io/emplifi-layout/
- **GitHub:** https://github.com/jan-cermak-1/emplifi-layout

## 🛠️ Technologie

- **HTML5** - Sémantická struktura
- **CSS3** - Flexbox, CSS Variables, Media Queries
- **Vanilla JavaScript (ES6+)** - Bez frameworků nebo knihoven
- **GitHub Pages** - Hosting

## 🤖 Prompt pro Cursor

Pokud chcete vytvořit tento layout od začátku pomocí Cursor AI, použijte tento prompt:

<details>
<summary>📋 Klikněte pro zobrazení kompletního promptu</summary>

```
Vytvoř funkční responzivní layout pro webovou aplikaci podle Soul Design System od Emplifi. 
Cílem je mít production-ready layout, který bude 1:1 dle Figma designů a plně funkční.

## Specifikace layoutu:

### Struktura:
1. **Main Navigation** (levá strana):
   - Šířka: 60px (fixed)
   - Pozice: fixed left
   - Barva pozadí: #111114
   - Z-index: 1000
   
   Funkce:
   - Hover rozbalí na 168px s plynulou animací (0.3s ease)
   - Logo:
     * Closed state: 36×36px (pouze ikona)
     * Open state: 116×36px (ikona + text "emplifi")
     * Logo switch okamžitý (bez fade), jen width animované
     * Kliknutí na logo reloadne stránku (window.location.reload), ne přechod na /
   - Navigační položky:
     * Každá má 3 SVG ikony: normal, hover, is selected
     * Icon container: 24×24px
     * Padding okolo ikony: 6px
     * Gap mezi items: 6px
     * Texty v open state:
       - Font: Inter, 10px, weight 700, line-height 36px
       - Color: #9d9da0
       - Text-transform: uppercase
       - Letter-spacing: 0.01px
       - Font-variant-numeric: slashed-zero
       - Font-feature-settings: 'ss04' on, 'cv05' on, 'cv08' on, 'liga' off, 'clig' off
   - Položky:
     * Command Center, Dashboard, Unified Analytics, Publisher, Community, 
       Care, Content, UCG, Bot, Rating & Reviews (nahore)
     * Help & Support, Settings, User Avatar (dole)

2. **Sub Navigation** (vedle main nav):
   - Šířka: 240px (fixed)
   - Pozice: fixed, left: 60px
   - Barva pozadí: #ffffff
   - Border-right: 1px solid rgba(0, 0, 0, 0.2)
   - Z-index: 999
   
   Funkce:
   - Collapse/expand animace (slide doleva s transform: translateX)
   - Header (60px výška):
     * Title: "Unified Analytics" (18px od levého okraje)
     * Font: Inter, 18px, weight 600, line-height 27px
     * Collapse button (36×36px, ikona 18×18px) vpravo
     * Hover: background #EDEDEE, ikona modrá (filter)
     * Buttons 12px pod headerem
   - Search a New buttons:
     * Side-by-side, gap 6px
     * Search: flex: 1, text centered
     * New: fixed width, modrá plus ikona (filter)
     * Výška 36px, border-radius 6px
   - Scrollovatelný obsah:
     * Fixed header (60px)
     * Zbytek scrolluje (overflow-y: auto)
   - Items:
     * Padding: 6px od okrajů
     * Font: Inter, 13px, weight 700, line-height 18px
     * Ikony: 18×18px outline SVG
   - Expandable items:
     * Chevron vpravo (12×12px)
     * Double-hover: item hover + chevron area hover (36×36px)
     * Chevron area: position absolute, right: 0, background #EDEDEE on hover
   - Sekce:
     * "Early Access" - title color: rgb(8, 115, 156) (modrá)
     * "Discover" - title color: rgb(80, 80, 87) (šedá)
     * Dividers: inset 6px z obou stran

3. **Header** (nahoře vpravo):
   - Výška: 60px (fixed)
   - Pozice: fixed, left: 300px (nebo méně podle stavu navigací)
   - Barva pozadí: #ffffff
   - Border-bottom: 1px solid rgba(0, 0, 0, 0.2)
   - Z-index: 998
   - Padding: 0 24px (default), 0 36px (≥ 1560px)
   
   Struktur:
   - Left area:
     * Menu button (hamburger, 36×36px, ikona 18×18px) - toggle submenu
     * Search button (36×36px, ikona 18×18px, border) - pouze na malých obrazovkách
     * Divider (1px wide, 24px high, vertikálně centered, barva rgba(0,0,0,0.2))
     * Title "Home" - font: Inter, 20px, weight 500, line-height 30px, letter-spacing -0.017px
   - Right area:
     * Fullscreen button (36×36px, ikona 18×18px)
   
   4 responzivní stavy:
   a) Malá obrazovka + submenu closed: menu + search + divider vidět
   b) Malá obrazovka + submenu open: vše skryto
   c) Velká obrazovka (≥1560px) + submenu closed: menu + search + divider vidět
   d) Velká obrazovka (≥1560px) + submenu open: vše skryto
   
   Fullscreen funkce:
   - Kliknutí schová main navigation (slide vlevo, translateX(-100%))
   - Ikona se změní: Maximize ↔ Minimize
   - Sub-nav, header, content se roztáhnou (transition 0.3s ease)
   - Funguje ve všech kombinacích s collapsed/expanded submenu

4. **Content Area**:
   - Pozice: Zbývající prostor vpravo
   - Margin-top: 60px (header height)
   - Margin-left: 300px (nebo méně podle stavu navigací)
   - Barva pozadí: #f3f3f5
   - Padding: 24px (default), 36px (≥ 1560px)
   - Overflow-y: auto

### Design tokens (CSS Variables):
```css
:root {
  --color-on-layer-primary: #111114;
  --color-on-layer-tertiary: #9d9da0;
  --color-layer-level-1: #ffffff;
  --color-layer-level-0: #f3f3f5;
  --color-border-primary: rgba(0, 0, 0, 0.2);
  
  --main-nav-width: 60px;
  --sub-nav-width: 240px;
  --header-height: 60px;
  --total-nav-width: 300px;
  --content-padding: 24px;
}

@media (min-width: 1560px) {
  :root {
    --content-padding: 36px;
  }
}
```

### Technologie:
- HTML5 (sémantické tagy)
- CSS3 (Flexbox, NO Grid, CSS Variables, Media Queries)
- Vanilla JavaScript ES6+ (bez frameworků)
- Inter font z: https://base.cdn.emplifi.io/suite/misc/fonts/Inter/inter.css

### Animace a transitions:
- Všechny transitions: 0.3s ease
- Synchronizované - transitions v base třídách, ne v modifikátorech
- Slide animace: transform: translateX()
- Žádné "cukání" - vše plynulé

### JavaScript funkce:
- Main nav hover (open/close)
- Sub nav collapse/expand (s class na body: subnav-closed)
- Fullscreen toggle (s class na body: mainnav-hidden)
- Logo click reload (e.preventDefault() + window.location.reload())
- Icon state management (normal/hover/selected)
- Chevron double-hover (JavaScript + CSS ::before pseudo-element)
- Responsive breakpoint detection

### Soubory:
- index.html
- styles.css
- script.js
- favicon.svg (z Emplifi loga)
- assets/ (složky: logo/, icons-main navigation/normal|hover|is selected/, 
           submenu-UNA/, header-UNA/)

### Git:
- Inicializuj repository
- Commituj průběžně s popisnými zprávami
- Push na GitHub (repository: emplifi-layout)
- Nastav GitHub Pages (main branch, root folder)

### Důležité:
- 1:1 s Figma (všechny rozměry, barvy, fonty přesné)
- Plynulé animace (0.3s ease, synchronizované)
- Žádné placeholder texty - reálné položky
- SVG ikony poskytnu (nebo stáhni z Figmy pomocí MCP)
- Responsive pro desktop (min-width: 932px)
- Favicon z Emplifi loga

Začni vytvořením základní struktury a pak postupně implementuj jednotlivé části:
1. HTML struktura
2. CSS layout (Flexbox)
3. Design tokens
4. Main navigation
5. Sub navigation  
6. Header
7. JavaScript interaktivita
8. Animace a polish
9. Git a GitHub Pages

Pokud narazíš na problém s Figmou, řekni mi a poskytnu ti SVG ikony přímo.
```

</details>

---

**Vytvořeno podle Soul Design System**  
**Live demo:** https://jan-cermak-1.github.io/emplifi-layout/  
© 2024 Emplifi
