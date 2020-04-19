import { Component, OnInit } from '@angular/core';
import { HttpAPIService } from 'src/app/services/httpapi.service';

@Component( {
  selector: 'app-moderatorboard',
  templateUrl: './moderatorboard.component.html',
  styleUrls: [ './moderatorboard.component.css' ]
} )
export class ModeratorBoardComponent implements OnInit {

  moderatorBoardContent: string;
  constructor ( private httpAPIService: HttpAPIService ) { }

  ngOnInit(): void {
    this.httpAPIService.getModeratorContent().subscribe(
      response => {
        console.log( response );
        this.moderatorBoardContent = response;
      },
      err => {
        console.error( err.error.message );
        this.moderatorBoardContent = JSON.parse( err.error ).message;
      }
    );
  }


}
