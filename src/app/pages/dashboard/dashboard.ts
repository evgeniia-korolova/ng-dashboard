import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { DashboardWidget } from "../../widgets/dashboard-widget/dashboard-widget";
import { DashboardService } from './services/dashboard-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { wrapGrid } from 'animate-css-grid'


@Component({
  selector: 'app-dashboard',
  imports: [DashboardWidget, MatButtonModule, MatIcon, MatMenuModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  providers: [DashboardService]
})
export default class Dashboard implements OnInit {
  dashboardService = inject(DashboardService);
  dashboard = viewChild.required<ElementRef>('dashboard');

  ngOnInit(): void {
    wrapGrid(this.dashboard().nativeElement, {duration: 300})
  }
}
