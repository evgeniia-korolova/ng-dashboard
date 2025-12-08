import { CheckboxField } from '../field-types/checkbox-field/checkbox-field';
import { TextField } from '../field-types/text-field/text-field';
import { FieldTypeDefinition } from './../models/field.interface';
import { Injectable } from '@angular/core';

const TEXT_FIELD_DEFINITION = {
  type: 'text',
  label: 'Text Field',
  icon: 'text_fields',
  defaultConfig: {
    label: 'Text Field',
    required: false
  },
  component: TextField
}
const CHECKBOX_FIELD_DEFINITION = {
  type: 'checkbox',
  label: 'Checkbox',
  icon: 'check_box',
  defaultConfig: {
    label: 'Checkbox',
    required: false
  },
  component: CheckboxField
}


@Injectable({
  providedIn: 'root',
})
export class FieldTypesService {
  fieldTypes = new Map<string, FieldTypeDefinition>([
    ['text', TEXT_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION]
  ])

  getFieldType(type: string): FieldTypeDefinition | undefined {
    return this.fieldTypes.get(type)
  }

  getAllFieldTypes():FieldTypeDefinition[] {
    return Array.from(this.fieldTypes.values())
  }
}
