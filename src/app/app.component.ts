import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/tokenstorage.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent implements OnInit {
  title = 'AngularProjectSecurity';
  isLoggedIn: boolean = false;
  adminDashBoard: boolean = false;
  moderatorDashBoard: boolean = false;
  username: string;
  private roles: string[];

  constructor ( private tokenStorageService: TokenStorageService ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getAuthToken();
    if ( this.isLoggedIn ) {
      let user = this.tokenStorageService.getUserToken();
      this.username = user.username;
      this.roles = user.roles;

      this.adminDashBoard = this.roles.includes( 'ROLE_ADMIN' );
      this.moderatorDashBoard = this.roles.includes( 'ROLE_MODERATOR' );

    }
  }

  public logout() {
    this.tokenStorageService.logout();
  }

}
