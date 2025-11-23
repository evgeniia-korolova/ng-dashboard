import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { Widget } from '../../shared/models/dashboard.model';
import { NgComponentOutlet } from '@angular/common';
import { WidgetOptions } from "./widget-options/widget-options";
import { ThemeService } from '../../core/services/theme-service';

@Component({
  selector: 'app-dashboard-widget',
  imports: [NgComponentOutlet, MatButtonModule, MatIcon, WidgetOptions],
  templateUrl: './dashboard-widget.html',
  styleUrl: './dashboard-widget.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.grid-area]': '"span " + (data().rows ?? 1) + " / span " + (data().columns ?? 1)'
  }
  
  
})
export class DashboardWidget {
  themeService = inject(ThemeService)
  data = input.required<Widget>();
  theme = this.themeService.theme;

  showOptions = signal(false);


}
