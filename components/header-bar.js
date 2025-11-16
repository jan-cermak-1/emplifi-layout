/**
 * Header Bar Component
 * 
 * A reusable web component for the main header bar.
 * - For 'unified-analytics': Full implementation with all buttons
 * - For other sections: Placeholder with section name and basic buttons
 * 
 * Usage: <header-bar section="unified-analytics"></header-bar>
 */

import { sectionsConfig } from '../data/sections-config.js';

class HeaderBar extends HTMLElement {
    constructor() {
        super();
        this.isFullscreen = false;
    }

    connectedCallback() {
        const sectionId = this.getAttribute('section');
        const section = sectionsConfig[sectionId];
        
        if (!section) {
            console.error(`Section '${sectionId}' not found in configuration`);
            return;
        }

        this.render(section);
        this.attachEventListeners();
    }

    render(section) {
        if (section.id === 'unified-analytics') {
            this.renderUnifiedAnalytics(section);
        } else {
            this.renderPlaceholder(section);
        }
    }

    /**
     * Renders the full Unified Analytics header
     */
    renderUnifiedAnalytics(section) {
        this.innerHTML = `
            <div class="header-left">
                <button class="header-btn header-toggle-subnav" aria-label="Open sub-navigation">
                    <img src="assets/una/header/Menu hamburger.svg" alt="Menu" />
                </button>
                <button class="header-btn header-search-btn" aria-label="Search">
                    <img src="assets/una/header/Search.svg" alt="Search" />
                </button>
                <div class="header-divider"></div>
                <h1 class="header-title">Home</h1>
            </div>
            <div class="header-right">
                <button class="header-btn header-fullscreen-btn" aria-label="Fullscreen">
                    <img src="assets/una/header/Maximize, Fullscreen.svg" alt="Fullscreen" />
                </button>
            </div>
        `;
    }

    /**
     * Renders a placeholder header for sections without full implementation
     */
    renderPlaceholder(section) {
        const menuIcon = section.assets?.header?.menuIcon || 'assets/main-navigation/logo/Emplifi - menu close.svg';
        const fullscreenIcon = section.assets?.header?.fullscreenIcon || 'assets/main-navigation/logo/Emplifi - menu close.svg';
        
        this.innerHTML = `
            <div class="header-left">
                <button class="header-btn header-toggle-subnav" aria-label="Open sub-navigation">
                    <img src="${menuIcon}" alt="Menu" />
                </button>
                <div class="header-divider"></div>
                <h1 class="header-title">${section.name}</h1>
            </div>
            <div class="header-right">
                <button class="header-btn header-fullscreen-btn" aria-label="Fullscreen">
                    <img src="${fullscreenIcon}" alt="Fullscreen" />
                </button>
            </div>
        `;
    }

    /**
     * Attaches event listeners
     */
    attachEventListeners() {
        // Toggle sub-navigation button
        const toggleSubNavBtn = this.querySelector('.header-toggle-subnav');
        if (toggleSubNavBtn) {
            toggleSubNavBtn.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('toggle-sub-nav'));
            });
        }

        // Fullscreen button
        const fullscreenBtn = this.querySelector('.header-fullscreen-btn');
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                this.toggleFullscreen();
            });
        }

        // Listen for sub-nav state changes to adjust header position
        document.addEventListener('sub-nav-state-changed', (e) => {
            if (e.detail.isClosed) {
                this.classList.add('subnav-closed');
            } else {
                this.classList.remove('subnav-closed');
            }
        });

        // Listen for main nav state changes
        document.addEventListener('main-nav-state-changed', (e) => {
            if (e.detail.isHidden) {
                this.classList.add('mainnav-hidden');
            } else {
                this.classList.remove('mainnav-hidden');
            }
        });
    }

    /**
     * Toggles fullscreen mode (hides/shows main navigation)
     */
    toggleFullscreen() {
        this.isFullscreen = !this.isFullscreen;
        
        const fullscreenBtn = this.querySelector('.header-fullscreen-btn');
        const img = fullscreenBtn?.querySelector('img');
        const section = sectionsConfig[this.getAttribute('section')];
        
        if (this.isFullscreen) {
            // Switch to minimize icon
            if (img && section) {
                const minimizeIcon = section.assets?.header?.minimizeIcon || 'assets/main-navigation/logo/Emplifi - menu close.svg';
                img.src = minimizeIcon;
            }
            fullscreenBtn?.setAttribute('aria-label', 'Exit fullscreen');
        } else {
            // Switch to maximize icon
            if (img && section) {
                const fullscreenIcon = section.assets?.header?.fullscreenIcon || 'assets/main-navigation/logo/Emplifi - menu close.svg';
                img.src = fullscreenIcon;
            }
            fullscreenBtn?.setAttribute('aria-label', 'Fullscreen');
        }

        // Dispatch event to toggle main nav
        document.dispatchEvent(new CustomEvent('toggle-main-nav'));
    }
}

// Register the custom element
customElements.define('header-bar', HeaderBar);

