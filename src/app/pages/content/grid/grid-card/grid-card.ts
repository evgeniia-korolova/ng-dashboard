import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardContent } from '../models/card.model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-grid-card',
  imports: [MatCardModule, MatButtonModule, MatIcon, MatIconButton ],
  templateUrl: './grid-card.html',
  styleUrl: './grid-card.scss',
})
export class GridCard {
cardContent = input.required<CardContent>();
variantSize = input.required<string>()
}
