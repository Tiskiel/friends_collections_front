import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: ['./user-collection.component.scss'],
})
export class UserCollectionComponent implements OnInit {
  currentItemList!: Item[];
  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentItemList = this._activatedRoute.snapshot.data['collectionListUser'].result.listItemUser;
  }

}
