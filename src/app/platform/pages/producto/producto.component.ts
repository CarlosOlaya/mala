import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  tituloPersonalizado: string = 'personalizado';
  productoNombre: string = '';
  productoUrlImagen: string = '/assets/productos/';
  
  filtros: string[] = ['estilo', 'retazos', 'color', 'detalles'];  // Definición del array de filtros
  opcionesFiltros: { [key: string]: string[] } = {
    estilo: ['moderno', 'vintage', 'casual', 'formal'],
    retazos: ['grandes', 'medianos', 'pequeños', 'abstractos'],
    color: ['rojo', 'azul', 'verde', 'negro'],
    detalles: ['bordados', 'estampados', 'liso', 'texturizado']
  };
  // Variables para los submenús
  mostrarMenuPrincipal: boolean = true;
  filtroActual: string = '';
  opcionesActuales: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (this.router.url.includes('producto')) {
      this.activatedRoute.params.subscribe(params => {
        this.productoNombre = params['categoria'];
        this.productoUrlImagen = '/assets/productos/';
        this.productoUrlImagen = this.productoUrlImagen + this.productoNombre + '.png';
      });
    }
  }

  // Método para seleccionar filtro
  filtroSeleccionado(filtro: string) {
    this.filtroActual = filtro;
    this.opcionesActuales = this.opcionesFiltros[filtro];
    this.mostrarMenuPrincipal = false;
  }

  // Método para regresar al menú principal
  regresarAlMenuPrincipal(): void {
    this.mostrarMenuPrincipal = true;
}
}
