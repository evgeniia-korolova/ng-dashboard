import { Component, computed, signal } from '@angular/core';
import { FilledButtons } from './filled-buttons/filled-buttons';
import { ElevatedButtons } from './elevated-buttons/elevated-buttons';
import { OutlinedButtons } from './outlined-buttons/outlined-buttons';
import { TextButtons } from './text-buttons/text-buttons';
import { IconButtons } from './icon-buttons/icon-buttons';
import { IconButtonButtons } from './icon-button-buttons/icon-button-buttons';
import { ToggleGroupsButtons } from './toggle-groups-buttons/toggle-groups-buttons';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  imports: [
    FilledButtons,
    ElevatedButtons,
    OutlinedButtons,
    TextButtons,
    IconButtons,
    IconButtonButtons,
    ToggleGroupsButtons,
    MatButtonToggleModule,
    FormsModule
  ],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export default class Buttons {
  shape = signal('');
  size = signal('');

  variantClasses = computed(() => {
    return `${this.shape()} ${this.size()}`
  })
}
