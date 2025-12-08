import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { FormService } from '../../services/form-service';
import { FieldTypeDefinition, FormField } from '../../models/field.interface';
import { FormFieldItem } from "../form-field-item/form-field-item";


@Component({
  selector: 'app-form-editor',
  imports: [DragDropModule, FormFieldItem],
  templateUrl: './form-editor.html',
  styleUrl: './form-editor.scss',
})
export class FormEditor {
  formService = inject(FormService);

onDropInRow(event: CdkDragDrop<string>, rowId: string) {
if(event.previousContainer.data === 'field-selector') {
  const fieldType = event.item.data as FieldTypeDefinition
  const newField: FormField = {
    id: crypto.randomUUID(),
    type: fieldType.type,
    ...fieldType.defaultConfig
  }
  this.formService.addField(newField, rowId, event.currentIndex)
  return
}

}
}
