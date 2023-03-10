import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPage implements OnInit {
  showItem: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showItemClicked(): void {
    this.showItem = !this.showItem;
  }
}
