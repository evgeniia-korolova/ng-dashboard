import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-simple-form',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './simple-form.html',
  styleUrl: './simple-form.scss',
})
export default class SimpleForm {
  name = signal('')
  email = signal('')
  phone = signal('')

  saving = signal(false)

  save() {
    this.saving.set(true)
    setTimeout(() => this.saving.set(false), 1000)
  }
}
