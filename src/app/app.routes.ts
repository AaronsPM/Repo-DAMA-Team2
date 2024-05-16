    import { Routes } from '@angular/router';
    import { HomeComponent } from './component/home/home.component';
    import { ContactoComponent } from './component/contacto/contacto.component';
    import { ProductosComponent } from './component/productos/productos.component';
    import { CatalogoComponent } from './component/catalogo/catalogo.component';
    import { LoginComponent } from './component/login/login.component';
    import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { RegisterComponent } from './component/register/register.component';
import { PayComponent } from './component/pay/pay.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';
import { DetalleComponent } from './component/detalle/detalle.component';

    export const routes: Routes = [
        { path: 'home', component: HomeComponent},
        { path: 'Pokemon', component: PokemonComponent},
        { path: 'contacto', component: ContactoComponent},
        { path: 'productos', component: ProductosComponent},
        { path: 'registro', component: RegisterComponent },
        { path: 'pago', component: PayComponent},
        { path: 'carrito', component: CarritoComponent},
        { path: 'catalogo', component: CatalogoComponent},
        { path: 'inicio', component: LoginComponent},
        { path: 'about-us', component: AboutUsComponent},
        { path: 'pokemon', component: PokemonComponent},
        { path: 'detalles/:id', component: DetalleComponent},
        { path: '', redirectTo: '/home', pathMatch: 'full'},
        { path: '**', component: PageNotFoundComponent}
    ];

    

