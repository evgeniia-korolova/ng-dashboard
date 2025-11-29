import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@Component({
  selector: 'app-toggle-groups-buttons',
  imports: [MatButtonToggleModule, FormsModule],
  templateUrl: './toggle-groups-buttons.html',
  styleUrl: './toggle-groups-buttons.scss',
})
export class ToggleGroupsButtons {
  favoriteColor = signal<string>('red')
  favoriteSmallColor = signal<string>('red')
}
