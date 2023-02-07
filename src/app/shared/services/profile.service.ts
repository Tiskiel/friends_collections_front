import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UpdateProfile } from '../models/updateProfile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  urlUpdateMyProfil: string = environment.UPDATE_MY_PROFIL_PATH;
  constructor(
    private _client: HttpClient
  ) { }

  updateMyProfil(data: UpdateProfile) {
    return this._client.put(this.urlUpdateMyProfil, data);
  }
}
