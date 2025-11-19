import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard')
    },
    {
        path: 'analitics',
        loadComponent: () => import('./pages/analitics/analitics')
    },
    {
        path: 'content',
        loadComponent: () => import('./pages/content/content'),
        children: [
            {
                path: 'videos',
                loadComponent: () => import('./pages/content/videos/videos'),
            },
            {
                path: 'playlists',
                loadComponent: () => import('./pages/content/playlists/playlists'),
            },
            {
                path: 'posts',
                loadComponent: () => import('./pages/content/posts/posts'),
            },
        ]
    },
    {
        path: 'comments',
        loadComponent: () => import('./pages/comments/comments')
    },
];
