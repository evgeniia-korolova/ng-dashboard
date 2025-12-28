import { Component, signal, viewChild, effect } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { ListItem } from './models/list-item.interface';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-infinite-scroll',
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ScrollingModule,
    MatProgressSpinner,
  ],
  templateUrl: './infinite-scroll.html',
  styleUrl: './infinite-scroll.scss',
})
export default class InfiniteScroll {
  listItems = signal<ListItem[]>([]);
  scroller = viewChild<CdkVirtualScrollViewport>('scroller');
  loading = signal(false);

  constructor() {
    this.fetchMore();

    effect(() => {
      const viewport = this.scroller();
      if (!viewport) return;

      viewport.elementScrolled().subscribe(() => {
        const offset = viewport.measureScrollOffset('bottom');
        if (offset < 140) {
          this.fetchMore();
        }
      });
    });
  }

  fetchMore(): void {
    if (this.loading()) return;

    this.loading.set(true);

    setTimeout(() => {
      const currentLength = this.listItems().length;
      const newItems: ListItem[] = [];

      for (let i = 0; i < 20; i++) {
        const randomListNumber = Math.round(Math.random() * 1000);
        newItems.push({
          id: crypto.randomUUID(),
          title: `List Item ${currentLength + i + 1}`,
          description: `Description for item #${currentLength + i + 1}`,
          image: `https://picsum.photos/seed/${randomListNumber}/50/50`,
          // image: `https://dummyimage.com/50x50/000/fff&text=${currentLength + i + 1}`,
          downloads: randomListNumber,
          showDetails: false,
        });
      }

      this.listItems.update((items) => [...items, ...newItems]);
      this.loading.set(false);
    }, 1000);
  }

  toggleDetails(id: string) {
    this.listItems.update((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, showDetails: !item.showDetails } 
          : item
      )
    );
  }
}
