import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private logger: Logger) {}
  isLoggedIn = true;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => (this.isLoggedIn = true))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.logger.log('logout');
  }
}
