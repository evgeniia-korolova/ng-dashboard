import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-outlined-buttons',
  imports: [MatButtonModule],
  templateUrl: './outlined-buttons.html',
  styleUrl: './outlined-buttons.scss',
})
export class OutlinedButtons {
  variantClasses = input.required<string>()
}
