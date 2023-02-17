import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Observable, tap } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const secureReq = req.clone({
      url: '/api' + req.url,
    });
    return next.handle(secureReq).pipe(
      tap({
        next: (event) =>
          console.info(event instanceof HttpResponse ? 'succeeded' : ''),
        error: (error) => console.info(error),
      })
    );
  }
}
