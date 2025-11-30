import { MatIconModule } from '@angular/material/icon';
import { Component, input, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatIconButton, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  currentTheme = input.required<string>();
  toggleTheme = output<void>();
  toggleSidebar = output<void>();
}
