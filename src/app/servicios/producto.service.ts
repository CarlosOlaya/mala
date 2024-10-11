import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoPersonalizado } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl:string = environment.baseUrl

  constructor(private http: HttpClient) { }

  // Método para obtener la URL de la imagen
  obtenerUrlImagen(productoPersonalizado: ProductoPersonalizado) {
  
    const slug = `${productoPersonalizado.productoNombre}-${productoPersonalizado.estilo}-${productoPersonalizado.retazo}-${productoPersonalizado.color}`;
    const url = `${this.baseUrl}/products/${slug}`;

    return this.http.get<{ data: { image: { url: string } } }>(url)
      .pipe(
        map(response => response.data.image.url) // Extraemos solo la URL ñde la imagen
      );
      
  }
}
