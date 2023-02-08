import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsConnectedResolver } from 'src/app/resolver/isConnected.resolver';
import { IsConnectedGuard } from 'src/app/shared/guard/is-connected.guard';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    resolve: {
      connectedUser: IsConnectedResolver
    }, canActivate: [IsConnectedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule { }
