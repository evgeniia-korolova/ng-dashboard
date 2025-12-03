import { Component, model, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

interface Animal {
  name: string;
  sound: string;
}

interface Shoes {
  value: string;
  name: string;
}

@Component({
  selector: 'app-inputs',
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule
  ],
  templateUrl: './inputs.html',
  styleUrl: './inputs.scss',
  providers: [provideNativeDateAdapter()],
})
export default class Inputs {
  hide = signal(true);

  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  // select

  animalControl = new FormControl<Animal | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];

  // mat selection list

  optionsArray: string[] = ['Option 1', 'Option 2', 'Option 3', ];

  form: FormGroup;
  shoes: Shoes[] = [
    {value: 'boots', name: 'Boots'},
    {value: 'clogs', name: 'Clogs'},
    {value: 'loafers', name: 'Loafers'},
    {value: 'moccasins', name: 'Moccasins'},
    {value: 'sneakers', name: 'Sneakers'},
  ];
  shoesControl = new FormControl();

  constructor() {
    this.form = new FormGroup({
      clothes: this.shoesControl,
    });
  }

  // checkbox
  readonly checked = model(false);
  readonly indeterminate = model(false);

  // radio
  readonly labelPosition = model<'before' | 'after'>('after');
  readonly disabled = model(false);

}
