import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePackagesItemComponent } from './home-packages-item/home-packages-item.component';
import { HomePackagesComponent } from './home-packages.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomePackagesComponent,
    HomePackagesItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[
    HomePackagesComponent
  ]
})
export class HomePackagesModule { }
