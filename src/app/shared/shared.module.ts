import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeConnectedComponent } from './components/home-connected/home-connected.component';
import { HomeNotConnectedComponent } from './components/home-not-connected/home-not-connected.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeConnectedComponent, HomeNotConnectedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeConnectedComponent,
    HomeNotConnectedComponent,
  ]
})
export class SharedModule { }
