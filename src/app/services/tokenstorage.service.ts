import { Injectable } from '@angular/core';

const AUTH_TOKEN = "auth-token";
const USER_TOKEN = "user-token";

@Injectable( {
  providedIn: 'root'
} )
export class TokenStorageService {

  constructor () { }

  public saveAuthToken( authToken: string ) {
    window.sessionStorage.removeItem( AUTH_TOKEN );
    window.sessionStorage.setItem( AUTH_TOKEN, authToken );
  }
  public getAuthToken() {
    return window.sessionStorage.getItem( AUTH_TOKEN );
  }

  public saveUserToken( userToken: any ) {
    window.sessionStorage.removeItem( USER_TOKEN );
    window.sessionStorage.setItem( USER_TOKEN, JSON.stringify( userToken ) );
  }

  public getUserToken() {
    return JSON.parse( window.sessionStorage.getItem( USER_TOKEN ) );
  }

  logout() {
    window.sessionStorage.clear();
  }
}
