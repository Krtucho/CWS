import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeServicesItemComponent } from './home-services-item/home-services-item.component';
import { HomeServicesComponent } from './home-services.component';
// import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeServicesComponent,HomeServicesItemComponent 
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    // MatCardModule
  ],
  exports: [
    HomeServicesComponent
  ]
})
export class HomeServicesModule { }
