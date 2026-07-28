import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-enrollment.html',
  styleUrl: './reactive-enrollment.css'
})
export class ReactiveEnrollment {

  enrollForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    course: new FormControl('', Validators.required)
  });

  submit() {
    alert('Reactive Form Submitted Successfully');
    console.log(this.enrollForm.value);
  }

}