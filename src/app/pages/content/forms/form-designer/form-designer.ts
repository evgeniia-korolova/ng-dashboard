import { MatButtonModule } from '@angular/material/button';
import { Component, inject } from '@angular/core';
import { FormElementsMenu } from "./form-elements-menu/form-elements-menu";
import { MainCanvas } from "./main-canvas/main-canvas";
import { FieldSettings } from "./field-settings/field-settings";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from "@angular/material/icon";
import { ExportFormService } from './services/export-form-service';

@Component({
  selector: 'app-form-designer',
  imports: [FormElementsMenu, MainCanvas, FieldSettings, DragDropModule, MatIconModule, MatButtonModule],
  templateUrl: './form-designer.html',
  styleUrl: './form-designer.scss',
})
export default class FormDesigner {
  exportFormService = inject(ExportFormService)
}
