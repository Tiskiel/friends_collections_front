import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../../models/profile.model';
import { UpdateProfile } from '../../models/updateProfile.model';
import { MemberService } from '../../services/member.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss'],
})
export class ProfileUpdateComponent implements OnInit {
  currentUser!: Profile;
  updateFormUserInformations: FormGroup;
  dataFormUserInformations!: UpdateProfile;
  constructor(
    private _member: MemberService,
    private _profil: ProfileService,
    private _formBuilder: FormBuilder
  ) {
    this.updateFormUserInformations = this._formBuilder.group({
      pseudo: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      lastName: [''],
      firstName: [''],
      birthDate: [''],
      phoneNumber: [''],
      street: [''],
      city: [''],
      homeNumber: [''],
      postalCode: [''],
    });
  }

  ngOnInit() {
    this.currentUser = this._member.currentUser;
    console.log(this.currentUser);
  }

  submitAuthUpdateUserInformations() {
    this.dataFormUserInformations = this.updateFormUserInformations.value;
    this._profil.updateMyProfil(this.dataFormUserInformations);
  }

}
