import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Item } from '../../models/item.model';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  currentItemsList!: Item[];
  currentSearch!: string;
  currentSearchList!: Item[];
  countItemsFound!: number;
  extraNavigationCreate: NavigationExtras = {
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
    this.currentItemsList = this._activatedRoute.snapshot.data['allItemsList'].result.items;
    this.loadDataSearch();
  }

  loadDataSearch() {
    this._collectionService.getItemByName(this.currentSearch).subscribe({
      next: (data: any) => {
        this.currentSearchList = data.result.items;
        this.countItemsFound = data.result.count;
        console.log(data.result.items);

      }
    });
  }

  changeSearchInput() {
    if (this.currentSearch) {
      this.loadDataSearch();
    }
  }

  navigateToCreateItem() {
    this._router.navigate(['items'], this.extraNavigationCreate);
  }

}
