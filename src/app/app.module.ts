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
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from './shared/components/alert/alert.component';



@NgModule({
  declarations: [AppComponent, HeaderComponent, AlertComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    BoisModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false // ao salvar, vai manter a mascara
    }),
  
  ],
  entryComponents:[AlertComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
