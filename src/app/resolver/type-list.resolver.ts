import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, Observable, of, tap } from "rxjs";
import { Profile } from "../shared/models/profile.model";
import { CollectionService } from "../shared/services/collection.service";
import { MemberService } from "../shared/services/member.service";



@Injectable({ providedIn: 'root' })
export class TypeList implements Resolve<any> {
  constructor(
    private _collection: CollectionService,
    private _router: Router,
    private _member: MemberService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    return this._collection.getAllTypes().pipe(
      tap((data: Profile) => {

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
