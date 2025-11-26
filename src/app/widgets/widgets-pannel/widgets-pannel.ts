import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DashboardService } from '../../pages/dashboard/services/dashboard-service';
import { CdkDrag, CdkDragPlaceholder } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-widgets-pannel',
  imports: [MatIcon, CdkDrag, CdkDragPlaceholder],
  templateUrl: './widgets-pannel.html',
  styleUrl: './widgets-pannel.scss',
})
export class WidgetsPannel {
  dashboardService = inject(DashboardService);
}
