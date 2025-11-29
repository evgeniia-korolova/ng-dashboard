import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tonal-buttons',
  imports: [MatButtonModule],
  templateUrl: './tonal-buttons.html',
  styleUrl: './tonal-buttons.scss',
})
export class TonalButtons {
  variantClasses = input.required<string>()
}
