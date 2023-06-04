import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { MatDialog } from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EventCreateComponent } from '../../event-create/event-create.component';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Ievents } from '../../../models/events'
import { IEditName } from '../../../models/EditName';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  implements OnInit{

  events: Ievents = {
    name: '',
    date: '',
    custoInteira: '',
    custoMeia:'',
    localizacao: '',
    descricao: '',
    categoria: '',
    cidade: '',
    contato: '',
    imagem: ''
  };

  NameEdit: FormGroup;

  displayedColumns: string[] = ['_id','name', 'date','cidade','custoInteira','custoMeia','contato','updateName','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  

  constructor(
    private _dialog: MatDialog, 
    private fb: FormBuilder, 
    private _eventService:EventsService, 
    private router: Router,
    ) {
      this.NameEdit = this.fb.group({
        name:'',
  
      }) 
      
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


    deleteAllevents(){
      this._eventService.deleteAllevents().subscribe({
        next:(res) => {
          this._eventService.showMessage('Eventos deletados com sucesso!')
          this.getEventsAll();
  
        }, 
        error:console.log,
      })
    }

    // EditName(_id:string){
    //   const dialogRef = this._dialog.open(UpdateNameComponent,{
    //     height: '150px',
    //     width: '300px',
    //   })        
    //   dialogRef.afterClosed().subscribe({
    //   next: (val) => {
    //     if (val) {
    //       this.getEventsAll();
    //     }
    //   },
    // });
    // }

    // open(data: any) {
    //   const dialogRef = this._dialog.open(UpdateNameComponent, {
    //     data,
    //     height: '150px',
    //     width: '300px',
    //   });
  
    //   dialogRef.afterClosed().subscribe({
    //     next: (val) => {
    //       if (val) {
    //         this.getEventsAll();
    //       }
    //     },
    //   });
    // }


  }
