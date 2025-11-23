import { Component, inject, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { Widget } from '../../../shared/models/dashboard.model';
import { DashboardService } from '../../../pages/dashboard/services/dashboard-service';

@Component({
  selector: 'app-widget-options',
  imports: [MatButtonModule, MatIcon, MatButtonToggleModule],
  templateUrl: './widget-options.html',
  styleUrl: './widget-options.scss',
})
export class WidgetOptions {
  dashboardService = inject(DashboardService)
  data = input.required<Widget>()
  showOptions = model<boolean>(false)
}
