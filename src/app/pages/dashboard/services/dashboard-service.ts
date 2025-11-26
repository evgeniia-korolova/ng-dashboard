import { computed, effect, Injectable, signal } from '@angular/core';
import { Widget } from '../../../shared/models/dashboard.model';
import { Subscribers } from '../widgets/subscribers/subscribers';
import { Views } from '../widgets/views/views';
import { WatchTime } from '../widgets/watch-time/watch-time';
import { Revenue } from '../widgets/revenue/revenue';
import { Analytics } from '../widgets/analytics/analytics';

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

  insertWidgetAtPosition(sourceWidgetId: number, destWidgetId: number) {
    const widgetToAdd = this.widgetsToAdd().find(widg => widg.id === sourceWidgetId);
    if(!widgetToAdd) {
      return;
    }

    const indexOfDestWidget = this.addedWidgets().findIndex(widg => widg.id === destWidgetId);
    const positionToAdd = indexOfDestWidget === -1 ? this.addedWidgets().length : indexOfDestWidget;

    const newWidgets = [...this.addedWidgets()]
    newWidgets.splice(positionToAdd, 0, widgetToAdd);
    this.addedWidgets.set(newWidgets)
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

  updateWidgetPosition(sourceWidgetId: number, targetWidgetId: number) {
    const sourceIndex = this.addedWidgets().findIndex(widg => widg.id === sourceWidgetId)
    if(sourceIndex === -1) {
      return
    }

    const newWidgets = [...this.addedWidgets()]
    const sourceWidget = newWidgets.splice(sourceIndex, 1)[0];

    const targetIndex = newWidgets.findIndex(widg => widg.id === targetWidgetId);
    if(targetWidgetId === -1) {
      return
    }

    const insertAt = targetIndex === sourceIndex ? targetIndex + 1 : targetIndex;

    newWidgets.splice(insertAt, 0, sourceWidget);
    this.addedWidgets.set(newWidgets)
  }


}
