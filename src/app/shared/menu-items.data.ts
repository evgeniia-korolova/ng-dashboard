export const menuItems = [
  {
    id: 1,
    icon: 'dashboard',
    label: 'Dashboard',
    route: 'dashboard',
    // component: Dashboard,
    loadComponent: () => import('../pages/dashboard/dashboard'),
  },
  {
    id: 2,
    icon: 'video_library',
    label: 'Content',
    route: 'content',
    loadComponent: () => import('../pages/content/content'),    
    subItems: [
      {
        id: 20,
        icon: 'info',
        label: 'Overview',
        route: '', // пустой путь
        loadComponent: () => import('../pages/content/content-description/content-description'),
        hidden: true,
      },
  
      {
        id: 21,
        icon: 'circle',
        label: 'Videos',
        route: 'videos',
        // component: Videos,
        loadComponent: () => import('../pages/content/videos/videos'),
        subItems: [
          {
            id: 211,
            icon: 'movie',
            label: 'Shorts',
            route: 'shorts',
            // component: Shorts,
            loadComponent: () => import('../pages/content/videos/shorts/shorts'),
          },
          {
            id: 212,
            icon: 'tv',
            label: 'Long format',
            route: 'long-form',
            // component: LongForm,
            loadComponent: () => import('../pages/content/videos/long-form/long-form'),
          },
        ],
      },
      {
        id: 22,
        icon: 'touch_app',
        label: 'Buttons',
        route: 'buttons',
        // component: Playlists,
        loadComponent: () => import('../pages/content/buttons/buttons'),
      },
      { 
        id: 23, 
        icon: 'dashboard', 
        label: 'Grid', 
        route: 'grid', 
        // component: Posts 
        loadComponent: () => import('../pages/content/grid/grid'),
    },
    ],
  },
  {
    id: 3,
    icon: 'analytics',
    label: 'Analitics',
    route: 'analitics',
    // component: Analitics,
    loadComponent: () => import('../pages/analytics/analitics'),
  },
  {
    id: 4,
    icon: 'comment',
    label: 'Comments',
    route: 'comments',
    // component: Comments,
    loadComponent: () => import('../pages/comments/comments')
  },
];
