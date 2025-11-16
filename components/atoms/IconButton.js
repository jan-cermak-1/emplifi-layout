/**
 * IconButton - Atomic Component
 * 
 * Reusable button with icon
 * Used in: header, sub-navigation
 * 
 * Attributes:
 * - icon-src: Path to icon SVG
 * - size: Button size (default: 36)
 * - aria-label: Accessibility label
 * 
 * Example:
 * <icon-button icon-src="assets/icon.svg" size="36" aria-label="Close"></icon-button>
 */

class IconButton extends HTMLElement {
  connectedCallback() {
    const iconSrc = this.getAttribute('icon-src');
    const size = this.getAttribute('size') || '36';
    const ariaLabel = this.getAttribute('aria-label') || '';
    
    this.innerHTML = `
      <button class="icon-button" aria-label="${ariaLabel}">
        <img src="${iconSrc}" alt="" />
      </button>
    `;
    
    // Apply styles
    const style = document.createElement('style');
    style.textContent = `
      .icon-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${size}px;
        height: ${size}px;
        padding: 0;
        background: transparent;
        border: none;
        border-radius: var(--border-radius-md);
        cursor: pointer;
        transition: background-color var(--duration-normal) var(--easing-ease-out);
        flex-shrink: 0;
      }
      
      .icon-button:hover {
        background-color: var(--color-interactive-secondary-hover);
      }
      
      .icon-button:active {
        background-color: var(--color-border-secondary);
      }
      
      .icon-button img {
        width: 18px;
        height: 18px;
        display: block;
      }
    `;
    
    if (!document.querySelector('#icon-button-styles')) {
      style.id = 'icon-button-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('icon-button', IconButton);

