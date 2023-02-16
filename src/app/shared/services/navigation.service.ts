import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  currentItemComponent!: string;
  currentItemComponentObserval: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentItemComponent);
  constructor() { }

  currentItemComponentEmitter(componentName: string) {
    this.currentItemComponentObserval.next(componentName);
  }
}
