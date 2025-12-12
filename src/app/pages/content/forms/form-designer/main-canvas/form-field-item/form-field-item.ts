import { Component, computed, inject, input } from '@angular/core';
import { FormField } from '../../models/field.interface';
import { FieldTypesService } from '../../services/field-types-service';
import { TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormService } from '../../services/form-service';

import { FieldPreview } from "../field-preview/field-preview";

@Component({
  selector: 'app-form-field-item',
  imports: [TitleCasePipe, MatButtonModule, MatIconModule, FieldPreview],
  templateUrl: './form-field-item.html',
  styleUrl: './form-field-item.scss',
})
export class FormFieldItem {
  field = input.required<FormField>();
 
  formService = inject(FormService) 

  deleteField(e: Event) {
     e.stopPropagation();
     this.formService.deleteField(this.field().id)
  }
}
