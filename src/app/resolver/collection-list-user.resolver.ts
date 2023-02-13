import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { Item } from '../shared/models/item.model';
import { CollectionService } from '../shared/services/collection.service';
import { MemberService } from '../shared/services/member.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionListUserResolver implements Resolve<boolean> {
  constructor(
    private _member: MemberService,
    private _listCollectionService: CollectionService,
    private _router: Router
  ) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<any> | any {
    this._member.isConnectedObservable.next(true);

    return this._listCollectionService.getListItemUser().pipe(
      tap((data: any) => {
        this._listCollectionService.defineCurrentUserItemlist(data);
      }),
      catchError((error) => {
        this._member.isConnectedObservable.next(false);
        localStorage.clear();
        if (state.url !== '/home') {
          this._router.navigate(['/home']);
        }
        return of(error);
      })
    );
  }
}
