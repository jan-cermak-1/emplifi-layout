/**
 * NavLogo - Atomic Component
 * 
 * Logo with open/close states for main navigation
 * Shows icon when closed, full logo when open
 * 
 * Attributes:
 * - icon-closed: Path to closed state icon (small logo)
 * - icon-full: Path to full logo
 * - state: Current state (closed, open)
 * 
 * Example:
 * <nav-logo 
 *   icon-closed="assets/logo-icon.svg" 
 *   icon-full="assets/logo-full.svg"
 *   state="closed">
 * </nav-logo>
 */

class NavLogo extends HTMLElement {
  connectedCallback() {
    const iconClosed = this.getAttribute('icon-closed');
    const iconFull = this.getAttribute('icon-full');
    const state = this.getAttribute('state') || 'closed';
    
    this.icons = {
      closed: iconClosed,
      open: iconFull
    };
    
    const isOpen = state === 'open';
    
    this.innerHTML = `
      <div class="nav-logo-container">
        <img src="${iconClosed}" alt="Emplifi" class="nav-logo-icon" style="display: ${isOpen ? 'none' : 'block'};" />
        <img src="${iconFull}" alt="Emplifi" class="nav-logo-full" style="display: ${isOpen ? 'block' : 'none'};" />
      </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .nav-logo-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 36px;
      }
      
      .nav-logo-icon {
        width: 36px;
        height: 36px;
      }
      
      .nav-logo-full {
        width: 116px;
        height: 36px;
      }
    `;
    
    if (!document.querySelector('#nav-logo-styles')) {
      style.id = 'nav-logo-styles';
      document.head.appendChild(style);
    }
  }
  
  // Method to update logo state
  setState(newState) {
    const iconImg = this.querySelector('.nav-logo-icon');
    const fullImg = this.querySelector('.nav-logo-full');
    
    if (newState === 'open') {
      iconImg.style.display = 'none';
      fullImg.style.display = 'block';
    } else {
      iconImg.style.display = 'block';
      fullImg.style.display = 'none';
    }
    
    this.setAttribute('state', newState);
  }
}

customElements.define('nav-logo', NavLogo);

