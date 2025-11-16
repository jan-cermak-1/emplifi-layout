/**
 * SubNavigationContainer - Organism Component
 * 
 * Sub-navigation structure + behavior
 * Reused by all 12 sections with different configs
 * 
 * Attributes:
 * - section-name: Section ID to load config
 * 
 * Features:
 * - Fixed header + scrollable content
 * - Collapse/expand functionality
 * - Search/New buttons
 * - Items with expandable chevron hover
 * - Sections with titles
 * - Placeholder mode ("Coming soon")
 * 
 * Example:
 * <sub-navigation-container section-name="unified-analytics"></sub-navigation-container>
 */

import { sections } from '../../config/sections.js';

class SubNavigationContainer extends HTMLElement {
  async connectedCallback() {
    const sectionName = this.getAttribute('section-name') || 'unified-analytics';
    const sectionConfig = sections[sectionName] || {};
    const config = sectionConfig.subNav || {};
    
    const sectionTitle = sectionConfig.name || 'Section';
    const isPlaceholder = config.placeholder === true;
    
    this.innerHTML = `
      <aside class="sub-navigation" data-name="sub-navigation">
        <div class="subnav-header">
          <h1 class="subnav-title">${sectionTitle}</h1>
          <button class="subnav-collapse-btn" aria-label="Close sub-navigation">
            <img src="assets/sub-navigation-unified-analytics/icons/Menu close.svg" alt="Close" class="subnav-collapse-icon" />
          </button>
        </div>
        <div class="subnav-content">
          ${isPlaceholder ? this.renderPlaceholder() : this.renderContent(config)}
        </div>
      </aside>
    `;
    
    this.addStyles();
    this.addInteractions();
  }
  
  renderPlaceholder() {
    return `
      <div class="subnav-placeholder">
        <p>Coming soon</p>
      </div>
    `;
  }
  
  renderContent(config) {
    const { showSearch, showNew, items = [], sections: configSections = [] } = config;
    
    let html = '';
    
    // Action buttons (Search/New)
    if (showSearch || showNew) {
      html += '<div class="subnav-actions">';
      
      if (showSearch) {
        html += `
          <button class="subnav-action-btn" data-action="search">
            <img src="assets/sub-navigation-unified-analytics/icons/search.svg" alt="Search" class="subnav-action-icon" />
            <span class="subnav-action-label">Search...</span>
          </button>
        `;
      }
      
      if (showNew) {
        html += `
          <button class="subnav-action-btn subnav-action-new" data-action="new">
            <img src="assets/sub-navigation-unified-analytics/icons/plus.svg" alt="New" class="subnav-action-icon" />
            <span class="subnav-action-label">New</span>
          </button>
        `;
      }
      
      html += '</div>';
    }
    
    // Main items (if any)
    if (items.length > 0) {
      html += '<div class="subnav-section subnav-section--main"><nav class="subnav-items">';
      
      items.forEach(item => {
        const activeClass = item.active ? 'is-active' : '';
        html += `
          <button class="subnav-item ${activeClass}" data-page="${item.page}">
            <img src="${item.icon}" alt="${item.label}" class="subnav-item-icon" />
            <span class="subnav-item-label">${item.label}</span>
          </button>
        `;
      });
      
      html += '</nav></div>';
    }
    
    // Sections (Early Access, Discover, etc.)
    configSections.forEach(section => {
      html += '<div class="subnav-section">';
      html += `<div class="subnav-section-header">`;
      html += `<span class="subnav-section-title ${section.titleColor === 'blue' ? 'subnav-section-title--blue' : ''}">${section.title}</span>`;
      html += '</div>';
      html += '<nav class="subnav-items">';
      
      section.items.forEach(item => {
        const expandableClass = item.expandable ? 'subnav-item-expandable' : '';
        const chevron = item.expandable 
          ? '<img src="assets/sub-navigation-unified-analytics/icons/Chevron down.svg" alt="" class="subnav-item-chevron" />'
          : '';
        
        html += `
          <button class="subnav-item ${expandableClass}" data-page="${item.page}">
            <img src="${item.icon}" alt="${item.label}" class="subnav-item-icon" />
            <span class="subnav-item-label">${item.label}</span>
            ${chevron}
          </button>
        `;
      });
      
      html += '</nav></div>';
    });
    
    return html;
  }
  
  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .sub-navigation {
        position: fixed;
        top: 0;
        left: var(--main-nav-width);
        width: var(--sub-nav-width);
        height: 100vh;
        background: var(--color-layer-level-1);
        border-right: 1px solid var(--color-border-primary);
        display: flex;
        flex-direction: column;
        z-index: var(--z-index-fixed);
        transition: transform var(--duration-slow) var(--easing-ease-out);
        overflow: hidden;
      }
      
