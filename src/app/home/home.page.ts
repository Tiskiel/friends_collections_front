import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared/services/member.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isConnected: boolean = this._member.isConnected;
  isClicked: boolean = false;
  constructor(
    private _member: MemberService
  ) { }

  ngOnInit() {
    this._member.isConnectedObservable.subscribe(value => {
      this.isConnected = value;
    });
  }

  clicked() {
    this.isClicked = !this.isClicked;
  }
}
