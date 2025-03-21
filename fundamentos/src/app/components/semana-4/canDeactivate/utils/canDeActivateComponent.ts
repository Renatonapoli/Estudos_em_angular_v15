import { Observable } from 'rxjs';

export interface CanDeActivateComponent {
  canExit: () => boolean | Observable<boolean>;
}
