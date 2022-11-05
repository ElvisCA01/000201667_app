import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import {HttpClientModule} from "@angular/common/http";

//Components
import { RegisterSolicitudCarComponent } from './Inscriptions/register-solicitud-car/register-solicitud-car.component';
import { ReportSolicitudCarComponent } from './Reports/report-solicitud-car/report-solicitud-car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterSolicitudCarComponent,
    ReportSolicitudCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
