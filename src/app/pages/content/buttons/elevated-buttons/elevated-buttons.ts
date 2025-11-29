import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-elevated-buttons',
  imports: [MatButtonModule],
  templateUrl: './elevated-buttons.html',
  styleUrl: './elevated-buttons.scss',
})
export class ElevatedButtons {
  variantClasses = input.required<string>()
}
