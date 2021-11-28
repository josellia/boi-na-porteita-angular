import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroBoiComponent } from './cadastro-boi/cadastro-boi.component';
import { ListarBoisComponent } from './listar-bois/listar-bois.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../shared/Material/material.module';



@NgModule({
  declarations: [
    CadastroBoiComponent,
    ListarBoisComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,   
    DemoMaterialModule
    
  ]
})
export class BoisModule { }
