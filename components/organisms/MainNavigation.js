/**
 * MainNavigation - Organism Component
 * 
 * Complete main navigation with all items, routing, and state management
 * Used on every page - truly shared component
 * 
 * Features:
 * - Icon hover/selection states
 * - Click navigates to section HTML files
 * - Logo click returns to index.html
 * - Highlight current section based on URL
 * - Open/close state management
 * 
 * Attributes:
 * - current-section: Current section ID (e.g., "unified-analytics")
 */

class MainNavigation extends HTMLElement {
  connectedCallback() {
    const currentSection = this.getAttribute('current-section') || '';
    
    this.innerHTML = `
      <nav class="main-navigation" data-name="main-navigation">
        <!-- Logo -->
        <div class="nav-logo">
          <a href="index.html" class="nav-logo-link" id="nav-logo">
            <img src="assets/main-navigation/logo/Emplifi - menu close.svg" alt="Emplifi" class="nav-logo-icon" />
            <img src="assets/main-navigation/logo/Full logo menu open.svg" alt="emplifi" class="nav-logo-text" />
          </a>
        </div>
        
        <!-- Scroll Area with Apps -->
        <div class="nav-scroll-area">
          <div class="nav-apps">
            <!-- Command Center -->
            <a href="command-center.html" class="nav-item ${currentSection === 'command-center' ? 'is-selected' : ''}" data-section="command-center">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'command-center' ? 'isSelected' : 'normal'}/Home.svg" alt="Command Center" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">Command center</span>
            </a>
            
            <!-- Dashboard -->
            <a href="dashboard.html" class="nav-item ${currentSection === 'dashboard' ? 'is-selected' : ''}" data-section="dashboard">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'dashboard' ? 'isSelected' : 'normal'}/Dashboard.svg" alt="Dashboard" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">Dashboard</span>
            </a>
            
            <!-- Unified Analytics -->
            <a href="unified-analytics.html" class="nav-item ${currentSection === 'unified-analytics' ? 'is-selected' : ''}" data-section="unified-analytics">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'unified-analytics' ? 'isSelected' : 'normal'}/Unified Analytics.svg" alt="Unified Analytics" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">Unified Analytics</span>
            </a>
            
            <!-- Publisher -->
            <a href="publisher.html" class="nav-item ${currentSection === 'publisher' ? 'is-selected' : ''}" data-section="publisher">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'publisher' ? 'isSelected' : 'normal'}/Publisher.svg" alt="Publisher" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">Publisher</span>
            </a>
            
            <!-- Community -->
            <a href="community.html" class="nav-item ${currentSection === 'community' ? 'is-selected' : ''}" data-section="community">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'community' ? 'isSelected' : 'normal'}/Community.svg" alt="Community" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">Community</span>
            </a>
            
            <!-- Care -->
            <a href="care.html" class="nav-item ${currentSection === 'care' ? 'is-selected' : ''}" data-section="care">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'care' ? 'isSelected' : 'normal'}/Care.svg" alt="Care" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">Care</span>
            </a>
            
            <!-- Content -->
            <a href="content.html" class="nav-item ${currentSection === 'content' ? 'is-selected' : ''}" data-section="content">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'content' ? 'isSelected' : 'normal'}/Content.svg" alt="Content" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">Content</span>
            </a>
            
            <!-- UGC -->
            <a href="ugc.html" class="nav-item ${currentSection === 'ugc' ? 'is-selected' : ''}" data-section="ugc">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'ugc' ? 'isSelected' : 'normal'}/User Generated Content.svg" alt="UGC" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">UCG</span>
            </a>
            
            <!-- Bot -->
            <a href="bot.html" class="nav-item ${currentSection === 'bot' ? 'is-selected' : ''}" data-section="bot">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'bot' ? 'isSelected' : 'normal'}/Bot.svg" alt="Bot" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">Bot</span>
            </a>
            
            <!-- Rating & Reviews -->
            <a href="ratings-reviews.html" class="nav-item ${currentSection === 'ratings-reviews' ? 'is-selected' : ''}" data-section="ratings-reviews">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'ratings-reviews' ? 'isSelected' : 'normal'}/Rating & Reviews.svg" alt="Rating & Reviews" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">Rating & Reviews</span>
            </a>
          </div>
          
          <!-- Bottom Navigation Items -->
          <div class="nav-bottom-items">
            <!-- Help & Support -->
            <a href="help-support.html" class="nav-item ${currentSection === 'help-support' ? 'is-selected' : ''}" data-section="help-support">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'help-support' ? 'isSelected' : 'normal'}/Help.svg" alt="Help & Support" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">Help & Support</span>
            </a>
            
            <!-- Settings -->
            <a href="settings.html" class="nav-item ${currentSection === 'settings' ? 'is-selected' : ''}" data-section="settings">
              <span class="nav-item-icon">
                <img src="assets/main-navigation/icons/${currentSection === 'settings' ? 'isSelected' : 'normal'}/Settings.svg" alt="Settings" class="nav-icon-img" />
              </span>
              <span class="nav-item-label">Settings</span>
            </a>
            
            <!-- User Profile -->
            <div class="nav-user-profile">
              <img src="assets/shared/9ce1b58aecd4ef61664409fcdd66adf48254ccb2.png" alt="User" class="nav-user-avatar" />
              <div class="nav-user-info">
                <span class="nav-user-id">41</span>
                <span class="nav-user-name">Jan Čermák</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    `;
    
    // Add styles
    this.addStyles();
    
    // Add hover interactions
    this.addHoverInteractions();
  }
  
  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .main-navigation {
        position: fixed;
        top: 0;
        left: 0;
        width: var(--main-nav-width);
        height: 100vh;
        background: var(--color-surface-primary);
        display: flex;
        flex-direction: column;
        transition: width var(--duration-slow) var(--easing-ease-out);
        z-index: var(--z-index-fixed);
        overflow: hidden;
      }
      
