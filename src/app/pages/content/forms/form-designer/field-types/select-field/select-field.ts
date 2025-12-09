import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from "@angular/material/select";
import { FormField } from '../../models/field.interface';

@Component({
  selector: 'app-select-field',
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './select-field.html',
  styleUrl: './select-field.scss',
})
export class SelectField {
  field = input.required<FormField>()
}
