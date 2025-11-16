/**
 * HeaderContainer - Organism Component
 * 
 * Header structure + behavior
 * Reused by all 12 sections with different configs
 * 
 * Attributes:
 * - section-name: Section ID to load config
 * 
 * Features:
 * - Responsive visibility (1560px breakpoint)
 * - Fullscreen toggle logic
 * - Sub-nav toggle
 * 
 * Example:
 * <header-container section-name="unified-analytics"></header-container>
 */

import { sections } from '../../config/sections.js';

class HeaderContainer extends HTMLElement {
  async connectedCallback() {
    const sectionName = this.getAttribute('section-name') || 'unified-analytics';
    const config = sections[sectionName]?.header || {};
    
    const {
      showMenu = true,
      showSearch = true,
      showDivider = true,
      showFullscreen = true,
      defaultTitle = 'Home'
    } = config;
    
    this.innerHTML = `
      <header class="header" data-name="header">
        <div class="header-left">
          ${showMenu ? `
            <button class="header-btn header-toggle-subnav" aria-label="Toggle sub-navigation">
              <img src="assets/header-unified-analytics/icons/Menu hamburger.svg" alt="Menu" />
            </button>
          ` : ''}
          ${showSearch ? `
            <button class="header-btn header-search-btn" aria-label="Search">
              <img src="assets/header-unified-analytics/icons/Search.svg" alt="Search" />
            </button>
          ` : ''}
          ${showDivider ? '<div class="header-divider"></div>' : ''}
          <h1 class="header-title">${defaultTitle}</h1>
        </div>
        <div class="header-right">
          ${showFullscreen ? `
            <button class="header-btn header-fullscreen-btn" aria-label="Fullscreen">
              <img src="assets/header-unified-analytics/icons/Maximize, Fullscreen.svg" alt="Fullscreen" />
            </button>
          ` : ''}
        </div>
      </header>
    `;
    
    this.addStyles();
    this.addInteractions();
  }
  
  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .header {
        position: fixed;
        top: 0;
        left: calc(var(--main-nav-width) + var(--sub-nav-width));
        right: 0;
        height: var(--header-height);
        background: var(--color-layer-level-0);
        border-bottom: 1px solid var(--color-border-primary);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 var(--spacing-header-padding-default);
        z-index: var(--z-index-sticky);
        transition: left var(--duration-slow) var(--easing-ease-out);
      }
      
      @media (min-width: 1560px) {
        .header {
          padding: 0 var(--spacing-header-padding-large);
        }
      }
      
      .header-left,
      .header-right {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
      }
      
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
      
      .header-divider {
        width: 1px;
        height: 24px;
        background: var(--color-border-primary);
        margin-right: var(--spacing-xs);
        flex-shrink: 0;
      }
      
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
      
      /* When sub-nav is closed */
      body.subnav-closed .header {
        left: var(--main-nav-width);
      }
      
      /* When main nav is hidden (fullscreen) */
      body.mainnav-hidden .header {
        left: var(--sub-nav-width);
      }
      
      /* When both are hidden */
      body.mainnav-hidden.subnav-closed .header {
        left: 0;
      }
      
      /* Responsive button visibility */
      @media (max-width: 1559px) {
        body:not(.subnav-closed) .header-toggle-subnav,
        body:not(.subnav-closed) .header-search-btn,
        body:not(.subnav-closed) .header-divider {
          display: none;
        }
      }
    `;
    
    if (!document.querySelector('#header-container-styles')) {
      style.id = 'header-container-styles';
      document.head.appendChild(style);
    }
  }
  
  addInteractions() {
    // Sub-nav toggle
    const toggleBtn = this.querySelector('.header-toggle-subnav');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('subnav-closed');
      });
    }
    
    // Fullscreen toggle
    const fullscreenBtn = this.querySelector('.header-fullscreen-btn');
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', () => {
        const isHidden = document.body.classList.toggle('mainnav-hidden');
        const img = fullscreenBtn.querySelector('img');
        if (img) {
          img.src = isHidden 
            ? 'assets/header-unified-analytics/icons/Minimize- fulsscreen.svg'
            : 'assets/header-unified-analytics/icons/Maximize, Fullscreen.svg';
        }
      });
    }
  }
}

customElements.define('header-container', HeaderContainer);

