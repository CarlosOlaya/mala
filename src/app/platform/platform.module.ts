import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ImagenPipe } from '../pipes/imagen.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    InicioComponent,
    ProductoComponent,
    ImagenPipe

  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MaterialModule
  ]
})
export class PlatformModule { }
