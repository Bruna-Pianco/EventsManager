import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventCreateComponent } from '../../event-create/event-create.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(public _dialog: MatDialog) {}

  ngOnInit(): void {}

  isAuthenticated: boolean = false;

  openEventCreateForm() {
    this._dialog.open(EventCreateComponent)
  }


  // public logout() {
  //   this.userAuthService.clear();
  //   this.router.navigate(['/home']);
  // }
}