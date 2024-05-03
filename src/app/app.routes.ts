    import { Routes } from '@angular/router';
    import { HomeComponent } from './component/home/home.component';
    import { ContactoComponent } from './component/contacto/contacto.component';
    import { ProductosComponent } from './component/productos/productos.component';
    import { CatalogoComponent } from './component/catalogo/catalogo.component';
    import { LoginComponent } from './component/login/login.component';
    import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

    export const routes: Routes = [
        { path: 'home', component: HomeComponent},
        { path: 'contacto', component: ContactoComponent},
        { path: 'productos', component: ProductosComponent},
        { path: 'catalogo', component: CatalogoComponent},
        { path: 'inicio', component: LoginComponent},
        { path: '', redirectTo: '/home', pathMatch: 'full'},
        { path: '**', component: PageNotFoundComponent}
    ];

