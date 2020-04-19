import { Component, OnInit } from '@angular/core';
import { HttpAPIService } from 'src/app/services/httpapi.service';

@Component( {
  selector: 'app-userboard',
  templateUrl: './userboard.component.html',
  styleUrls: [ './userboard.component.css' ]
} )
export class UserBoardComponent implements OnInit {

  userBoardContent: string;
  constructor ( private httpAPIService: HttpAPIService ) { }

  ngOnInit(): void {
    this.httpAPIService.getUserContent().subscribe(
      response => {
        console.log( response );
        this.userBoardContent = response;
      },
      err => {
        console.error( err );
        this.userBoardContent = JSON.parse( err.error ).message;
      }
    );
  }

}
