import { Component, OnInit } from '@angular/core';
import { HttpAPIService } from 'src/app/services/httpapi.service';

@Component( {
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: [ './adminboard.component.css' ]
} )
export class AdminBoardComponent implements OnInit {
  adminBoardContent: string;
  constructor ( private httpAPIService: HttpAPIService ) { }

  ngOnInit(): void {
    this.httpAPIService.getAdminContent().subscribe(
      response => {
        console.log( response );
        this.adminBoardContent = response;
      },
      err => {
        console.error( err.error.message );
        this.adminBoardContent = JSON.parse( err.error ).message;
      }
    );
  }

}
