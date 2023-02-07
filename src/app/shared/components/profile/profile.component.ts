import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser!: Profile;
  constructor(
    private _member: MemberService
  ) { }

  ngOnInit() {
    this.currentUser = this._member.currentUser;
    console.log(this.currentUser);

  }

}
