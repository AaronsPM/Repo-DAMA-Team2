import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProductosComponent } from './component/productos/productos.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { PayComponent } from './component/pay/pay.component';
import { RegisterComponent } from './component/register/register.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, ContactoComponent,PokemonComponent, HomeComponent, LoginComponent, ProductosComponent, CatalogoComponent, CarritoComponent, PayComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoXG';
}
