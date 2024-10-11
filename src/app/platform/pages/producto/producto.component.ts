import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filtro, FiltroOpcion, ProductoPersonalizado } from '../../../interfaces/interfaces';
import { ProductoService } from '../../../servicios/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  tituloPersonalizado: string = 'personalizado';
  opcionSeleccionada: string = '';
  productoUrlImagen: string = ''; // Para almacenar la URL de la imagen del producto

  productoPersonalizado: ProductoPersonalizado = {
    productoNombre: '',
    estilo: '1',
    retazo: '1',
    color: '1',
  };

  filtros: Filtro[] = [
    {
      tipo: 'estilo',
      opciones: [
        { valor: '1', imagenUrl: '/assets/sandalia/estilo/1.ico' },
        { valor: '2', imagenUrl: '/assets/sandalia/estilo/2.ico' },
        { valor: '3', imagenUrl: '/assets/sandalia/estilo/3.ico' },
        { valor: '4', imagenUrl: '/assets/sandalia/estilo/4.ico' }
      ]
    },
    {
      tipo: 'retazo',
      opciones: [
        { valor: '1', imagenUrl: '/assets/sandalia/retazo/1.ico' },
        { valor: '2', imagenUrl: '/assets/sandalia/retazo/2.ico' },
        { valor: '3', imagenUrl: '/assets/sandalia/retazo/3.ico' },
        { valor: '4', imagenUrl: '/assets/sandalia/retazo/4.ico' }
      ]
    },
    {
      tipo: 'color',
      opciones: [
        { valor: '1', imagenUrl: '/assets/sandalia/color/1.ico' },
        { valor: '2', imagenUrl: '/assets/sandalia/color/2.ico' },
        { valor: '3', imagenUrl: '/assets/sandalia/color/3.ico' },
        { valor: '4', imagenUrl: '/assets/sandalia/color/4.ico' }    
        ]
    }
  ];

  // Variables para los submenús
  mostrarMenuPrincipal: boolean = true;
  filtroActual: Filtro | null = null;
  opcionesActuales: FiltroOpcion[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productoService: ProductoService) {}

  ngOnInit(): void {
    if (this.router.url.includes('producto')) {
      this.activatedRoute.params.subscribe(params => {
        this.productoPersonalizado.productoNombre = params['categoria'];
        // this.actualizarImagenProducto();
        this.productoUrlImagen = `/assets/productos/${this.productoPersonalizado.productoNombre}.png`;
      });
    }
  }

  // Método para seleccionar filtro
  filtroSeleccionado(filtro: Filtro) {
    this.filtroActual = filtro;
    this.opcionesActuales = filtro.opciones;
    this.mostrarMenuPrincipal = false;
  }

  // Método para regresar al menú principal
  regresarAlMenuPrincipal(regresar: boolean): void {
    if (this.filtroActual && this.opcionSeleccionada && !regresar) {
      this.productoPersonalizado[this.filtroActual.tipo] = this.opcionSeleccionada;
      this.actualizarImagenProducto(); // Actualizamos la imagen cuando regresamos al menú principal
    }
    this.mostrarMenuPrincipal = true;
  }

  // Método para seleccionar una opción
  seleccionarOpcion(opcion: FiltroOpcion) {
    if (opcion) {
      this.opcionSeleccionada = opcion.valor;
    }
  }

  // Método para actualizar la imagen del producto basado en las selecciones
  actualizarImagenProducto() {
    this.productoService.obtenerUrlImagen(this.productoPersonalizado)
      .subscribe(
        resp => {
          console.log('URL de la imagen recibida:', resp); // Verificar la URL en la consola
          this.productoUrlImagen = resp;
          // this.productoUrlImagen = `${resp}?timestamp=${new Date().getTime()}`;
        },
        error => {
          console.error('Error al obtener la URL de la imagen', error);
          this.productoUrlImagen = `/assets/productos/${this.productoPersonalizado.productoNombre}.png`;
        }
      );
  }
}
