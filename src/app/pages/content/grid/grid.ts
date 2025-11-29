import { Component, signal } from '@angular/core';
import { CardContent } from './models/card.model';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridCard } from "./grid-card/grid-card";
import { v4 as uuidv4 } from 'uuid';
import { MatButtonToggleGroup, MatButtonToggleModule } from "@angular/material/button-toggle";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grid',
  imports: [MatGridListModule, GridCard, MatButtonToggleGroup, MatButtonToggleModule, FormsModule],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
})
export default class Grid {
  cards = signal<CardContent[]>([]);
  size = signal('');

  constructor() {
    const newCards: CardContent[] = []

    for(let i = 0; i < 6; i++) {
      newCards.push({
        id: uuidv4(),
        title: `Card ${i + 1}`,
        description: `Description for card ${i + 1}`,
        image: `/cat-img.webp`
      })
    }
    this.cards.set(newCards)
  }
}
