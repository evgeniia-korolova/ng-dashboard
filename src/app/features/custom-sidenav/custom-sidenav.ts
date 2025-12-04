import { Component, ChangeDetectionStrategy, computed, input, signal, output } from '@angular/core';
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

  protected readonly rowMenuItems = signal<MenuItemModel[]>(menuItems);

  protected readonly menuItems = computed(() =>
    this.rowMenuItems().map((i) => ({
      ...i,
      subItems: i.subItems
        ? i.subItems.filter((s) => !s.hidden)
        : undefined,
    }))
  );  

  protected readonly profilePicSize = computed(() => (this.collapsed() ? '32' : '100'));

  closeRequest = output<void>();

  onMenuAction(hasSubMenu: boolean) {
    if (!hasSubMenu) {
      this.closeRequest.emit();
    }
  }


}
