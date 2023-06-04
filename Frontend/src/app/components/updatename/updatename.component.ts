import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog'
import { Ievents } from '../../models/events'
import { ActivatedRoute, Router } from '@angular/router';
import { IEditName } from 'src/app/models/EditName';

@Component({
  selector: 'app-updatename',
  templateUrl: './updatename.component.html',
  styleUrls: ['./updatename.component.css']
})
export class UpdatenameComponent {

  name: IEditName = {
    name: '',
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
        this.name = event
      })
    }

    EditName(): void{
    this._eventService.EditName(this.name).subscribe(() => {
      this._eventService.showMessage("Nome do evento alterado com sucesso!")
      this.router.navigate(['/home']);
    })
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }

}
