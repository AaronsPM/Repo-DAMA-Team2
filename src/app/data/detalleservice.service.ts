import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Producto } from '../common/producto';

@Injectable({
  providedIn: 'root'
})
export class DetalleserviceService {

  private jsonUrl = 'assets/detalle.json';

  constructor(private http: HttpClient) { }

  getAllDetalles(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.jsonUrl);
  }

  getDetalle(id: number): Observable<Producto | undefined> {
    return this.http.get<Producto[]>(this.jsonUrl).pipe(
      map((productos: Producto[]) => productos.find(producto => producto.id === id))
    );
  }
}
