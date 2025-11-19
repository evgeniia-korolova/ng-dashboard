import { Component, ChangeDetectionStrategy, computed, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from "./menu-item/menu-item";


export type MenuItemModel = {
  id: number;
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItemModel[];
};

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, MatIconModule, MenuItem],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSidenav {
  readonly collapsed = input.required<boolean>();

  protected readonly menuItems = signal<MenuItemModel[]>([
    {
      id: 1,
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      id: 2,
      icon: 'video_library',
      label: 'Content',
      route: 'content',
      subItems: [
        { id: 21, icon: 'circle', label: 'Videos', route: 'videos' },
        { id: 22, icon: 'playlist_play', label: 'Playlists', route: 'playlists' },
        { id: 23, icon: 'post_add', label: 'Posts', route: 'posts' },
      ],
    },
    {
      id: 3,
      icon: 'analytics',
      label: 'Analitics',
      route: 'analitics',
    },
    {
      id: 4,
      icon: 'comment',
      label: 'Comments',
      route: 'comments',
    },
  ]);

  protected readonly profilePicSize = computed(() => (this.collapsed() ? '32' : '100'));
}
