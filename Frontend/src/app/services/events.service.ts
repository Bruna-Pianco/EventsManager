import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ievents} from '../models/events'
import { ResponseI } from '../../app/models/response.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private _http: HttpClient) { }
  
  createevent(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/api/events',data)
  }
  
  getEventsAll():Observable<any>{
    return this._http.get('http://localhost:3000/api/eventsget')
  }

  deleteevent(id:string):Observable<any>{
    return this._http.delete(`http://localhost:3000/api/events/${id}`);
  }
  
}