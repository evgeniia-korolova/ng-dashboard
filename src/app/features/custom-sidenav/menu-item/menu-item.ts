import { Component,  input, signal} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuItemModel } from '../custom-sidenav';

@Component({
  selector: 'app-menu-item',
  imports: [RouterLink, RouterLinkActive, MatIcon, MatListModule],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.scss',
})
export class MenuItem {
  item = input.required<MenuItemModel>();
  collapsed = input.required<boolean>();  
  nestedMenuOpen = signal(false);

  toggleNested() {
    if (!this.item().subItems) {
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}
