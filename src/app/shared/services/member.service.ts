import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth_Register } from '../models/auth_register.model';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  urlAuth: string = environment.AUTH_PATH;
  urlRegister: string = environment.REGISTER_PATH;
  isConnected: boolean = false;
  isConnectedObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected);
  data?: any;

  constructor(
    private _client: HttpClient
  ) { }

  register(data: Auth_Register): Observable<any> {
    if (!(data.pseudo && data.email && data.password)) {
      throw new Error('Data not correct');
    }

    return this._client.post(this.urlRegister, data);
  }

  auth(data: Auth_Register): Observable<any> {
    if (data.email && data.pseudo) {
      this.data = data;
    }
    if (!data.email && data.pseudo) {
      this.data = {
        'pseudo': data.pseudo,
        'password': data.password
      };
    }

    if (data.email && !data.pseudo) {
      this.data = {
        'email': data.email,
        'password': data.password
      };
    }
    return this._client.post(this.urlAuth, this.data);
  }

  connected(token: string): void {
    localStorage.setItem('auth_token', token);
    console.log(localStorage.getItem('auth_token'));

    this.isConnectedObservable.next(true);
  }

  disconnect(): void {
    localStorage.removeItem('auth_token');
    this.isConnectedObservable.next(false);
  }
}
