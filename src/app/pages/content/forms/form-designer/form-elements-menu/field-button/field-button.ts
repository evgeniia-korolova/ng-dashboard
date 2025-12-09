import { Component, input, signal } from '@angular/core';
import { FieldTypeDefinition } from '../../models/field.interface';
import { MatIconModule } from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop"

@Component({
  selector: 'app-field-button',
  imports: [MatIconModule, DragDropModule],
  templateUrl: './field-button.html',
  styleUrl: './field-button.scss',
})
export class FieldButton {
  readonly field = input.required<FieldTypeDefinition>();

  whileDragging = signal(false)
}
