import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAboutUsInfoComponent } from './home-about-us-info/home-about-us-info.component';
import { HomeAboutUsComponent } from './home-about-us.component';
import { HomeAboutUsPeopleModule } from './home-about-us-people/home-about-us-people.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomeAboutUsComponent,
    HomeAboutUsInfoComponent
  ],
  imports: [
    CommonModule,
    HomeAboutUsPeopleModule,
    FlexLayoutModule
  ],
  exports:[
    HomeAboutUsComponent
  ]
})
export class HomeAboutUsModule { }
