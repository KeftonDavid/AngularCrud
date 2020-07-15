import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinhasTecnologiasComponent } from './minhas-tecnologias/minhas-tecnologias.component';
import { LoginComponent } from './logar-google/login/login.component';



const routes: Routes = [
  { path: 'minhasTecnologias', component: MinhasTecnologiasComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
