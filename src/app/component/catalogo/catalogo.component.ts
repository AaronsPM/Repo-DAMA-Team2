import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DetalleserviceService } from '../../data/detalleservice.service';
import { Producto } from '../../common/producto';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit{
  productos: Producto[] = [];

  constructor(private detalleService: DetalleserviceService) { }

  ngOnInit(): void {
    this.detalleService.getAllDetalles().subscribe(data => {
      this.productos = data;
    });
  }
}