import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Item } from '../../models/item.model';
import { CollectionService } from '../../services/collection.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  currentItemsList!: Item[];
  currentUserList!: Item[];
  currentSearch!: string;
  currentSearchList!: Item[];
  countItemsFound!: number;
  itemClicked: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _collectionService: CollectionService,
    private _router: Router,
    private _navigation: NavigationService
  ) { }

  ngOnInit() {
    this.currentItemsList = this._activatedRoute.snapshot.data['allItemsList'].result.items;
    this.currentUserList = this._activatedRoute.snapshot.data['userItemList'];
    this.loadDataSearch();
  }

  loadDataSearch() {
    this._collectionService.getItemByName(this.currentSearch).subscribe({
      next: (data: any) => {
        this.currentSearchList = data.result.items;
        this.countItemsFound = data.result.count;
      }
    });
  }

  changeSearchInput() {
    if (this.currentSearch) {
      this.loadDataSearch();
    }
  }

  navigateToCreateItem() {
    this._router.navigate(['items']);
    this._navigation.currentItemComponentEmitter("create");
  }

  itemChoice(itemId: number) {
    this._collectionService.getItemById(itemId).subscribe((data: any) => {
      this._collectionService.defineCurrentItem(data.result);
    });
    this._navigation.currentItemComponentEmitter('');
  }

  userHaveIt(itemId: number) {
    return this._collectionService.userHaveThisItem(itemId);
  }

}
