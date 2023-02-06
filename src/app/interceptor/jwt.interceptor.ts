import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MemberService } from "../shared/services/member.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _memberService: MemberService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this._memberService.checkConnection()) {

      req = req.clone({
        headers: req.headers.set("Content-type", "application/json")
      });

      if (localStorage.getItem('auth_token')) {
        req = req.clone({
          headers: req.headers.set("Authorization", `Bearer ${localStorage.getItem('auth_token')}`)
        });
      }
    }

    return next.handle(req);
  }
}
