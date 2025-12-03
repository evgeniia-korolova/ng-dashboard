export const menuItems = [
  {
    id: 1,
    icon: 'dashboard',
    label: 'Dashboard',
    route: 'dashboard',    
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
        icon: 'edit_notes',
        label: 'Forms',
        route: 'forms',  
        redirectToFirstChild: true,     
        // loadComponent: () => import('../pages/content/forms/forms'),
        
        subItems: [
          {
            id: 211,
            icon: 'text_fields',
            label: 'Inputs',
            route: 'inputs',            
            loadComponent: () => import('../pages/content/forms/inputs/inputs'),
          },
          {
            id: 212,
            icon: 'description',
            label: 'Template Form',
            route: 'template-form',            
            loadComponent: () => import('../pages/content/forms/template-driven-form/template-driven-form'),
          },
          {
            id: 213,
            icon: 'autorenew',
            label: 'Reactive Form',
            route: 'reactive-form',            
            loadComponent: () => import('../pages/content/forms/reactive-form/reactive-form'),
          },
        ],
      },
      {
        id: 22,
        icon: 'touch_app',
        label: 'Buttons',
        route: 'buttons',        
        loadComponent: () => import('../pages/content/buttons/buttons'),
      },
      { 
        id: 23, 
        icon: 'dashboard', 
        label: 'Grid', 
        route: 'grid',         
        loadComponent: () => import('../pages/content/grid/grid'),
    },
    ],
  },
  {
    id: 3,
    icon: 'analytics',
    label: 'Analitics',
    route: 'analitics',    
    loadComponent: () => import('../pages/analytics/analitics'),
  },
  {
    id: 4,
    icon: 'comment',
    label: 'Comments',
    route: 'comments',    
    loadComponent: () => import('../pages/comments/comments')
  },
];
