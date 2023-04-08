import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {
  empForm: FormGroup;


  Categoria: string[]=
  [
    'Rock',
    'Pop',
    'Eletrônica',
    'Metalcore',
    'RAP',
    'Sertanejo',
    'Forró'
  ];

  constructor(public fb: FormBuilder, public _eventService:EventsService, public _dialogRef: DialogRef <EventCreateComponent>) {
    this.empForm = this.fb.group({
      name:'',
      date:'',
      custo:'',
      localizacao:'',
      descricao:'',
      categoria:'',
      imagem:'' ,
    })   
  }

  onFormSubmit() {
    if(this.empForm.valid){
      this._eventService.createevent(this.empForm.value).subscribe({
        next:(val: any) => {
          alert('Evento Criado com sucesso!')
          this._dialogRef.close();
        },
        error:(err) =>{
          console.error(err)
        }
      })
    }
  }

}
