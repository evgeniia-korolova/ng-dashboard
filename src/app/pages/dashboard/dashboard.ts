import { Component, inject } from '@angular/core';
import { DashboardWidget } from "../../widgets/dashboard-widget/dashboard-widget";
import { DashboardService } from './services/dashboard-service';


@Component({
  selector: 'app-dashboard',
  imports: [DashboardWidget, ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  providers: [DashboardService]
})
export default class Dashboard {
  dashboardService = inject(DashboardService);
  widgets = this.dashboardService.widgets();
}
