import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './component/contacto/contacto.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PayComponent } from './component/pay/pay.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, PayComponent, LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoXG';
}
