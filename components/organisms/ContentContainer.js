/**
 * ContentContainer - Organism Component
 * 
 * Simple content area wrapper
 * Reused by all 12 sections
 * 
 * Attributes:
 * - section-name: Section ID for future customization
 * 
 * Example:
 * <content-container section-name="unified-analytics"></content-container>
 */

class ContentContainer extends HTMLElement {
  connectedCallback() {
    const sectionName = this.getAttribute('section-name') || '';
    
    this.innerHTML = `
      <main class="content" data-name="content" data-section="${sectionName}">
        ${this.innerHTML || '<!-- Main content will be added here -->'}
      </main>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .content {
        margin-left: calc(var(--main-nav-width) + var(--sub-nav-width));
        margin-top: var(--header-height);
        padding: var(--spacing-content-padding-default);
        min-height: calc(100vh - var(--header-height));
        background: var(--color-layer-level-0);
        transition: margin-left var(--duration-slow) var(--easing-ease-out);
      }
      
      @media (min-width: 1560px) {
        .content {
          padding: var(--spacing-content-padding-large);
        }
      }
      
      /* When sub-nav is closed */
      body.subnav-closed .content {
        margin-left: var(--main-nav-width);
      }
      
      /* When main nav is hidden (fullscreen) */
      body.mainnav-hidden .content {
        margin-left: var(--sub-nav-width);
      }
      
      /* When both are hidden */
      body.mainnav-hidden.subnav-closed .content {
        margin-left: 0;
      }
    `;
    
    if (!document.querySelector('#content-container-styles')) {
      style.id = 'content-container-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('content-container', ContentContainer);

