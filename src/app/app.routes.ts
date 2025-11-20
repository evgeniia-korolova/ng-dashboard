import { Route, Routes } from '@angular/router';
import { MenuItemModel } from './shared/manu-item.model';
import { menuItems } from './shared/menu-items.data';

const itemToRoute = (i: MenuItemModel): Route => {
    const route: Route = {path: i.route, loadComponent: i.loadComponent};
    if(i.subItems) {
        route.children = i.subItems.map((s) => itemToRoute(s))
    }
    return route
}

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    ...menuItems.map((i) => itemToRoute(i)),
];



    // {
    //     path: 'dashboard',
    //     loadComponent: () => import('./pages/dashboard/dashboard')
    // },
    // {
    //     path: 'analitics',
    //     loadComponent: () => import('./pages/analitics/analitics')
    // },
    // {
    //     path: 'content',
    //     loadComponent: () => import('./pages/content/content'),
    //     children: [
    //         {
    //             path: 'videos',
    //             loadComponent: () => import('./pages/content/videos/videos'),
                
    //             children: [
    //                 {
    //                     path: 'shorts',
    //                     loadComponent: () => import('./pages/content/videos/shorts/shorts')
    //                 },
    //                 {
    //                     path: 'long-form',
    //                     loadComponent: () => import('./pages/content/videos/long-form/long-form')
    //                 },
    //             ]
    //         },
    //         {
    //             path: 'playlists',
    //             loadComponent: () => import('./pages/content/playlists/playlists'),
    //         },
    //         {
    //             path: 'posts',
    //             loadComponent: () => import('./pages/content/posts/posts'),
    //         },
    //     ]
    // },
    // {
    //     path: 'comments',
    //     loadComponent: () => import('./pages/comments/comments')
    // },

