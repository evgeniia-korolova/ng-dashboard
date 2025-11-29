import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-text-buttons',
  imports: [MatButtonModule],
  templateUrl: './text-buttons.html',
  styleUrl: './text-buttons.scss',
})
export class TextButtons {
  variantClasses = input.required<string>()
}
