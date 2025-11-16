/**
 * MainNavItem - Molecular Component
 * 
 * Single main navigation item combining NavIcon + text label
 * Handles hover/selection states and navigation
 * 
 * Attributes:
 * - label: Item label text
 * - section: Section ID for routing
 * - icon-normal: Normal state icon path
 * - icon-hover: Hover state icon path
 * - icon-selected: Selected state icon path
 * - selected: Boolean, is this item selected
 * 
 * Example:
 * <main-nav-item 
 *   label="Dashboard" 
 *   section="dashboard"
 *   icon-normal="assets/normal.svg"
 *   icon-hover="assets/hover.svg"
 *   icon-selected="assets/selected.svg">
 * </main-nav-item>
 */

class MainNavItem extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute('label');
    const section = this.getAttribute('section');
    const iconNormal = this.getAttribute('icon-normal');
    const iconHover = this.getAttribute('icon-hover');
    const iconSelected = this.getAttribute('icon-selected');
    const selected = this.hasAttribute('selected');
    
    this.section = section;
    this.icons = { normal: iconNormal, hover: iconHover, selected: iconSelected };
    
    const currentState = selected ? 'selected' : 'normal';
    
    this.innerHTML = `
      <a href="${section}.html" class="main-nav-item ${selected ? 'is-selected' : ''}" data-section="${section}">
        <span class="nav-item-icon">
          <img src="${this.icons[currentState]}" alt="${label}" class="nav-icon-img" />
        </span>
        <span class="nav-item-label">${label}</span>
      </a>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .main-nav-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        padding: var(--spacing-nav-padding);
        text-decoration: none;
        color: var(--color-on-layer-tertiary);
        border-radius: var(--border-radius-md);
        transition: background-color var(--duration-normal) var(--easing-ease-out);
        cursor: pointer;
      }
      
      .main-nav-item:hover {
        background-color: var(--color-surface-hover);
      }
      
      .main-nav-item.is-selected {
        background-color: var(--color-surface-hover);
        color: var(--color-on-layer-inverse);
      }
      
      .nav-item-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        flex-shrink: 0;
      }
      
      .nav-icon-img {
        width: 24px;
        height: 24px;
        display: block;
      }
      
      .nav-item-label {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-xs);
        letter-spacing: var(--letter-spacing-wide);
        text-transform: uppercase;
        font-variant-numeric: slashed-zero;
        font-feature-settings: 'ss04' on, 'cv05' on, 'cv08' on, 'liga' off, 'clig' off;
        white-space: nowrap;
      }
    `;
    
    if (!document.querySelector('#main-nav-item-styles')) {
      style.id = 'main-nav-item-styles';
      document.head.appendChild(style);
    }
    
    // Add hover listeners
    const link = this.querySelector('.main-nav-item');
    const img = this.querySelector('.nav-icon-img');
    
    link.addEventListener('mouseenter', () => {
      if (!link.classList.contains('is-selected')) {
        img.src = this.icons.hover;
      }
    });
    
    link.addEventListener('mouseleave', () => {
      if (!link.classList.contains('is-selected')) {
        img.src = this.icons.normal;
      }
    });
  }
}

customElements.define('main-nav-item', MainNavItem);

