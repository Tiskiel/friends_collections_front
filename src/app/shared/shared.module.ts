import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeConnectedComponent } from './components/home-connected/home-connected.component';
import { HomeNotConnectedComponent } from './components/home-not-connected/home-not-connected.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { UserCollectionComponent } from './components/user-collection/user-collection.component';
import { ItemComponent } from './components/item/item.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { SearchItemComponent } from './components/search-item/search-item.component';




@NgModule({
  declarations: [
    HomeConnectedComponent,
    HomeNotConnectedComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileUpdateComponent,
    UserCollectionComponent,
    ItemComponent,
    CreateItemComponent,
    SearchItemComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    HomeConnectedComponent,
    HomeNotConnectedComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileUpdateComponent,
    UserCollectionComponent,
    ItemComponent,
    CreateItemComponent,
    SearchItemComponent
  ]
})
export class SharedModule { }
