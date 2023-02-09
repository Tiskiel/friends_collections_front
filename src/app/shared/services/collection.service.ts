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
  typeItemUrl: string = environment.GET_TYPE_BY_ID_PATH;
  currentList!: Item[];
  constructor(
    private _client: HttpClient
  ) { }

  getListItemUser(): Observable<any> {
    return this._client.get(this.listItemUserUrl);
  }

  getItemType(itemId: string): Observable<any> {
    return this._client.get(this.typeItemUrl + itemId);
  }

  defineCurrentUserItemlist(data: Item[]) {
    this.currentList = data;
  }
}
