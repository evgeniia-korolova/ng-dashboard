import { Component, ElementRef, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { DashboardWidget } from '../../widgets/dashboard-widget/dashboard-widget';
import { DashboardService } from './services/dashboard-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { wrapGrid } from 'animate-css-grid';
import { CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardWidget,
    MatButtonModule,
    MatIcon,
    MatMenuModule,
    CdkDropList,
    CdkDropListGroup,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  providers: [DashboardService],
})
export default class Dashboard implements OnInit, OnDestroy {
  dashboardService = inject(DashboardService);
  dashboard = viewChild.required<ElementRef>('dashboard');
  // clearAnimations: () => void = () => {};
  clearAnimations = () =>  {};



  ngOnInit(): void {
    // wrapGrid(this.dashboard().nativeElement, {duration: 300})
    const { unwrapGrid } = wrapGrid(this.dashboard().nativeElement, { duration: 300 });
    this.clearAnimations = unwrapGrid;

  }

  ngOnDestroy(): void {
    this.clearAnimations();
  }
  

  drop(event: CdkDragDrop<number, any>) {
    const {previousContainer, container} = event;
    this.dashboardService.updateWidgetPosition(previousContainer.data, container.data)
  }
}
