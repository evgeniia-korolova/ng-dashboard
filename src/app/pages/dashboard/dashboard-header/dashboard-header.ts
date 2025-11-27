import { Widget } from './../../../shared/models/dashboard.model';
import { CdkDragDrop, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardService } from '../services/dashboard-service';
import { MatButtonModule } from '@angular/material/button';
import { WidgetsPannel } from "../../../widgets/widgets-pannel/widgets-pannel";

@Component({
  selector: 'app-dashboard-header',
  imports: [MatIcon, MatMenuModule, MatButtonModule, WidgetsPannel, CdkDropList, CdkDrag],
  templateUrl: './dashboard-header.html',  
})
export class DashboardHeader {
  dashboardService = inject(DashboardService);
  widgetsOpen = signal<boolean>(false);

  widgetPutBack(event: CdkDragDrop<number, any>) {
    const {previousContainer} = event;
    this.dashboardService.removeWidget(previousContainer.data)
  }
}
