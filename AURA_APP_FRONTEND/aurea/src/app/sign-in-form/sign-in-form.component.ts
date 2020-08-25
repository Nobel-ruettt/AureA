import { Component, OnInit } from '@angular/core';
import {LoginModel } from '../models/loginmodel';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  model = new LoginModel("","");

  onSubmit() { 
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Logged in successfully');
      },
      error => {
        console.log('Error');
      },
      () => {
        
      }
    );
  }

}