      .main-navigation:hover {
        width: var(--main-nav-width-open);
      }
      
      .nav-logo {
        padding: var(--spacing-sm);
        margin-bottom: var(--spacing-sm);
        flex-shrink: 0;
      }
      
      .nav-logo-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        width: 100%;
        height: 36px;
      }
      
      .nav-logo-icon {
        width: 36px;
        height: 36px;
        display: block;
      }
      
      .nav-logo-text {
        width: 116px;
        height: 36px;
        display: none;
      }
      
      .main-navigation:hover .nav-logo-icon {
        display: none;
      }
      
      .main-navigation:hover .nav-logo-text {
        display: block;
      }
      
      .nav-scroll-area {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
      }
      
      .nav-apps {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-nav-gap);
        padding: 0 var(--spacing-nav-padding);
      }
      
      .nav-bottom-items {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-nav-gap);
        padding: var(--spacing-sm) var(--spacing-nav-padding);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .nav-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        padding: var(--spacing-nav-padding);
        text-decoration: none;
        color: var(--color-on-layer-tertiary);
        border-radius: var(--border-radius-md);
        transition: background-color var(--duration-normal) var(--easing-ease-out);
        cursor: pointer;
        min-height: 48px;
      }
      
      .nav-item:hover {
        background-color: var(--color-surface-hover);
      }
      
      .nav-item.is-selected {
        background-color: var(--color-surface-hover);
        color: var(--color-on-layer-inverse);
      }
      
      .nav-item-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        flex-shrink: 0;
      }
      
      .nav-icon-img {
        width: 24px;
        height: 24px;
        display: block;
      }
      
      .nav-item-label {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-xs);
        letter-spacing: var(--letter-spacing-wide);
        text-transform: uppercase;
        font-variant-numeric: slashed-zero;
        font-feature-settings: 'ss04' on, 'cv05' on, 'cv08' on, 'liga' off, 'clig' off;
        white-space: nowrap;
        opacity: 0;
        transition: opacity var(--duration-normal) var(--easing-ease-out);
      }
      
      .main-navigation:hover .nav-item-label {
        opacity: 1;
      }
      
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
        opacity: 0;
        transition: opacity var(--duration-normal) var(--easing-ease-out);
      }
      
      .main-navigation:hover .nav-user-info {
        opacity: 1;
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
    
    if (!document.querySelector('#main-navigation-styles')) {
      style.id = 'main-navigation-styles';
      document.head.appendChild(style);
    }
  }
  
  addHoverInteractions() {
    const items = this.querySelectorAll('.nav-item:not(.is-selected)');
    
    items.forEach(item => {
      const section = item.getAttribute('data-section');
      const img = item.querySelector('.nav-icon-img');
      
      if (!img || !section) return;
      
      const iconBase = `assets/main-navigation/icons/`;
      let iconName = '';
      
      // Map section to icon filename
      const iconMap = {
        'command-center': 'Home',
        'dashboard': 'Dashboard',
        'unified-analytics': 'Unified Analytics',
        'publisher': 'Publisher',
        'community': 'Community',
        'care': 'Care',
        'content': 'Content',
        'ugc': 'User Generated Content',
        'bot': 'Bot',
        'ratings-reviews': 'Rating & Reviews',
        'help-support': 'Help',
        'settings': 'Settings'
      };
      
      iconName = iconMap[section];
      
      if (iconName) {
        item.addEventListener('mouseenter', () => {
          img.src = `${iconBase}hover/${iconName}.svg`;
        });
        
        item.addEventListener('mouseleave', () => {
          img.src = `${iconBase}normal/${iconName}.svg`;
        });
      }
    });
  }
}

customElements.define('main-navigation', MainNavigation);

