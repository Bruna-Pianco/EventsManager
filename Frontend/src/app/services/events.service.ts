import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ievents } from '../models/events';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEditName } from '../models/EditName';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  baseUrl = 'http://localhost:3000/api/events'
  baseUrlPacth = 'http://localhost:3000/api/updatename'

  constructor(private snackBar: MatSnackBar,private _http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'OK', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['msg-sucess']
    });
  }
  
  createevent(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/api/events',data)
  }
  
  getEventsAll():Observable<any>{
    return this._http.get('http://localhost:3000/api/eventsget')
  }

  deleteevent(id:string):Observable<any>{
    return this._http.delete(`http://localhost:3000/api/events/${id}`);
  }

  deleteAllevents():Observable<any>{
    return this._http.delete(`http://localhost:3000/api/deleteEvents`);
  }

  updateevent(events: Ievents): Observable<any> {
    const url = `${this.baseUrl}/${events._id}`;
    return this._http.put<Ievents>(url, events);
  }

  readById(id: string | null): Observable<any> {
    return this._http.get<Ievents>(`http://localhost:3000/api/events/${id}`);
  }

  EditName(name: IEditName): Observable<any> {
    const url = `${this.baseUrlPacth}/${name._id}`;
    return this._http.patch<IEditName>(url, name);
  }
}
