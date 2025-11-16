/**
 * SubNavCollapseButton - Molecular Component
 * Collapse sub-navigation button
 */

class SubNavCollapseButton extends HTMLElement {
  connectedCallback() {
    const icon = this.getAttribute('icon');
    
    this.innerHTML = `
      <button class="subnav-collapse-btn" aria-label="Close sub-navigation">
        <img src="${icon}" alt="Close" class="subnav-collapse-icon" />
      </button>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .subnav-collapse-btn {
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
      
      .subnav-collapse-btn:hover {
        background-color: #EDEDEE;
      }
      
      .subnav-collapse-icon {
        width: 18px;
        height: 18px;
        transition: filter var(--duration-normal) var(--easing-ease-out);
      }
      
      .subnav-collapse-btn:hover .subnav-collapse-icon {
        filter: brightness(0) saturate(100%) invert(30%) sepia(98%) saturate(1642%) hue-rotate(187deg) brightness(94%) contrast(101%);
      }
    `;
    
    if (!document.querySelector('#subnav-collapse-btn-styles')) {
      style.id = 'subnav-collapse-btn-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('sub-nav-collapse-button', SubNavCollapseButton);

