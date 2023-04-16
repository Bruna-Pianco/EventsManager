import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventCreateComponent } from './components/event-create/event-create.component'
import { Router } from '@angular/router';
import { ILogin } from './models/login.interface'
import { LoginService } from '../app/account/login/login.service'
import { IUsuario } from './models/usuario'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private loginService: LoginService, private router: Router) {}
  credentials: IUsuario = {
    id: '',
    email: '',
    senha: '',
  };

  token: ILogin = {
    user: {
      _id: 0,
      username:'',
      password:'',
      ativo: false,
      status_adm: false,
    },
    token: '',
  };


  ngOnInit(): void {}

  login(){
    this.loginService.submit(this.credentials);
    this.router.navigate(['/home']);
  }

  logout(): void{
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
