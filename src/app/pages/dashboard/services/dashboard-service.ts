import { Injectable, signal } from '@angular/core';
import { Widget } from '../../../shared/models/dashboard.model';
import { Subscribers } from '../wedgets/subscribers/subscribers';
import { Views } from '../wedgets/views/views';

@Injectable()
export class DashboardService {  

  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Sudscribers',
      content: Subscribers
    },
    {
      id: 2,
      label: 'Views',
      content: Views
    },
  ])
}
