import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarSignoutComponent } from './navbar-signout/navbar-signout.component';
import { LandingPageComponent } from './LandingPage/LandingPage.component';

@NgModule({
  declarations: [		
    AppComponent,
      NavbarSignoutComponent,
      LandingPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
