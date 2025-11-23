import { computed, Injectable, signal } from '@angular/core';
import { Widget } from '../../../shared/models/dashboard.model';
import { Subscribers } from '../wedgets/subscribers/subscribers';
import { Views } from '../wedgets/views/views';
import { WatchTime } from '../wedgets/watch-time/watch-time';
import { Revenue } from '../wedgets/revenue/revenue';

@Injectable()
export class DashboardService {  

  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Sudscribers',
      content: Subscribers,
      backgroundColor: {
        light: 'rgb(201, 151, 252)',
        dark: '#f9dbf9'
      },
      color: {
        light: 'whitesmoke',
        dark: 'black'
      }
    },
    {
      id: 2,
      label: 'Views',
      content: Views,
      backgroundColor: {
        light: '#003f5c',
        dark: '#e94fe9'
      },
      color: {
        light: 'whitesmoke',
        dark: 'whitesmoke'
      }
    },
    {
      id: 3,
      label: 'Watch Time',
      content: WatchTime,
      backgroundColor: {
        light: '#003f5c',
        dark: '#e94fe9'
      },
      color: {
        light: 'whitesmoke',
        dark: 'whitesmoke'
      }
    },
    {
      id: 4,
      label: 'Revenue',
      content: Revenue,
      backgroundColor: {
        light: '#003f5c',
        dark: '#e94fe9'
      },
      color: {
        light: 'whitesmoke',
        dark: 'whitesmoke'
      }
    },
  ])

  addedWidgets = signal<Widget[]>([
    {
      id: 5,
      label: 'Sudscribers',
      content: Subscribers,
      rows: 1,
      columns: 1,
      backgroundColor: {
        light: 'rgb(56, 156, 238)',
        dark: '#a507a0'
      },
      color: {
        light: 'whitesmoke',
        dark: 'whitesmoke'
      }    
    },
    {
      id: 6,
      label: 'Views',
      content: Views,
      rows: 2,
      columns: 2,
      backgroundColor: {
        light: '#003f5c',
        dark: 'rgb(125, 0, 250)'
      },
      color: {
        light: 'whitesmoke',
        dark: 'whitesmoke'
      }
    },
    {
      id: 7,
      label: 'Watch Time',
      content: WatchTime,
      backgroundColor: {
        light: '#81d4fa',
        dark: '#d5fa9e'
      },
      color: {
        light: 'black',
        dark: 'black'
      }
    },
    {
      id: 8,
      label: 'Revenue',
      content: Revenue,
      backgroundColor: {
        light: '#003f5c',
        dark: '#e94fe9'
      },
      color: {
        light: 'whitesmoke',
        dark: 'whitesmoke'
      }
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

  removeWidget(id: number) {
    this.addedWidgets.set(this.addedWidgets().filter(widg => widg.id !== id))
  }
}
