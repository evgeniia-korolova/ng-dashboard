import { Component, input, signal } from '@angular/core';
import { FieldTypeDefinition } from '../../models/field.interface';
import { MatIconModule } from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop"
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-field-button',
  imports: [MatIconModule, DragDropModule, MatButtonModule],
  templateUrl: './field-button.html',
  styleUrl: './field-button.scss',
})
export class FieldButton {
  readonly field = input.required<FieldTypeDefinition>();

  whileDragging = signal(false)
}
