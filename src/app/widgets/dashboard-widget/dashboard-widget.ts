import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component, input, signal } from '@angular/core';
import { Widget } from '../../shared/models/dashboard.model';
import { NgComponentOutlet } from '@angular/common';
import { WidgetOptions } from "./widget-options/widget-options";

@Component({
  selector: 'app-dashboard-widget',
  imports: [NgComponentOutlet, MatButtonModule, MatIcon, WidgetOptions],
  templateUrl: './dashboard-widget.html',
  styleUrl: './dashboard-widget.scss',
  host: {
    '[style.grid-area]': '"span " + (data().rows ?? 1) + " / span " + (data().columns ?? 1)'
  }
  
  
})
export class DashboardWidget {
  data = input.required<Widget>();

  showOptions = signal(false);


}
