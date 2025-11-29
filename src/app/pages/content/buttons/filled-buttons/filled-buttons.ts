import { Component, input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-filled-buttons',
  imports: [MatButtonModule],
  templateUrl: './filled-buttons.html',
  styleUrl: './filled-buttons.scss',
})
export class FilledButtons {
  variantClasses = input.required<string>()
}
