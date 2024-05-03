import { RouterLink,RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { ProductoComponent } from './component/producto/producto.component';
export const routes: Routes = [
    { path: 'catalogo', component: CatalogoComponent},
    {path: 'producto', component: ProductoComponent}
];
