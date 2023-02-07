import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsConnectedResolver } from 'src/app/resolver/isConnected.resolver';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    resolve: {
      isConnectedResolver: IsConnectedResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule { }
