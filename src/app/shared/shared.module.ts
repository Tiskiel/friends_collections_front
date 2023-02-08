import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeConnectedComponent } from './components/home-connected/home-connected.component';
import { HomeNotConnectedComponent } from './components/home-not-connected/home-not-connected.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';



@NgModule({
  declarations: [
    HomeConnectedComponent,
    HomeNotConnectedComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeConnectedComponent,
    HomeNotConnectedComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileUpdateComponent
  ]
})
export class SharedModule { }
