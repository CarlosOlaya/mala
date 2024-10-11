export interface FiltroOpcion {
  valor: string;
  imagenUrl: string;
}

export interface Filtro {
  tipo: string;
  opciones: FiltroOpcion[];
}

export interface ProductoPersonalizado {
    [key: string]: string;  // Firma de índice
    productoNombre: string;
    estilo: string;
    retazo: string;
    color: string;
  }