      body.subnav-closed .sub-navigation {
        transform: translateX(calc(-100% - var(--main-nav-width)));
      }
      
      body.mainnav-hidden .sub-navigation {
        left: 0;
      }
      
      .subnav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        padding: 0 var(--spacing-lg) 0 var(--spacing-md);
        background: var(--color-layer-level-1);
        flex-shrink: 0;
        position: relative;
        z-index: 1;
      }
      
      .subnav-title {
        margin: 0;
        font-family: var(--font-family-primary);
        font-size: var(--font-size-2xl);
        font-weight: var(--font-weight-medium);
        line-height: var(--line-height-lg);
        color: var(--color-on-layer-primary);
      }
      
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
      
      .subnav-content {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        min-height: 0;
      }
      
      .subnav-placeholder {
        padding: var(--spacing-lg);
        text-align: center;
        color: var(--color-on-layer-secondary);
      }
      
      .subnav-actions {
        display: flex;
        gap: var(--spacing-xs);
        padding: 0 var(--spacing-xs) var(--spacing-sm) var(--spacing-xs);
        margin-top: var(--spacing-sm);
      }
      
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
      
      .subnav-section {
        display: flex;
        flex-direction: column;
        gap: 0;
        margin-top: var(--spacing-md);
        padding-top: var(--spacing-md);
        border-top: 1px solid var(--color-border-primary);
        margin-left: var(--spacing-xs);
        margin-right: var(--spacing-xs);
      }
      
      .subnav-section--main {
        margin-top: 0;
        padding-top: 0;
        border-top: none;
      }
      
      .subnav-section-header {
        padding: 0 var(--spacing-md) var(--spacing-sm) var(--spacing-sm);
        margin-bottom: 0;
      }
      
      .subnav-section-title {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-xs);
        letter-spacing: var(--letter-spacing-wide);
        text-transform: uppercase;
        color: rgb(80, 80, 87);
      }
      
      .subnav-section-title--blue {
        color: rgb(8, 115, 156);
      }
      
      .subnav-items {
        display: flex;
        flex-direction: column;
        gap: 0;
        padding: 0;
      }
      
      .subnav-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        height: 36px;
        padding: 0 var(--spacing-sm);
        background: transparent;
        border: none;
        border-radius: var(--border-radius-md);
        text-decoration: none;
        cursor: pointer;
        transition: background-color var(--duration-normal) var(--easing-ease-out);
        text-align: left;
        width: 100%;
        position: relative;
      }
      
      .subnav-item:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
      
      .subnav-item.is-active {
        background-color: var(--color-interactive-secondary);
      }
      
      .subnav-item-expandable {
        padding-right: 36px;
      }
      
      .subnav-item-icon {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }
      
      .subnav-item-label {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-sm);
        letter-spacing: var(--letter-spacing-normal);
        color: var(--color-on-layer-primary);
        font-variant-numeric: slashed-zero;
        font-feature-settings: 'ss04' on, 'cv05' on, 'cv08' on, 'liga' off, 'clig' off;
      }
      
      .subnav-item-chevron {
        width: 18px;
        height: 18px;
        position: absolute;
        right: 15px;
        opacity: 0.5;
        transition: opacity var(--duration-normal) var(--easing-ease-out);
      }
      
      .subnav-item:hover .subnav-item-chevron {
        opacity: 1;
      }
    `;
    
    if (!document.querySelector('#sub-navigation-container-styles')) {
      style.id = 'sub-navigation-container-styles';
      document.head.appendChild(style);
    }
  }
  
  addInteractions() {
    // Collapse button
    const collapseBtn = this.querySelector('.subnav-collapse-btn');
    if (collapseBtn) {
      collapseBtn.addEventListener('click', () => {
        document.body.classList.add('subnav-closed');
      });
    }
  }
}

customElements.define('sub-navigation-container', SubNavigationContainer);

