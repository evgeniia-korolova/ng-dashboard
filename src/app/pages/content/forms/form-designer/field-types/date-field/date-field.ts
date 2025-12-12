import { Component, input } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormField } from '../../models/field.interface';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-date-field',
  imports: [MatFormFieldModule, MatDatepickerModule, MatInputModule, MatNativeDateModule],
  templateUrl: './date-field.html',
  styleUrl: './date-field.scss',
})
export class DateField {
  field = input.required<FormField>()
}
