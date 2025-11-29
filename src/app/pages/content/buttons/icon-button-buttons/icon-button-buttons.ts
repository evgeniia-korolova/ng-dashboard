import { Component, input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-icon-button-buttons',
  imports: [MatButtonModule, MatIcon],
  templateUrl: './icon-button-buttons.html',
  styleUrl: './icon-button-buttons.scss',
})
export class IconButtonButtons {
  variantClasses = input.required<string>()

  
  
}
