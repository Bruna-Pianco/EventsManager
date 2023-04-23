import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { Ievents } from '../../../models/events'
import { MatDialog } from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EventCreateComponent } from '../../event-create/event-create.component';
import { LoginService } from '../../../account/login/login.service';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  implements OnInit{
  displayedColumns: string[] = ['_id','name', 'date','cidade','custoInteira','custoMeia','contato','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(
    private _dialog: MatDialog, 
    private _eventService:EventsService, 
    fb: FormBuilder,
    private router: Router,
    ) {
 }

 ngOnInit(): void {
  this.getEventsAll()
 }

  openEventCreateForm() {
    const dialogRef = this._dialog.open(EventCreateComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEventsAll();
        }
      },
    });
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EventCreateComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEventsAll();
        }
      },
    });
  }
  
  
  getEventsAll(){
    this._eventService.getEventsAll().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error:(err) => {
        console.log(err)
      }   
    })
  }   
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
    deleteevent(id:string){
      this._eventService.deleteevent(id).subscribe({
        next:(res) => {
          this._eventService.showMessage('Evento deletado com sucesso!')
          this.getEventsAll();
  
        }, 
        error:console.log,
      })
    }

    openEditForm(data: any) {
      const dialogRef = this._dialog.open(EventCreateComponent, {
        data,
      });
  
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if (val) {
            this.getEventsAll();
          }
        },
      });
    }

    cancel(): void {
      this.router.navigate(['/home']);
    }

}