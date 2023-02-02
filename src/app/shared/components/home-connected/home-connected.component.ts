import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-home-connected',
  templateUrl: './home-connected.component.html',
  styleUrls: ['./home-connected.component.scss'],
})
export class HomeConnectedComponent implements OnInit {

  constructor(
    private _member: MemberService
  ) { }

  ngOnInit() {

  }

  disconnect() {
    this._member.disconnect();
  }
}
