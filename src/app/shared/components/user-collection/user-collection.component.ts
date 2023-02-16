import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CollectionService } from '../../services/collection.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: ['./user-collection.component.scss'],
})
export class UserCollectionComponent implements OnInit {
  currentItemList!: any[];
  showItem: boolean = false;
  currentType!: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _collectionService: CollectionService,
    private _router: Router,
    private _navigation: NavigationService
  ) { }

  ngOnInit() {
    this.loadListItems();
  }

  loadListItems() {
    this.currentItemList = this._activatedRoute.snapshot.data['collectionListUser'];
  }

  itemClicked(): void {
    this.showItem = !this.showItem;
  }

  itemChoiced(itemId: number): void {
    this._collectionService.getItemById(itemId).subscribe((data: any) => {
      this._collectionService.defineCurrentItem(data.result);
    });
    this.itemClicked();
  }

  removeItem(itemId: number): void {
    this._collectionService.removeItemToList(itemId).subscribe((data: any) => {

    });
    location.reload();
  }

  clickSearchButton(): void {
    this._router.navigate(['items']);
    this._navigation.currentItemComponentEmitter("search");
  }

  clickCreateButton(): void {
    this._router.navigate(['items']);
    this._navigation.currentItemComponentEmitter("create");
  }

  showListItemOfCurrentType(type: string): void {
    if (this.currentType !== type) {
      this.currentType = type;
    } else {
      this.currentType = "";
    }
  }

}
