import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/tokenstorage.service';

@Component( {
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
} )
export class ProfileComponent implements OnInit {

  userProfile: any;
  constructor ( private tokenStorageService: TokenStorageService ) { }

  ngOnInit(): void {
    this.userProfile = this.tokenStorageService.getUserToken();
  }

}
