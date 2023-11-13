import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsComponent } from './models/models.component';
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { DetailServiceComponent } from './pages/detail-service/detail-service.component';
import { ApiServiceComponent } from './api-service/api-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent,
    PagesComponent,
    ContactComponent,
    HomeComponent,
    ServiceComponent,
    DetailServiceComponent,
    ApiServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
