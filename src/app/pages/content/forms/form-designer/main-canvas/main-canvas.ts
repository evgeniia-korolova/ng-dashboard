import { Component, signal } from '@angular/core';
import { FormEditor } from "./form-editor/form-editor";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormPreview } from "./form-preview/form-preview";

@Component({
  selector: 'app-main-canvas',
  imports: [FormEditor, MatButtonToggleModule, FormPreview],
  templateUrl: './main-canvas.html',
  styleUrl: './main-canvas.scss',
})
export class MainCanvas {
  activeTab = signal<'editor' | 'preview'>('editor')
}
