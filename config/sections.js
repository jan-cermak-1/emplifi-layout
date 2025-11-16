/**
 * Master Configuration for all 12 sections
 * 
 * This config defines the structure and content for:
 * - Main Navigation
 * - Sub-Navigation
 * - Header
 * - Content
 * 
 * Each section can be easily customized by modifying this config.
 */

export const sections = {
  'command-center': {
    id: 'command-center',
    name: 'Command Center',
    mainNav: {
      label: 'Command center',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      showSearch: false,
      showNew: false,
      items: [],
      sections: [],
      placeholder: true
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'Command Center'
    }
  },
  
  'dashboard': {
    id: 'dashboard',
    name: 'Dashboard',
    mainNav: {
      label: 'Dashboard',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      showSearch: false,
      showNew: false,
      items: [],
      sections: [],
      placeholder: true
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'Dashboard'
    }
  },
  
  'unified-analytics': {
    id: 'unified-analytics',
    name: 'Unified Analytics',
    mainNav: {
      label: 'Unified Analytics',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      showSearch: true,
      showNew: true,
      items: [
        { 
          label: 'Home', 
          icon: 'assets/sub-navigation-unified-analytics/icons/Overview.svg',
          active: true,
          page: 'home'
        },
        { 
          label: 'Objectives', 
          icon: 'assets/sub-navigation-unified-analytics/icons/Campaign objective.svg',
          active: false,
          page: 'objectives'
        }
      ],
      sections: [
        {
          title: 'Early Access',
          titleColor: 'blue',
          items: [
            {
              label: 'My boards',
              icon: 'assets/sub-navigation-unified-analytics/icons/Dashboard.svg',
              expandable: true,
              page: 'my-boards'
            },
            {
              label: 'Shared with me',
              icon: 'assets/sub-navigation-unified-analytics/icons/Shared view.svg',
              expandable: true,
              page: 'shared'
            },
            {
              label: 'Professional services',
              icon: 'assets/sub-navigation-unified-analytics/icons/professional services.svg',
              expandable: false,
              page: 'professional'
            }
          ]
        },
        {
          title: 'Discover',
          titleColor: 'default',
          items: [
            {
              label: 'Social profiles',
              icon: 'assets/sub-navigation-unified-analytics/icons/Profile.svg',
              expandable: true,
              page: 'social-profiles'
            },
            {
              label: 'Paid',
              icon: 'assets/sub-navigation-unified-analytics/icons/Ad account.svg',
              expandable: true,
              page: 'paid'
            },
            {
              label: 'Campaigns & labels',
              icon: 'assets/sub-navigation-unified-analytics/icons/Campaign.svg',
              expandable: true,
              page: 'campaigns'
            },
            {
              label: 'Listening',
              icon: 'assets/sub-navigation-unified-analytics/icons/Listening query.svg',
              expandable: true,
              page: 'listening'
            },
            {
              label: 'Care',
              icon: 'assets/sub-navigation-unified-analytics/icons/Care app.svg',
              expandable: true,
              page: 'care'
            },
            {
              label: 'Bot',
              icon: 'assets/sub-navigation-unified-analytics/icons/Bot.svg',
              expandable: true,
              page: 'bot'
            },
            {
              label: 'Community',
              icon: 'assets/sub-navigation-unified-analytics/icons/Community.svg',
              expandable: true,
              page: 'community'
            },
            {
              label: 'Link in Bio',
              icon: 'assets/sub-navigation-unified-analytics/icons/Link in Bio.svg',
              expandable: true,
              page: 'link-bio'
            },
            {
              label: 'Live Commerce',
              icon: 'assets/sub-navigation-unified-analytics/icons/Live Commerce.svg',
              expandable: true,
              page: 'live-commerce'
            },
            {
              label: 'UGC',
              icon: 'assets/sub-navigation-unified-analytics/icons/User Generated Content app.svg',
              expandable: true,
              page: 'ugc'
            },
            {
              label: 'Ratings & Reviews',
              icon: 'assets/sub-navigation-unified-analytics/icons/Rating & Reviews app.svg',
              expandable: false,
              page: 'ratings'
            },
            {
              label: 'Knowledge',
              icon: 'assets/sub-navigation-unified-analytics/icons/Knowledge app.svg',
              expandable: false,
              page: 'knowledge'
            },
            {
              label: 'Agent',
              icon: 'assets/sub-navigation-unified-analytics/icons/Agent app.svg',
              expandable: false,
              page: 'agent'
            }
          ]
        }
      ],
      placeholder: false
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'Home'
    }
  },
  
  'publisher': {
    id: 'publisher',
    name: 'Publisher',
    mainNav: {
      label: 'Publisher',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      placeholder: true
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'Publisher'
    }
  },
  
  'community': {
    id: 'community',
    name: 'Community',
    mainNav: {
      label: 'Community',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      placeholder: true
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'Community'
    }
  },
  
  'care': {
    id: 'care',
    name: 'Care',
    mainNav: {
      label: 'Care',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      placeholder: true
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'Care'
    }
  },
  
  'content': {
    id: 'content',
    name: 'Content',
    mainNav: {
      label: 'Content',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      placeholder: true
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'Content'
    }
  },
  
  'ugc': {
    id: 'ugc',
    name: 'UGC',
    mainNav: {
      label: 'UCG',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      placeholder: true
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'UGC'
    }
  },
  
  'bot': {
    id: 'bot',
    name: 'Bot',
    mainNav: {
      label: 'Bot',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      placeholder: true
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'Bot'
    }
  },
  
  'ratings-reviews': {
    id: 'ratings-reviews',
    name: 'Ratings & Reviews',
    mainNav: {
      label: 'Rating & Reviews',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      placeholder: true
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'Ratings & Reviews'
    }
  },
  
  'help-support': {
    id: 'help-support',
    name: 'Help & Support',
    mainNav: {
      label: 'Help & Support',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      placeholder: true
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'Help & Support'
    }
  },
  
  'settings': {
    id: 'settings',
    name: 'Settings',
    mainNav: {
      label: 'Settings',
      iconBase: 'assets/main-navigation/icons/'
    },
    subNav: {
      placeholder: true
    },
    header: {
      showMenu: true,
      showSearch: true,
      showDivider: true,
      showFullscreen: true,
      defaultTitle: 'Settings'
    }
  }
};

// Main navigation items (order matters)
export const mainNavSections = [
  'command-center',
  'dashboard',
  'unified-analytics',
  'publisher',
  'community',
  'care',
  'content',
  'ugc',
  'bot',
  'ratings-reviews',
  'help-support',
  'settings'
];

