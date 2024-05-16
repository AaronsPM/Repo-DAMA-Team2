import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../common/producto';

@Injectable({
  providedIn: 'root'
})
export class DetalleserviceService {

  private jsonUrl = 'assets/detalle.json';

  constructor(private http: HttpClient) { }

  getDetalle(): Observable<Producto[]> { 
    return this.http.get<Producto[]>(this.jsonUrl); 
  }
}
