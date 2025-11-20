import Analitics from '../pages/analitics/analitics';
import Comments from '../pages/comments/comments';
import Content from '../pages/content/content';
import Playlists from '../pages/content/playlists/playlists';
import Posts from '../pages/content/posts/posts';
import LongForm from '../pages/content/videos/long-form/long-form';
import Shorts from '../pages/content/videos/shorts/shorts';
import Videos from '../pages/content/videos/videos';
import Dashboard from '../pages/dashboard/dashboard';

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
    // component: Content,
    subItems: [
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
        icon: 'playlist_play',
        label: 'Playlists',
        route: 'playlists',
        // component: Playlists,
        loadComponent: () => import('../pages/content/playlists/playlists'),
      },
      { 
        id: 23, 
        icon: 'post_add', 
        label: 'Posts', 
        route: 'posts', 
        // component: Posts 
        loadComponent: () => import('../pages/content/posts/posts'),
    },
    ],
  },
  {
    id: 3,
    icon: 'analytics',
    label: 'Analitics',
    route: 'analitics',
    // component: Analitics,
    loadComponent: () => import('../pages/analitics/analitics'),
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
