import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private nameSource = new BehaviorSubject<string>('');
  currentName = this.nameSource.asObservable();

  updateName(newName: string) {
    this.nameSource.next(newName);
  }
}
