import { computed, Injectable, signal } from '@angular/core';
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

  addedWidgets = signal<Widget[]>([
    {
      id: 3,
      label: 'Sudscribers',
      content: Subscribers,
      
    },
    {
      id: 4,
      label: 'Views',
      content: Views,
      rows: 2,
      columns: 2,
    },
  ])
  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map(widg => widg.id);
    return this.widgets().filter(widg => !addedIds.includes(widg.id))
  })

  addWidget(widget: Widget) {
    this.addedWidgets.set([...this.addedWidgets(), {...widget}])
  }

  updateWidget(id: number, widget: Partial<Widget>) {
    const index = this.addedWidgets().findIndex(widg => widg.id === id)
    if(index !== -1) {
      const newWidgets = [...this.addedWidgets()]
      newWidgets[index] = {... newWidgets[index], ...widget}
      this.addedWidgets.set(newWidgets)
    }
  }

  moveWidgetToRight(id: number) {
    const index = this.addedWidgets().findIndex(widg => widg.id === id);
    if(index === this.addedWidgets().length - 1) {
      return
    }
    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index + 1]] = [{...newWidgets[index + 1]}, {...newWidgets[index]}];

    this.addedWidgets.set(newWidgets)
  }

  moveWidgetToLeft(id: number) {
    const index = this.addedWidgets().findIndex(widg => widg.id === id);
    if(index === 0) {
      return
    }
    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [{...newWidgets[index - 1]}, {...newWidgets[index]}];

    this.addedWidgets.set(newWidgets)
  }
}
