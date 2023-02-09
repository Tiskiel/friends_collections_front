import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../models/profile.model';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser!: Profile;
  updateButtonClicked: boolean = false;
  constructor(
    private _member: MemberService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.currentUser = this._activatedRoute.snapshot.data['connectedUser'];
  }

  isUpdateButtonClicked() {
    this.updateButtonClicked = !this.updateButtonClicked;
  }

}
