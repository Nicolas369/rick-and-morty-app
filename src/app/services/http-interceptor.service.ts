import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  /**
   * Normally this httpInterceptor would be used to add an authentication jwt to the request header,
   * like authorization: 'Bearer SOME_TOKEN'. 
   * For reasons of avoiding any problem with CORS policies in this app, 
   * an "Access-Control-Allow-Origin": all is added
   */

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const request = req.clone({
      setHeaders:
      {
        ['Access-Control-Allow-Origin']: '*',
        ['Access-Control-Allow-Methods']: '*',
        authorization: 'Bearer SOME_TOKEN'
      }
    });

    return next.handle(request);
  }

}
