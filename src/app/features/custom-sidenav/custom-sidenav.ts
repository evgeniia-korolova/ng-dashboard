import { Component, ChangeDetectionStrategy, computed, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type MenuItem = {
  id: number;
  icon: string;
  label: string;
  route?: string;
};

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSidenav {
  readonly collapsed = input.required<boolean>();

  protected readonly menuItems = signal<MenuItem[]>([
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
