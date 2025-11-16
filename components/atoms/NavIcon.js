/**
 * NavIcon - Atomic Component
 * 
 * Main navigation icon with 3 states (normal, hover, selected)
 * Automatically manages state based on parent element
 * 
 * Attributes:
 * - icon-normal: Path to normal state icon
 * - icon-hover: Path to hover state icon
 * - icon-selected: Path to selected state icon
 * - state: Current state (normal, hover, selected)
 * 
 * Example:
 * <nav-icon 
 *   icon-normal="assets/icon-normal.svg" 
 *   icon-hover="assets/icon-hover.svg"
 *   icon-selected="assets/icon-selected.svg"
 *   state="normal">
 * </nav-icon>
 */

class NavIcon extends HTMLElement {
  connectedCallback() {
    const iconNormal = this.getAttribute('icon-normal');
    const iconHover = this.getAttribute('icon-hover');
    const iconSelected = this.getAttribute('icon-selected');
    const state = this.getAttribute('state') || 'normal';
    
    // Store icon paths for state management
    this.icons = {
      normal: iconNormal,
      hover: iconHover,
      selected: iconSelected
    };
    
    this.innerHTML = `
      <img src="${this.icons[state]}" alt="" class="nav-icon-img" />
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .nav-icon-img {
        width: 24px;
        height: 24px;
        display: block;
        transition: opacity var(--duration-fast) var(--easing-ease-out);
      }
    `;
    
    if (!document.querySelector('#nav-icon-styles')) {
      style.id = 'nav-icon-styles';
      document.head.appendChild(style);
    }
  }
  
  // Method to update icon state
  setState(newState) {
    const img = this.querySelector('.nav-icon-img');
    if (img && this.icons[newState]) {
      img.src = this.icons[newState];
      this.setAttribute('state', newState);
    }
  }
}

customElements.define('nav-icon', NavIcon);

