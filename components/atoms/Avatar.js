/**
 * Avatar - Atomic Component
 * 
 * User avatar image
 * Used in: main navigation (user profile)
 * 
 * Attributes:
 * - src: Path to avatar image
 * - alt: Alternative text
 * - size: Avatar size in px (default: 36)
 * 
 * Example:
 * <avatar-el src="assets/avatar.png" alt="User" size="36"></avatar-el>
 */

class Avatar extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute('src');
    const alt = this.getAttribute('alt') || 'User';
    const size = this.getAttribute('size') || '36';
    
    this.innerHTML = `
      <img src="${src}" alt="${alt}" class="avatar" style="width: ${size}px; height: ${size}px;" />
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .avatar {
        display: block;
        border-radius: var(--border-radius-full);
        object-fit: cover;
        flex-shrink: 0;
      }
    `;
    
    if (!document.querySelector('#avatar-styles')) {
      style.id = 'avatar-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('avatar-el', Avatar);

