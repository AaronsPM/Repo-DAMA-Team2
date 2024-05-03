import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { ProductosComponent } from './component/productos/productos.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'productos', component: ProductosComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];