import { Component, computed, signal } from '@angular/core';

import { MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatDrawerContainer, MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

import { CustomSidenav } from '../../features/custom-sidenav/custom-sidenav';

@Component({
  selector: 'app-main-content',
  imports: [
    RouterOutlet,
    MatToolbar,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    MatIconButton,
    MatIcon,
    CustomSidenav,
  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {
  collapsed = signal(false);

  sidenavWidth = computed(() => (this.collapsed() ? '72px' : '250px'));
  contentWidth = computed(() => (this.collapsed() ? '82px' : '260px'));
}
