import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth_Register } from '../../models/auth_register.model';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-home-not-connected',
  templateUrl: './home-not-connected.component.html',
  styleUrls: ['./home-not-connected.component.scss'],
})
export class HomeNotConnectedComponent implements OnInit {
  authData!: Auth_Register;
  formAuth: FormGroup;

  constructor(
    private _member: MemberService,
    private _formBuilder: FormBuilder
  ) {
    this.formAuth = this._formBuilder.group({
      pseudo: [''],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  submitAuthForm() {
    console.log(this.formAuth.value);
    this.authData = this.formAuth.value;
    this._member.auth(this.authData).subscribe(
      (data: any) => {
        this._member.connected(data.token);
      }
    );
  }

  loadData(): void {

  }

}
