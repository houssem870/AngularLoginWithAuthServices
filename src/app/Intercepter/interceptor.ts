import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenServiceService } from '../Token/token-service.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private tokenService: TokenServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.tokenService.getToken();
    if(myToken){
      request = request.clone({
        setHeaders : {Authorization:`Bearer ${myToken}`}
      })
    }
    return next.handle(request);

  }
}
