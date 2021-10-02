import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAboutUsPeoplePersonComponent } from './home-about-us-people-person/home-about-us-people-person.component';
import { HomeAboutUsPeopleComponent } from './home-about-us-people.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomeAboutUsPeopleComponent,
    HomeAboutUsPeoplePersonComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[
    HomeAboutUsPeopleComponent
  ]
})
export class HomeAboutUsPeopleModule { }
