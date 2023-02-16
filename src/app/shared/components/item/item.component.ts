import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  currentItem!: Item;
  itemClicked: boolean = false;
  constructor(
    private _collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._collectionService.itemObservable.subscribe((item: Item) => {
      this.currentItem = item;
    });
  }
}
