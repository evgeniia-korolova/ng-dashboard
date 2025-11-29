import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatDrawerContainer, MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

import { CustomSidenav } from '../../features/custom-sidenav/custom-sidenav';
import { ThemeService } from '../../core/services/theme-service';
import { Header } from "../header/header";

@Component({
  selector: 'app-main-content',
  imports: [
    RouterOutlet,
    
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    
    
    CustomSidenav,
    Header
],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContent {
  themeService = inject(ThemeService)
  collapsed = signal(false);
  
  currentTheme = this.themeService.theme;

  sidenavWidth = computed(() => (this.collapsed() ? '72px' : '250px'));
  contentWidth = computed(() => (this.collapsed() ? '82px' : '250px'));

  toggleTheme() {
    const next = this.currentTheme() === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove(this.currentTheme());
    document.documentElement.classList.add(next);
    this.currentTheme.set(next);
  }
}
