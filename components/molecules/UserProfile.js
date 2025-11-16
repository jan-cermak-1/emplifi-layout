/**
 * UserProfile - Molecular Component
 * User profile widget (avatar + ID + name)
 */

class UserProfile extends HTMLElement {
  connectedCallback() {
    const avatar = this.getAttribute('avatar');
    const userId = this.getAttribute('user-id');
    const userName = this.getAttribute('user-name');
    
    this.innerHTML = `
      <div class="nav-user-profile">
        <img src="${avatar}" alt="User" class="nav-user-avatar" />
        <div class="nav-user-info">
          <span class="nav-user-id">${userId}</span>
          <span class="nav-user-name">${userName}</span>
        </div>
      </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .nav-user-profile {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        padding: var(--spacing-nav-padding);
        border-radius: var(--border-radius-md);
        cursor: pointer;
        transition: background-color var(--duration-normal) var(--easing-ease-out);
      }
      
      .nav-user-profile:hover {
        background-color: var(--color-surface-hover);
      }
      
      .nav-user-avatar {
        width: 36px;
        height: 36px;
        border-radius: var(--border-radius-full);
        flex-shrink: 0;
      }
      
      .nav-user-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }
      
      .nav-user-id {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-sm);
        color: var(--color-on-layer-inverse);
      }
      
      .nav-user-name {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-normal);
        line-height: var(--line-height-sm);
        color: var(--color-on-layer-tertiary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `;
    
    if (!document.querySelector('#user-profile-styles')) {
      style.id = 'user-profile-styles';
      document.head.appendChild(style);
    }
  }
}

customElements.define('user-profile', UserProfile);

