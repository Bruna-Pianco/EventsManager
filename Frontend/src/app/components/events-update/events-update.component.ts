import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog'
import { Ievents } from '../../models/events'
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-events-update',
  templateUrl: './events-update.component.html',
  styleUrls: ['./events-update.component.css']
})


export class EventsUpdateComponent implements OnInit{


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

  constructor (
    private _eventService:EventsService,
    private router: Router,
    private route: ActivatedRoute ){

    }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this._eventService.readById(id)
      .subscribe( event =>{
        this.events = event
      })
    }

    updateevent(): void{
    this._eventService.updateevent(this.events).subscribe(() => {
      this._eventService.showMessage("Evento Alterado!")
      this.router.navigate(['/home']);
    })
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }

}