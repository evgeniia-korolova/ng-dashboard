import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatStepperModule, StepperOrientation } from '@angular/material/stepper';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-stepper',
  imports: [MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe, ],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
})
export default class Stepper {
  
  private fb = inject(FormBuilder);
  private _snackBar = inject(MatSnackBar);
  isLinear = signal(true);

  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this.fb.group({
    thirdCtrl: ['', Validators.required],
  });
  

  mainForm = this.fb.group({
    basic: this.fb.group({
      firstname:this.fb.control('',Validators.required),
      lastname:this.fb.control('',Validators.required)

    }),
    contact: this.fb.group({
      email:this.fb.control('',Validators.required),
      phone:this.fb.control('',Validators.required),      
    }),
    address: this.fb.group({
      street:this.fb.control('',Validators.required),
      city:this.fb.control('',Validators.required),
      zip:this.fb.control('',Validators.required)
    })
  });

  get Basicform(){
    return this.mainForm.get("basic") as FormGroup;
  }
  get contactform(){
    return this.mainForm.get("contact") as FormGroup;
  }
  get addressform(){
    return this.mainForm.get("address") as FormGroup;
  }  

  openSnackBar() {
    this._snackBar.open('Your form is successfuly submited', 'Close', {      
      panelClass: ['custom-snackbar']
    });
  }
  
  
  onSubmit() {
    console.log(this.mainForm.value);
    this.openSnackBar()
  }
  

  stepperOrientation: Observable<StepperOrientation>;

  constructor() {
    const breakpointObserver = inject(BreakpointObserver);

    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
