import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  component!: string;
  constructor(
    private _navigation: NavigationService
  ) { }

  ngOnInit() {
    this.showComponent();
  }

  showComponent() {
    this._navigation.currentItemComponentObserval.subscribe((data: string) => {
      this.component = data;
    });
  }
}
