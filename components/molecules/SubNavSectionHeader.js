/**
 * SubNavSectionHeader - Molecular Component
 * Section title in sub-navigation
 */

class SubNavSectionHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title');
    const color = this.getAttribute('color') || 'default'; // 'default' or 'blue'
    
    this.innerHTML = `
      <span class="subnav-section-title subnav-section-title--${color}">${title}</span>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .subnav-section-title {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-xs);
        letter-spacing: var(--letter-spacing-wide);
        text-transform: uppercase;
        color: rgb(80, 80, 87);
      }
      
      .subnav-section-title--blue {
        color: rgb(8, 115, 156);
      }
    `;
    
    if (!document.querySelector('#subnav-section-header-styles')) {
      style.id = 'subnav-section-header-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('sub-nav-section-header', SubNavSectionHeader);

