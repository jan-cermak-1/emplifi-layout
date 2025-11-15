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
            this.setupEventListeners();
            this.detectBreakpoint();
            console.log('Emplifi Layout initialized');
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
                
                // Navigation items click handlers
                const navItems = this.elements.mainNav.querySelectorAll('.nav-item');
                navItems.forEach(item => {
                    item.addEventListener('click', (e) => {
                        this.handleNavItemClick(e, item);
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
            
            // Remove is-selected from all items
            const allItems = this.elements.mainNav.querySelectorAll('.nav-item');
            allItems.forEach(i => i.classList.remove('is-selected'));
            
            // Add is-selected to clicked item
            item.classList.add('is-selected');
            this.state.selectedSection = section;
            
            console.log(`Navigated to section: ${section}`);
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

