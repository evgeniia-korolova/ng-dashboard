import { Component, ElementRef, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { DashboardWidget } from '../../widgets/dashboard-widget/dashboard-widget';
import { DashboardService } from './services/dashboard-service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { wrapGrid } from 'animate-css-grid';
import { CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { DashboardHeader } from './dashboard-header/dashboard-header';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardWidget,
    MatButtonModule,
    MatMenuModule,
    CdkDropList,
    CdkDropListGroup,
    DashboardHeader,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  providers: [DashboardService],
})
export default class Dashboard implements OnInit, OnDestroy {
  dashboardService = inject(DashboardService);
  dashboard = viewChild.required<ElementRef>('dashboard');

  clearAnimations = () => {};

  ngOnInit(): void {
    const { unwrapGrid } = wrapGrid(this.dashboard().nativeElement, { duration: 300 });
    this.clearAnimations = unwrapGrid;
  }

  ngOnDestroy(): void {
    this.clearAnimations();
  }

  drop(event: CdkDragDrop<number, any>) {
    const {
      previousContainer,
      container,
      item: { data },
    } = event;

    if (data) {
      this.dashboardService.insertWidgetAtPosition(data, container.data);
      return;
    }
    this.dashboardService.updateWidgetPosition(previousContainer.data, container.data);
  }
}
