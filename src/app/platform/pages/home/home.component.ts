import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toolbarClass: string = 'toolbar-bronze'; // Clase inicial para home/welcome
  searchClass: string = 'search-container-interno-white'; // Clase inicial para el buscador
  logoPath: string = 'assets/logo-beige.png';  // Logo por defecto

  productos: { nombre: string, icono: string }[] = [
    { nombre: 'sandalia', icono: 'roller_skating' },
    { nombre: 'bolso', icono: 'local_mall' },
    { nombre: 'tarjetero', icono: 'wallet' }
  ];
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd) // Filtro para solo NavigationEnd
      )
      .subscribe((event: NavigationEnd) => {
        const currentUrl = event.urlAfterRedirects; // Usa urlAfterRedirects para la URL final

        // Compara la ruta actual y cambia el logo y la clase de la barra
        if (currentUrl.includes('/welcome')) {
          this.toolbarClass = 'toolbar-welcome';
          this.searchClass = 'search-container-interno-bronze';
          this.logoPath = 'assets/logo-cafe.png';  // Logo beige
        }  else {
          this.toolbarClass = 'toolbar-bronze';
          this.searchClass = 'search-container-interno-white';
          this.logoPath = 'assets/logo-beige.png'; 
        }
      });
  }
}
