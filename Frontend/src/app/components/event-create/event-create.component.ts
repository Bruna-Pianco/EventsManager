import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';
import { Ievents } from '../../models/events'


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})

export class EventCreateComponent implements OnInit {
  
  imagem: string | undefined;
  
  constructor(private fb: FormBuilder, private _eventService:EventsService, private _dialogRef: DialogRef <EventCreateComponent>) {
    this.empForm = this.fb.group({
      name:'',
      date:'',
      custoInteira:'',
      custoMeia:'',
      localizacao:'',
      descricao:'',
      categoria:'',
      cidade: '',
      contato: '',
      imagem:'' 
    })   
  }

  

  ngOnInit(): void {
    this.empForm = new FormGroup({
      name: new FormGroup(null),
      date: new FormGroup(null),
      custoInteira: new FormGroup(null),
      custoMeia: new FormGroup(null),
      localizacao: new FormGroup(null),
      descricao: new FormGroup(null),
      categoria: new FormGroup(null),
      cidade: new FormGroup(null),
      contato: new FormGroup(null),
      imagem:new FormGroup(null),
    })

  }


  onChange(event: any){
    const file = event.target.files[0];
    this.empForm.patchValue({ image: File})
    const allowedMimeTypes = ["imagem/png","imagem/jpeg","imagem/jpg"];
    
    if(file && allowedMimeTypes.includes(file.type)){
      
    }

    
  }
  
  empForm: FormGroup;
  Categoria: string []=
  [
    'Rock',
    'Pop',
    'Eletrônica',
    'Metalcore',
    'RAP',
    'Sertanejo',
    'Forró'
  ];

  // public GetFileOnLoad(event: any) {
  //   var file = event.target.files[0];
  //   var element = document.getElementById("fakeFileInput") as HTMLInputElement | null;
  //   if(element != null) {
  //     element.value = file?.name;
  //   }

  // }
  
  onFormSubmit() {
    if(this.empForm.valid){
      this._eventService.createevent(this.empForm.value).subscribe({
        next:(val: any) => {
          alert('Evento criado com sucesso!')
          const dialogref = this._dialogRef.close();
        },
        error:(err) =>{
          console.error(err)
        }
      })
    }
  }

}
