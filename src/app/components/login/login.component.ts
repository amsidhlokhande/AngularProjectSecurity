import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenStorageService } from 'src/app/services/tokenstorage.service';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
} )
export class LoginComponent implements OnInit {
  userForm: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor ( private authService: AuthenticationService, private tokenStorage: TokenStorageService ) { }

  ngOnInit() {
    if ( this.tokenStorage.getAuthToken() ) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUserToken().roles;
    }
  }

  onSubmit() {
    this.authService.signIn( this.userForm ).subscribe(
      data => {
        this.tokenStorage.saveAuthToken( data.accessToken );
        this.tokenStorage.saveUserToken( data );

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUserToken().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
