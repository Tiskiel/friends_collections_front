import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/item.model';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: ['./user-collection.component.scss'],
})
export class UserCollectionComponent implements OnInit {
  currentItemList!: any[];
  showItem: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _collectionService: CollectionService
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

}
