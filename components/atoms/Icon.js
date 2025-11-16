/**
 * Icon - Atomic Component
 * 
 * Generic SVG icon wrapper
 * Used everywhere in the application
 * 
 * Attributes:
 * - src: Path to icon SVG
 * - size: Icon size in px (default: 18)
 * - alt: Alternative text
 * 
 * Example:
 * <icon-el src="assets/icon.svg" size="18" alt="Home"></icon-el>
 */

class Icon extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute('src');
    const size = this.getAttribute('size') || '18';
    const alt = this.getAttribute('alt') || '';
    
    this.innerHTML = `
      <img src="${src}" alt="${alt}" class="icon" style="width: ${size}px; height: ${size}px;" />
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .icon {
        display: block;
        flex-shrink: 0;
      }
    `;
    
    if (!document.querySelector('#icon-styles')) {
      style.id = 'icon-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('icon-el', Icon);

