/**
 * HeaderTitle - Molecular Component
 * Page title in header (Figma "Headline 2")
 */

class HeaderTitle extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title');
    
    this.innerHTML = `
      <h1 class="header-title">${title}</h1>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .header-title {
        margin: 0;
        font-family: var(--font-family-primary);
        font-size: var(--font-size-3xl);
        font-weight: var(--font-weight-medium);
        line-height: var(--line-height-xl);
        letter-spacing: var(--letter-spacing-tight);
        color: var(--color-on-layer-primary);
        font-variant-numeric: slashed-zero;
        font-feature-settings: 'ss04' on, 'cv05' on, 'cv08' on, 'liga' off, 'clig' off;
      }
    `;
    
    if (!document.querySelector('#header-title-styles')) {
      style.id = 'header-title-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('header-title', HeaderTitle);

