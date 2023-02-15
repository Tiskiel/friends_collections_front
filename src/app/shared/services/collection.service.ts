import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  listItemUserUrl: string = environment.USER_LIST_ITEMS_PATH;
  typeItemUrl: string = environment.GET_TYPE_BY_ID_PATH;
  itemByIdUrl: string = environment.GET_ITEM_BY_ID_PATH;
  removeItemUrl: string = environment.REMOVE_ITEM_TO_LIST_PATH;
  getAllTypesUrl: string = environment.GET_ALL_TYPES_PATH;
  createItemUrl: string = environment.CREATE_NEW_ITEM_PATH;
  allItemsUrl: string = environment.GET_ALL_ITEMS_PATH;

  currentList!: any[];
  currentItem!: Item;
  itemObservable: BehaviorSubject<Item> = new BehaviorSubject<Item>(this.currentItem);

  constructor(
    private _client: HttpClient
  ) { }

  getAllItems(): Observable<any> {
    return this._client.get(this.allItemsUrl);
  }

  getListItemUser(): Observable<any> {
    return this._client.get(this.listItemUserUrl);
  }

  getAllTypes(): Observable<any> {
    return this._client.get(this.getAllTypesUrl);
  }

  getItemType(itemId: string): Observable<any> {
    return this._client.get(this.typeItemUrl + itemId);
  }

  getItemById(id: number): Observable<any> {
    return this._client.get(this.itemByIdUrl + id);
  }

  createItem(item: Item): Observable<any> {
    return this._client.post(this.createItemUrl, item);
  }

  defineCurrentUserItemlist(data: Item[]) {
    this.currentList = data;
  }

  defineCurrentItem(item: Item) {
    this.currentItem = item;
    this.itemObservable.next(item);
  }

  removeItemToList(id: number): Observable<any> {
    return this._client.delete(this.removeItemUrl + id);
  }
}
