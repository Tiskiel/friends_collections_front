import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _collectionService: CollectionService
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
      }
    });
  }

  changeSearchInput() {
    if (this.currentSearch) {
      this.loadDataSearch();
    }
  }

}
