import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  listItemUserUrl: string = environment.USER_LIST_ITEMS_PATH;
  currentList!: Item[];
  constructor(
    private _client: HttpClient
  ) { }

  getListItemUser(): Observable<any> {
    return this._client.get(this.listItemUserUrl);
  }

  defineCurrentUserItemlist(data: Item[]) {
    this.currentList = data;
  }
}
