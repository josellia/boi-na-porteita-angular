import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './shared/Material/material.module';
import { BoisModule } from './bois/bois.module';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ListComponent } from './shared/components/list/list.component';



@NgModule({
  declarations: [AppComponent, HeaderComponent, AlertComponent, ListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    BoisModule,
    AppRoutingModule,
    HttpClientModule,
    
  
  ],
  entryComponents:[AlertComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
