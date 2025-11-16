/**
 * SubNavItem - Molecular Component
 * 
 * Sub-navigation item (3 variants: simple, active, expandable)
 * 
 * Attributes:
 * - label: Item label
 * - icon: Icon path
 * - active: Boolean, is item active
 * - expandable: Boolean, can expand
 * - chevron-icon: Chevron icon path (for expandable)
 * - page: Page ID
 * 
 * Example:
 * <sub-nav-item label="Home" icon="assets/home.svg" active></sub-nav-item>
 */

class SubNavItem extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute('label');
    const icon = this.getAttribute('icon');
    const active = this.hasAttribute('active');
    const expandable = this.hasAttribute('expandable');
    const chevronIcon = this.getAttribute('chevron-icon') || '';
    const page = this.getAttribute('page');
    
    const chevronHTML = expandable ? `<img src="${chevronIcon}" alt="" class="subnav-item-chevron" />` : '';
    
    this.innerHTML = `
      <button class="subnav-item ${active ? 'is-active' : ''} ${expandable ? 'subnav-item-expandable' : ''}" data-page="${page}">
        <img src="${icon}" alt="${label}" class="subnav-item-icon" />
        <span class="subnav-item-label">${label}</span>
        ${chevronHTML}
      </button>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .subnav-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        height: 36px;
        padding: 0 var(--spacing-sm);
        background: transparent;
        border: none;
        border-radius: var(--border-radius-md);
        text-decoration: none;
        cursor: pointer;
        transition: background-color var(--duration-normal) var(--easing-ease-out);
        text-align: left;
        width: 100%;
        position: relative;
      }
      
      .subnav-item:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
      
      .subnav-item.is-active {
        background-color: var(--color-interactive-secondary);
      }
      
      .subnav-item-expandable {
        padding-right: 36px;
      }
      
      .subnav-item-icon {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }
      
      .subnav-item-label {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-sm);
        letter-spacing: var(--letter-spacing-normal);
        color: var(--color-on-layer-primary);
        font-variant-numeric: slashed-zero;
        font-feature-settings: 'ss04' on, 'cv05' on, 'cv08' on, 'liga' off, 'clig' off;
      }
      
      .subnav-item-chevron {
        width: 18px;
        height: 18px;
        position: absolute;
        right: 15px;
        opacity: 0.5;
        transition: opacity var(--duration-normal) var(--easing-ease-out);
      }
      
      .subnav-item:hover .subnav-item-chevron {
        opacity: 1;
      }
    `;
    
    if (!document.querySelector('#sub-nav-item-styles')) {
      style.id = 'sub-nav-item-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('sub-nav-item', SubNavItem);

