import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginModel } from '../models/loginmodel';
import { RegisterModel } from '../models/registermodel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = environment.apiUrl + 'auth/';

constructor(private http: HttpClient) { }

  login(model: LoginModel) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            localStorage.setItem('user', JSON.stringify(user.user));
          }
        })
      );
  }
  
  register(model: RegisterModel)
  {
    return this.http.post(this.baseUrl + 'register', model);
  }
  
}
