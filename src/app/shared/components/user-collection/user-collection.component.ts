import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: ['./user-collection.component.scss'],
})
export class UserCollectionComponent implements OnInit {
  currentItemList!: any[];
  showItem: boolean = false;
  navigateSearch: NavigationExtras = {
    queryParams: {
      component: "search"
    }
  };
  navigateCreate: NavigationExtras = {
    queryParams: {
      component: "create"
    }
  };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _collectionService: CollectionService,
    private _router: Router
  ) { }

  ngOnInit() {
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
    this._router.navigate(['items'], this.navigateSearch);
  }

  clickCreateButton(): void {
    this._router.navigate(['items'], this.navigateCreate);
  }

}
