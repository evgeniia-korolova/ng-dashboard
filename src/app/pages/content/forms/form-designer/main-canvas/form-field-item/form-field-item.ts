import { Component, computed, inject, input } from '@angular/core';
import { FormField } from '../../models/field.interface';
import { FieldTypesService } from '../../services/field-types-service';
import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormService } from '../../services/form-service';

@Component({
  selector: 'app-form-field-item',
  imports: [NgComponentOutlet, TitleCasePipe, MatButtonModule, MatIconModule],
  templateUrl: './form-field-item.html',
  styleUrl: './form-field-item.scss',
})
export class FormFieldItem {
  field = input.required<FormField>();

  fieldTypeService = inject(FieldTypesService);
  formService = inject(FormService)

  previewComponent = computed(() => {
    const type = this.fieldTypeService.getFieldType(this.field().type);
    return type?.component ?? null
  })

  deleteField(e: Event) {
     e.stopPropagation();
     this.formService.deleteField(this.field().id)
  }
}
