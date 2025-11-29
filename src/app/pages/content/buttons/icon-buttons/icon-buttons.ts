import { Component, input } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-icon-buttons',
  imports: [MatButtonModule, MatIcon, MatIconButton],
  templateUrl: './icon-buttons.html',
  styleUrl: './icon-buttons.scss',
})
export class IconButtons {
  variantClasses = input.required<string>()
}
