import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageService } from './tokenstorage.service';

const BASE_AUTH_API = 'http://localhost:8181/api/auth/';
const options = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  } )
}
@Injectable( {
  providedIn: 'root'
} )
export class AuthenticationService {

  constructor ( private httpClient: HttpClient, private tokenStorageService: TokenStorageService ) { }

  public signUp( userSignUpForm: any ): Observable<string> {
    return this.httpClient.post<string>( BASE_AUTH_API + 'signup',
      {
        username: userSignUpForm.username,
        email: userSignUpForm.email,
        password: userSignUpForm.password,
        roles: userSignUpForm.roles
      }, options );
  }

  public signIn( userSignInForm: any ): Observable<any> {
    return this.httpClient.post<any>( BASE_AUTH_API + 'signin',
      {
        username: userSignInForm.username,
        password: userSignInForm.password
      }, options );
  }
}
