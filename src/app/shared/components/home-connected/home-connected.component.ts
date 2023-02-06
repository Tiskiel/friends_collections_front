import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-home-connected',
  templateUrl: './home-connected.component.html',
  styleUrls: ['./home-connected.component.scss'],
})
export class HomeConnectedComponent implements OnInit {
  menuArray: Menu[] = [
    {
      title: "Profile",
      image: "../../../../assets/image/profil.png"
    },
    {
      title: "Collection",
      image: "../../../../assets/image/collection.png"
    },
    {
      title: "Wish List",
      image: "../../../../assets/image/wishList.png"
    },
    {
      title: "Friends",
      image: "../../../../assets/image/friend.png"
    },
    {
      title: "Messages",
      image: "../../../../assets/image/message.png"
    },
    {
      title: "Contact Us",
      image: "../../../../assets/image/contactUs.png"
    },
    {
      title: "Déconnexion",
      image: "../../../../assets/image/disconnectIcone.png"
    }
  ];

  constructor(
    private _member: MemberService
  ) { }

  ngOnInit() {

  }

  disconnect() {
    this._member.disconnect();
  }

  clicked(title: string) {
    switch (title) {
      case "Déconnexion": {
        this.disconnect();
        break;
      }
      default: {
        console.log('Ca fonctionne');
      }
    }
  }
}
