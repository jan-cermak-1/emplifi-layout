/**
 * Configuration for all sections in the Emplifi Layout
 * 
 * Each section defines:
 * - id: Unique identifier for the section
 * - name: Display name
 * - url: HTML file path
 * - pageTitle: Browser page title
 * - status: 'complete' or 'placeholder'
 * - icons: Paths to normal, hover, and selected state icons
 */

export const sectionsConfig = {
    'command-center': {
        id: 'command-center',
        name: 'Command Center',
        url: 'command-center.html',
        pageTitle: 'Command Center - Emplifi',
        status: 'placeholder',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Home.svg',
            hover: 'assets/main-navigation/icons/hover/Home.svg',
            selected: 'assets/main-navigation/icons/isSelected/Home.svg'
        }
    },
    'dashboard': {
        id: 'dashboard',
        name: 'Dashboard',
        url: 'dashboard.html',
        pageTitle: 'Dashboard - Emplifi',
        status: 'placeholder',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Dashboard.svg',
            hover: 'assets/main-navigation/icons/hover/Dashboard.svg',
            selected: 'assets/main-navigation/icons/isSelected/Dashboard.svg'
        }
    },
    'unified-analytics': {
        id: 'unified-analytics',
        name: 'Unified Analytics',
        url: 'unified-analytics.html',
        pageTitle: 'Unified Analytics - Emplifi',
        status: 'complete',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Unified Analytics.svg',
            hover: 'assets/main-navigation/icons/hover/Unified Analytics.svg',
            selected: 'assets/main-navigation/icons/isSelected/Unified Analytics.svg'
        }
    },
    'publisher': {
        id: 'publisher',
        name: 'Publisher',
        url: 'publisher.html',
        pageTitle: 'Publisher - Emplifi',
        status: 'placeholder',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Publisher.svg',
            hover: 'assets/main-navigation/icons/hover/Publisher.svg',
            selected: 'assets/main-navigation/icons/isSelected/Publisher.svg'
        }
    },
    'community': {
        id: 'community',
        name: 'Community',
        url: 'community.html',
        pageTitle: 'Community - Emplifi',
        status: 'placeholder',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Community.svg',
            hover: 'assets/main-navigation/icons/hover/Community.svg',
            selected: 'assets/main-navigation/icons/isSelected/Community.svg'
        }
    },
    'care': {
        id: 'care',
        name: 'Care',
        url: 'care.html',
        pageTitle: 'Care - Emplifi',
        status: 'placeholder',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Care.svg',
            hover: 'assets/main-navigation/icons/hover/Care.svg',
            selected: 'assets/main-navigation/icons/isSelected/Care.svg'
        }
    },
    'content': {
        id: 'content',
        name: 'Content',
        url: 'content.html',
        pageTitle: 'Content - Emplifi',
        status: 'placeholder',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Content.svg',
            hover: 'assets/main-navigation/icons/hover/Content.svg',
            selected: 'assets/main-navigation/icons/isSelected/Content.svg'
        }
    },
    'ugc': {
        id: 'ugc',
        name: 'UGC',
        url: 'ugc.html',
        pageTitle: 'User Generated Content - Emplifi',
        status: 'placeholder',
        icons: {
            normal: 'assets/main-navigation/icons/normal/User Generated Content.svg',
            hover: 'assets/main-navigation/icons/hover/User Generated Content.svg',
            selected: 'assets/main-navigation/icons/isSelected/User Generated Content.svg'
        }
    },
    'bot': {
        id: 'bot',
        name: 'Bot',
        url: 'bot.html',
        pageTitle: 'Bot - Emplifi',
        status: 'placeholder',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Bot.svg',
            hover: 'assets/main-navigation/icons/hover/Bot.svg',
            selected: 'assets/main-navigation/icons/isSelected/Bot.svg'
        }
    },
    'ratings-reviews': {
        id: 'ratings-reviews',
        name: 'Ratings & Reviews',
        url: 'ratings-reviews.html',
        pageTitle: 'Ratings & Reviews - Emplifi',
        status: 'placeholder',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Rating & Reviews.svg',
            hover: 'assets/main-navigation/icons/hover/Rating & Reviews.svg',
            selected: 'assets/main-navigation/icons/isSelected/Rating & Reviews.svg'
        }
    },
    'help-support': {
        id: 'help-support',
        name: 'Help & Support',
        url: 'help-support.html',
        pageTitle: 'Help & Support - Emplifi',
        status: 'placeholder',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Help.svg',
            hover: 'assets/main-navigation/icons/hover/Help.svg',
            selected: 'assets/main-navigation/icons/isSelected/Help.svg'
        }
    },
    'settings': {
        id: 'settings',
        name: 'Settings',
        url: 'settings.html',
        pageTitle: 'Settings - Emplifi',
        status: 'placeholder',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Settings.svg',
            hover: 'assets/main-navigation/icons/hover/Settings.svg',
            selected: 'assets/main-navigation/icons/isSelected/Settings.svg'
        }
    }
};

// Helper function to get section by URL
export function getSectionByUrl(url) {
    const filename = url.split('/').pop() || 'index.html';
    return Object.values(sectionsConfig).find(section => 
        section.url === filename || section.url === url
    );
}

// Helper function to get current section from window.location
export function getCurrentSection() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    return getSectionByUrl(currentFile);
}

