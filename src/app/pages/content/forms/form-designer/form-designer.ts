import { Component } from '@angular/core';
import { FormElementsMenu } from "./form-elements-menu/form-elements-menu";
import { MainCanvas } from "./main-canvas/main-canvas";
import { FieldSettings } from "./field-settings/field-settings";
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-designer',
  imports: [FormElementsMenu, MainCanvas, FieldSettings, DragDropModule],
  templateUrl: './form-designer.html',
  styleUrl: './form-designer.scss',
})
export default class FormDesigner {

}
