import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './login.service';
import { ILogin } from '../../models/login.interface';
import { IUsuario } from '../../models/usuario'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


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
}



