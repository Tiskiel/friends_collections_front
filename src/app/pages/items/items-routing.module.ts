import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsConnectedResolver } from 'src/app/resolver/isConnected.resolver';
import { TypeList } from 'src/app/resolver/type-list.resolver';
import { IsConnectedGuard } from 'src/app/shared/guard/is-connected.guard';

import { ItemsPage } from './items.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsPage,
    resolve: {
      connectedUser: IsConnectedResolver,
      collectionTypesList: TypeList
    }, canActivate: [IsConnectedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsPageRoutingModule { }
