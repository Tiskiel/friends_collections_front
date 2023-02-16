import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  currentItemsList!: Item[];
  currentSearch!: string;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentItemsList = this._activatedRoute.snapshot.data['allItemsList'].result.items;
  }

  loadDataSearch() {

  }

  changeSearchInput() {
    if (this.currentSearch) {
      this.loadDataSearch();
    }
  }

}
