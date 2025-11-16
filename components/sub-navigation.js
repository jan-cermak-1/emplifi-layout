/**
 * Sub Navigation Component
 * 
 * A reusable web component for section-specific sub-navigation.
 * - For 'unified-analytics': Full implementation with all items
 * - For other sections: Placeholder with header and close button
 * 
 * Usage: <sub-navigation section="unified-analytics"></sub-navigation>
 */

import { sectionsConfig } from '../data/sections-config.js';

class SubNavigation extends HTMLElement {
    constructor() {
        super();
        this.isClosed = false;
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
        } else if (section.id === 'publisher') {
            this.renderPublisher(section, 'calendar'); // default to calendar view
        } else {
            this.renderPlaceholder(section);
        }
        // Attach event listeners after rendering
        this.attachSubNavEventListeners();
    }

    /**
     * Renders the full Unified Analytics sub-navigation
     */
    renderUnifiedAnalytics(section) {
        this.innerHTML = `
            <!-- Section Title -->
            <div class="subnav-header">
                <h1 class="subnav-title">${section.name}</h1>
                <button class="subnav-collapse-btn" aria-label="Close sub-navigation">
                    <img src="assets/una/sub-navigation/Menu close.svg" alt="" class="subnav-collapse-icon" />
                </button>
            </div>
            
            <!-- Scrollable Content -->
            <div class="subnav-content">
                <!-- Top Actions -->
                <div class="subnav-actions">
                    <button class="subnav-action-btn" data-action="search">
                        <img src="assets/una/sub-navigation/search.svg" alt="Search" class="subnav-action-icon" />
                        <span class="subnav-action-label">Search...</span>
                    </button>
                    <button class="subnav-action-btn" data-action="new">
                        <img src="assets/una/sub-navigation/plus.svg" alt="New" class="subnav-action-icon" />
                        <span class="subnav-action-label">New</span>
                    </button>
                </div>
                
                <!-- Section: Main Items -->
                <div class="subnav-section subnav-section--main">
                    <nav class="subnav-items">
                        <button class="subnav-item is-active" data-page="home">
                            <img src="assets/una/sub-navigation/Overview.svg" alt="Home" class="subnav-item-icon" />
                            <span class="subnav-item-label">Home</span>
                        </button>
                        <button class="subnav-item" data-page="objectives">
                            <img src="assets/una/sub-navigation/Campaign objective.svg" alt="Objectives" class="subnav-item-icon" />
                            <span class="subnav-item-label">Objectives</span>
                        </button>
                    </nav>
                </div>
                
                <!-- Section: Early Access -->
                <div class="subnav-section">
                    <div class="subnav-section-header">
                        <span class="subnav-section-title subnav-section-title--early-access">Early Access</span>
                    </div>
                    <nav class="subnav-items">
                        <button class="subnav-item subnav-item-expandable" data-page="my-boards">
                            <img src="assets/una/sub-navigation/Dashboard.svg" alt="My boards" class="subnav-item-icon" />
                            <span class="subnav-item-label">My boards</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item subnav-item-expandable" data-page="shared">
                            <img src="assets/una/sub-navigation/Shared view.svg" alt="Shared with me" class="subnav-item-icon" />
                            <span class="subnav-item-label">Shared with me</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item" data-page="professional">
                            <img src="assets/una/sub-navigation/professional services.svg" alt="Professional services" class="subnav-item-icon" />
                            <span class="subnav-item-label">Professional services</span>
                        </button>
                    </nav>
                </div>
                
                <!-- Section: Discover -->
                <div class="subnav-section">
                    <div class="subnav-section-header">
                        <span class="subnav-section-title">Discover</span>
                    </div>
                    <nav class="subnav-items">
                        <button class="subnav-item subnav-item-expandable" data-page="social-profiles">
                            <img src="assets/una/sub-navigation/Profile.svg" alt="Social profiles" class="subnav-item-icon" />
                            <span class="subnav-item-label">Social profiles</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item subnav-item-expandable" data-page="paid">
                            <img src="assets/una/sub-navigation/Ad account.svg" alt="Paid" class="subnav-item-icon" />
                            <span class="subnav-item-label">Paid</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item subnav-item-expandable" data-page="campaigns">
                            <img src="assets/una/sub-navigation/Campaign.svg" alt="Campaigns & labels" class="subnav-item-icon" />
                            <span class="subnav-item-label">Campaigns & labels</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item subnav-item-expandable" data-page="listening">
                            <img src="assets/una/sub-navigation/Listening query.svg" alt="Listening" class="subnav-item-icon" />
                            <span class="subnav-item-label">Listening</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item subnav-item-expandable" data-page="care">
                            <img src="assets/una/sub-navigation/Care app.svg" alt="Care" class="subnav-item-icon" />
                            <span class="subnav-item-label">Care</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item subnav-item-expandable" data-page="bot">
                            <img src="assets/una/sub-navigation/bot.svg" alt="Bot" class="subnav-item-icon" />
                            <span class="subnav-item-label">Bot</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item subnav-item-expandable" data-page="community">
                            <img src="assets/una/sub-navigation/community.svg" alt="Community" class="subnav-item-icon" />
                            <span class="subnav-item-label">Community</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item subnav-item-expandable" data-page="link-bio">
                            <img src="assets/una/sub-navigation/Link in Bio.svg" alt="Link in Bio" class="subnav-item-icon" />
                            <span class="subnav-item-label">Link in Bio</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item subnav-item-expandable" data-page="live-commerce">
                            <img src="assets/una/sub-navigation/Live Commerce.svg" alt="Live Commerce" class="subnav-item-icon" />
                            <span class="subnav-item-label">Live Commerce</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item subnav-item-expandable" data-page="ugc">
                            <img src="assets/una/sub-navigation/User Generated Content app.svg" alt="UGC" class="subnav-item-icon" />
                            <span class="subnav-item-label">UGC</span>
                            <img src="assets/una/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        <button class="subnav-item" data-page="ratings">
                            <img src="assets/una/sub-navigation/Rating & Reviews app.svg" alt="Ratings & Reviews" class="subnav-item-icon" />
                            <span class="subnav-item-label">Ratings & Reviews</span>
                        </button>
                        <button class="subnav-item" data-page="knowledge">
                            <img src="assets/una/sub-navigation/Knowledge app.svg" alt="Knowledge" class="subnav-item-icon" />
                            <span class="subnav-item-label">Knowledge</span>
                        </button>
                        <button class="subnav-item" data-page="agent">
                            <img src="assets/una/sub-navigation/Agent app.svg" alt="Agent" class="subnav-item-icon" />
                            <span class="subnav-item-label">Agent</span>
                        </button>
                    </nav>
                </div>
            </div>
        `;
    }

    /**
     * Renders the Publisher sub-navigation
     */
    renderPublisher(section, pageState = 'calendar') {
        this.innerHTML = `
            <!-- Section Title -->
            <div class="subnav-header">
                <h1 class="subnav-title">${section.name}</h1>
                <button class="subnav-collapse-btn" aria-label="Close sub-navigation">
                    <img src="assets/publisher/sub-navigation/Menu close.svg" alt="" class="subnav-collapse-icon" />
                </button>
            </div>
            
            <!-- Scrollable Content -->
            <div class="subnav-content">
                <!-- Create Action Button -->
                <div class="subnav-actions">
                    <button class="subnav-action-btn subnav-action-btn--primary" data-action="create">
                        <img src="assets/publisher/sub-navigation/Plus.svg" alt="Create" class="subnav-action-icon" />
                        <span class="subnav-action-label">Create</span>
                    </button>
                </div>
                
                <!-- Main Navigation Items -->
                <div class="subnav-section subnav-section--main">
                    <nav class="subnav-items">
                        <button class="subnav-item ${pageState === 'calendar' ? 'is-active' : ''}" data-page="calendar">
                            <img src="assets/publisher/sub-navigation/Calendar, Datepicker.svg" alt="Calendar" class="subnav-item-icon" />
                            <span class="subnav-item-label">Calendar</span>
                        </button>
                        <button class="subnav-item ${pageState === 'campaigns' ? 'is-active' : ''}" data-page="campaigns">
                            <img src="assets/publisher/sub-navigation/Campaign.svg" alt="Campaigns" class="subnav-item-icon" />
                            <span class="subnav-item-label">Campaigns</span>
                            <span class="subnav-badge-new">NEW</span>
                        </button>
                        <button class="subnav-item" data-page="collections">
                            <img src="assets/publisher/sub-navigation/Collection.svg" alt="Collections" class="subnav-item-icon" />
                            <span class="subnav-item-label">Collections</span>
                        </button>
                        <button class="subnav-item" data-page="link-bio">
                            <img src="assets/publisher/sub-navigation/Link in Bio.svg" alt="Link in Bio" class="subnav-item-icon" />
                            <span class="subnav-item-label">Link in Bio</span>
                        </button>
                        <button class="subnav-item" data-page="instagram-grid">
                            <img src="assets/publisher/sub-navigation/Overview.svg" alt="Instagram grid" class="subnav-item-icon" />
                            <span class="subnav-item-label">Instagram grid</span>
                        </button>
                    </nav>
                </div>
                
                <!-- Feeds (expandable) -->
                <div class="subnav-section">
                    <nav class="subnav-items">
                        <button class="subnav-item subnav-item-expandable" data-toggle="feeds">
                            <span class="subnav-item-label">Feeds</span>
                            <img src="assets/publisher/sub-navigation/Chevron down.svg" alt="" class="subnav-item-chevron" />
                        </button>
                        
                        <!-- Feeds sub-items (hidden by default) -->
                        <div class="subnav-subitems is-hidden" data-section="feeds">
                            <button class="subnav-subitem" data-page="scheduled">
                                <div class="subnav-subitem-content">
                                    <img src="assets/publisher/sub-navigation/Schedule.svg" alt="Scheduled" class="subnav-subitem-icon" />
                                    <span class="subnav-subitem-label">Scheduled</span>
                                </div>
                                <span class="subnav-counter">45</span>
                            </button>
                            <button class="subnav-subitem" data-page="drafts">
                                <div class="subnav-subitem-content">
                                    <img src="assets/publisher/sub-navigation/Draft.svg" alt="Drafts" class="subnav-subitem-icon" />
                                    <span class="subnav-subitem-label">Drafts</span>
                                </div>
                                <span class="subnav-counter">385</span>
                            </button>
                            <button class="subnav-subitem" data-page="assigned">
                                <div class="subnav-subitem-content">
                                    <img src="assets/publisher/sub-navigation/Assigned.svg" alt="Assigned to you" class="subnav-subitem-icon" />
                                    <span class="subnav-subitem-label">Assigned to you</span>
                                </div>
                                <span class="subnav-counter">3</span>
                            </button>
                            <button class="subnav-subitem" data-page="publishing-error">
                                <div class="subnav-subitem-content">
                                    <img src="assets/publisher/sub-navigation/Error, Exclamation.svg" alt="Publishing error" class="subnav-subitem-icon" />
                                    <span class="subnav-subitem-label">Publishing error</span>
                                </div>
                                <span class="subnav-counter subnav-counter--danger">5</span>
                            </button>
                            <button class="subnav-subitem" data-page="waiting-approval">
                                <div class="subnav-subitem-content">
                                    <img src="assets/publisher/sub-navigation/Checkmark.svg" alt="Waiting for approval" class="subnav-subitem-icon" />
                                    <span class="subnav-subitem-label">Waiting for approval</span>
                                </div>
                                <span class="subnav-counter">15</span>
                            </button>
                            <button class="subnav-subitem" data-page="rejected">
                                <div class="subnav-subitem-content">
                                    <img src="assets/publisher/sub-navigation/Close.svg" alt="Rejected" class="subnav-subitem-icon" />
                                    <span class="subnav-subitem-label">Rejected</span>
                                </div>
                                <span class="subnav-counter subnav-counter--hidden">0</span>
                            </button>
                            <button class="subnav-subitem" data-page="sent">
                                <div class="subnav-subitem-content">
                                    <img src="assets/publisher/sub-navigation/Send, Publish.svg" alt="Sent" class="subnav-subitem-icon" />
                                    <span class="subnav-subitem-label">Sent</span>
                                </div>
                                <span class="subnav-counter subnav-counter--hidden">578</span>
                            </button>
                            <button class="subnav-subitem" data-page="dark-posts">
                                <div class="subnav-subitem-content">
                                    <img src="assets/publisher/sub-navigation/Night, Dark.svg" alt="Dark posts" class="subnav-subitem-icon" />
                                    <span class="subnav-subitem-label">Dark posts</span>
                                </div>
                                <span class="subnav-counter subnav-counter--hidden">0</span>
                            </button>
                            <button class="subnav-subitem" data-page="preset-templates">
                                <div class="subnav-subitem-content">
                                    <img src="assets/publisher/sub-navigation/Post.svg" alt="Preset templates" class="subnav-subitem-icon" />
                                    <span class="subnav-subitem-label">Preset templates</span>
                                </div>
                                <span class="subnav-counter subnav-counter--hidden">0</span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        `;
    }

    /**
     * Renders a placeholder sub-navigation for sections without full implementation
     */
    renderPlaceholder(section) {
        const closeIcon = section.assets?.subNavigation?.closeIcon || 'assets/main-navigation/logo/Emplifi - menu close.svg';
        
        this.innerHTML = `
            <!-- Section Title -->
            <div class="subnav-header">
                <h1 class="subnav-title">${section.name}</h1>
                <button class="subnav-collapse-btn" aria-label="Close sub-navigation">
                    <img src="${closeIcon}" alt="" class="subnav-collapse-icon" />
                </button>
            </div>
            
            <!-- Placeholder Content -->
            <div class="subnav-content">
                <div class="subnav-placeholder">
                    <p>Sub-navigation for ${section.name} is coming soon.</p>
                </div>
            </div>
        `;
    }

    /**
     * Attaches event listeners (called once on connect)
     */
    attachEventListeners() {
        // Listen for toggle events from header
        document.addEventListener('toggle-sub-nav', () => {
            this.toggleClosed();
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
     * Attaches event listeners for sub-nav buttons (called after each render)
     */
    attachSubNavEventListeners() {
        // Close button
        const closeBtn = this.querySelector('.subnav-collapse-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.toggleClosed();
            });
        }

        // Feeds toggle button (Publisher specific)
        const feedsToggle = this.querySelector('[data-toggle="feeds"]');
        if (feedsToggle) {
            feedsToggle.addEventListener('click', () => {
                const feedsSubitems = this.querySelector('[data-section="feeds"]');
                if (feedsSubitems) {
                    const isHidden = feedsSubitems.classList.contains('is-hidden');
                    
                    if (isHidden) {
                        feedsSubitems.classList.remove('is-hidden');
                        feedsToggle.classList.add('is-open');
                    } else {
                        feedsSubitems.classList.add('is-hidden');
                        feedsToggle.classList.remove('is-open');
                    }
                }
            });
        }
    }

    /**
     * Toggles the closed state of the sub-navigation
     */
    toggleClosed() {
        this.isClosed = !this.isClosed;
        
        if (this.isClosed) {
            this.classList.add('is-closed');
            document.body.classList.add('subnav-closed');
        } else {
            this.classList.remove('is-closed');
            document.body.classList.remove('subnav-closed');
        }

        // Dispatch event for other components
        document.dispatchEvent(new CustomEvent('sub-nav-state-changed', {
            detail: { isClosed: this.isClosed }
        }));
    }
}

// Register the custom element
customElements.define('sub-navigation', SubNavigation);

