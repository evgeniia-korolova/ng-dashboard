import { Component, input } from '@angular/core';
import { Widget } from '../../shared/models/dashboard.model';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-dashboard-widget',
  imports: [NgComponentOutlet],
  templateUrl: './dashboard-widget.html',
  styleUrl: './dashboard-widget.scss',
})
export class DashboardWidget {
  data = input.required<Widget>()
}
