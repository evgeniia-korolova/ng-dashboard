import { Component, computed, effect, input, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuItemModel } from '../../../shared/models/menu-item.model';

@Component({
  selector: 'app-menu-item',
  imports: [RouterLink, RouterLinkActive, MatIcon, MatListModule],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.scss',
})
export class MenuItem {
  item = input.required<MenuItemModel>();
  collapsed = input.required<boolean>();
  menuAction = output<boolean>();

  nestedMenuOpen = signal(false);
  routeHistory = input('');
  protected level = computed(() => this.routeHistory().split('/').length - 1);
  protected indentation = computed(() =>
    this.collapsed() ? '16px' : `${16 + this.level() * 16}px`
  );

  toggleNested() {
    if (!this.item().subItems) {
      this.menuAction.emit(false);
      console.log('item clicked', this.level());
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  } 

  logRoutes = effect(() => console.log(this.routeHistory(), this.level()));
}
