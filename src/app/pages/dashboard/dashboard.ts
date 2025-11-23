import { Component, inject } from '@angular/core';
import { DashboardWidget } from "../../widgets/dashboard-widget/dashboard-widget";
import { DashboardService } from './services/dashboard-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-dashboard',
  imports: [DashboardWidget, MatButtonModule, MatIcon, MatMenuModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  providers: [DashboardService]
})
export default class Dashboard {
  dashboardService = inject(DashboardService);
  
}
