import { Component, OnInit } from '@angular/core';
import { Producto } from '../../common/producto';
import { DetalleserviceService } from '../../data/detalleservice.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [DetalleComponent, RouterLink, CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{
  producto: Producto | undefined; 

  constructor(
    private route: ActivatedRoute,
    private detalleService: DetalleserviceService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.detalleService.getDetalle(id).subscribe(data => {
      this.producto = data;
    });
  }
}