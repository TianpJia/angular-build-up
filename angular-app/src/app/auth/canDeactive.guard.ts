import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { StatisticsComponent } from '../statistics/statistics.component';
import { Observable } from 'rxjs';

export const canDeactivateGuard: CanDeactivateFn<StatisticsComponent> = (
  component: StatisticsComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean => {
  // Get the current URL
  console.log(state.url);
  console.log(route);
  return component.canDeactivate();
};
