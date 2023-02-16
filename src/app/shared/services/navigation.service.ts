import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  currentItemComponent!: string;
  isNavigate: boolean = false;
  currentItemComponentObserval: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentItemComponent);
  isNavigateObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isNavigate);
  constructor() { }

  currentItemComponentEmitter(componentName: string) {
    this.currentItemComponentObserval.next(componentName);
  }

  isNavigateEmitter(boolean: boolean) {
    this.isNavigateObservable.next(boolean);
  }
}
