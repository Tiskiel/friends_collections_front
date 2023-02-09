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
      pseudo: [''],
      email: ['', Validators.email],
      lastName: [''],
      firstName: [''],
      birthdate: [''],
      phoneNumber: [''],
      street: [''],
      city: [''],
      homeNumber: [''],
      postalCode: [''],
    });
  }

  ngOnInit() {
    this.currentUser = this._member.currentUser;
  }

  submitUpdateUserInformations() {
    this.dataFormUserInformations = this.updateFormUserInformations.value;
    this._profil.updateMyProfil(this.assignFormWithCurrentUser(this.dataFormUserInformations)).subscribe((data) => {
      console.log("Je suis dans data : ", data);
    });
    location.reload();
  }

  assignFormWithCurrentUser(formData: UpdateProfile): UpdateProfile {
    let validKey: object = {};
    let validUser: object = {};
    for (const [key, value] of Object.entries(formData)) {
      if (value !== '')
        validKey = Object.assign(validKey, { [key]: value });
    }

    for (const [key, value] of Object.entries(this.currentUser)) {
      console.log({ [key]: value });

      if (key !== 'id' && key !== 'isAdmin')
        validUser = Object.assign(validUser, { [key]: value });
    }

    const finalObject: any = Object.assign(validUser, validKey);
    console.log(finalObject);

    return finalObject;
  }

}

