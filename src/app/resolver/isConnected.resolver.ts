import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
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
    if (localStorage.getItem('auth_token')) {
      this._member.isConnectedObservable.next(true);
      this._member.getMyProfil().subscribe({
        next: (data: Profile) => {
          this._member.defineUser(data);
        },
        error: (error) => {
          this._member.isConnectedObservable.next(false);

          this._router.navigate(['home']);

          return false;
        }
      });

      return true;
    }

    this._router.navigate(['home']);

    return false;
  }
}
