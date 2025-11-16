/**
 * Divider - Atomic Component
 * 
 * Vertical divider line
 * Used in: header, sub-navigation sections
 * 
 * Attributes:
 * - height: Divider height (default: 24px)
 * 
 * Example:
 * <divider-el height="24"></divider-el>
 */

class Divider extends HTMLElement {
  connectedCallback() {
    const height = this.getAttribute('height') || '24';
    
    this.innerHTML = `
      <div class="divider" style="height: ${height}px;"></div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .divider {
        width: 1px;
        background: var(--color-border-primary);
        align-self: center;
        flex-shrink: 0;
      }
    `;
    
    if (!document.querySelector('#divider-styles')) {
      style.id = 'divider-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('divider-el', Divider);

