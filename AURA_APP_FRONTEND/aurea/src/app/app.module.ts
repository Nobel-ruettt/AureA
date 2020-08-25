import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarSignoutComponent } from './navbar-signout/navbar-signout.component';
import { LandingPageComponent } from './LandingPage/LandingPage.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { AuthService } from './_services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [				
    AppComponent,
      NavbarSignoutComponent,
      LandingPageComponent,
      SignInFormComponent,
      SignUpComponent
   ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
