import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  signupUsers: any[] = [];
  singupObj:any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',
    password: ''
  };
  
  constructor() { }
ngOnInit(): void {

}
}
