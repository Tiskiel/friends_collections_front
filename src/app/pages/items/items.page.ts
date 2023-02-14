import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  component!: string;
  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.component = this._activatedRoute.snapshot?.queryParams['component'];
  }

}
