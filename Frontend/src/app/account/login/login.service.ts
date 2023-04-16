import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsuario } from '../../models/usuario'
import { ILogin } from '../../models/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private usuarioAutenticado: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  submit(credentials: IUsuario): Observable<ILogin>{
    return this.http.post<ILogin>('http://localhost:3000/api/user', credentials);

 } 

 logout(): void{
  sessionStorage.removeItem('token');
  this.router.navigate(['']);
}

}