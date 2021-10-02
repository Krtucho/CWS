import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeToolbarComponent } from './home-toolbar/home-toolbar.component';
import { HomeWeFixComponent } from './home-we-fix/home-we-fix.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeServicesModule } from './home-services/home-services.module';
import { HomeAboutUsModule } from './home-about-us/home-about-us.module';
import { HomePackagesModule } from './home-packages/home-packages.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeToolbarComponent,
    HomeWeFixComponent,
    HomeFooterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HomeServicesModule,
    HomeAboutUsModule,
    HomePackagesModule
  ],
  exports:[
    HomeComponent
  ],
})
export class HomeModule { }
