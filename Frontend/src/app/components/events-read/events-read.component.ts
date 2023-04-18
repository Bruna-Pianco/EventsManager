import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

 

@Component({
  selector: 'app-events-read',
  templateUrl: './events-read.component.html',
  styleUrls: ['./events-read.component.css']
})
export class EventsReadComponent implements OnInit {

  constructor(private _eventService:EventsService, private _dialog: MatDialog){}

  ngOnInit(): void {
    this.getEventsAll();
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

  displayedColumns: string[] = ['_id','name', 'date','cidade','custoInteira','custoMeia','contato','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  deleteevent(id:string){
    this._eventService.deleteevent(id).subscribe({
      next:(res) => {
        alert('Evento deletado com sucesso!')
        this.getEventsAll();

      }, 
      error:console.log,
      
    })
  }
}