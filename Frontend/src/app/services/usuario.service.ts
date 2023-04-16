import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUsuario } from '../models/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient,
    private router: Router){}

    logar(usuario: IUsuario) : Observable<any> {
      return this.mockUsuarioLogin(usuario).pipe(tap((resposta) => {
        if(!resposta.sucesso) return;
        localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
        localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
        this.router.navigate(['']);
      }));
    }
    private mockUsuarioLogin(usuario: IUsuario): Observable<any> {
      var retornoMock: any = [];
      if(usuario.email === "admin" && usuario.senha == "admin"){
        retornoMock.sucesso = true;
        retornoMock.usuario = usuario;
        retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
        return of(retornoMock);
      }
      retornoMock.sucesso = false;
      retornoMock.usuario = usuario;
      return of(retornoMock);
    }

    deslogar() {
        localStorage.clear();
        this.router.navigate(['login']);
    }

    get logado(): boolean {
      return localStorage.getItem('token') ? true : false;
    }
  }


