import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from './tokenstorage.service';

const AUTHORIZATION = 'Authorization';

@Injectable()
export class HttpRequestAuthInterceptorService implements HttpInterceptor {

  constructor ( private tokenStorageService: TokenStorageService ) { }

  intercept( req: HttpRequest<any>, next: HttpHandler ) {
    let authReq = req;
    let authToken = this.tokenStorageService.getAuthToken();
    if ( authToken != null ) {
      authReq = req.clone( { headers: req.headers.set( AUTHORIZATION, 'Bearer ' + authToken ) } );
    }
    console.log( 'authReq.headers: ' + authReq.headers.getAll );
    return next.handle( authReq );
  }

}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestAuthInterceptorService, multi: true }
];
