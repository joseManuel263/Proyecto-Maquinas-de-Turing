import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuringInputComponent } from './turing-input/turing-input.component';
import { TuringUniversalComponent } from './turing-universal/turing-universal.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'prefix'
 },
 {
  path: 'inicio',
  component: InicioComponent
},
  { path: 'turing-input', 
    component: TuringInputComponent 
  },
  { path: 'turing-universal', 
    component: TuringUniversalComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
