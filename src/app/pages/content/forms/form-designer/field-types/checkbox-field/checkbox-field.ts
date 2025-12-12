
import { Component, input, model } from '@angular/core';
import { FormField } from '../../models/field.interface';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-checkbox-field',
  imports: [MatCheckboxModule, FormsModule,],
  templateUrl: './checkbox-field.html',
  styleUrl: './checkbox-field.scss',
})
export class CheckboxField {
  field = input.required<FormField>();
  readonly checked = model(false);
}
