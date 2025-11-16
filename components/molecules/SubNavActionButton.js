/**
 * SubNavActionButton - Molecular Component
 * Search/New button in sub-navigation
 */

class SubNavActionButton extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute('type'); // 'search' or 'new'
    const label = this.getAttribute('label');
    const icon = this.getAttribute('icon');
    
    const isNew = type === 'new';
    
    this.innerHTML = `
      <button class="subnav-action-btn ${isNew ? 'subnav-action-new' : ''}" data-action="${type}">
        <img src="${icon}" alt="${label}" class="subnav-action-icon" />
        <span class="subnav-action-label">${label}</span>
      </button>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .subnav-action-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-xs);
        height: 36px;
        padding: 0 var(--spacing-sm);
        background: var(--color-layer-level-2);
        border: none;
        border-radius: var(--border-radius-md);
        cursor: pointer;
        transition: background-color var(--duration-normal) var(--easing-ease-out);
        flex: 0 1 auto;
      }
      
      .subnav-action-btn:hover {
        background-color: var(--color-interactive-secondary-hover);
      }
      
      .subnav-action-btn[data-action="search"] {
        flex: 1 1 auto;
        min-width: 36px;
        justify-content: center;
      }
      
      .subnav-action-icon {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }
      
      .subnav-action-new .subnav-action-icon {
        filter: brightness(0) saturate(100%) invert(30%) sepia(98%) saturate(1642%) hue-rotate(187deg) brightness(94%) contrast(101%);
      }
      
      .subnav-action-label {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-sm);
        color: var(--color-on-layer-primary);
        font-variant-numeric: slashed-zero;
        font-feature-settings: 'ss04' on, 'cv05' on, 'cv08' on, 'liga' off, 'clig' off;
      }
    `;
    
    if (!document.querySelector('#subnav-action-btn-styles')) {
      style.id = 'subnav-action-btn-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('sub-nav-action-button', SubNavActionButton);

