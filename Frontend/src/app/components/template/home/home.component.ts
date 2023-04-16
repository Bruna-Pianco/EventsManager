import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { Ievents } from '../../../models/events'
import { MatDialog } from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EventCreateComponent } from '../../event-create/event-create.component';
import { ILogin } from '../../../models/login.interface';
import { LoginService } from '../../../account/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {

  

  constructor(private _dialog: MatDialog,private loginService: LoginService,private router: Router) {
 }

 status_adm: boolean = false;

 ngOnInit(): void {
   const json = JSON.parse(String(sessionStorage.getItem('token'))) as ILogin;
   this.status_adm = json.user.status_adm
 }

  openEventCreateForm() {
    this._dialog.open(EventCreateComponent)
  }

  logout(): void {
    this.loginService.logout()
  }
}