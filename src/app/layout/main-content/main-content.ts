import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatDrawerContainer, MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { CustomSidenav } from '../../features/custom-sidenav/custom-sidenav';
import { ThemeService } from '../../core/services/theme-service';
import { Header } from '../header/header';
import { ResponsiveService } from '../../core/services/responsive-service';

@Component({
  selector: 'app-main-content',
  imports: [RouterOutlet, MatDrawerContainer, MatDrawer, MatDrawerContent, CustomSidenav, Header],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContent {
  themeService = inject(ThemeService);
  responsiveService = inject(ResponsiveService);
  collapsed = signal(false);

  currentTheme = this.themeService.theme;

  
  sidenavOpened = signal(false);

  smallScreen = computed(() => this.responsiveService.smallWidth());

  sidenavWidth = computed(() =>
    this.smallScreen() ? '250px' : this.isCollapsed() ? '72px' : '250px'
  );

  contentWidth = computed(() =>
    this.smallScreen() ? '0px' : this.isCollapsed() ? '82px' : '250px'
  );

  isCollapsed = computed(() => (this.smallScreen() ? false : this.collapsed()));

  isOpened = computed(() => (this.smallScreen() ? this.sidenavOpened() : true));

  toggleTheme() {
    const next = this.currentTheme() === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove(this.currentTheme());
    document.documentElement.classList.add(next);
    this.currentTheme.set(next);
  }

  toggleSidebar() {
    if (this.smallScreen()) {
      this.collapsed.set(false);
      this.sidenavOpened.set(!this.sidenavOpened());
    } else {
      this.sidenavOpened.set(true);
      this.collapsed.set(!this.collapsed());
    }
  }
}
