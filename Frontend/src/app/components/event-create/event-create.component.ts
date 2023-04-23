import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog'
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})

export class EventCreateComponent implements OnInit {

  empForm: FormGroup;
  // Categoria: string []=
  // [
  //   'Rock',
  //   'Pop',
  //   'Eletrônica',
  //   'Metalcore',
  //   'RAP',
  //   'Sertanejo',
  //   'Forró'
  // ];

  constructor(
    private fb: FormBuilder, 
    private _eventService:EventsService, 
    private _dialogRef: DialogRef <EventCreateComponent>,
    private router: Router,
    private route: ActivatedRoute ,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) 
    {
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
    // this.empForm = new FormGroup({
    //   name: new FormGroup(null),
    //   date: new FormGroup(null),
    //   custoInteira: new FormGroup(null),
    //   custoMeia: new FormGroup(null),
    //   localizacao: new FormGroup(null),
    //   descricao: new FormGroup(null),
    //   categoria: new FormGroup(null),
    //   cidade: new FormGroup(null),
    //   contato: new FormGroup(null),
    //   imagem:new FormGroup(null),
    this.empForm.patchValue(this.data);
    const id = this.route.snapshot.paramMap.get('_id')
    }

    // onFormSubmit() {
    //   if(this.empForm.valid){
    //     this._eventService.createevent(this.empForm.value).subscribe({
    //       next:(val: any) => {
    //         alert('Evento criado com sucesso!')
    //         const dialogref = this._dialogRef.close();
    //       },
    //       error:(err) =>{
    //         console.error(err)
    //       }
    //     })
    //   }
    // }

    onFormSubmit() {
      if(this.empForm.valid){
        this._eventService.createevent(this.empForm.value).subscribe({
          next:(val: any) => {
            this._eventService.showMessage('Evento criado com sucesso!')
            const dialogref = this._dialogRef.close();
          },
          error:(err) =>{
            console.error(err)
          }
        })
      }
    }
} 