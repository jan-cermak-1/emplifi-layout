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
 * - assets: Paths to section-specific assets (sub-navigation, header)
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
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/command-center/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/command-center/header/Menu hamburger.svg',
                searchIcon: 'assets/command-center/header/Search.svg',
                fullscreenIcon: 'assets/command-center/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/command-center/header/Minimize Fullscreen.svg'
            }
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
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/dashboard/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/dashboard/header/Menu hamburger.svg',
                searchIcon: 'assets/dashboard/header/Search.svg',
                fullscreenIcon: 'assets/dashboard/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/dashboard/header/Minimize Fullscreen.svg'
            }
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
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/una/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/una/header/Menu hamburger.svg',
                searchIcon: 'assets/una/header/Search.svg',
                fullscreenIcon: 'assets/una/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/una/header/Minimize Fullscreen.svg'
            }
        }
    },
    'publisher': {
        id: 'publisher',
        name: 'Publisher',
        url: 'publisher.html',
        pageTitle: 'Publisher - Emplifi',
        status: 'complete',
        icons: {
            normal: 'assets/main-navigation/icons/normal/Publisher.svg',
            hover: 'assets/main-navigation/icons/hover/Publisher.svg',
            selected: 'assets/main-navigation/icons/isSelected/Publisher.svg'
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/publisher/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/publisher/header/Menu hamburger.svg',
                searchIcon: 'assets/publisher/header/Search.svg',
                fullscreenIcon: 'assets/publisher/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/publisher/header/Minimize Fullscreen.svg'
            }
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
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/community/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/community/header/Menu hamburger.svg',
                searchIcon: 'assets/community/header/Search.svg',
                fullscreenIcon: 'assets/community/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/community/header/Minimize Fullscreen.svg'
            }
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
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/care/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/care/header/Menu hamburger.svg',
                searchIcon: 'assets/care/header/Search.svg',
                fullscreenIcon: 'assets/care/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/care/header/Minimize Fullscreen.svg'
            }
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
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/content/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/content/header/Menu hamburger.svg',
                searchIcon: 'assets/content/header/Search.svg',
                fullscreenIcon: 'assets/content/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/content/header/Minimize Fullscreen.svg'
            }
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
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/ugc/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/ugc/header/Menu hamburger.svg',
                searchIcon: 'assets/ugc/header/Search.svg',
                fullscreenIcon: 'assets/ugc/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/ugc/header/Minimize Fullscreen.svg'
            }
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
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/bot/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/bot/header/Menu hamburger.svg',
                searchIcon: 'assets/bot/header/Search.svg',
                fullscreenIcon: 'assets/bot/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/bot/header/Minimize Fullscreen.svg'
            }
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
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/ratings-reviews/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/ratings-reviews/header/Menu hamburger.svg',
                searchIcon: 'assets/ratings-reviews/header/Search.svg',
                fullscreenIcon: 'assets/ratings-reviews/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/ratings-reviews/header/Minimize Fullscreen.svg'
            }
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
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/help-support/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/help-support/header/Menu hamburger.svg',
                searchIcon: 'assets/help-support/header/Search.svg',
                fullscreenIcon: 'assets/help-support/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/help-support/header/Minimize Fullscreen.svg'
            }
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
        },
        assets: {
            subNavigation: {
                closeIcon: 'assets/settings/sub-navigation/Menu close.svg'
            },
            header: {
                menuIcon: 'assets/settings/header/Menu hamburger.svg',
                searchIcon: 'assets/settings/header/Search.svg',
                fullscreenIcon: 'assets/settings/header/Maximize Fullscreen.svg',
                minimizeIcon: 'assets/settings/header/Minimize Fullscreen.svg'
            }
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

