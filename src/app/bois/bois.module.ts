import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroBoiComponent } from './cadastro-boi/cadastro-boi.component';
import { ListarBoisComponent } from './listar-bois/listar-bois.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../shared/Material/material.module';
import { InputsModule } from '../shared/components/inputs/inputs.module';



@NgModule({
  declarations: [
    CadastroBoiComponent,
    ListarBoisComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,   
    DemoMaterialModule,
    InputsModule
    
  ],
  providers:[{provide: DEFAULT_CURRENCY_CODE, useValue: 'BR'}]
})
export class BoisModule { }
