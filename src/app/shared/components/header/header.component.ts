import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isConnected: boolean = this._membre.isConnected;
  pictureProfil: string = "../../assets/icon/basicIcone.png";
  isClicked: boolean = false;
  menuHeader: string = "menuHeader";

  constructor(
    private _membre: MemberService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._membre.isConnectedObservable.subscribe(value => {
      this.isConnected = value;
    });
  }

  clicked() {
    this.isClicked = !this.isClicked;
  }

  disconnect() {
    this.isClicked = !this.isClicked;
    this._membre.disconnect();
  }

  navigate(route: string) {
    this._router.navigate([route]);
    this.clicked();
  }
}
