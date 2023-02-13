import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, Observable, of, tap } from "rxjs";
import { Profile } from "../shared/models/profile.model";
import { MemberService } from "../shared/services/member.service";


@Injectable({ providedIn: 'root' })
export class IsConnectedResolver implements Resolve<any> {
  constructor(
    private _member: MemberService,
    private _router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this._member.isConnectedObservable.next(true);

    return this._member.getMyProfil().pipe(
      tap((data: Profile) => {
        this._member.defineUser(data);
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
