import { Component, OnInit } from '@angular/core';
import { HttpAPIService } from 'src/app/services/httpapi.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
} )
export class HomeComponent implements OnInit {

  publicBoardContent: string;

  constructor ( private httpAPIService: HttpAPIService ) { }

  ngOnInit(): void {
    this.httpAPIService.getPublicContent().subscribe(
      response => {
        console.log( response );
        this.publicBoardContent = response;
      },
      err => {
        console.error( err );
        //this.publicBoardContent = JSON.parse( err.error ).message;
      }
    );
  }

}
