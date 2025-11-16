/**
 * Main Navigation Component
 * 
 * A reusable web component for the main platform navigation.
 * - Displays all 12 sections from sectionsConfig
 * - Handles navigation between pages
 * - Manages open/closed state
 * - Highlights active section based on current URL
 * 
 * Usage: <main-navigation></main-navigation>
 */

import { sectionsConfig, getCurrentSection } from '../data/sections-config.js';

class MainNavigation extends HTMLElement {
    constructor() {
        super();
        this.isOpen = false;
    }

    connectedCallback() {
        this.render();
        this.attachEventListeners();
        this.updateActiveState();
    }

    render() {
        const currentSection = getCurrentSection();
        const sections = Object.values(sectionsConfig);
        
        // Split sections into apps (first 10) and bottom items (last 2)
        const appSections = sections.slice(0, 10);
        const bottomSections = sections.slice(10);

        this.innerHTML = `
            <!-- Logo -->
            <div class="nav-logo">
                <a href="index.html" class="nav-logo-link" id="nav-logo-reload">
                    <img src="assets/main-navigation/logo/Emplifi - menu close.svg" alt="Emplifi" class="nav-logo-icon" />
                    <img src="assets/main-navigation/logo/Full logo menu open.svg" alt="emplifi" class="nav-logo-text" />
                </a>
            </div>
            
            <!-- Scroll Area with Apps -->
            <div class="nav-scroll-area">
                <div class="nav-apps">
                    ${appSections.map(section => this.renderNavItem(section)).join('')}
                </div>
            </div>
            
            <!-- Bottom Part -->
            <div class="nav-bottom">
                <div class="nav-general">
                    ${bottomSections.map(section => this.renderNavItem(section)).join('')}
                    
                    <!-- User Profile -->
                    <div class="nav-item nav-user" data-section="user">
                        <div class="nav-avatar">
                            <img src="assets/shared/user-avatar.png" alt="User" />
                            <span class="nav-notifications">41</span>
                        </div>
                        <span class="nav-label">Jan Čermák</span>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Renders a single navigation item
     */
    renderNavItem(section) {
        const isActive = getCurrentSection()?.id === section.id;
        const activeClass = isActive ? 'is-selected' : '';
        
        return `
            <button class="nav-item ${activeClass}" 
                    data-section="${section.id}"
                    data-icon-default="${section.icons.normal}"
                    data-icon-hover="${section.icons.hover}"
                    data-icon-selected="${section.icons.selected}">
                <span class="nav-icon">
                    <img src="${isActive ? section.icons.selected : section.icons.normal}" alt="${section.name}" />
                </span>
                <span class="nav-label">${section.name}</span>
            </button>
        `;
    }

    /**
     * Attaches event listeners to navigation items
     */
    attachEventListeners() {
        // Navigation item clicks
        this.querySelectorAll('.nav-item[data-section]').forEach(item => {
            const sectionId = item.dataset.section;
            const section = sectionsConfig[sectionId];
            
            if (section && sectionId !== 'user') {
                item.addEventListener('click', () => {
                    window.location.href = section.url;
                });
            }

            // Hover effects for icons
            if (sectionId !== 'user') {
                item.addEventListener('mouseenter', () => {
                    if (!item.classList.contains('is-selected')) {
                        const img = item.querySelector('.nav-icon img');
                        img.src = item.dataset.iconHover;
                    }
                });

                item.addEventListener('mouseleave', () => {
                    if (!item.classList.contains('is-selected')) {
                        const img = item.querySelector('.nav-icon img');
                        img.src = item.dataset.iconDefault;
                    }
                });
            }
        });

        // Logo click - go to index
        const logoLink = this.querySelector('#nav-logo-reload');
        if (logoLink) {
            logoLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'index.html';
            });
        }

        // Listen for main nav toggle events from header
        document.addEventListener('toggle-main-nav', () => {
            this.classList.toggle('mainnav-hidden');
            
            // Dispatch event for other components to adjust
            const isHidden = this.classList.contains('mainnav-hidden');
            document.dispatchEvent(new CustomEvent('main-nav-state-changed', {
                detail: { isHidden }
            }));
        });
    }

    /**
     * Updates active state based on current URL
     */
    updateActiveState() {
        const currentSection = getCurrentSection();
        
        this.querySelectorAll('.nav-item[data-section]').forEach(item => {
            const sectionId = item.dataset.section;
            const isActive = currentSection?.id === sectionId;
            
            if (isActive) {
                item.classList.add('is-selected');
                const img = item.querySelector('.nav-icon img');
                if (img) {
                    img.src = item.dataset.iconSelected;
                }
            } else {
                item.classList.remove('is-selected');
            }
        });
    }
}

// Register the custom element
customElements.define('main-navigation', MainNavigation);

