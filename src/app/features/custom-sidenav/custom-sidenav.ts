import { Component, ChangeDetectionStrategy, computed, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MenuItem } from './menu-item/menu-item';
import { MenuItemModel } from '../../shared/models/menu-item.model';
import { menuItems } from '../../shared/menu-items.data';



@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, MatIconModule, MenuItem],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSidenav {
  readonly collapsed = input.required<boolean>();

  protected readonly menuItems = signal<MenuItemModel[]>(menuItems);

  protected readonly profilePicSize = computed(() => (this.collapsed() ? '32' : '100'));
}
