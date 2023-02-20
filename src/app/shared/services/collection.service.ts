import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';
import { ItemId } from '../models/itemId.model';
import { UserList } from '../models/userList.model';

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
  getItemByNameUrl: string = environment.GET_ITEM_BY_NAME;
  addItemToListUrl: string = environment.ADD_ITEM_TO_LIST;

  currentList!: UserList[];
  currentItem!: Item;
  itemObservable: BehaviorSubject<Item> = new BehaviorSubject<Item>(this.currentItem);
  listUserObservable: BehaviorSubject<UserList[]> = new BehaviorSubject<UserList[]>(this.currentList);
  constructor(
    private _client: HttpClient
  ) { }

  addItemToList(itemId: ItemId): Observable<any> {
    return this._client.post(this.addItemToListUrl, itemId);
  }

  getItemByName(name: string): Observable<any> {
    return this._client.get(this.getItemByNameUrl + name);
  }

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

  defineCurrentUserItemlist(data: UserList[]) {
    this.currentList = data;
    this.listUserObservable.next(data);
  }


  defineCurrentItem(item: Item) {
    this.currentItem = item;
    this.itemObservable.next(item);
  }

  removeItemToList(id: number): Observable<any> {
    return this._client.delete(this.removeItemUrl + id);
  }

  userHaveThisItem(itemId: number): boolean {
    const index = this.currentList.find(object => object.items.find(item => item.id === itemId));
    return !!index;
  }
}
