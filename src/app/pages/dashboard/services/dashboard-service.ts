import { computed, effect, Injectable, signal } from '@angular/core';
import { Widget } from '../../../shared/models/dashboard.model';
import { Subscribers } from '../wedgets/subscribers/subscribers';
import { Views } from '../wedgets/views/views';
import { WatchTime } from '../wedgets/watch-time/watch-time';
import { Revenue } from '../wedgets/revenue/revenue';
import { Analytics } from '../wedgets/analytics/analytics';

@Injectable()
export class DashboardService {
  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Sudscribers',
      content: Subscribers,
      rows: 1,
      columns: 1,
      backgroundColor: {
        light: 'rgb(56, 156, 238)',
        dark: '#a507a0',
      },
      color: {
        light: 'whitesmoke',
        dark: 'whitesmoke',
      },
    },
    {
      id: 2,
      label: 'Views',
      content: Views,
      rows: 2,
      columns: 1,
      backgroundColor: {
        light: '#003f5c',
        dark: 'rgb(125, 0, 250)',
      },
      color: {
        light: 'whitesmoke',
        dark: 'whitesmoke',
      },
    },
    {
      id: 3,
      label: 'Watch Time',
      content: WatchTime,
      rows: 2,
      columns: 2,
      backgroundColor: {
        light: '#81d4fa',
        dark: '#d5fa9e',
      },
      color: {
        light: 'black',
        dark: 'black',
      },
    },
    {
      id: 4,
      label: 'Revenue',
      content: Revenue,
      rows: 1,
      columns: 3,
      backgroundColor: {
        light: '#003f5c',
        dark: '#e94fe9',
      },
      color: {
        light: 'whitesmoke',
        dark: 'whitesmoke',
      },
    },
    {
      id: 5,
      label: 'Channel Analytics',
      content: Analytics,
      rows: 2,
      columns: 2,
      backgroundColor: {
        light: '#fdf7fd',
        dark: '#fdf7fd',
      },
      color: {
        light: 'black',
        dark: 'black',
      },
    },
  ]);

  addedWidgets = signal<Widget[]>([
    // {
    //   id: 5,
    //   label: 'Sudscribers',
    //   content: Subscribers,
    //   rows: 1,
    //   columns: 1,
    //   backgroundColor: {
    //     light: 'rgb(56, 156, 238)',
    //     dark: '#a507a0'
    //   },
    //   color: {
    //     light: 'whitesmoke',
    //     dark: 'whitesmoke'
    //   }
    // },
    // {
    //   id: 6,
    //   label: 'Views',
    //   content: Views,
    //   rows: 2,
    //   columns: 2,
    //   backgroundColor: {
    //     light: '#003f5c',
    //     dark: 'rgb(125, 0, 250)'
    //   },
    //   color: {
    //     light: 'whitesmoke',
    //     dark: 'whitesmoke'
    //   }
    // },
    // {
    //   id: 7,
    //   label: 'Watch Time',
    //   content: WatchTime,
    //   backgroundColor: {
    //     light: '#81d4fa',
    //     dark: '#d5fa9e'
    //   },
    //   color: {
    //     light: 'black',
    //     dark: 'black'
    //   }
    // },
    // {
    //   id: 8,
    //   label: 'Revenue',
    //   content: Revenue,
    //   backgroundColor: {
    //     light: '#003f5c',
    //     dark: '#e94fe9'
    //   },
    //   color: {
    //     light: 'whitesmoke',
    //     dark: 'whitesmoke'
    //   }
    // },
  ]);

  constructor() {
    this.fetchWidgets();
  }

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((widg) => widg.id);
    return this.widgets().filter((widg) => !addedIds.includes(widg.id));
  });

  fetchWidgets() {
    const widgetsAsString = localStorage.getItem('dashboardWidgets');
    if (widgetsAsString) {
      const widgets = JSON.parse(widgetsAsString) as Widget[];
      widgets.forEach((widget) => {
        const content = this.widgets().find((widg) => widg.id === widget.id)?.content;
        if (content) {
          widget.content = content;
        }
      });
      this.addedWidgets.set(widgets);
    }
  }

  addWidget(widget: Widget) {
    this.addedWidgets.set([...this.addedWidgets(), { ...widget }]);
  }

  updateWidget(id: number, widget: Partial<Widget>) {
    const index = this.addedWidgets().findIndex((widg) => widg.id === id);
    if (index !== -1) {
      const newWidgets = [...this.addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget };
      this.addedWidgets.set(newWidgets);
    }
  }

  moveWidgetToRight(id: number) {
    const index = this.addedWidgets().findIndex((widg) => widg.id === id);
    if (index === this.addedWidgets().length - 1) {
      return;
    }
    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index + 1]] = [
      { ...newWidgets[index + 1] },
      { ...newWidgets[index] },
    ];

    this.addedWidgets.set(newWidgets);
  }

  moveWidgetToLeft(id: number) {
    const index = this.addedWidgets().findIndex((widg) => widg.id === id);
    if (index === 0) {
      return;
    }
    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [
      { ...newWidgets[index - 1] },
      { ...newWidgets[index] },
    ];

    this.addedWidgets.set(newWidgets);
  }

  removeWidget(id: number) {
    this.addedWidgets.set(this.addedWidgets().filter((widg) => widg.id !== id));
  }

  saveWidgets = effect(() => {
    const widgetsWithoutContent: Partial<Widget>[] = this.addedWidgets().map((widg) => ({
      ...widg,
    }));
    widgetsWithoutContent.forEach((widg) => {
      delete widg.content;
    });

    localStorage.setItem('dashboardWidgets', JSON.stringify(widgetsWithoutContent));
  });
}
