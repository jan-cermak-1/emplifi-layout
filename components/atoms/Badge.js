/**
 * Badge - Atomic Component
 * 
 * Status badge (Complete/Placeholder)
 * Used in: landing page
 * 
 * Attributes:
 * - status: Status type (complete, placeholder)
 * - text: Badge text content
 * 
 * Example:
 * <badge-el status="complete" text="Complete"></badge-el>
 */

class Badge extends HTMLElement {
  connectedCallback() {
    const status = this.getAttribute('status') || 'placeholder';
    const text = this.getAttribute('text') || this.textContent || '';
    
    this.innerHTML = `
      <span class="badge badge-${status}">${text}</span>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .badge {
        display: inline-block;
        padding: 4px 12px;
        border-radius: var(--border-radius-full);
        font-family: var(--font-family-primary);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        line-height: var(--line-height-sm);
      }
      
      .badge-complete {
        background: var(--color-feedback-success-bg);
        color: var(--color-feedback-success);
      }
      
      .badge-placeholder {
        background: var(--color-badge-gray-bg);
        color: var(--color-badge-gray);
      }
    `;
    
    if (!document.querySelector('#badge-styles')) {
      style.id = 'badge-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('badge-el', Badge);

