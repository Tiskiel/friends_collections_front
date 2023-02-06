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
  registerData!: Auth_Register;
  formAuth: FormGroup;
  formRegister: FormGroup;
  isClicked: boolean = false;

  constructor(
    private _member: MemberService,
    private _formBuilder: FormBuilder
  ) {
    this.formAuth = this._formBuilder.group({
      pseudo: [''],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });

    this.formRegister = this._formBuilder.group({
      pseudo: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  submitAuthForm() {
    this.authData = this.formAuth.value;
    this._member.auth(this.authData).subscribe(
      (data: any) => {
        this._member.connected(data.token);
      }
    );
  }

  auth(authData: Auth_Register) {
    this._member.auth(authData).subscribe(
      (data: any) => {
        this._member.connected(data.token);
      }
    );
  }

  submitRegisterForm() {
    this.registerData = this.formRegister.value;
    this._member.register(this.registerData).subscribe(
      (data: any) => {
        if (data === "Registed") {
          this.auth(this.registerData);
        }
      }
    );
  }

  clicked(): void {
    this.isClicked = !this.isClicked;
  }

}
