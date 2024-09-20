import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  productos: any[] = [
    { nombre: 'sandalia', categoria:'sandalias', imagen: '/assets/productos/sandalia.png' },
    { nombre: 'bolso',categoria:'bolsos',  imagen: '/assets/productos/bolso.png' },
    { nombre: 'tarjetero', categoria:'tarjeteros', imagen: '/assets/productos/tarjetero.png' }
  ];
  
  constructor(){}
}
