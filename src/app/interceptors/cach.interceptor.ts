import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({
      setHeaders :{
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    return next.handle(req);
  }
}