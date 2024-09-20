import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(producto: any): string {
    return producto.imagen;
  }

}
