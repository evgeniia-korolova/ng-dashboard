import { NgComponentOutlet } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { FormField } from '../../models/field.interface';
import { FieldTypesService } from '../../services/field-types-service';

@Component({
  selector: 'app-field-preview',
  imports: [NgComponentOutlet],
  templateUrl: './field-preview.html',
  styleUrl: './field-preview.scss',
})
export class FieldPreview {
field = input.required<FormField>();
fieldTypeService = inject(FieldTypesService);

previewComponent = computed(() => {
  const type = this.fieldTypeService.getFieldType(this.field().type);
  return type?.component ?? null
})
}
