import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_API_URL = 'http://localhost:8181/api/test/';
const options = {
  responseType: 'text' as 'json'
}

@Injectable( {
  providedIn: 'root'
} )
export class HttpAPIService {

  constructor ( private httpClient: HttpClient ) { }

  getPublicContent(): Observable<any> {
    return this.httpClient.get( BASE_API_URL + 'all', options );
  }

  getUserContent(): Observable<any> {
    return this.httpClient.get( BASE_API_URL + 'user', options );
  }


  getModeratorContent(): Observable<any> {
    return this.httpClient.get( BASE_API_URL + 'mod', options );
  }

  getAdminContent(): Observable<any> {
    return this.httpClient.get( BASE_API_URL + 'admin', options );
  }


}
