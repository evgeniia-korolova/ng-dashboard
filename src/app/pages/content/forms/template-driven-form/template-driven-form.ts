import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-template-driven-form',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss',
})
export default class TemplateDrivenForm {
  name = signal('')
  email = signal('')
  phone = signal('')

  saving = signal(false)

  save() {
    this.saving.set(true)
    setTimeout(() => this.saving.set(false), 1000)
  }
}
