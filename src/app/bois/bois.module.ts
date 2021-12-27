import {  NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CadastroBoiComponent } from './cadastro-boi/cadastro-boi.component';
import { ListarBoisComponent } from './listar-bois/listar-bois.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../shared/Material/material.module';
import { InputsModule } from '../shared/components/inputs/inputs.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ViewBoiComponent } from './view-boi/view-boi.component';



@NgModule({
  declarations: [
    CadastroBoiComponent,
    ListarBoisComponent,
    ViewBoiComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DemoMaterialModule,
    InputsModule,
    InfiniteScrollModule

  ],
  providers:[ CurrencyPipe]
})
export class BoisModule { }
