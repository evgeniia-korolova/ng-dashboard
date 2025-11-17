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
        loadComponent: () => import('./pages/content/content')
    },
    {
        path: 'comments',
        loadComponent: () => import('./pages/comments/comments')
    },
];
