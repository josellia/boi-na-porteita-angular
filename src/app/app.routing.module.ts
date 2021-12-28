import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoisModule } from './bois/bois.module';
import { CadastroBoiComponent } from './bois/cadastro-boi/cadastro-boi.component';
import { ListarBoisComponent } from './bois/listar-bois/listar-bois.component';
import { ViewBoiComponent } from './bois/view-boi/view-boi.component';


const routes: Routes = [

  {
      path: '',
      redirectTo: 'bois',
      pathMatch: 'full'
  },
  {
    path: 'bois',
    children: [
      {
        path: '',
        component: ListarBoisComponent
      },

      {
        path: 'cadastro',
        component: CadastroBoiComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ViewBoiComponent,
        pathMatch: 'full'
      },
    ]
  },
  { path: '**', redirectTo: 'filmes' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BoisModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
