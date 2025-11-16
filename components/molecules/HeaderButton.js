/**
 * HeaderButton - Molecular Component
 * Header action button (menu, search, fullscreen)
 */

class HeaderButton extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute('type');
    const icon = this.getAttribute('icon');
    const ariaLabel = this.getAttribute('aria-label');
    
    this.innerHTML = `
      <button class="header-btn header-btn-${type}" aria-label="${ariaLabel}">
        <img src="${icon}" alt="" />
      </button>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .header-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        padding: 0;
        background: transparent;
        border: none;
        border-radius: var(--border-radius-md);
        cursor: pointer;
        transition: background-color var(--duration-normal) var(--easing-ease-out);
        flex-shrink: 0;
      }
      
      .header-btn:hover {
        background-color: var(--color-interactive-secondary-hover);
      }
      
      .header-btn img {
        width: 18px;
        height: 18px;
        display: block;
      }
    `;
    
    if (!document.querySelector('#header-btn-styles')) {
      style.id = 'header-btn-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('header-button', HeaderButton);

