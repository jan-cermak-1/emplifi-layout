/**
 * Emplifi Layout - JavaScript Module
 * Vanilla JavaScript for interactive functionality
 * Soul Design System
 */

(function() {
    'use strict';
    
    // ========================================
    // Layout State Management
    // ========================================
    
    const LayoutManager = {
        // Layout elements
        elements: {
            mainNav: null,
            subNav: null,
            header: null,
            content: null
        },
        
        // State
        state: {
            mainNavOpen: false,
            subNavVisible: true,
            currentBreakpoint: null,
            selectedSection: null
        },
        
        /**
         * Initialize layout manager
         */
        init() {
            this.cacheElements();
            this.initializeNavIcons();
            this.setupEventListeners();
            this.detectBreakpoint();
            console.log('Emplifi Layout initialized');
        },
        
        /**
         * Initialize navigation icons to default state
         */
        initializeNavIcons() {
            if (this.elements.mainNav) {
                const navItems = this.elements.mainNav.querySelectorAll('.nav-item');
                navItems.forEach(item => {
                    this.updateNavIcon(item, 'default');
                });
            }
        },
        
        /**
         * Cache DOM elements
         */
        cacheElements() {
            this.elements.mainNav = document.querySelector('.main-navigation');
            this.elements.subNav = document.querySelector('.sub-navigation');
            this.elements.header = document.querySelector('.header');
            this.elements.content = document.querySelector('.content');
        },
        
        /**
         * Setup event listeners
         */
        setupEventListeners() {
            // Main navigation toggle on hover/click
            if (this.elements.mainNav) {
                this.elements.mainNav.addEventListener('mouseenter', () => {
                    this.toggleMainNav(true);
                });
                
                this.elements.mainNav.addEventListener('mouseleave', () => {
                    this.toggleMainNav(false);
                });
                
                // Navigation items click and hover handlers
                const navItems = this.elements.mainNav.querySelectorAll('.nav-item');
                navItems.forEach(item => {
                    // Click handler
                    item.addEventListener('click', (e) => {
                        this.handleNavItemClick(e, item);
                    });
                    
                    // Hover handlers for icon switching
                    item.addEventListener('mouseenter', (e) => {
                        this.handleNavItemHover(item, true);
                    });
                    
                    item.addEventListener('mouseleave', (e) => {
                        this.handleNavItemHover(item, false);
                    });
                });
            }
            
            // Sub-navigation expandable items - chevron hover effect
            if (this.elements.subNav) {
                const expandableItems = this.elements.subNav.querySelectorAll('.subnav-item-expandable');
                expandableItems.forEach(item => {
                    item.addEventListener('mousemove', (e) => {
                        this.handleChevronHover(e, item);
                    });
                    
                    item.addEventListener('mouseleave', (e) => {
                        item.classList.remove('chevron-hover');
                    });
                });
            }
            
            // Window resize handler with debounce
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    this.detectBreakpoint();
                }, 250);
            });
            
            // Keyboard shortcuts (optional - can be expanded)
            document.addEventListener('keydown', (e) => {
                this.handleKeyboardShortcuts(e);
            });
        },
        
        /**
         * Toggle main navigation open/closed
         */
        toggleMainNav(open) {
            this.state.mainNavOpen = open;
            
            if (this.elements.mainNav) {
                if (open) {
                    this.elements.mainNav.classList.add('is-open');
                } else {
                    this.elements.mainNav.classList.remove('is-open');
                }
            }
        },
        
        /**
         * Handle navigation item click
         */
        handleNavItemClick(event, item) {
            const section = item.getAttribute('data-section');
            
            // Remove is-selected from all items and reset their icons
            const allItems = this.elements.mainNav.querySelectorAll('.nav-item');
            allItems.forEach(i => {
                i.classList.remove('is-selected');
                this.updateNavIcon(i, 'default');
            });
            
            // Add is-selected to clicked item and update icon
            item.classList.add('is-selected');
            this.updateNavIcon(item, 'selected');
            this.state.selectedSection = section;
            
            console.log(`Navigated to section: ${section}`);
        },
        
        /**
         * Handle navigation item hover
         */
        handleNavItemHover(item, isHovering) {
            // Don't change icon if item is selected
            if (item.classList.contains('is-selected')) {
                return;
            }
            
            if (isHovering) {
                this.updateNavIcon(item, 'hover');
            } else {
                this.updateNavIcon(item, 'default');
            }
        },
        
        /**
         * Update navigation item icon
         */
        updateNavIcon(item, state) {
            const img = item.querySelector('.nav-icon img');
            if (!img) return;
            
            let iconSrc;
            switch(state) {
                case 'hover':
                    iconSrc = item.getAttribute('data-icon-hover');
                    break;
                case 'selected':
                    iconSrc = item.getAttribute('data-icon-selected');
                    break;
                case 'default':
                default:
                    iconSrc = item.getAttribute('data-icon-default');
                    break;
            }
            
            if (iconSrc) {
                img.src = iconSrc;
            }
        },
        
        /**
         * Handle chevron hover effect for expandable sub-nav items
         */
        handleChevronHover(event, item) {
            const rect = item.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const width = rect.width;
            
            // Check if mouse is in the right 36px area (chevron zone)
            if (x > width - 36) {
                item.classList.add('chevron-hover');
            } else {
                item.classList.remove('chevron-hover');
            }
        },
        
        /**
         * Detect current breakpoint (1560px)
         */
        detectBreakpoint() {
            const width = window.innerWidth;
            const breakpoint = width >= 1560 ? 'large' : 'medium';
            
            if (this.state.currentBreakpoint !== breakpoint) {
                this.state.currentBreakpoint = breakpoint;
                document.documentElement.setAttribute('data-breakpoint', breakpoint);
                this.onBreakpointChange(breakpoint);
            }
        },
        
        /**
         * Handle breakpoint changes
         */
        onBreakpointChange(breakpoint) {
            console.log(`Breakpoint changed to: ${breakpoint}`);
            // Custom logic for breakpoint changes can be added here
        },
        
        /**
         * Toggle sub navigation visibility
         */
        toggleSubNav() {
            this.state.subNavVisible = !this.state.subNavVisible;
            
            if (this.elements.subNav) {
                this.elements.subNav.classList.toggle('hidden', !this.state.subNavVisible);
                document.documentElement.setAttribute('data-subnav-visible', this.state.subNavVisible);
            }
        },
        
        /**
         * Handle keyboard shortcuts
         */
        handleKeyboardShortcuts(e) {
            // Example: Cmd/Ctrl + B to toggle sub navigation
            if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
                e.preventDefault();
                this.toggleSubNav();
            }
            
            // Add more shortcuts as needed
        },
        
        /**
         * Get current layout info (useful for debugging)
         */
        getLayoutInfo() {
            return {
                breakpoint: this.state.currentBreakpoint,
                subNavVisible: this.state.subNavVisible,
                viewportWidth: window.innerWidth,
                viewportHeight: window.innerHeight,
                contentPadding: getComputedStyle(document.documentElement)
                    .getPropertyValue('--content-padding')
            };
        }
    };
    
    // ========================================
    // Utility Functions
    // ========================================
    
    const Utils = {
        /**
         * Smooth scroll to element
         */
        smoothScrollTo(element, duration = 300) {
            if (!element) return;
            
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        },
        
        /**
         * Debounce function
         */
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },
        
        /**
         * Check if element is in viewport
         */
        isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    };
    
    // ========================================
    // Initialize on DOM ready
    // ========================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            LayoutManager.init();
        });
    } else {
        LayoutManager.init();
    }
    
    // ========================================
    // Expose to global scope (optional)
    // ========================================
    
    window.EmplifiLayout = {
        manager: LayoutManager,
        utils: Utils
    };
    
})();

