import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {path:'welcome', component:WelcomeComponent},
      {path:'inicio', component:InicioComponent},
      {path:'producto/:categoria', component:ProductoComponent},
      {path: '**', redirectTo: 'welcome'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
