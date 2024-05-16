import { Component, OnInit } from '@angular/core';
import { Producto } from '../../common/producto';
import { DetalleserviceService } from '../../data/detalleservice.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [DetalleComponent, RouterLink, CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{
  productos: Producto[] = []; 

  constructor(private detalleService: DetalleserviceService) { }

  ngOnInit(): void {
    this.detalleService.getDetalle().subscribe(data => {
      this.productos = data;
    });
  }
}
