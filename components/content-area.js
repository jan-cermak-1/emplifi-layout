/**
 * Content Area Component
 * 
 * A reusable web component for the main content area.
 * - Displays placeholder content for all sections
 * - Adjusts margins based on navigation states
 * 
 * Usage: <content-area section="unified-analytics"></content-area>
 */

import { sectionsConfig } from '../data/sections-config.js';

class ContentArea extends HTMLElement {
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
        // Check if there's slotted content
        const hasSlottedContent = this.children.length > 0;
        
        if (!hasSlottedContent) {
            this.innerHTML = `
                <div class="content-placeholder">
                    <h2>Content for ${section.name}</h2>
                    <p>This section is coming soon.</p>
                    ${section.status === 'complete' ? '<p class="content-status">✓ Layout Complete</p>' : ''}
                </div>
            `;
        }
        // If there's slotted content, leave it as is
    }

    /**
     * Attaches event listeners for navigation state changes
     */
    attachEventListeners() {
        // Listen for sub-nav state changes to adjust margins
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
}

// Register the custom element
customElements.define('content-area', ContentArea);

