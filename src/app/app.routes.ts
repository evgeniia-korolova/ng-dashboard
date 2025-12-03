import { Route, Routes } from '@angular/router';
import { MenuItemModel } from './shared/models/menu-item.model';
import { menuItems } from './shared/menu-items.data';

const itemToRoute = (i: MenuItemModel): Route => {
    const route: Route = {path: i.route, loadComponent: i.loadComponent};
    if(i.subItems) {
        route.children = i.subItems.map((s) => itemToRoute(s))
        if (i.redirectToFirstChild && i.subItems.length > 0) {
            route.children.unshift({
              path: '',
              pathMatch: 'full',
              redirectTo: i.subItems[0].route,
            });
          }
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
    //     path: 'forms', 
    //     loadComponent: () => import('./pages/content/videos/videos'),
    //     children: [
    //       {
    //         path: '',
    //         pathMatch: 'full',
    //         redirectTo: 'inputs' // редирект на первый дочерний
    //       },
    //       {
    //         path: 'inputs', 
    //         loadComponent: () => import('./pages/content/videos/shorts/shorts')
    //       },
    //       {
    //         path: 'template-form', 
    //         loadComponent: () => import('./pages/content/videos/long-form/long-form')
    //       },
    //       {
    //         path: 'reactive-form',
    //         loadComponent: () => import('./pages/content/videos/reactive-form/reactive-form')
    //       }
    //     ]
    //   },
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

