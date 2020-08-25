import { Component, OnInit } from '@angular/core';
import {RegisterModel} from '../models/registermodel';
import { AuthService } from '../_services/auth.service';
import { FormGroup, Validators, FormBuilder ,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  constructor(public authService: AuthService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['male'],
      phonenumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      retyped_password: ['', Validators.required]
    }, {validator: this.passwordMatchValidator}
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('retyped_password').value ? null : {'mismatch': true};
  }

  register() {
    var model = new RegisterModel(this.registerForm.value.firstname,
                                   this.registerForm.value.lastname,
                                   this.registerForm.value.username,
                                   this.registerForm.value.gender,
                                   this.registerForm.value.email,
                                   this.registerForm.value.phonenumber,
                                   this.registerForm.value.password);
      this.authService.register(model).subscribe(
      next => {
        console.log('signed up successfully');
      },
      error => {
        console.log('Error');
      },
      () => {
        
      }
    );
  }

  
}
